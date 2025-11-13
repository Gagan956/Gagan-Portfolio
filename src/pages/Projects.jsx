import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: '🩺 Medimeet',
    desc: 'A full-stack doctor appointment platform with Next.js, Shadcn UI, scheduling, secure authentication, and Stripe integration.',
    ss: '/Medimeet.png',
    tech: ['Nextjs', 'Typescript', 'Stripe', 'PostgreSQL', 'taliwindcss', 'Vonage'],
    live: 'https://medimeet-black.vercel.app/',
    code: 'https://github.com/Gagan956/Medimeet'
  },
  {
  title: ' Ecommerce SnapShop shopping site',
  desc: 'Snapshap is a full-stack e-commerce platform that lets users browse products, add them to a cart, and place secure orders with integrated payments.',
  ss: '/Snapshop.png',
  tech: ['React', 'Nodejs', 'Express', 'cloudinary', 'MongoDB', 'Stripe' ,'Nodemailer'],
  live: 'https://snap-shop-47s1.vercel.app/',
  code: 'https://github.com/Gagan956/SnapShop'
  },
  {
    title: 'BookIt',
    desc: 'BookIt is a full-stack MERN application built with TypeScript and Next.js, enabling users to explore and book vacation experiences, hotels, and tourist activities through a clean and seamless booking flow.',
    ss: '/BookIt.png',
    tech: ['Nextjs', 'Redux', 'Tailwindcss', 'Typescript', 'Express','MongoDB' ,'rate-limiting'],
    live: 'https://book-it-pearl-two.vercel.app/',
    code: 'https://github.com/Gagan956/BooKIt'
  },
  {
  title: '💼 Portfolio Website',
  desc: 'A modern and responsive portfolio built with React , Nextjs, , TaliwindcssTypescript and Framer Motion, showcasing projects, skills, and achievements with smooth animations and interactive UI.',
  ss: '/portfolio.jpg',
  tech: ['React', 'Nextjs', 'Tailwind CSS' ,'Typescript'],
  live: 'https://gagan-portfolio-beige.vercel.app/',
  code: 'https://github.com/Gagan956/Gagan_Portfolio.git'
  },
  {
    title: '💬SmartNotes',
    desc: 'SmartNotes is a full-stack note-taking web app that lets users create, edit, and organize notes with titles, content, and optional photos — a simple, fast, and smart digital notepad for managing ideas efficiently',
    ss: '/SmartNotes.png',
    tech: ['React', 'Redux', 'Taawindcss', 'Nodejs', 'Express', 'MongoDB'],
    live: 'https://smart-notes-delta-sand.vercel.app/',
    code: 'https://github.com/Gagan956/SmartNotes'
  },
  {
    title: '📊 Hireme',
    desc: 'A frontend job portal built with Next.js and TypeScript, featuring listings, applications, and a responsive UI.',
    ss: '/Hireme.png',
    tech: ['Reactjs', 'Nextjs', 'Taliwindcss'],
    live: 'https://hireme-lemon.vercel.app/',
    code: 'https://github.com/Gagan956/Hireme'
  },
  {
    title: '🧬 Microservice based Social Media API',
    desc: 'A scalable social media backend built with a microservices architecture, featuring user authentication, post management, follow system, and real-time notifications.',
    ss: '/API.png',
    tech: ['Nodejs', 'Express', 'MongoDB', 'Docker', 'RabbitMQ', 'Redis', 'rate-limiting'],
    live: '#',
    code: 'https://github.com/Gagan956/Social-Media-App'
  },
   {
    title: '🧬 Taskify-Task management app',
    desc: 'Task Manager is a lightweight app that fetches tasks from Airtable, caches them in Redis for faster performance, and displays them in a clean, organized table with real-time sync',
    ss: '/Todo.png',
    tech: ['Reactjs','Nodejs', 'Express', 'MongoDB', 'Typescript', 'Airtable', 'Redis'],
    live: 'https://task-mauve-six.vercel.app/',
    code: 'https://github.com/Gagan956/task'
  },
   {
    title: 'Foodhub',
    desc: 'A food ordering platform with secure login, cart, menu browsing, and real-time order updates.',
    ss: '/FoodHub.png',
    tech: ['Reactjs','Nodejs', 'Express', 'MongoDB', 'Typescript'],
    live: '#',
    code: '#'
  }
]

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my major works — blending research, AI innovation.
        </p>

        <div className="projects-grid" style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,255,255,0.08)'
              }}
            >
              <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden' }}>
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 12
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#bbb', marginBottom: 8, lineHeight: 1.6 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,255,255,0.05)',
                        border: '1px solid rgba(0,255,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#aaf'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#0ea5e9',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(0,255,255,0.1)',
                      textDecoration: 'none'
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                      color: '#fff',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: 'none'
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
