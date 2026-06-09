import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Grid from "@/components/ui/grid";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full pb-8">
        <Navbar />
        <FloatingNav navItems={navItems} />
        <Hero />
         <Grid />
        <Experience />
        <Skills />
        <Projects />
       <Footer />
      </div>
    </main>
  );
}
