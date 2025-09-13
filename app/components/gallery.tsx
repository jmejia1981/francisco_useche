"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const projects = [
    {
      src: "/project1.jpg",
      alt: "Tecate - Sylvester Stallone Commercial",
      title: "TECATE - SYLVESTER STALLONE",
      director: "ARMANDO BOREBO",
      productionCompany: "LUCION",
      type: "COMMERCIAL",
      link: "https://youtu.be/-80AcapFaUg?si=n3Knnix3icBHJ9P8",
    },
    {
      src: "/project2.jpg",
      alt: "Baptist Hospital Commercial",
      title: "BAPTIST HOSPITAL",
      director: "MICHAEL FUETER",
      productionCompany: "VIRGEN FILMS",
      type: "COMMERCIAL",
      link: "https://www.youtube.com/watch?v=5dhVogj-2zU",
    },
    {
      src: "/project3.jpg",
      alt: "Cheez-It Commercial",
      title: "CHEEZ-IT",
      director: "FABIO IASTREBNER",
      productionCompany: "BONSAI3",
      type: "COMMERCIAL",
      link: "https://www.youtube.com/watch?v=tXRfwZVh4nk",
    },
    {
      src: "/project4.jpg",
      alt: "Bon Bon Bum - Miami F.C. Commercial",
      title: "BON BON BUM - MIAMI F.C.",
      director: "BRENT CAMPANELLI",
      productionCompany: "NEIGBORS",
      type: "COMMERCIAL",
      link: "#",
    },
    {
      src: "/project5.jpg",
      alt: "C6 Bank - Gisele Bundchen Commercial",
      title: "C6 BANK - GISELE BUNDCHEN",
      director: "JACOB SUTTON",
      productionCompany: "ART PARTNER PRODUCTION",
      type: "COMMERCIAL",
      link: "https://www.youtube.com/watch?v=3bcW5npohTM&t=3s",
    },
    {
      src: "/project6.jpg",
      alt: "Epson - Shakira Commercial",
      title: "EPSON - SHAKIRA",
      director: "ROI RICCI",
      productionCompany: "REBOLUCION",
      type: "COMMERCIAL",
      link: "https://www.youtube.com/watch?v=OCTEg7n0pNY",
    },
    {
      src: "/project7.jpg",
      alt: "Dekolar - Shakira Commercial",
      title: "DEKOLAR - SHAKIRA",
      director: "ROI RICCI",
      productionCompany: "REBOLUCION",
      type: "COMMERCIAL",
      link: "https://www.youtube.com/watch?v=ry3y-6WBMcY",
    },
    {
      src: "/project8.jpg",
      alt: "Ralph Lauren - Lando Norris Commercial",
      title: "RALPH LAUREN - LANDO NORRIS",
      director: "HENRY KORNAROS",
      productionCompany: "BRICKHED",
      type: "COMMERCIAL",
      link: "https://www.youtube.com/watch?v=M1a_HVtDTyE",
    },
    {
      src: "/project9.jpg",
      alt: "Latina Foreva - Karol G Music Video",
      title: "LATINA FOREVA - KAROL G",
      director: "PEDRO ARTOLA",
      productionCompany: "WE OWN THE CITY",
      type: "MUSIC VIDEO",
      link: "https://www.youtube.com/watch?v=BgMU9Vuj17Y",
    },
    {
      src: "/project10.jpg",
      alt: "Raices - Gloria Estefan Music Video",
      title: "RAICES - GLORIA ESTEFAN",
      director: "GLORIA ESTEFAN",
      productionCompany: "EAT MY SHORTS",
      type: "MUSIC VIDEO",
      link: "https://www.youtube.com/watch?v=a8m4fpLE2Hc&list=RDa8m4fpLE2Hc&start_radio=1",
    },
    {
      src: "/project11.jpg",
      alt: "Cartera China - Elena Rose Music Video",
      title: "CARTERA CHINA - ELENA ROSE",
      director: "BERNARDO GARCIA",
      productionCompany: "NOVEMBER CONTENT",
      type: "MUSIC VIDEO",
      link: "https://www.youtube.com/watch?v=bUnzGOnpUMM&list=RDbUnzGOnpUMM&start_radio=1",
    },
    {
      src: "/project12.jpg",
      alt: "Mala - Marc Anthony Music Video",
      title: "MALA - MARC ANTHONY",
      director: "CARLOS PEREZ",
      productionCompany: "ELASTIC PEOPLE",
      type: "MUSIC VIDEO",
      link: "https://www.youtube.com/watch?v=kjqMFOcRpuI",
    },
    {
      src: "/project13.jpg",
      alt: "Roma - Luis Fonsi, Laura Pausini Music Video",
      title: "ROMA - LUIS FONSI, LAURA PAUSINI",
      director: "CARLOS PEREZ",
      productionCompany: "ELASTIC PEOPLE",
      type: "MUSIC VIDEO",
      link: "https://www.youtube.com/watch?v=NOebfEFJW6Y&list=RDNOebfEFJW6Y&start_radio=1",
    },
    {
      src: "/project14.jpg",
      alt: "Soltera - Shakira Music Video",
      title: "SOLTERA - SHAKIRA",
      director: "JAUME DE LAIGUANA",
      productionCompany: "LE PRODUCERS INC",
      type: "MUSIC VIDEO",
      link: "https://www.youtube.com/watch?v=oBofuVYDoG4&list=RDoBofuVYDoG4&start_radio=1",
    },
  ]

  // Group projects by type
  const commercials = projects.filter((project) => project.type === "COMMERCIAL")
  const musicVideos = projects.filter((project) => project.type === "MUSIC VIDEO")
  const others = projects.filter((project) => !["COMMERCIAL", "MUSIC VIDEO"].includes(project.type))

  const renderProjectGrid = (projectList: typeof projects, startIndex: number) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectList.map((project, index) => (
        <motion.div
          key={project.title}
          className="group relative overflow-hidden rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: (startIndex + index) * 0.1 }}
        >
          {project.link !== "#" ? (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.src || "/placeholder.svg"}
                  alt={project.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="text-white">
                  <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-300 mb-1">Director: {project.director}</p>
                  <p className="text-xs text-gray-400 mb-1">{project.productionCompany}</p>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">{project.type}</p>
                </div>
              </div>
            </a>
          ) : (
            <div className="block">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.src || "/placeholder.svg"}
                  alt={project.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="text-white">
                  <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-300 mb-1">Director: {project.director}</p>
                  <p className="text-xs text-gray-400 mb-1">{project.productionCompany}</p>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">{project.type}</p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  )

  return (
    <section className="relative py-20">
      <div ref={ref} className="container mx-auto px-4">
        <motion.h2
          className="mb-16 text-center text-3xl font-bold tracking-tighter sm:text-4xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Filmography
        </motion.h2>

        {/* Commercials Section */}
        <div className="mb-16">
          <motion.h3
            className="mb-8 text-left text-2xl font-bold tracking-tighter text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Commercials
          </motion.h3>
          {renderProjectGrid(commercials, 0)}
        </div>

        {/* Music Videos Section */}
        <div>
          <motion.h3
            className="mb-8 text-left text-2xl font-bold tracking-tighter text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Music Videos
          </motion.h3>
          {renderProjectGrid(musicVideos, commercials.length)}
        </div>
      </div>
    </section>
  )
}
