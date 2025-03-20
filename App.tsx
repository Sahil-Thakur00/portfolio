import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, Database, Globe, Server, X, ExternalLink } from 'lucide-react';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };

  const projects = [
    {
      image: "https://images.unsplash.com/photo-1600195077077-7c815f540a3d?auto=format&fit=crop&w=800&q=80",
      title: "Virtual Study Room",
      description: "A collaborative platform for students to study together and help each other.",
      tags: ["React", "Node.js", "WebRTC", "Socket.io"],
      gradient: "from-blue-500 to-cyan-500",
      fullDescription: `A comprehensive virtual study room platform that enables students to:
        • Create and join study rooms with video conferencing
        • Real-time collaborative whiteboard
        • Chat functionality for discussions
        • Resource sharing capabilities
        • Timer and break reminders for productive study sessions
        
        Technologies used:
        • Frontend: React.js, WebRTC, Material-UI
        • Backend: Node.js, Express, Socket.io
        • Database: MongoDB
        • Authentication: JWT`,
      features: [
        "Video conferencing",
        "Collaborative whiteboard",
        "Chat system",
        "Resource sharing",
        "Study timer"
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=800&q=80",
      title: "Unit Converter App",
      description: "An Android application for converting various units of measurement.",
      tags: ["Android", "Kotlin", "Jetpack Compose"],
      gradient: "from-purple-500 to-pink-500",
      fullDescription: `A user-friendly Android application that helps users convert between different units of measurement:
        • Support for length, weight, temperature, and more
        • Clean and intuitive interface
        • Offline functionality
        • History of recent conversions
        
        Technologies used:
        • Android Studio
        • Kotlin
        • Jetpack Compose
        • SQLite for local storage`,
      features: [
        "Multiple unit categories",
        "Real-time conversion",
        "Conversion history",
        "Offline support",
        "Material Design UI"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-600 via-purple-600 to-pink-500"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative container mx-auto px-6 py-32"
        >
          <div className="max-w-3xl">
            <motion.span 
              variants={fadeIn}
              className="inline-block px-6 py-2 rounded-full bg-white/10 backdrop-blur-md text-white/90 text-sm mb-6 border border-white/20 shadow-lg shadow-purple-500/20"
            >
              ✨ Welcome to my creative space
            </motion.span>
            <motion.h1 
              variants={fadeIn}
              className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-blue-200 leading-tight"
            >
              Hi, I'm Sahil Thakur
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-xl mb-8 text-white/90 leading-relaxed max-w-2xl font-light"
            >
              Second-year B.Tech student in Computer Science at NIT Hamirpur (2023-present) with a CGPA of 8.13. 
              Passionate about building impactful software solutions and turning ideas into reality through code.
            </motion.p>
            <motion.div 
              variants={fadeIn}
              className="flex flex-wrap gap-4"
            >
              <motion.a 
                href="mailto:stsahilthakur2405@gmail.com"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.95)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-white/90 text-purple-600 rounded-2xl hover:bg-purple-50 transition-all duration-200 shadow-xl shadow-purple-500/20 font-medium"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get in Touch
              </motion.a>
              <div className="flex space-x-4 items-center">
                <motion.a 
                  href="https://github.com/Sahil-Thakur00"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 transition-all duration-200 border border-white/20"
                >
                  <Github className="w-6 h-6 text-white" />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/sahil-thakur-928280291"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: -5, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 transition-all duration-200 border border-white/20"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </motion.a>
              </div>
            </motion.div>
            <motion.div 
              variants={fadeIn}
              className="mt-16 flex items-center gap-4 text-white/80"
            >
              <div className="h-px w-12 bg-white/20"></div>
              <p className="text-sm font-light">Currently seeking internship opportunities</p>
            </motion.div>
          </div>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </header>

      {/* Skills Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-32 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        <div className="container mx-auto px-6">
          <motion.h2 
            variants={fadeIn}
            className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          >
            Skills & Technologies
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Code2, title: "Programming", skills: "Python, Kotlin, JavaScript, C++", color: "from-blue-500 to-cyan-500" },
              { icon: Globe, title: "Web Development", skills: "React, HTML, CSS, Node.js", color: "from-purple-500 to-pink-500" },
              { icon: Database, title: "Databases", skills: "MySQL, MongoDB", color: "from-orange-500 to-red-500" },
              { icon: Server, title: "Tools", skills: "Git, VS Code, Android Studio", color: "from-green-500 to-emerald-500" }
            ].map((skill, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative bg-white rounded-2xl shadow-xl p-8 overflow-hidden border border-gray-100"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${skill.color} bg-opacity-10`}>
                  <skill.icon className={`w-8 h-8 ${skill.color.includes('blue') ? 'text-blue-600' : skill.color.includes('purple') ? 'text-purple-600' : skill.color.includes('orange') ? 'text-orange-600' : 'text-green-600'}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                <p className="text-gray-600">{skill.skills}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-32 bg-gradient-to-b from-gray-100 to-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        <div className="container mx-auto px-6">
          <motion.h2 
            variants={fadeIn}
            className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          >
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => setSelectedProject(project)}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                          index === 0 
                            ? 'bg-blue-100 text-blue-600' 
                            : 'bg-purple-100 text-purple-600'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants}
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="relative h-72">
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.gradient} opacity-10`}></div>
                <img 
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="prose prose-lg max-w-none">
                  <p className="whitespace-pre-line">{selectedProject.fullDescription}</p>
                  <h4 className="text-xl font-semibold mt-6 mb-4">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 flex justify-end">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View Project
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-32 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        <div className="container mx-auto px-6">
          <motion.h2 
            variants={fadeIn}
            className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            variants={scaleIn}
            className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-12 border border-gray-100"
          >
            <p className="text-center text-gray-600 text-lg mb-10">
              I'm currently looking for internship opportunities! Feel free to reach out if you'd like to connect.
            </p>
            <div className="flex flex-col items-center space-y-6">
              <motion.a 
                href="mailto:stsahilthakur2405@gmail.com"
                whileHover={{ scale: 1.05, backgroundColor: "#4338ca" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 transition-all duration-200 shadow-lg shadow-indigo-500/20 font-medium text-lg w-full justify-center"
              >
                <Mail className="w-6 h-6 mr-3" />
                Send Email
              </motion.a>
              <div className="flex space-x-6">
                <motion.a 
                  href="https://github.com/Sahil-Thakur00"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-8 h-8" />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/sahil-thakur-928280291"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-8 h-8" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/90 font-light">© 2024 Sahil Thakur. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;