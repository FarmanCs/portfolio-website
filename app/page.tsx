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

// Import static data directly
import {
  fallbackAbout,
  fallbackSkills,
  fallbackProjects,
  fallbackExperience,
} from "@/lib/db";

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
      <Projects projects={projects} />
      <About about={about} />
      <Experience experience={experience} />
      <Contact about={about} />
      <Footer />
      <UpArrow />
    </main>
  );
}
