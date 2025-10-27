import { Users, Calendar, ChevronRight, X } from "lucide-react";
import { useState } from "react";

const PROJECTS = [
  {
    id: 1,
    title: "AI Study Buddy",
    desc: "An LLM-powered assistant that helps students plan study sessions, generate quizzes, and track progress.",
    due: "Nov 15",
    members: [
      { id: "m1", name: "Mira Patel", role: "PM", skills: ["Planning", "Docs"], bio: "Organizes sprints and keeps the team aligned." },
      { id: "m2", name: "Leo Wang", role: "ML Eng", skills: ["PyTorch", "LLM"], bio: "Builds models and optimizes inference pipelines." },
      { id: "m3", name: "Priya N.", role: "Design", skills: ["UI", "Prototyping"], bio: "Designs clean interfaces and user journeys." },
      { id: "m4", name: "Sam R.", role: "FE Dev", skills: ["React", "Vite"], bio: "Implements frontend features with performance in mind." },
    ],
  },
  {
    id: 2,
    title: "Campus Event App",
    desc: "Mobile‑first app for discovering, RSVP'ing, and organizing campus events with friends.",
    due: "Nov 21",
    members: [
      { id: "m5", name: "Ava K.", role: "PM", skills: ["Research", "Roadmaps"], bio: "Turns ideas into shipped features." },
      { id: "m6", name: "Diego M.", role: "BE Dev", skills: ["FastAPI", "MongoDB"], bio: "Builds reliable APIs and data models." },
      { id: "m7", name: "Noah L.", role: "QA", skills: ["Testing", "Automation"], bio: "Ensures quality with end‑to‑end tests." },
    ],
  },
  {
    id: 3,
    title: "Portfolio Website",
    desc: "A fast, accessible portfolio template for students to showcase projects and skills.",
    due: "Nov 8",
    members: [
      { id: "m8", name: "Sara P.", role: "Design", skills: ["Figma", "Branding"], bio: "Crafts visual identity and layouts." },
      { id: "m9", name: "Ian T.", role: "FE Dev", skills: ["React", "Tailwind"], bio: "Implements components and animations." },
    ],
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [member, setMember] = useState(null);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">Click a project to view details and team members. Click a member to see their profile.</p>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelected(p)}
              className="text-left group rounded-2xl border border-black/5 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur p-5 hover:shadow-md transition"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-600" />
              </div>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 line-clamp-3">{p.desc}</p>
              <div className="mt-4 flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-300">
                <div className="inline-flex items-center gap-1"><Calendar className="w-4 h-4" /> {p.due}</div>
                <div className="inline-flex items-center gap-1"><Users className="w-4 h-4" /> {p.members.length} members</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Project detail modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setSelected(null)} />
          <div className="relative w-full sm:max-w-2xl mx-auto rounded-t-2xl sm:rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-black p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">{selected.title}</h3>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">Due {selected.due}</p>
              </div>
              <button onClick={() => setSelected(null)} className="p-2 rounded-lg hover:bg-white/70 dark:hover:bg-white/10">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="mt-4 text-neutral-700 dark:text-neutral-300">{selected.desc}</p>
            <div className="mt-6">
              <h4 className="font-medium">Team members</h4>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selected.members.map((m) => (
                  <button key={m.id} onClick={() => setMember(m)} className="text-left rounded-xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 p-4 hover:shadow">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{m.name}</div>
                        <div className="text-sm text-neutral-600 dark:text-neutral-300">{m.role} • {m.skills.join(", ")}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Member detail modal */}
      {member && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMember(null)} />
          <div className="relative w-full sm:max-w-md mx-auto rounded-t-2xl sm:rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-black p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{member.role} • {member.skills.join(", ")}</p>
              </div>
              <button onClick={() => setMember(null)} className="p-2 rounded-lg hover:bg-white/70 dark:hover:bg-white/10">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="mt-4 text-neutral-700 dark:text-neutral-300">{member.bio}</p>
            <div className="mt-6 flex justify-end">
              <button onClick={() => setMember(null)} className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500">Close</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
