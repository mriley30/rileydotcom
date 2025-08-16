'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Globe, Zap } from 'lucide-react'

const About = () => {
  const skills = [
    { name: 'Backend Development', icon: Code, description: 'C#, .NET Core, ASP.NET, Entity Framework' },
    { name: 'Cloud & DevOps', icon: Globe, description: 'Azure, Google Cloud Platform, Docker, Kubernetes' },
    { name: 'API Development', icon: Palette, description: 'RESTful APIs, gRPC Microservices, Web APIs' },
    { name: 'Database & Tools', icon: Zap, description: 'SQL, MySQL, PostgreSQL, GitHub, CI/CD' },
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
    <section id="about" className="section-padding bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
            I'm an engineer, a builder of keyboards, a reader of sci-fi and fantasy, a hopeless addict (not really) to World of Warcraft, a meathead, and a sports lover. 
            Below you'll find a glimpse into my interests along with some cards about my technical expertise. I am a backend expert and I have begun venturing into frontend. I've done work for all sorts of clients,
            from local clients to government contractors. 
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4 text-dark-600 dark:text-dark-300">
              <p>
                My whole life, for better or worse, I have been attached to the hip of video games. It started 
                when my dad got Unreal Tournament (1999) for the PC (don't ask). At the time, I was 5 years old, so luckily
                swearing and foul language was turned off!
              </p>
              <p>
                Still, that started my love of computers and technology. I went from a PC, to a PS2, to an Xbox 360, then back to a PC.
                Over-saturating my life with computers, games, sci-fi, and fantasy, I was sure I wanted to be a game developer. But, 
                I didn't know for sure until I took my first programming class as a Senior in High School. But, at the same time, despite the 
                preivous mentions of all things tech, I was a bit of a meathead. I love sports, and I'll always say that if technology somehow evaporated,
                I would have been a sports performance trainer or football coach. 
              </p>
              <p>
                I wanted to play football in college. However, since I am only 5'11" and not 6'4", I opted away from Notre Dame and enrolled 
                at Rose-Hulman Institute of Technology, where I earned my Bachelor of Science in Software Engineering with a minor in Mathematics, while becoming an 
                All-American defensive lineman. I loved my time at Rose and met so many awesome people through football and my fraternity.

                It's also where I met my now fiancé, who has been my rock and support since 2019.  
              </p>
              <p>
                So, I continue to be a nerd and meathead. I work as a software engineer by day, and do mythic raiding in World of Warcraft by night, while finding a way to
                get to the gym 4 times a week.
              </p>
              <p>
                Below you'll find more of technical and professional details about me
              </p>
            </div>
          </motion.div>

                      <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-dark-100 to-dark-200 dark:from-dark-800 dark:to-dark-700 rounded-2xl p-8"
            >
            <h4 className="text-xl font-semibold mb-4 text-dark-900 dark:text-white">
              The TL;DR
            </h4>
            <div className="space-y-3 text-dark-700 dark:text-dark-200">
              <div className="flex justify-between">
                <span>Experience:</span>
                <span className="font-medium">6+ Years</span>
              </div>
              <div className="flex justify-between">
                <span>Education:</span>
                <span className="font-medium">BS Software Engineering, Minor in Mathematics</span>
              </div>
              <div className="flex justify-between">
                <span>Technologies:</span>
                <span className="font-medium">C#, .NET, Azure, GCP</span>
              </div>
              <div className="flex justify-between">
                <span>Leadership:</span>
                <span className="font-medium">Early Career Mentorship & Guidance</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="card text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors duration-300">
                <skill.icon size={32} className="text-primary-600 dark:text-primary-400" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-dark-900 dark:text-white">
                {skill.name}
              </h4>
              <p className="text-dark-600 dark:text-dark-300 text-sm">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
