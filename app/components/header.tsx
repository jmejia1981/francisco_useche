"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Instagram, Mail } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-sm border-b border-gray-800" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-6">
          <motion.div
            className="text-base font-bold text-white cursor-pointer"
            onClick={() => scrollToSection("hero")}
            whileHover={{ scale: 1.05 }}
          >
            Paco
          </motion.div>
          <div className="flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("featured-work")}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Filmography
            </button>
            <div className="flex items-center gap-1">
              <span className="text-gray-300 text-sm font-medium mr-2">Contact</span>
              <a
                href="https://www.instagram.com/thesharpproductions/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors p-1"
              >
                <Instagram size={16} />
              </a>
              <a
                href="mailto:thesharpproductionsllc@gmail.com"
                className="text-gray-300 hover:text-white transition-colors p-1"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </motion.header>
  )
}
