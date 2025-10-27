import Spline from "@splinetool/react-spline";
import { CheckCircle2 } from "lucide-react";

export default function Hero({ onNavigate }) {
  const go = (v) => onNavigate && onNavigate(v);

  return (
    <section className="relative min-h-[72vh] flex items-center">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/90 dark:from-black/50 dark:via-black/40 dark:to-black/80 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 py-20">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Collaborate smarter with a unified student workspace
          </h1>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300 text-lg">
            Discover teammates, form project groups, assign tasks, and stay in sync — all in one place.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={() => go("signin")}
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-medium shadow hover:from-blue-500 hover:to-indigo-500 transition"
            >
              Get started
            </button>
            <button
              onClick={() => go("projects")}
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur hover:bg-white transition"
            >
              Explore public projects
            </button>
          </div>
          <div className="mt-6 grid sm:grid-cols-3 gap-3 text-sm">
            {[
              "Secure authentication",
              "Project invites & comments",
              "Task boards with progress",
            ].map((item) => (
              <div
                key={item}
                className="inline-flex items-center gap-2 rounded-lg border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-2"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
