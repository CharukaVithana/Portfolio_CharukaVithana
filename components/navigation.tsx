"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download, Menu, X } from "lucide-react"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#work", label: "Work" },
    { href: "#projects", label: "Projects" },
    { href: "#awards", label: "Awards" },
    { href: "#contact", label: "Contact" },
  ]

  const handleDownloadCV = () => {
    // Placeholder for CV download functionality
    console.log("Download CV clicked")
  }

  return (
    <nav
      className={`fixed bg-gradient-accent top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-brand-900/95 backdrop-blur-md border-b border-brand-600" : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className="text-2xl font-heading font-bold text-text-100 hover:text-primary-400 transition-colors"
            >
              Charuka.
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-100 hover:text-primary-400 transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownloadCV}
              className="border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-200 bg-transparent"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
            <Button size="sm" className="bg-primary-500 hover:bg-primary-400 text-white transition-all duration-200">
              <a href="#contact">Hire Me</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-text-100 hover:text-primary-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-brand-900/95 backdrop-blur-md border-t border-brand-600">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-text-100 hover:text-primary-400 transition-colors duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDownloadCV}
                  className="w-full border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white bg-transparent"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
                <Button size="sm" className="w-full bg-primary-500 hover:bg-primary-400 text-white">
                  <a href="#contact">Hire Me</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
