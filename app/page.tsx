import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import WorkExperience from "@/components/work-experience"
import Skills from "@/components/skills"
import Portfolio from "@/components/portfolio"
import Awards from "@/components/awards"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Volunteering from "@/components/volunteering"
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <WorkExperience />
      <Skills />
      <Portfolio />
      <Awards />
      <Volunteering />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}
