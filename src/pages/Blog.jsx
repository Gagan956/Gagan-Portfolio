import React from "react";
import { motion } from "framer-motion";
import "./blog.css";

export default function Journey() {
  const journeyPosts = [
    {
      id: 1,
      title: "My Journey After Graduation",
      text: `After completing my B.Tech in 2022, I decided to prepare for government exams and gave my best effort. 
      Many students around me chose higher studies like M.Tech or MBA, but I wanted to challenge myself differently 
      — by preparing for competitive exams such as UPSC and State Civil Services. I believed it was an opportunity 
      to contribute to society and test my potential at a national level.`,
    },
    {
      id: 2,
      title: "My Time in Mukherjee Nagar, Delhi",
      text: `I went to Delhi’s Mukherjee Nagar, a well-known hub for Staff Selection Commission (SSC) aspirants, 
      where I spent months preparing with full dedication. Surrounded by thousands of serious candidates, 
      I experienced a highly disciplined and motivating environment. I studied long hours daily, built strong 
      analytical and writing skills, and learned how to stay focused under intense competition.`,
    },
    {
      id: 3,
      title: "Why I Couldn’t Qualify",
      text: `I made two serious attempts and successfully cleared the preliminary stage, but unfortunately, 
      I couldn’t clear the mains exam. The cutoff for the general category was significantly higher compared 
      to others, which made it more challenging to qualify. I realized that cracking such exams requires 
      not only knowledge but also years of persistence and financial commitment. By mid-2024, I accepted 
      that it was time to move forward and return to my core interest — software development.`,
    },
    {
      id: 4,
      title: "How I Used the Gap Productively",
      text: `During this period, I didn’t stop learning. To strengthen my technical foundation, 
      I completed a Full-Stack Development course on Udemy and gained hands-on experience 
      through an internship at House of MarkTech, where I worked on real-world projects using 
      modern web technologies and end-to-end application development. 
      I built modern full-stack projects using React, Node.js, Express, and MongoDB — focusing on 
      clean architecture, scalable APIs, and responsive UI design. 
      Alongside development, I regularly solved data structure and algorithm problems to sharpen my 
      problem-solving and logical thinking skills. 
      This helped me transition smoothly back into the tech field with strong practical and analytical abilities.`,
    },
    {
      id: 5,
      title: "What I Learned from the Journey",
      text: `While preparing for government exams, I developed several transferable skills that now help me in the field of software development. 
      I learned to manage my time effectively, stay disciplined, and work consistently toward long-term goals. 
      The preparation also sharpened my analytical and problem-solving abilities. 
      Most importantly, I built resilience and the habit of pushing myself to meet deadlines — if I had to learn something within a fixed time, 
      I was willing to work late into the night to achieve it. 
      This persistence and focus now help me tackle complex technical challenges in my software career.`,
    },
    {
      id: 6,
      title: "Moving Forward with Purpose",
      text: `That phase of my life shaped me into a more determined and resilient individual. 
      It taught me that failure is not an end but a redirection toward something better. 
      Today, I’m fully focused on my journey as a software developer — passionate about 
      building scalable, efficient applications and continuously improving my craft. 
      My experience in both preparation and programming reminds me that dedication 
      always pays off in the long run.`,
    },
  ];

  return (
    <motion.section
      className="blog-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="blog-title"
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        🌱 My Career Gap Journey
      </motion.h2>

      <p className="blog-sub">
        Here’s how I used my career gap between December 2022 and August 2024 to
        grow personally and professionally.
      </p>

      {/* === SECTION 1 === */}
      <motion.h3
        className="text-xl font-semibold text-teal-400 mt-8 mb-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🎯 Why I Took a Gap
      </motion.h3>
      <div className="blog-grid">
        {journeyPosts.slice(0, 3).map((post, idx) => (
          <motion.div
            key={post.id}
            className="blog-post"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 20px rgba(255,255,255,0.1)",
            }}
          >
            <h3 className="post-title">{post.title}</h3>
            <p className="post-text">{post.text}</p>
          </motion.div>
        ))}
      </div>

      {/* === SECTION 2 === */}
      <motion.h3
        className="text-xl font-semibold text-teal-400 mt-10 mb-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        💻 Back to Core: Development & Internship
      </motion.h3>
      <div className="blog-grid">
        {journeyPosts.slice(3).map((post, idx) => (
          <motion.div
            key={post.id}
            className="blog-post"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 20px rgba(255,255,255,0.1)",
            }}
          >
            <h3 className="post-title">{post.title}</h3>
            <p className="post-text">{post.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
