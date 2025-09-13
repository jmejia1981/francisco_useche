"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="relative py-20 bg-black">
      <div ref={ref} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
        >
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/francisco-portrait.jpg"
                alt="Francisco Useche - Assistant Director"
                className="h-full w-full object-cover opacity-65"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">About</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
              <p className="text-base">
                As an Assistant Director with a passion for bringing creative visions to life, I've had the privilege of
                working on high-profile commercials and music videos with some of the industry's most talented artists
                and directors.
              </p>
              <p>
                My experience spans from working with global superstars like Shakira on multiple projects including
                "Epson," "Dekolar," and "Soltera," to collaborating with Hollywood legends like Sylvester Stallone for
                Tecate. I've also worked alongside international icons such as Gisele Bundchen for C6 Bank and Latin
                music stars including Karol G, Marc Anthony, Luis Fonsi, and Gloria Estefan.
              </p>
              <p>
                What drives me is the diversity of each project - from Formula 1 driver Lando Norris for Ralph Lauren to
                emerging artists like Elena Rose. I bring the same level of dedication and attention to detail whether
                I'm working with major brands like Cheez-It and Baptist Hospital or collaborating with production
                companies across Miami, Los Angeles, and internationally.
              </p>
              <p>
                My bilingual capabilities and multicultural perspective allow me to seamlessly navigate between English
                and Spanish-speaking productions, making me a valuable asset for projects that span diverse markets and
                audiences.
              </p>
            </div>
            <div className="pt-4">
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full">Assistant Director</span>
                <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full">Production Management</span>
                <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full">Bilingual</span>
                <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full">International Productions</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
