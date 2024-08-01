import Hero from "@/components/Home/Hero";
import AboutMe from "@/components/Home/AboutMe";
import Experiences from "@/components/Home/Experiences";
import Project from "@/components/Home/Project";
import ContactMe from "@/components/Home/ContactMe";

export default function Home() {
    return (
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Me Section */}
        <AboutMe />

        {/* Experience Section */}
        <Experiences />

        {/* Project Section */}
        <Project />

        {/* Get in Touch Section */}
        <ContactMe />
      </main>
    );
  }