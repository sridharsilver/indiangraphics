import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  role: "bot" | "user";
  text: string;
}

const RESPONSES: [RegExp, string][] = [
  [/print(ing)?|offset|digital/i, "We offer offset & digital printing for brochures, business cards, flyers, catalogs, and more. Want a quote?"],
  [/brand(ing)?|logo|identity/i, "Our branding services include logo design, brand identity systems, stationery, and brand guidelines. Let's build something memorable!"],
  [/packag(ing|e)|box/, "We design and manufacture custom mono-cartons, rigid boxes, and product packaging with foil, emboss, and eco materials."],
  [/signage|sign|hoarding|board/i, "Indoor & outdoor signage — LED, neon, ACP, vinyl, and hoardings. Full design + installation across Hyderabad."],
  [/price|cost|quote|rate/i, "Pricing depends on run size, substrate, and finish. Drop your requirement on our Contact page for a fast quote!"],
  [/time|turnaround|deliver/i, "Most print jobs ship within 3–7 business days. Rush orders are available — just ask!"],
  [/large format|banner|hoarding/i, "UV printing up to 5m wide, weather-proof, suitable for hoardings, exhibition graphics, and event backdrops."],
  [/contact|phone|email|address/i, "📞 +91 98765 43210\n📧 hello@indiangraphics.in\n📍 Banjara Hills, Hyderabad"],
  [/hello|hi|hey|namaste/i, "Hey there! 👋 How can I help you with printing, branding, or signage today?"],
  [/thank|thanks/i, "You're welcome! Feel free to reach out anytime. 😊"],
];

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const [pattern, reply] of RESPONSES) {
    if (pattern.test(lower)) return reply;
  }
  return "I'm not sure I follow. Could you rephrase? I can help with printing, branding, packaging, signage, quotes, and more!";
}

const GREETING: Message = { role: "bot", text: "👋 Hi! I'm the Indian Graphics assistant. Ask me about our services, pricing, or anything else!" };

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const send = () => {
    const text = input.trim();
    if (!text || typing) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text }]);
    setTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text: getResponse(text) }]);
      setTyping(false);
    }, 600 + Math.random() * 400);
  };

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg transition hover:scale-105"
        aria-label="Chat"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 flex w-80 flex-col rounded-2xl border border-border bg-card shadow-2xl sm:w-96"
            style={{ maxHeight: "min(600px, calc(100vh - 160px))" }}
          >
            <div className="flex items-center gap-3 border-b border-border px-5 py-4">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                IG
              </div>
              <div>
                <p className="text-sm font-semibold">Indian Graphics</p>
                <p className="text-xs text-muted-foreground">Online</p>
              </div>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex gap-2 ${m.role === "user" ? "justify-end" : ""}`}>
                  {m.role === "bot" && (
                    <div className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary/10">
                      <Bot size={14} className="text-primary" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    {m.text}
                  </div>
                  {m.role === "user" && (
                    <div className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary/10">
                      <User size={14} className="text-primary" />
                    </div>
                  )}
                </div>
              ))}
              {typing && (
                <div className="flex gap-2">
                  <div className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary/10">
                    <Bot size={14} className="text-primary" />
                  </div>
                  <div className="flex items-center gap-1 rounded-2xl bg-muted px-4 py-3">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/60" style={{ animationDelay: "0ms" }} />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/60" style={{ animationDelay: "150ms" }} />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/60" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            <div className="border-t border-border p-3">
              <div className="flex items-center gap-2 rounded-xl border border-border bg-background px-3">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && send()}
                  placeholder="Type a message..."
                  className="flex-1 bg-transparent py-2.5 text-sm outline-none"
                />
                <button
                  onClick={send}
                  disabled={!input.trim() || typing}
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-muted-foreground transition hover:text-foreground disabled:opacity-40"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
