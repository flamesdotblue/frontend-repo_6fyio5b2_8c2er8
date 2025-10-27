import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturesGrid from "./components/FeaturesGrid";
import DashboardPreview from "./components/DashboardPreview";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-indigo-50 to-fuchsia-50 dark:from-black dark:via-gray-950 dark:to-black text-neutral-900 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturesGrid />
        <DashboardPreview />
      </main>
      <footer className="border-t border-black/5 dark:border-white/10 py-10 mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} CollabSphere. Built for student collaboration.</p>
          <div className="text-sm text-neutral-600 dark:text-neutral-400 flex items-center gap-4">
            <a href="#" className="hover:text-neutral-800 dark:hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-neutral-800 dark:hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-neutral-800 dark:hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
