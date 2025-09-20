import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Award, Users } from "lucide-react"

export default function WorkExperience() {
  const experiences = [
  {
    period: "Mar 2023 – Present",
    title: "B.Sc. (Hons) in Information Technology",
    organization: "University of Moratuwa",
    location: "Moratuwa, Sri Lanka",
    type: "Education",
    description: "Pursuing undergraduate degree with focus on software engineering, web development, and UI/UX design.",
    highlights: [
      "CGPA: 3.76 / 4.00",
      "Level 2 Semester 1 GPA: 3.80 (Dean’s List)",
      "Level 2 Semester 2 GPA: 3.81 (Dean’s List)",
    ],
    icon: Award,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    period: "2021 – 2022",
    title: "Diploma in English & IT",
    organization: "ESOFT Metro Campus",
    location: "Colombo, Sri Lanka",
    type: "Education",
    description: "Foundation studies in English and Information Technology.",
    highlights: [
      "Diploma in English",
      "Diploma in Information Technology",
      "Enhanced communication and IT skills",
    ],
    icon: Award,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    period: "2011 – 2020",
    title: "G.C.E. Advanced Level (AL) & Ordinary Level (OL)",
    organization: "C.W.W. Kannangara Central College, Matugama",
    location: "Matugama, Sri Lanka",
    type: "Education",
    description: "Completed AL & OL with excellent academic results.",
    highlights: [
      "AL (2020) — ABB (Physical Science Stream), Z-Score: 1.7187",
      "OL (2017) — 9 A’s",
      "Active in extra-curricular activities",
    ],
    icon: Award,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
  },

  {
    period: "2022 – 2023",
    title: "Banking Operations Intern",
    organization: "RDB Bank",
    location: "Mathugama, Sri Lanka",
    type: "Experience",
    description: "Gained exposure to banking operations and financial systems during internship program.",
    highlights: [
      "Learned banking operations and procedures",
      "Customer service and communication skills",
    ],
    icon: Calendar,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
]


  return (
    <section id="work" className="section-padding bg-gradient-to-b from-brand-900 via-brand-800 to-brand-900 text-text-100">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text-100">My Professional Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From academic excellence to hands-on experience, here's how I've grown as a developer and designer.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-500/30 hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex flex-col md:flex-row gap-8 items-start">
                  {/* Timeline dot */}
                  <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-primary-500 shadow-lg relative z-10">
                    <exp.icon className={`w-6 h-6 ${exp.color}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <Badge className={`${exp.bgColor} ${exp.color} border-0 px-3 py-1`}>{exp.type}</Badge>
                              <span className="text-sm text-gray-500 font-medium">{exp.period}</span>
                            </div>
                            <h3 className="text-xl font-heading font-semibold text-text-900 mb-1">{exp.title}</h3>
                            <div className="flex items-center gap-2 text-gray-600 mb-3">
                              <span className="font-medium">{exp.organization}</span>
                              <span>•</span>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span className="text-sm">{exp.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-700 mb-4">{exp.description}</p>

                        <div className="grid sm:grid-cols-2 gap-3">
                          {exp.highlights.map((highlight, highlightIndex) => (
                            <div key={highlightIndex} className="flex items-start gap-2">
                              <div
                                className={`w-1.5 h-1.5 rounded-full ${exp.color.replace("text-", "bg-")} mt-2 flex-shrink-0`}
                              ></div>
                              <span className="text-sm text-gray-700">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
