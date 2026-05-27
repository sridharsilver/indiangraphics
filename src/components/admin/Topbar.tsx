import { Search, Bell, Menu } from "lucide-react";
import { ThemeToggle } from "../ThemeToggle";

interface TopbarProps {
  onMenuToggle: () => void;
}

export function Topbar({ onMenuToggle }: TopbarProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="flex h-16 items-center gap-4 px-6">
        <button
          onClick={onMenuToggle}
          className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground"
        >
          <Menu size={18} />
        </button>

        <div className="relative hidden max-w-md flex-1 sm:block">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <input
            placeholder="Search..."
            className="w-full rounded-lg border border-border bg-background py-2 pl-9 pr-4 text-sm outline-none focus:border-primary"
          />
        </div>

        <div className="ml-auto flex items-center gap-3">
          <button className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground">
            <Bell size={16} />
            <span className="absolute -right-0.5 -top-0.5 grid h-4 w-4 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
              3
            </span>
          </button>
          <ThemeToggle />
          <div className="flex items-center gap-3 border-l border-border pl-3">
            <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-[11px] font-bold text-white">
              AD
            </div>
            <div className="hidden text-sm sm:block">
              <p className="font-medium leading-tight">Admin</p>
              <p className="text-xs text-muted-foreground">admin@indiangraphics.in</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
