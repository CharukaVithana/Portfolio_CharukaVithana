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
  const leadership = [
  {
    role: "Design Team Lead",
    organization: "IEEE WIE SBAG",
    period: "Term 2024/25",
    description: "Leading design initiatives and visual communication for women in engineering programs.",
  },
  {
    role: "Design Lead",
    organization: "FestX 5.0",
    period: "2024",
    description: "Managed visual design and branding for university technology festival.",
  },
  {
    role: "Design Committee Member",
    organization: "IEEE Student Branch | Rotaract Club | IEEE WIE",
    period: "2023-2024",
    description: "Contributing to design committees for MERCon 2024, VRCade 2.0, Tech Byte, Mora TechConnect,DataStorm 5.0, Hackelite 1.0 events.",
  },

  {
    role: "Volunteer",
    organization: "Science Society – Mathugama",
    period: "2019 – 2020",
    description: "Assisted in organizing science-related events, workshops, and community outreach programs.",
  },
  {
    role: "Deputy Head Prefect",
    organization: "C.W.W. Kannangara Central College, Mathugama",
    period: "Mar 2019 – Mar 2020",
    description: "Led student committees, mentored juniors, and coordinated school programs and assemblies.",
  },
]


  return (
    <section id="work" className="section-padding bg-brand-900">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          
          {/* Leadership Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-heading font-semibold text-text-100 mb-4">Leadership & Volunteering</h3>
              <p className="text-gray-400">Active involvement in university organizations and community events.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {leadership.map((item, index) => (
                <Card key={index} className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary-500/10">
                        <Users className="w-5 h-5 text-primary-500" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-heading font-semibold text-text-900">{item.role}</h4>
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{item.period}</span>
                        </div>
                        <p className="text-primary-500 font-medium text-sm mb-2">{item.organization}</p>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
