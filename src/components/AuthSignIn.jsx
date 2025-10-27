import { Mail, Lock, User } from "lucide-react";

export default function AuthSignIn({ onBack, onSuccess }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSuccess) onSuccess();
  };

  return (
    <section className="py-16">
      <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur p-6 shadow">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight">Create your account</h2>
            {onBack && (
              <button onClick={onBack} className="text-sm px-3 py-1.5 rounded-lg border border-black/10 dark:border-white/10 hover:bg-white/70 dark:hover:bg-white/10 transition">Back</button>
            )}
          </div>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">Join CollabSphere to discover projects and teammates.</p>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input type="text" required placeholder="Full name" className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-100/80 dark:bg-white/5 border border-black/5 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/60" />
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input type="email" required placeholder="Email" className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-100/80 dark:bg-white/5 border border-black/5 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/60" />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input type="password" required placeholder="Password" className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-100/80 dark:bg-white/5 border border-black/5 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/60" />
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-medium shadow hover:from-blue-500 hover:to-indigo-500 transition">Create account</button>
            <p className="text-center text-sm text-neutral-600 dark:text-neutral-300">Already have an account? <span className="text-blue-600 cursor-pointer" onClick={onBack}>Log in</span></p>
          </form>
        </div>
      </div>
    </section>
  );
}
