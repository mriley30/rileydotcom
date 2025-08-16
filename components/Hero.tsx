'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Instagram } from 'lucide-react'

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-white to-primary-50/30 dark:from-black dark:via-dark-900 dark:to-black" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Hello!</span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-dark-600 dark:text-dark-300 mb-8">
            Software Engineer • Chicago Sports Fan/Masochist • Giant Nerd
          </p>
          <p className="text-lg sm:text-xl text-dark-500 dark:text-dark-400 max-w-2xl mx-auto leading-relaxed">
            My name is Mike and I am a focused and driven software engineer with expertise in backend Web API development in C#, .NET MVC, 
            and .NET Entity Framework. I relentlessly pursue knowledge of new technologies to deliver the best 
            products to customers and foster workplace growth and understanding. A lot of the contents of this site, especially the professional bits, are derived from my resume. If you'd like to skip to that, it is
            available for download at the bottom of the page!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToAbout}
            className="btn-primary text-lg px-8 py-3"
          >
            Learn More About Me
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToProjects}
            className="btn-secondary text-lg px-8 py-3"
          >
            View My Work
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center space-x-6 mb-12"
        >
                                <motion.a
            href="https://github.com/mriley.30"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            className="p-3 bg-white dark:bg-black rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-dark-700 dark:text-white hover:text-primary-500 dark:hover:text-primary-400"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/mike-riley-56b045172/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            className="p-3 bg-white dark:bg-black rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-dark-700 dark:text-white hover:text-primary-500 dark:hover:text-primary-400"
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            href="https://instagram.com/mriley30"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            className="p-3 bg-white dark:bg-black rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-dark-700 dark:text-white hover:text-primary-500 dark:hover:text-primary-400"
          >
            <Instagram size={24} />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={scrollToAbout}
          >
            <ArrowDown size={24} className="text-dark-400 dark:text-dark-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
