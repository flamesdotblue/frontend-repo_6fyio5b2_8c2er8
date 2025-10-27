import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturesGrid from "./components/FeaturesGrid";
import DashboardPreview from "./components/DashboardPreview";
import AuthSignIn from "./components/AuthSignIn";
import AuthLogin from "./components/AuthLogin";
import Projects from "./components/Projects";

function App() {
  const [view, setView] = useState("home");

  const go = (v) => setView(v);
  const backToHome = () => setView("home");
  const onAuthSuccess = () => setView("projects");

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-indigo-50 to-fuchsia-50 dark:from-black dark:via-gray-950 dark:to-black text-neutral-900 dark:text-white">
      <Navbar onNavigate={go} />
      <main>
        {view === "home" && (
          <>
            <Hero onNavigate={go} />
            <FeaturesGrid />
            <DashboardPreview onNavigate={go} />
          </>
        )}
        {view === "signin" && <AuthSignIn onBack={() => go("login")} onSuccess={onAuthSuccess} />}
        {view === "login" && <AuthLogin onBack={() => go("signin")} onSuccess={onAuthSuccess} />}
        {view === "projects" && <Projects />}
      </main>
      <footer className="border-t border-black/5 dark:border-white/10 py-10 mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} CollabSphere. Built for student collaboration.</p>
          <div className="text-sm text-neutral-600 dark:text-neutral-400 flex items-center gap-4">
            <button onClick={backToHome} className="hover:text-neutral-800 dark:hover:text-white transition">Home</button>
            <button onClick={() => go("projects")} className="hover:text-neutral-800 dark:hover:text-white transition">Projects</button>
            <button onClick={() => go("signin")} className="hover:text-neutral-800 dark:hover:text-white transition">Sign in</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
