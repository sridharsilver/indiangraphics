import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff, LogIn, Terminal } from "lucide-react";
import { login as authLogin } from "../lib/auth";

const TEST_CREDENTIALS = {
  email: "admin@indiangraphics.in",
  password: "admin123",
};

export function Login() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");
    if (email !== TEST_CREDENTIALS.email || password !== TEST_CREDENTIALS.password) {
      setError("Invalid email or password");
      return;
    }
    authLogin();
    navigate("/admin");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="blob h-80 w-80 bg-primary -left-32 -top-32 fixed" />
      <div className="blob h-80 w-80 bg-accent -right-32 -bottom-32 fixed" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-sm"
      >
        <div className="rounded-2xl border border-border bg-card p-8 shadow-xl">
          <div className="mb-8 text-center">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-white font-bold text-lg">
              IG
            </div>
            <h1 className="mt-4 font-display text-2xl font-bold">Welcome back</h1>
            <p className="mt-1 text-sm text-muted-foreground">Sign in to your admin account</p>
          </div>

          <form onSubmit={onSubmit} className="space-y-4">
            <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs">
              <div className="flex items-center gap-2 font-semibold text-emerald-500">
                <Terminal size={14} />
                Test credentials
              </div>
              <p className="mt-1 text-muted-foreground">
                {TEST_CREDENTIALS.email} / {TEST_CREDENTIALS.password}
              </p>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@indiangraphics.in"
                className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Password
              </label>
              <div className="relative mt-1.5">
                <input
                  type={show ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 pr-10 text-sm outline-none focus:border-primary"
                />
                <button
                  type="button"
                  onClick={() => setShow((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {show ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <p className="rounded-md border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs text-red-500">
                {error}
              </p>
            )}

            <div className="flex justify-end">
              <Link
                to="/forgot-password"
                className="text-xs font-medium text-primary hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition hover:opacity-90"
            >
              <LogIn size={16} />
              Sign in
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
