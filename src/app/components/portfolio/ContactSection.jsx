'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  IconButton,
} from '@mui/material';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send(
        'service_kqs6uts',     // Replace with your EmailJS service ID
        'template_qiz9ytq',    // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        'Un0Kj3nySXFHe3via'      // Replace with your EmailJS public key
      );
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
    }
    setIsSubmitting(false);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Let's Work Together</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                I'm always excited to work on new projects and collaborate with creative teams.
              </p>
            </div>

            {[
              {
                icon: <Mail className="w-6 h-6 text-blue-400" />,
                label: 'Email',
                value: 'weellandrade31@gmail.com'
              },
              {
                icon: <Phone className="w-6 h-6 text-green-400" />,
                label: 'Phone',
                value: '09763030348'
              },
              {
                icon: <MapPin className="w-6 h-6 text-purple-400" />,
                label: 'Location',
                value: 'Cainta, Rizal'
              }
            ].map(({ icon, label, value }, idx) => (
              <div key={idx} className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5">
                  {icon}
                </div>
                <div>
                  <p className="font-medium text-white">{label}</p>
                  <p className="text-slate-400">{value}</p>
                </div>
              </div>
            ))}

          <div className="flex gap-4 pt-6">
  {[
    {
      icon: Github,
      url: 'https://github.com/weelly31' // ← replace with your GitHub link
    },
    {
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/wellrose-andrade-5a4919345'
    }
  ].map(({ icon: Icon, url }, idx) => (
    <a
      key={idx}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconButton
        sx={{
          width: '48px',
          height: '48px',
          color: '#94a3b8',
          backgroundColor: '#1e293b',
          border: '1px solid #334155',
          '&:hover': {
            backgroundColor: '#334155',
            color: 'white'
          }
        }}
      >
        <Icon className="w-5 h-5" />
      </IconButton>
    </a>
  ))}
</div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card
              sx={{
                backgroundColor: 'rgba(51, 65, 85, 0.3)',
                border: '1px solid #334155',
                backdropFilter: 'blur(10px)'
              }}
            >
              <CardContent sx={{ p: 4 }}>
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-green-400" />
                    </div>
                    <Typography variant="h6" className="text-white mb-2">
                      Message Sent!
                    </Typography>
                    <p className="text-slate-400">Thank you for your message. I'll get back to you soon!</p>
                    <Button
                      variant="outlined"
                      sx={{
                        mt: 2,
                        color: '#cbd5e1',
                        borderColor: '#475569',
                        '&:hover': {
                          backgroundColor: '#334155',
                          borderColor: '#64748b'
                        }
                      }}
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <TextField
                      fullWidth
                      label="Your Name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      InputLabelProps={{ style: { color: '#cbd5e1' } }}
                      sx={{
                        input: { color: 'white' },
                        label: { color: '#94a3b8' },
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': { borderColor: '#334155' },
                          '&:hover fieldset': { borderColor: '#64748b' }
                        }
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Email Address"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      InputLabelProps={{ style: { color: '#cbd5e1' } }}
                      sx={{
                        input: { color: 'white' },
                        label: { color: '#94a3b8' },
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': { borderColor: '#334155' },
                          '&:hover fieldset': { borderColor: '#64748b' }
                        }
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Your Message"
                      multiline
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                      InputLabelProps={{ style: { color: '#cbd5e1' } }}
                      sx={{
                        textarea: { color: 'white' },
                        label: { color: '#94a3b8' },
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': { borderColor: '#334155' },
                          '&:hover fieldset': { borderColor: '#64748b' }
                        }
                      }}
                    />
                    <Button
                      fullWidth
                      type="submit"
                      disabled={isSubmitting}
                      startIcon={!isSubmitting && <Send />}
                      variant="contained"
                      sx={{
                        height: '48px',
                        textTransform: 'none',
                        fontWeight: 600,
                        background: 'linear-gradient(to right, #2563eb, #7c3aed)',
                        '&:hover': {
                          background: 'linear-gradient(to right, #1e40af, #6d28d9)'
                        }
                      }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
