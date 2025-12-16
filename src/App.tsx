import { useEffect, useState } from 'react';
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import BadWater from "@/pages/BadWater";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/badwater" component={BadWater} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('reduceMotion');
    setReduceMotion(stored === 'true');

    const handleReduceMotionChange = (e: CustomEvent) => {
      setReduceMotion(e.detail);
    };

    window.addEventListener('reduceMotionChange', handleReduceMotionChange as EventListener);
    return () => {
      window.removeEventListener('reduceMotionChange', handleReduceMotionChange as EventListener);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* <ParticleBackground reduceMotion={reduceMotion} /> */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
