import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechGrid from "./components/TechGrid";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";

import type { Tech } from "./types/tech";
import techData from "./assets/tech.json";

function App() {
  const [techs, setTechs] = useState<Tech[]>([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState<Tech[]>([]);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setTechs(techData as Tech[]);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const addToStack = (tech: Tech) => {
    if (stack.some((s) => s.id === tech.id)) {
      toast.warn(`${tech.name} is already in your stack!`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack`);
  };

  const removeFromStack = (id: string) => {
    const removed = stack.find((s) => s.id === id);
    setStack((prev) => prev.filter((s) => s.id !== id));
    if (removed) toast.info(`${removed.name} removed from stack`);
  };

  const removeAll = () => {
    setStack([]);
    toast.error("All technologies removed from your stack");
  };

  return (
    <>
      <Navbar />
      <Hero />

      <main className="max-w-7xl mx-auto px-4 pb-10">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24">
            <div className="w-10 h-10 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-slate-500">Loading technologies...</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
              <TechGrid techs={techs} stack={stack} onAdd={addToStack} />
            </div>
            <YourStack
              stack={stack}
              onRemove={removeFromStack}
              onRemoveAll={removeAll}
            />
          </div>
        )}
      </main>

      <Footer />

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;