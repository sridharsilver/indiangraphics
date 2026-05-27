import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  Image,
  ShoppingBag,
  MessageSquare,
  Settings,
  Users,
  LogOut,
} from "lucide-react";
import { logout } from "../../lib/auth";

const NAV = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/admin/orders", label: "Orders", icon: ShoppingBag },
  { to: "/admin/projects", label: "Projects", icon: FileText },
  { to: "/admin/portfolio", label: "Portfolio", icon: Image },
  { to: "/admin/messages", label: "Messages", icon: MessageSquare },
  { to: "/admin/clients", label: "Clients", icon: Users },
  { to: "/admin/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  const navigate = useNavigate();
  return (
    <aside className="fixed left-0 top-0 z-40 flex h-full w-64 flex-col border-r border-border bg-card">
      <div className="flex items-center gap-2 border-b border-border px-6 py-5">
        <div className="grid h-8 w-8 place-items-center rounded-md bg-gradient-to-br from-primary to-accent text-white font-bold text-xs">
          IG
        </div>
        <span className="font-display text-sm font-bold tracking-tight">
          INDIAN GRAPHICS
        </span>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto p-4">
        {NAV.map((n) => (
          <NavLink
            key={n.to}
            to={n.to}
            end={n.end}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                isActive
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`
            }
          >
            <n.icon size={18} />
            {n.label}
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-border p-4">
        <button
          onClick={() => { logout(); navigate("/login"); }}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
        >
          <LogOut size={18} />
          Log out
        </button>
      </div>
    </aside>
  );
}
