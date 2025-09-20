"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Trophy, Linkedin } from "lucide-react"

export default function Awards() {
  const awards = [
    {
      title: "Top 4 Finalist",
      event: "SHECODERess 2025",
      organization: "Uva Wellassa University",
      year: "2025",
      type: "Competition",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      image: "/shecoderess.jpg",
      linkedin: "https://lnkd.in/p/g6NrzFAk",
    },
    {
      title: "Finalist",
      event: "AlgoXplore",
      organization: "NSBM Green University",
      year: "2024",
      type: "Competition",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      image: "/algoexplore.jpg",
      linkedin: "https://lnkd.in/p/g6NrzFAk",
    },
    {
      title: "Finalist",
      event: "BenchMark",
      organization: "SLIIT",
      year: "2024",
      type: "Competition",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      image: "/benchmark.jpg",
      linkedin: "https://lnkd.in/p/g6NrzFAk",
    },
    {
      title: "12th Place",
      event: "CodeRush",
      organization: "UoM IT Faculty",
      year: "2024",
      type: "Competition",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      image: "/coderush.jpg",
      linkedin: "https://lnkd.in/p/g6NrzFAk",
    },
    {
      title: "5th Place",
      event: "Buddhi Prabodhaya Math Competition",
      organization: "Ministry of Education",
      year: "2023",
      type: "Academic",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      image: "/mathcom.jpg",
      linkedin: "https://lnkd.in/p/g6NrzFAk",
    },
    {
      title: "Monthly Volunteer",
      event: "IEEE WIE SBAG",
      organization: "University of Moratuwa",
      year: "November 2024",
      type: "Volunteering",
      color: "text-teal-500",
      bgColor: "bg-teal-500/10",
      image: "/Nov.jpg",
      linkedin: "https://lnkd.in/p/g6NrzFAk",
    },
    {
      title: "Monthly Volunteer",
      event: "IEEE WIE SBAG",
      organization: "University of Moratuwa",
      year: "June 2023",
      type: "Volunteering",
      color: "text-teal-500",
      bgColor: "bg-teal-500/10",
      image: "/June.jpg",
      linkedin: "https://lnkd.in/p/g6NrzFAk",
    },
  ]

  const participations = [
    "MoraXtreme 9.0",
    "WebX",
    "ModelX",
    "Devthon (Round 1)",
    "Cre8X UI/UX",
    "InterfaceX UI/UX",
  ]

  return (
    <section id="awards" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-primary-500/10 text-primary-500 border-primary-500/20 px-4 py-2">
              Awards & Recognition
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text-900">
              Achievements & Competitions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Recognition for excellence in programming competitions, design challenges, academic achievements, and volunteering.
            </p>
          </div>

          {/* Awards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {awards.map((award, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  {/* Image */}
                  {award.image && (
                    <div className="mb-4 w-full h-40 overflow-hidden rounded-lg relative">
                      <Image
                        src={award.image}
                        alt={award.title}
                        width={400}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  {/* Text */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        className={`${award.bgColor} ${award.color} border-0 px-2 py-1 text-xs`}
                      >
                        {award.type}
                      </Badge>
                      <span className="text-xs text-gray-500 font-medium">{award.year}</span>
                    </div>
                    <h3 className="font-heading font-semibold text-text-900 mb-1">{award.title}</h3>
                    <p className="text-primary-500 font-medium text-sm mb-1">{award.event}</p>
                    <p className="text-gray-600 text-xs">{award.organization}</p>
                  </div>

                  {/* View on LinkedIn */}
                  {award.linkedin && (
                    <a
                      href={award.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-4 right-4 flex items-center gap-1 bg-blue-50 hover:bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-small text-xs shadow transition"
                    >
                      <Linkedin className="w-4 h-4" />
                      View on LinkedIn
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Participations */}
          <div className="text-center">
            <h3 className="text-xl font-heading font-semibold text-text-900 mb-8">
              Competition Participations
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {participations.map((participation, index) => (
                <Badge
                  key={participation}
                  className="bg-gray-100 text-gray-700 border border-gray-200 px-4 py-2 hover:border-primary-500 hover:text-primary-500 transition-all duration-200 cursor-default"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {participation}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
