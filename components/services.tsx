import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette, Code, Server, Zap } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Front-End Development",
      description: "React/Next.js, Tailwind CSS, responsive, accessible",
      details: [
        "Modern React applications",
        "Next.js with SSR/SSG",
        "Responsive design",
        "Performance optimization",
        "Accessibility (WCAG AA)",
      ],
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Wireframes, user flows, hi-fi prototypes (Figma)",
      details: [
        "User research & personas",
        "Information architecture",
        "Interactive prototypes",
        "Design systems",
        "Usability testing",
      ],
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
    },
    {
      icon: Server,
      title: "Web Apps & APIs",
      description: "ASP.NET Core, Node.js, REST, auth, SQL/NoSQL",
      details: [
        "RESTful API development",
        "Database design & optimization",
        "Authentication & authorization",
        "Cloud deployment",
        "API documentation",
      ],
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
    },
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text-900">What I Can Do For You</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From concept to deployment, I provide end-to-end solutions that combine beautiful design with robust
              functionality.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg ${service.bgColor} ${service.borderColor} border`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${service.bgColor} ${service.borderColor} border`}>
                      <service.icon className={`w-6 h-6 ${service.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-heading font-semibold text-text-900 group-hover:text-primary-500 transition-colors">
                        {service.title}
                      </CardTitle>
                      <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-3 text-sm text-gray-700">
                        <div className={`w-1.5 h-1.5 rounded-full ${service.color.replace("text-", "bg-")}`}></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Card className="border-0 shadow-lg bg-gradient-accent text-white max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-semibold mb-4">Ready to Start Your Project?</h3>
                <p className="text-white/90 mb-6">
                  Let's discuss how I can help bring your ideas to life with clean design and solid development.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Get In Touch
                  </a>
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-500 transition-colors"
                  >
                    View My Work
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
