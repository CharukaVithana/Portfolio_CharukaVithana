import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Palette, Database, Settings, Globe, Users,Server } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      skills: ["JavaScript", "Python", "Java", "C"],
    },
    {
      title: "Front-End",
      icon: Palette,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      skills: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      title: "Back-End",
      icon: Server,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      skills: ["ASP.NET Core", "Node.js", "PHP"],
    },
    {
      title: "Databases",
      icon: Database,
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      skills: ["MS SQL Server", "MySQL", "MongoDB"],
    },
    {
      title: "Soft Skills",
      icon: Users,
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
      skills: ["Communication", "Teamwork", "Creativity", "Problem Solving", "Leadership"],
    },
    {
      title: "Tools & Technologies",
      icon: Settings,
      color: "text-teal-500",
      bgColor: "bg-teal-500/10",
      skills: ["VSCode", "Visual Studio", "Figma", "Blender", "GIMP", "Git", "GitHub"],
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-primary-500/10 text-primary-500 border-primary-500/20 px-4 py-2">
              Skills & Expertise
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text-900">Technical Proficiency</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive toolkit spanning design, development, and collaboration to deliver exceptional results.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card
                key={category.title}
                className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${category.bgColor}`}>
                      <category.icon className={`w-5 h-5 ${category.color}`} />
                    </div>
                    <CardTitle className="text-lg font-heading font-semibold text-text-900">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skill}
                        className={`${category.bgColor} ${category.color} border-0 px-3 py-1 text-xs hover:scale-105 transition-transform cursor-default`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
