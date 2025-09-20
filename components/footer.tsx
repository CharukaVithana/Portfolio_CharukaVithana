import { Linkedin, Github, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#awards", label: "Awards" },
    { href: "#contact", label: "Contact" },
  ]

  const socialLinks = [
    {
      href: "https://linkedin.com/in/charuka-vithana-87467a277",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/CharukaVithana",
      icon: Github,
      label: "GitHub",
    },
    {
      href: "mailto:clvithana2001@gmail.com",
      icon: Mail,
      label: "Email",
    },
  ]

  return (
    <footer className="bg-brand-900 text-text-100 py-12">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-heading font-bold text-text-100">Charuka.</h3>
              <p className="text-text-400 leading-relaxed">
                Software Engineering undergraduate specializing in UI/UX and web development, creating user-centric
                applications that enhance digital experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-heading font-semibold text-text-100">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                {footerLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-text-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact & Social */}
            <div className="space-y-4">
              <h4 className="text-lg font-heading font-semibold text-text-100">Connect</h4>
              <div className="space-y-2 text-text-400">
                <p>clvithana2001@gmail.com</p>
                <p>+94 768 648 047</p>
                <p>Kalutara, Sri Lanka</p>
              </div>
              <div className="flex gap-4 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-brand-800 hover:bg-primary-500 text-text-400 hover:text-white transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-brand-600 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-text-400 text-sm">© {currentYear} Charuka Vithana. All rights reserved.</p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-text-400 hover:text-primary-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-text-400 hover:text-primary-400 transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
