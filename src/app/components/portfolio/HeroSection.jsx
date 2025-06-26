'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Github, Linkedin, Mail, Download, Code, Palette } from 'lucide-react';

export default function HeroSection() {
  const techStack = ['React.js', 'Next.js', 'Tailwind CSS', 'JavaScript', 'Material-UI'];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2"
              >
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-emerald-400 font-medium tracking-wide">Available for work</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl lg:text-7xl font-bold text-white leading-tight"
              >
                Wellrose U.
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent block">
                  Andrade
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-3 text-xl text-slate-300"
              >
                <Code className="w-6 h-6 text-blue-400" />
                <span>Front-End Developer</span>
                <Palette className="w-6 h-6 text-purple-400" />
                <span>UI/UX Enthusiast</span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-lg text-slate-400 leading-relaxed max-w-2xl"
              >
                Passionate front-end developer with expertise in crafting exceptional user experiences. 
                I specialize in modern web technologies including React.js, Next.js, and Tailwind CSS, 
                bringing innovative designs to life with clean, efficient code and attention to detail.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="flex flex-wrap gap-2"
              >
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-slate-800/50 text-slate-300 border border-slate-700/50 rounded-full hover:border-slate-600 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<Mail />}
                sx={{
                  background: 'linear-gradient(to right, #2563eb, #7c3aed)',
                  color: 'white',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
                  '&:hover': {
                    background: 'linear-gradient(to right, #1e40af, #6d28d9)',
                  },
                }}
              >
                Get In Touch
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<Download />}
                sx={{
                  color: '#cbd5e1',
                  borderColor: '#475569',
                  '&:hover': { backgroundColor: '#334155', borderColor: '#64748b' },
                }}
              >
                Download CV
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="flex gap-4"
            >
              {[Github, Linkedin, Mail].map((Icon, i) => (
                <IconButton
                  key={i}
                  sx={{
                    width: '48px',
                    height: '48px',
                    color: '#94a3b8',
                    border: '1px solid #475569',
                    '&:hover': {
                      backgroundColor: '#334155',
                      color: 'white',
                    },
                  }}
                >
                  <Icon className="w-5 h-5" />
                </IconButton>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative w-80 h-96 rounded-3xl overflow-hidden border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm">
                <img
                  src="img/picture.png"
                  alt="Wellrose U. Andrade"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
}
