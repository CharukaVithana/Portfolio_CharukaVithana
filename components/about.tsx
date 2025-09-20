import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function About() {
  const coreStrengths = [
    "UI/UX Design",
    "React/Next.js",
    "Tailwind CSS",
    "ASP.NET Core",
    "Rapid Prototyping",
    "Clean Architecture",
  ]

  return (
    <section id="about" className="section-padding bg-brand-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-xl border-4 border-white/80">
              <Image
                src="/charu1.jpg" // replace with your image path
                alt="Profile Picture"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            {/* Section Header */}
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text-900">
              About Me
            </h2>

            {/* Bio Card */}
            <Card className="border-0 shadow-lg hover:bg-white hover:text-primary-500 border-white backdrop-blur-sm bg-transparent ">
              <CardContent className="p-8 space-y-4">
                <p className="text-lg leading-relaxed text-text-900">
                  Detailed and passionate software engineering undergraduate specializing in UI/UX and web
                  development, creating user-centric applications that enhance digital experiences.
                </p>
                <p className="text-base leading-relaxed text-gray-600">
                  Currently pursuing B.Sc. (Hons) in IT at University of Moratuwa with a strong focus on modern web
                  technologies and user experience design. I believe in creating solutions that not only look great
                  but also provide meaningful value to users.
                </p>
              </CardContent>
            </Card>

            
          </div>
        </div>
      </div>
    </section>
  )
}
