import { Calendar, MessageSquare, CheckCircle2, Users } from "lucide-react";

const sampleProjects = [
  {
    id: 1,
    title: "AI Study Buddy",
    progress: 68,
    due: "Nov 15",
    members: 4,
  },
  {
    id: 2,
    title: "Campus Event App",
    progress: 42,
    due: "Nov 21",
    members: 6,
  },
  {
    id: 3,
    title: "Portfolio Website",
    progress: 90,
    due: "Nov 08",
    members: 2,
  },
];

export default function DashboardPreview() {
  return (
    <section id="get-started" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">A focused dashboard</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">
            See all your projects, deadlines, and updates at a glance.
          </p>
        </div>

        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl border border-black/5 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur p-5">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Your projects</h3>
              <button className="text-sm px-3 py-1.5 rounded-lg border border-black/10 dark:border-white/10 hover:bg-white/70 dark:hover:bg-white/10 transition">
                Create new
              </button>
            </div>
            <div className="mt-4 space-y-3">
              {sampleProjects.map((p) => (
                <div
                  key={p.id}
                  className="rounded-xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 p-4 flex items-center justify-between"
                >
                  <div>
                    <div className="font-medium">{p.title}</div>
                    <div className="mt-1 h-2 w-40 bg-neutral-200/70 dark:bg-white/10 rounded overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-indigo-600"
                        style={{ width: `${p.progress}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-300">
                    <div className="inline-flex items-center gap-1"><Calendar className="w-4 h-4" /> {p.due}</div>
                    <div className="inline-flex items-center gap-1"><Users className="w-4 h-4" /> {p.members}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur p-5">
              <div className="flex items-center gap-2 font-semibold">
                <MessageSquare className="w-4 h-4" /> Recent comments
              </div>
              <ul className="mt-3 text-sm space-y-2">
                <li className="rounded-lg bg-white/70 dark:bg-white/5 p-3 border border-black/5 dark:border-white/10">“Can you review the onboarding copy?” — Mira</li>
                <li className="rounded-lg bg-white/70 dark:bg-white/5 p-3 border border-black/5 dark:border-white/10">“Updated dataset uploaded to Drive.” — Leo</li>
                <li className="rounded-lg bg-white/70 dark:bg-white/5 p-3 border border-black/5 dark:border-white/10">“Sprint planning moved to Friday.” — Priya</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur p-5">
              <div className="flex items-center gap-2 font-semibold">
                <CheckCircle2 className="w-4 h-4" /> Your tasks today
              </div>
              <ul className="mt-3 text-sm space-y-2">
                <li className="rounded-lg bg-white/70 dark:bg-white/5 p-3 border border-black/5 dark:border-white/10">Draft project brief</li>
                <li className="rounded-lg bg-white/70 dark:bg-white/5 p-3 border border-black/5 dark:border-white/10">Review pull request</li>
                <li className="rounded-lg bg-white/70 dark:bg-white/5 p-3 border border-black/5 dark:border-white/10">Prep presentation slides</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
