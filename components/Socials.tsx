'use client'

import { motion } from 'framer-motion'
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Mail,
  MessageCircle
} from 'lucide-react'

const Socials = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/mriley30',
      icon: Github,
      description: 'Check out my personal GitHub',
      color: 'hover:text-gray-900 dark:hover:text-white',
      bgColor: 'hover:bg-gray-100 dark:hover:bg-gray-800'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mike-riley-56b045172/',
      icon: Linkedin,
      description: 'Connect with me professionally',
      color: 'hover:text-blue-600',
      bgColor: 'hover:bg-blue-50 dark:hover:bg-blue-900/20'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/mriley.30',
      icon: Instagram,
      description: 'My personal Instagram',
      color: 'hover:text-pink-500',
      bgColor: 'hover:bg-pink-50 dark:hover:bg-pink-900/20'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="section-padding bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-gradient">Socials</span>
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
            Below are my socials. For professional opportunities, please use my LinkedIn.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className={`card group transition-all duration-300 cursor-pointer ${social.bgColor}`}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg bg-dark-100 dark:bg-dark-700 group-hover:scale-110 transition-transform duration-200 ${social.color}`}>
                  <social.icon size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                    {social.name}
                  </h3>
                  <p className="text-dark-600 dark:text-dark-300 text-sm leading-relaxed">
                    {social.description}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Socials
