import { getAbout, getSkills, getProjects, getExperience } from "@/lib/db";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import UpArrow from "@/components/UpArrow";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

// Import static data directly
import {
  fallbackAbout,
  fallbackSkills,
  fallbackProjects,
  fallbackExperience,
} from "@/lib/db";

// Dynamically import heavy components
const DynamicProjects = dynamic(() => import("@/components/Projects"), {
  loading: () => (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    </div>
  ),
  ssr: true,
});

const DynamicExperience = dynamic(() => import("@/components/Experience"), {
  loading: () => (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    </div>
  ),
  ssr: true,
});

export default async function Home() {
  // Use static data for immediate loading
  const about = fallbackAbout;
  const skills = fallbackSkills;
  const projects = fallbackProjects;
  const experience = fallbackExperience;

  // Optional: Fetch fresh data in the background (uncomment if needed)
  // const [about, skills, projects, experience] = await Promise.all([
  //   getAbout(),
  //   getSkills(),
  //   getProjects(),
  //   getExperience(),
  // ]);

  return (
    <main className="min-h-screen">
      <Header />
      <Hero about={about} />
      <Skills skills={skills} />
      <Services skills={skills} />
      <DynamicProjects projects={projects} />
      <About about={about} />
      <DynamicExperience experience={experience} />
      <Contact about={about} />
      <Footer />
      <UpArrow />
    </main>
  );
}
