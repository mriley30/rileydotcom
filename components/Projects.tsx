'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Globe } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Multi-Cloud VM Deployment Solution',
      description: 'Implemented a solution that seamlessly deployed Virtual Machines in both Azure and Google Cloud Platform, used by health agencies across multiple states to securely share sensitive information.',
      technologies: ['C#', '.NET Core', 'Azure', 'Google Cloud Platform', 'Docker'],
      image: '/api/placeholder/400/250',
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Healthcare Information Tracking System',
      description: 'Developed the backend of an application to track medical information for immigrants, allowing medical professionals to track important details and health appointments for those entering the United States.',
      technologies: ['C#', 'ASP.NET Core', 'Entity Framework', 'SQL Server', 'RESTful APIs'],
      image: '/api/placeholder/400/250',
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'FAFSA Applicant Tracking System',
      description: 'Worked with the State of Colorado to develop an application to track FAFSA applicants, streamlining the financial aid application process.',
      technologies: ['C#', '.NET Core', 'Entity Framework', 'SQL Server', 'Azure'],
      image: '/api/placeholder/400/250',
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'Cloud-to-Cloud Backup System',
      description: 'Developed the public-facing Web API for the rewrite of the Cloud-to-Cloud Backup System, written in C# ASP.NET Core 3.1, part of an Azure Cloud-based data security solution.',
      technologies: ['C#', 'ASP.NET Core', 'gRPC Microservices', 'Azure', 'Docker'],
      image: '/api/placeholder/400/250',
      github: '#',
      live: '#',
      featured: false
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="projects" className="section-padding bg-dark-50 dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
            Here are some of the professional projects I've worked on. At the bottom of this section, you'll find a button
            to take you to my personal GitHub, where you can see my personal repsitories for whatever I'm tinkering with (including this one!)
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className={`card group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                project.featured ? 'ring-2 ring-primary-500' : ''
              }`}
            >
              {project.featured && (
                <div className="absolute -top-3 -right-3 bg-primary-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                  Featured
                </div>
              )}

              <h3 className="text-xl font-bold mb-3 text-dark-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                {project.title}
              </h3>
              
              <p className="text-dark-600 dark:text-dark-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-dark-100 dark:bg-dark-700 text-dark-700 dark:text-dark-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Button placeholders for future use */}
              <div className="flex gap-3">
                {/* Code button - uncomment when GitHub links are available */}
                {/* <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 btn-secondary text-sm"
                >
                  <Github size={16} />
                  Code
                </motion.a> */}
                
                {/* Live Demo button - uncomment when demo links are available */}
                {/* <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 btn-primary text-sm"
                >
                  <Globe size={16} />
                  Live Demo
                </motion.a> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
