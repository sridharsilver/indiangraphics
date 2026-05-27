import { motion } from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
  ShoppingBag,
  FileText,
  MessageSquare,
  Users,
  ArrowUpRight,
} from "lucide-react";

const stats = [
  {
    label: "Active Orders",
    value: "24",
    change: "+12%",
    trend: "up",
    icon: ShoppingBag,
    color: "from-blue-500 to-indigo-600",
  },
  {
    label: "Projects this month",
    value: "18",
    change: "+8%",
    trend: "up",
    icon: FileText,
    color: "from-emerald-500 to-teal-600",
  },
  {
    label: "New Messages",
    value: "7",
    change: "-3%",
    trend: "down",
    icon: MessageSquare,
    color: "from-amber-500 to-orange-600",
  },
  {
    label: "Total Clients",
    value: "1,284",
    change: "+5%",
    trend: "up",
    icon: Users,
    color: "from-pink-500 to-fuchsia-600",
  },
];

const recentOrders = [
  { id: "#ORD-0042", client: "Bloom Café", type: "Branding Package", status: "In Production", date: "May 26" },
  { id: "#ORD-0041", client: "Vertex Realty", type: "Brochure Print", status: "Completed", date: "May 24" },
  { id: "#ORD-0040", client: "Nova Studios", type: "Product Packaging", status: "Design Review", date: "May 22" },
  { id: "#ORD-0039", client: "Lumen Health", type: "Signage", status: "Completed", date: "May 20" },
  { id: "#ORD-0038", client: "Spice Route", type: "Menu Suite", status: "Awaiting Approval", date: "May 18" },
];

const statusColor: Record<string, string> = {
  "In Production": "bg-blue-500/20 text-blue-500",
  "Completed": "bg-emerald-500/20 text-emerald-500",
  "Design Review": "bg-amber-500/20 text-amber-500",
  "Awaiting Approval": "bg-purple-500/20 text-purple-500",
};

export function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Welcome back, Admin. Here's what's happening today.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <div className="flex items-center justify-between">
              <div className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${s.color} text-white`}>
                <s.icon size={18} />
              </div>
              <span
                className={`inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-xs font-medium ${
                  s.trend === "up"
                    ? "bg-emerald-500/10 text-emerald-500"
                    : "bg-red-500/10 text-red-500"
                }`}
              >
                {s.trend === "up" ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                {s.change}
              </span>
            </div>
            <p className="mt-4 font-display text-3xl font-bold">{s.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card lg:col-span-2">
          <div className="flex items-center justify-between border-b border-border px-6 py-4">
            <h2 className="font-display text-lg font-semibold">Recent Orders</h2>
            <span className="text-xs text-muted-foreground">Today · May 27, 2026</span>
          </div>
          <div className="divide-y divide-border">
            {recentOrders.map((o) => (
              <div
                key={o.id}
                className="flex items-center justify-between px-6 py-3.5 text-sm"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-muted-foreground">{o.id}</span>
                  <div>
                    <p className="font-medium">{o.client}</p>
                    <p className="text-xs text-muted-foreground">{o.type}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      statusColor[o.status] || "bg-muted text-muted-foreground"
                    }`}
                  >
                    {o.status}
                  </span>
                  <span className="text-xs text-muted-foreground">{o.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card">
          <div className="border-b border-border px-6 py-4">
            <h2 className="font-display text-lg font-semibold">Quick Actions</h2>
          </div>
          <div className="space-y-2 p-6">
            {[
              { label: "New Project", icon: FileText },
              { label: "Add Portfolio Item", icon: ArrowUpRight },
              { label: "View Messages", icon: MessageSquare },
            ].map((a) => (
              <button
                key={a.label}
                className="flex w-full items-center gap-3 rounded-lg border border-border px-4 py-3 text-sm font-medium text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
              >
                <a.icon size={16} />
                {a.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
