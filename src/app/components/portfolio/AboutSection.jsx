'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  Grid,
} from '@mui/material';
import { Code2, Palette, Zap, Users } from 'lucide-react';

export default function AboutSection() {
const skills = [
  { category: 'Frontend', items: ['React.js', 'Next.js', 'JavaScript', 'HTML5', 'CSS3'] },
  { category: 'Styling', items: ['Tailwind CSS', 'Material-UI', 'Styled Components', 'Bootstrap'] },
  { category: 'Tools', items: ['Wordpress', 'Webpack', 'Figma', 'VS Code'] },
  { category: 'Other', items: ['Java', 'Node.js', 'REST APIs', 'Responsive Design'] }
];

  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code that follows industry best practices.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful, intuitive user interfaces with attention to detail and user experience.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, accessibility, and seamless user interactions.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with teams to deliver projects on time and exceed expectations.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* About Me Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">About Me</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate front-end developer with 2 years of experience creating modern, 
            responsive web applications. I love turning complex problems into simple, beautiful designs 
            and bringing innovative ideas to life through code.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card
                key={index}
                sx={{
                  boxShadow: 3,
                  transition: 'all 0.3s',
                  '&:hover': { boxShadow: 6 },
                  borderRadius: 2
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      mx: 'auto',
                      mb: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 4,
                      background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                      transform: 'scale(1)',
                      transition: 'transform 0.3s',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      }
                    }}
                  >
                    <Icon size={32} color="#fff" />
                  </Box>
                  <Typography variant="h6" fontWeight="bold" color="text.primary" gutterBottom>
                    {highlight.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {highlight.description}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </motion.div>

        {/* Skills Section */}
          <div className="flex justify-center px-4">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    viewport={{ once: true }}
    className="bg-slate-50 rounded-3xl p-8 lg:p-12 max-w-7xl w-full"
  >
    <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
      Skills & Technologies
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
      {skills.map((skillGroup, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between h-full"
        >
          <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
            <span className="inline-block w-2 h-2 rounded-full mr-2 bg-gradient-to-r from-blue-500 to-purple-500" />
            {skillGroup.category}
          </h4>
          <div className="flex flex-wrap gap-2 mt-auto">
            {skillGroup.items.map((item, i) => (
              <span
                key={i}
                className="px-3 py-1 border border-slate-200 text-sm rounded-full text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </motion.div>
</div>



        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">Experience</h3>
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
            <div className="space-y-8 pl-12">
              {[
                // {
                //   title: 'Senior Front-End Developer',
                //   company: 'Tech Solutions Inc.',
                //   duration: '2023 - Present',
                //   color: 'from-blue-500 to-purple-500',
                //   description: 'Leading front-end development for enterprise web applications using React.js, Next.js, and modern CSS frameworks. Collaborating with design teams to create pixel-perfect, responsive user interfaces.'
                // },
                {
                  title: 'Front-End Developer',
                  company: 'National Housing Authority',
                  duration: '2023 - 2025',
                  color: 'from-purple-500 to-pink-500',
                  description: 'Developed responsive websites and web applications for various clients using React.js, Tailwind CSS, and Material-UI. Collaborating with design teams to create pixel-perfect, responsive user interfaces.'
                },
                // {
                //   title: 'Junior Web Developer',
                //   company: 'StartUp Solutions',
                //   duration: '2020 - 2021',
                //   color: 'from-pink-500 to-red-500',
                //   description: 'Started career building landing pages and small web applications. Gained expertise in HTML, CSS, JavaScript, and began learning React.js framework.'
                // },
              ].map((exp, idx) => (
                <div key={idx} className="relative flex items-start gap-6">
                  <div className={`w-8 h-8 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center`}>
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-900">{exp.title}</h4>
                    <p className="text-slate-600 mb-2">{exp.company} • {exp.duration}</p>
                    <p className="text-slate-700">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
