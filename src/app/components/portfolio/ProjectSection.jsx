"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Button,
  Stack,
  Box,
  Grid,
} from '@mui/material';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Project } from '@/app/entities/Project';

export default function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    const projectData = await Project.list();
    setProjects(projectData);
  };

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.tech_stack?.includes(filter));

  const filters = ['all', 'React.js', 'Next.js', 'Tailwind CSS', 'Material-UI'];

  return (
    <Box component="section" sx={{ py: 10, backgroundColor: '#f8fafc' }}>
      <Box className="container" sx={{ px: 3, mx: 'auto', maxWidth: '1200px' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
            Featured Projects
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: '700px', mx: 'auto' }}>
            A showcase of my recent work and the technologies I've used to bring ideas to life.
          </Typography>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Stack direction="row" spacing={2} justifyContent="center" mb={6} flexWrap="wrap">
            {filters.map((option) => (
              <Button
                key={option}
                variant={filter === option ? 'contained' : 'outlined'}
                onClick={() => setFilter(option)}
                sx={filter === option ? {
                  background: 'linear-gradient(to right, #2563eb, #7c3aed)',
                  color: 'white',
                  border: 0,
                } : {
                  borderColor: '#cbd5e1',
                  color: '#334155',
                  '&:hover': {
                    backgroundColor: '#f1f5f9',
                  }
                }}
              >
                {option === 'all' ? 'All Projects' : option}
              </Button>
            ))}
          </Stack>
        </motion.div>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {filteredProjects.map((project, index) => (
            <Grid item key={project.id} xs={12} sm={6} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 4 }}>
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image_url || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop'}
                      alt={project.title}
                      sx={{ objectFit: 'cover', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}
                    />
                  </Box>

                  <CardContent>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {project.description}
                    </Typography>

                    <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', mb: 2 }}>
                      {project.tech_stack?.slice(0, 3).map((tech, techIndex) => (
                        <Chip key={techIndex} label={tech} size="small" />
                      ))}
                      {project.tech_stack?.length > 3 && (
                        <Chip label={`+${project.tech_stack.length - 3} more`} size="small" />
                      )}
                    </Stack>

                    <Stack direction="row" spacing={1}>
                      {project.live_url && (
                        <Button
                          variant="contained"
                          size="small"
                          fullWidth
                          sx={{ background: 'linear-gradient(to right, #2563eb, #7c3aed)', color: 'white' }}
                          href={project.live_url}
                          target="_blank"
                          startIcon={<ExternalLink size={16} />}
                        >
                          Live Demo
                        </Button>
                      )}
                      {project.github_url && (
                        <Button
                          variant="outlined"
                          size="small"
                          fullWidth
                          href={project.github_url}
                          target="_blank"
                          startIcon={<Github size={16} />}
                        >
                          GitHub
                        </Button>
                      )}
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Typography variant="body1" color="text.secondary">
              No projects found for the selected filter.
            </Typography>
          </motion.div>
        )}
      </Box>
    </Box>
  );
}
