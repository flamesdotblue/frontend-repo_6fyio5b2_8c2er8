import { Users, Layers, MessageSquare, Calendar, CheckCircle2, Search } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Profiles & Teams",
    desc: "Create rich student profiles, discover peers by skills, and form project teams with ease.",
  },
  {
    icon: Layers,
    title: "Project Workspaces",
    desc: "Organize details, roles, visibility, and activity in a clean, shared hub.",
  },
  {
    icon: MessageSquare,
    title: "Discussions",
    desc: "Comment threads keep feedback and announcements connected to each project.",
  },
  {
    icon: CheckCircle2,
    title: "Task Boards",
    desc: "Track To‑Do, In Progress, and Done with assignments, due dates, and reminders.",
  },
  {
    icon: Calendar,
    title: "Deadlines",
    desc: "See upcoming milestones and stay ahead with gentle nudges and alerts.",
  },
  {
    icon: Search,
    title: "Discover Projects",
    desc: "Browse open projects by interests or skills and request to join instantly.",
  },
];

export default function FeaturesGrid() {
  return (
    <section id="explore" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">Everything you need to collaborate</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">
            Built for students working on academic or creative projects, with a focus on clarity and speed.
          </p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-5 hover:shadow-md transition"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
