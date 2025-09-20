"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react"
import Image from "next/image"
import { SiNextdotjs, SiReact, SiTailwindcss, SiFigma, SiDotnet } from "react-icons/si"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock } from "lucide-react"

export default function Hero() {
  const [animatedStats, setAnimatedStats] = useState({
    cgpa: 0,
    competitions: 0,
  })

  const words = ["Full Stack Developer", "3rd Year Undergraduate", "UI/UX Designer"]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  // Animate stats
  useEffect(() => {
    const animateValue = (start: number, end: number, duration: number, callback: (value: number) => void) => {
      let startTimestamp: number | null = null
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp
        const progress = Math.min((timestamp - startTimestamp) / duration, 1)
        const value = progress * (end - start) + start
        callback(value)
        if (progress < 1) window.requestAnimationFrame(step)
      }
      window.requestAnimationFrame(step)
    }

    setTimeout(() => {
      animateValue(0, 3.74, 2000, (value) => setAnimatedStats((prev) => ({ ...prev, cgpa: value })))
      animateValue(0, 4, 2500, (value) => setAnimatedStats((prev) => ({ ...prev, competitions: Math.floor(value) })))
    }, 500)
  }, [])

  // Typing effect
  useEffect(() => {
    const currentWord = words[currentWordIndex]
    const speed = isDeleting ? 50 : 120

    const handleTyping = () => {
      setDisplayedText((prev) =>
        isDeleting ? currentWord.substring(0, prev.length - 1) : currentWord.substring(0, prev.length + 1)
      )
    }

    const timeout = setTimeout(handleTyping, speed)

    if (!isDeleting && displayedText === currentWord) {
      setTimeout(() => setIsDeleting(true), 1200)
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false)
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentWordIndex, words])

  const socialLinks = [
    { href: "https://linkedin.com/in/charuka-vithana-87467a277", icon: Linkedin, label: "LinkedIn" },
    { href: "https://github.com/CharukaVithana", icon: Github, label: "GitHub" },
    { href: "mailto:clvithana2001@gmail.com", icon: Mail, label: "Email" },
  ]

  const techBadges = [
    { icon: SiNextdotjs, delay: "0s", radius: 130, angle: 0 },
    { icon: SiFigma, delay: "0.5s", radius: 130, angle: 72 },
    { icon: SiReact, delay: "1s", radius: 130, angle: 144 },
    { icon: SiTailwindcss, delay: "1.5s", radius: 130, angle: 216 },
    { icon: SiDotnet, delay: "2s", radius: 130, angle: 288 },
  ]

  return (
    <section className="min-h-screen bg-brand-900 text-text-100 pt-20 lg:pt-24 section-padding relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent-500/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up mt-8">
            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-4xl xl:text-6xl font-heading font-bold leading-tight">
                Hi, I'm <span className="text-gradient">Charuka</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-medium text-gradient h-10">
                {displayedText}
                <span className="border-r-2 border-primary-400 animate-pulse ml-1"></span>
              </h2>
            </div>
                        {/* Bio */}
            <div className="lg:col-span-2 space-y- text-left">

                  <p className="text-small leading-relaxed text-text-100 mb-6">
                    I am a detailed and passionate Software Engineering undergraduate specializing in Software Engineering, UI/UX Design, and Web Development
                  </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary-500 hover:bg-primary-400 text-white transition-all duration-200 group">
                <a href="#contact" className="flex items-center">
                  Let's Work Together
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-text-400 text-text-100 hover:bg-text-100 hover:text-brand-900 transition-all duration-200 bg-transparent"
              >
                <a href="#projects">View Projects</a>
              </Button>
            </div>



            {/* Social Links */}
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-primary-500/20 transition-colors duration-300"
                >
                  <social.icon className="w-6 h-6 text-text-100" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Portrait */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Decorative background circle */}
              <div className="absolute inset-0 bg-gradient-accent rounded-full opacity-20 animate-pulse"></div>

              {/* Portrait */}
              <div className="absolute inset-4 rounded-full overflow-hidden bg-brand-800 border-4 border-primary-500/30">
                <Image
                  src="/charu.JPG?height=400&width=400"
                  alt="Charuka Vithana"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover scale-110 hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Orbiting tech icons */}
              {techBadges.map((tech, index) => (
                <div
                  key={index}
                  className="absolute w-10 h-10 flex items-center justify-center rounded-full bg-brand-800 border border-primary-500/30"
                  style={{
                    top: "45%",
                    left: "45%",
                    transformOrigin: "center center",
                    transform: `translate(-50%, -50%) translate(-160px, 50px) rotate(0deg)`,
                    animation: `orbit 10s linear infinite`,
                    animationDelay: tech.delay,
                  }}
                >
                  <tech.icon className="w-6 h-6 text-primary-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
  <style jsx>{`
  @keyframes orbit {
    0% { transform: rotate(0deg) translateX(-180px) rotate(0deg); }
    100% { transform: rotate(360deg) translateX(-180px) rotate(-360deg); }
  }
`}</style>
    </section>
  )
}
