import { Rocket, Search, Bell, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/60 dark:bg-black/40 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-500 via-cyan-500 to-indigo-500 text-white shadow">
            <Rocket className="w-5 h-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight">CollabSphere</span>
        </div>
        <div className="hidden md:flex items-center gap-2 flex-1 max-w-xl mx-6">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search projects, skills, or students"
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-neutral-100/80 dark:bg-white/5 border border-black/5 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="relative inline-flex items-center justify-center w-9 h-9 rounded-xl bg-neutral-100/80 dark:bg-white/5 border border-black/5 dark:border-white/10 hover:bg-neutral-200/70 transition">
            <Bell className="w-4 h-4" />
            <span className="sr-only">Notifications</span>
          </button>
          <button className="inline-flex items-center gap-2 py-2 px-3 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500 transition shadow">
            <User className="w-4 h-4" />
            <span className="hidden sm:inline">Sign in</span>
          </button>
        </div>
      </div>
    </header>
  );
}
