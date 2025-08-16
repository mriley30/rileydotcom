'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, FileText } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'michaelriley79@gmail.com',
      link: 'mailto:michaelriley79@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '630-780-8456',
      link: 'tel:+16307808456'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Indianapolis Area',
      link: '#'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-dark-50 dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
            Have a question or want to work together? I'd love to hear from you. 
            Send me a message and I'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-dark-900 dark:text-white">
              Contact Me
            </h3>
            <p className="text-dark-600 dark:text-dark-300 mb-8 leading-relaxed">
              I'm always open to new professional opportunities. If you have a question or just want to say hi, 
              send me an email or connect with me on LinkedIn! I'm very responsive on both, so pick your poison!
            </p>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white dark:hover:bg-dark-700 transition-colors duration-200 group"
                >
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors duration-200">
                    <info.icon size={24} className="text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-900 dark:text-white">
                      {info.title}
                    </h4>
                    <p className="text-dark-600 dark:text-dark-300">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary-50/50 to-dark-100 dark:from-primary-900/20 dark:from-dark-700/20 rounded-xl">
              <h4 className="font-semibold text-dark-900 dark:text-white mb-2">
                Available for:
              </h4>
              <ul className="text-dark-600 dark:text-dark-300 space-y-1 text-sm">
                <li>• Freelance projects</li>
                <li>• Full-time opportunities</li>
              </ul>
            </div>
          </motion.div>

          {/* Resume Download Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center items-center p-8 rounded-xl shadow-md"
          >
            <FileText size={48} className="text-primary-600 dark:text-primary-400 mb-4" />
            <h4 className="font-semibold text-dark-900 dark:text-white mb-4">
              Download My Resume
            </h4>
            <a
              href="https://docs.google.com/document/d/1E3JRM2ecwdi8IwDIn4Qdxh2Oub_a1RlpzCcz3cDCxLg/export?format=pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg shadow hover:bg-primary-700 transition"
            >
              Download
            </a>
            <motion.div className="flex flex-col justify-center items-center p-8 rounded-xl shadow-md w-full h-96">
              <iframe
                src="https://docs.google.com/document/d/1E3JRM2ecwdi8IwDIn4Qdxh2Oub_a1RlpzCcz3cDCxLg/preview"
                className="w-full h-full rounded-xl border-none"
              ></iframe>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}

export default Contact
