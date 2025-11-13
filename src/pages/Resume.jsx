import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section className="container" style={{ padding: "60px 0" }}>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "#0b0b0b",
          borderRadius: 16,
          padding: "40px 30px",
          color: "#e5e5e5",
          boxShadow: "0 0 25px rgba(0, 153, 255, 0.1)",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: 28, color: "#00b4ff", marginBottom: 12 }}
        >
          📄 Resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: "#aaa", marginBottom: 25 }}
        >
          A quick glance at my journey.
        </motion.p>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 20,
            background: "rgba(255,255,255,0.03)",
            padding: "24px 20px",
            borderRadius: 12,
          }}
        >
          {/* Left — Company Info */}
          <div style={{ flex: 1, minWidth: 220 }}>
            <h3 style={{ fontSize: 24, color: "#00b4ff", marginBottom: 4 }}>
              👨‍💻 House of Marktech
            </h3>
            <p style={{ marginTop: 6, fontSize: 15, color: "#ccc" }}>
              Full Stack Intern
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              📍 Gurugram, Remote
            </p>
            <p
              style={{
                fontSize: 14,
                color: "#00b4ff",
                fontWeight: 600,
                marginTop: 8,
              }}
            >
              📅 18 March – 20 August 2025
            </p>
          </div>

          {/* Right — Image Section */}
          <motion.a
            href="/certs/certificate.jpg" // 👈 opens certificate on click
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <motion.img
              src="/certs/certificate.jpg" // 👈 image path
              alt="House of Marktech Certificate"
              style={{
                width: 100,
                height: 100,
                borderRadius: 12,
                objectFit: "cover",
                border: "1px solid rgba(255,255,255,0.1)",
                flexShrink: 0,
              }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </motion.a>

          {/* Work Summary */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              background: "linear-gradient(135deg, #00b4ff44, #0b0b0b)",
              borderRadius: 12,
              padding: "14px 20px",
              border: "1px solid rgba(255,255,255,0.1)",
              maxWidth: "100%",
              fontSize: 14,
              lineHeight: 1.6,
              flex: "1 1 100%",
            }}
          >
            <strong style={{ color: "#00b4ff", fontSize: 16 }}>
              Work Summary:
            </strong>
            <ul
              style={{
                marginTop: 8,
                color: "#ccc",
                paddingLeft: 20,
                listStyleType: "disc",
              }}
            >
              <li>
                Worked as a Software Developer in a 4-member team to build two
                full-stack MERN apps — a wedding website and a real estate
                platform — boosting engagement by{" "}
                <span style={{ color: "#00b4ff" }}>40%</span> and improving
                property workflows by{" "}
                <span style={{ color: "#00b4ff" }}>20%</span>.
              </li>
              <li>
                Designed and developed scalable RESTful APIs for user
                management, listings, and RSVP handling, ensuring secure and
                efficient backend operations.
              </li>
              <li>
                Led end-to-end project lifecycles, reducing development time by{" "}
                <span style={{ color: "#00b4ff" }}>30%</span> and acquiring{" "}
                <span style={{ color: "#00b4ff" }}>100+ new users weekly</span>.
              </li>
              <li>
                Improved performance using Vite, code-splitting, and optimized
                backend response times for faster user experience.
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Education Section with Border Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            🎓 Education
          </h4>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              lineHeight: 1.8,
            }}
          >
            <li>
              <strong>B.Tech in Computer Science and Engineering</strong> —
              Delhi Institute of technology Management and Research (MDU
              University), 2018–2022 <br />
              <span style={{ color: "#aaa" }}>GPA: 7.1</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>12th Board — G.B.L Convert School</strong> (CBSE Board,
              2018) <br />
              <span style={{ color: "#aaa" }}>Percentage: 69%</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>10th Board — Senior ShreeRam Model High School</strong>{" "}
              (CBSE Board, 2016)
              <br />
              <span style={{ color: "#aaa" }}>Percentage: 72%</span>
            </li>
          </ul>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            💼 Projects
          </h4>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              lineHeight: 1.8,
            }}
          >
            <li>1️⃣ Microservice-based Cloud Music Player project</li>
            <li>2️⃣ A full-stack doctor appointment platform</li>
            <li>3️⃣ Ecommerce SnapShop shopping site</li>
            <li>
              4️⃣ BookIt- book vacation experiences, hotels, and tourist
              activities
            </li>
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            ⚙️ Skills
          </h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              "HTML",
              "Taliwindcss",
              "JavaScript",
              "Reactjs",
              "Nextjs",
              "Firebase",
              "Typescript",
              "redux",
              "Zustand",
              "Nodejs",
              "Express",
              "MongoDB",
              "PostgreSQL",
              "Redis",
              "Docker",
              "Git",
              "RESTful APIs",
              " RabbitMq",
              "OpenAI API",
              "Problem Solving",
              "Teamwork",
              "Adaptability",
              "Creativity",
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(0,180,255,0.3)",
                }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "6px 12px",
                  borderRadius: 8,
                  fontSize: 13,
                  color: "#ccc",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            marginTop: 40,
          }}
        >
          {[
            { name: "🏆 LeetCode", link: "https://leetcode.com/u/Gagan956/" },
            { name: "💻 GitHub", link: "https://github.com/gagan956" },
            {
              name: "💼 LinkedIn",
              link: "https://www.linkedin.com/in/gagan9560/",
            },
          ].map((site) => (
            <motion.a
              key={site.name}
              href={site.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, color: "#00b4ff" }}
              style={{
                color: "#ccc",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {site.name}
            </motion.a>
          ))}
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            marginTop: 50,
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <iframe
            src="/resume.pdf"
            title="Kunj Desai Resume"
            style={{
              width: "100%",
              height: "650px",
              border: "none",
              background: "#111",
            }}
          />
        </motion.div>

        {/* Download Button */}
        <motion.a
          href="/resume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "inline-block",
            marginTop: 20,
            background: "#00b4ff",
            color: "#fff",
            padding: "10px 22px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 500,
            letterSpacing: 0.3,
          }}
        >
          ⬇️ Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
}
