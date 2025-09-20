"use client"

import type React from "react"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Linkedin, Github, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "clvithana2001@gmail.com",
      href: "mailto:clvithana2001@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+94 768 648 047",
      href: "tel:+94768648047",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kalutara, Sri Lanka",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/charuka-vithana-87467a277",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/CharukaVithana",
    },
  ]

  return (
    <section id="contact" className="section-padding bg-brand-100 text-text-100">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-primary-500/20 text-primary-400 border-primary-500/30 px-4 py-2">Get In Touch</Badge>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text-100">Let's Work Together</h2>
            <p className="text-lg text-text-400 max-w-2xl mx-auto">
              Ready to start your next project? I'd love to hear about your ideas and discuss how I can help bring them
              to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-heading font-semibold text-text-100 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 p-4 rounded-xl bg-brand-800 hover:bg-brand-600 transition-colors group"
                    >
                      <div className="p-3 rounded-lg bg-primary-500/20 group-hover:bg-primary-500/30 transition-colors">
                        <info.icon className="w-5 h-5 text-primary-400" />
                      </div>
                      <div>
                        <p className="text-text-400 text-sm">{info.label}</p>
                        <p className="text-text-100 font-medium">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-heading font-semibold text-text-100 mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-brand-800 hover:bg-primary-500 text-text-400 hover:text-white transition-all duration-200"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <Card className="border-0 bg-gradient-accent text-white">
                <CardContent className="p-6">
                  <h4 className="font-heading font-semibold mb-2">Currently Available</h4>
                  <p className="text-white/90 text-sm">
                    I'm open to new opportunities and exciting projects. Let's discuss how we can work together!
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="border-0 bg-brand-800 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-semibold text-text-100 mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-text-400 text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-brand-600 border-brand-600 text-text-100 placeholder:text-text-400 focus:border-primary-500"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-text-400 text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-brand-600 border-brand-600 text-text-100 placeholder:text-text-400 focus:border-primary-500"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-text-400 text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-brand-600 border-brand-600 text-text-100 placeholder:text-text-400 focus:border-primary-500 resize-none"
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary-500 hover:bg-primary-400 text-white font-semibold group"
                  >
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
