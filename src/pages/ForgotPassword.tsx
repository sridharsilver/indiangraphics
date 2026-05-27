import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Send, CheckCircle } from "lucide-react";

export function ForgotPassword() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
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
            <h1 className="mt-4 font-display text-2xl font-bold">Reset password</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {sent
                ? "Check your email for the reset link"
                : "Enter your email and we'll send you a reset link"}
            </p>
          </div>

          {sent ? (
            <div className="text-center">
              <CheckCircle size={48} className="mx-auto text-accent" />
              <p className="mt-4 text-sm text-muted-foreground">
                If an account exists with that email, you'll receive a password reset link shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="admin@indiangraphics.in"
                  className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition hover:opacity-90"
              >
                <Send size={16} />
                Send reset link
              </button>
            </form>
          )}

          <div className="mt-6 text-center">
            <Link
              to="/login"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft size={14} />
              Back to login
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
