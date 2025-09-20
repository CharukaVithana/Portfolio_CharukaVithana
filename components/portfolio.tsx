"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "Web", "UI/UX", "Hardware"]

  const projects = [
    {
      id: 1,
      title: "CookBook App",
      category: "Web",
      description: "Full-stack recipe platform with create/edit, filtering, favorites, reviews, and sharing features.",
      image: "/cookbook.jpg?height=300&width=400",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "ASP.NET Core", "MS SQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Exam Scheduler",
      category: "Web",
      description:
        "Offline exam management system with conflict detection, JWT authentication, and resource allocation.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Vite", "Tailwind CSS", "JWT"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Spirit11",
      category: "Web",
      description: "Fantasy cricket web application designed for university cricket fans and enthusiasts.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "MongoDB", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Portfolio Website",
      category: "Web",
      description: "Personal portfolio showcasing UI/UX design skills and frontend development expertise.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Smart Soil Tracker",
      category: "Hardware",
      description: "Portable NPK monitor providing real-time soil analysis for agricultural applications.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Arduino", "IoT", "Sensors", "Mobile App"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 6,
      title: "SawiKetha",
      category: "UI/UX",
      description: "Farmer-friendly web UI design (Devthon UI competition first-round selection).",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Figma", "UI/UX", "User Research"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 7,
      title: "ChatMate",
      category: "UI/UX",
      description: "AI chatbot user interface design focusing on conversational experience and accessibility.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Figma", "UI/UX", "Prototyping"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 8,
      title: "FineGo",
      category: "UI/UX",
      description: "Traffic fine settlement flow design with strong focus on accessibility and user experience.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Figma", "Accessibility", "User Flow"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 9,
      title: "Screenless",
      category: "UI/UX",
      description: "Digital wellbeing app concept promoting healthy technology usage habits.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Figma", "UX Research", "Behavioral Design"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 10,
      title: "Forest Legacy",
      category: "UI/UX",
      description: "Conservation app prototype encouraging environmental awareness and action.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Figma", "Environmental Design", "Gamification"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 11,
      title: "AI-Powered Calculator",
      category: "UI/UX",
      description: "Calculator interface with AI step-by-step help for educational purposes.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Figma", "Educational UX", "AI Integration"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Web":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20"
      case "UI/UX":
        return "bg-purple-500/10 text-purple-500 border-purple-500/20"
      case "Hardware":
        return "bg-green-500/10 text-green-500 border-green-500/20"
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20"
    }
  }

  return (
    <section id="projects" className="section-padding bg-brand-900">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-primary-500/10 text-primary-500 border-primary-500/20 px-4 py-2">Portfolio</Badge>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text-100">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A showcase of my work spanning web development, UI/UX design, and hardware projects.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 transition-all duration-200 ${
                  activeFilter === filter
                    ? "bg-primary-500 text-white hover:bg-primary-400"
                    : "border-gray-300 text-gray-100 hover:border-primary-500 hover:text-primary-500 bg-white"
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="group border-0 shadow-lg bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-primary-500 text-white border-0 px-3 py-1">
                      Featured
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100 flex-1">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          View Live
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/10 border-white text-white hover:bg-white hover:text-gray-900"
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-heading font-semibold text-text-900 group-hover:text-primary-500 transition-colors">
                      {project.title}
                    </h3>
                    <Badge className={`${getCategoryColor(project.category)} border px-2 py-1 text-xs`}>
                      {project.category}
                    </Badge>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-gray-100 text-gray-700 border-0 px-2 py-1 text-xs hover:bg-primary-500/10 hover:text-primary-500 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More CTA */}
          <div className="text-center mt-16">
            <Card className="border-0 shadow-lg bg-gradient-accent text-white max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-semibold mb-4">Interested in My Work?</h3>
                <p className="text-white/90 mb-6">
                  These are just a few highlights from my portfolio. I'd love to discuss how I can help bring your ideas
                  to life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-white text-primary-500 hover:bg-gray-100 font-semibold">
                    <a href="#contact">Start a Project</a>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-primary-500 bg-transparent"
                  >
                    <a href="https://github.com/CharukaVithana" target="_blank" rel="noopener noreferrer">
                      View All on GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
