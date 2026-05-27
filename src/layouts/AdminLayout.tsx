import { useState, useEffect } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { Sidebar } from "../components/admin/Sidebar";
import { Topbar } from "../components/admin/Topbar";
import { AnimatePresence, motion } from "framer-motion";
import { isAuthenticated, logout } from "../lib/auth";
import {
  LayoutDashboard,
  FileText,
  Image,
  ShoppingBag,
  MessageSquare,
  Settings,
  Users,
  LogOut,
  X,
} from "lucide-react";

const MOBILE_NAV = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/admin/orders", label: "Orders", icon: ShoppingBag },
  { to: "/admin/projects", label: "Projects", icon: FileText },
  { to: "/admin/portfolio", label: "Portfolio", icon: Image },
  { to: "/admin/messages", label: "Messages", icon: MessageSquare },
  { to: "/admin/clients", label: "Clients", icon: Users },
  { to: "/admin/settings", label: "Settings", icon: Settings },
];

export function AdminLayout() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  return (
    <div className="flex min-h-screen bg-background">
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-50 bg-black/50 lg:hidden"
          >
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="fixed left-0 top-0 flex h-full w-64 flex-col border-r border-border bg-card"
            >
              <div className="flex items-center justify-between border-b border-border px-6 py-5">
                <div className="flex items-center gap-2">
                  <div className="grid h-8 w-8 place-items-center rounded-md bg-gradient-to-br from-primary to-accent text-white font-bold text-xs">
                    IG
                  </div>
                  <span className="font-display text-sm font-bold tracking-tight">
                    INDIAN GRAPHICS
                  </span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X size={18} />
                </button>
              </div>
              <nav className="flex-1 space-y-1 overflow-y-auto p-4">
                {MOBILE_NAV.map((n) => (
                  <NavLink
                    key={n.to}
                    to={n.to}
                    end={n.end}
                    onClick={() => setMobileOpen(false)}
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
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-1 flex-col lg:pl-64">
        <Topbar onMenuToggle={() => setMobileOpen(true)} />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
