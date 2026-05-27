interface Env {
  WORKERS_AI: Ai;
}

export const onRequest: PagesFunction<Env> = async (ctx) => {
  if (ctx.request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const { message } = await ctx.request.json() as { message: string };

  const systemPrompt = `You are a helpful assistant for Indian Graphics, a premium printing and branding company based in Hyderabad, India (established 2002). Answer concisely and warmly.

Services they offer:
- Offset Printing (brochures, books, stationery — Pantone matching, bulk runs)
- Digital Printing (short runs, on-demand, same-day options)
- Packaging (custom mono-cartons, rigid boxes, foil & emboss)
- Signage (indoor/outdoor — LED, neon, ACP, vinyl, hoardings)
- Branding (logo design, identity systems, stationery, guidelines)
- Large Format (banners, hoardings, exhibition graphics — UV print up to 5m wide)

Contact: +91 98765 43210, hello@indiangraphics.in, Banjara Hills, Hyderabad
Website: https://indiangraphics.in

Keep responses under 3 sentences unless asked for details. Be friendly and professional. If you don't know something specific, offer to connect them with the team.`;

  try {
    const response = await ctx.env.WORKERS_AI.run("@cf/meta/llama-3-8b-instruct", {
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message },
      ],
    });

    return Response.json({ reply: (response as any).response });
  } catch (err) {
    console.error("AI call failed:", err);
    return Response.json({ reply: "Sorry, I'm having trouble connecting right now. Please reach out via our Contact page or call +91 98765 43210." });
  }
};
