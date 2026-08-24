import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Impact } from "@/components/sections/impact";
import { Journey } from "@/components/sections/journey";
import { Nav } from "@/components/sections/nav";
import { Projects } from "@/components/sections/projects";
import { Research } from "@/components/sections/research";
import { Skills } from "@/components/sections/skills";
import { Awards } from "@/components/sections/awards";
import { Certificates } from "@/components/sections/certificates";
import { Proofs } from "@/components/sections/proofs";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Journey />
        <Skills />
        <Projects />
        <Research />
        <Awards />
        <Certificates />
        <Education />
        <Experience />
        <Impact />
        <Proofs />
        <Contact />
      </main>
    </>
  );
}
