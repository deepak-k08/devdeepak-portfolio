"use client";

import { useState } from "react";

const projects = [
  {
    n: "01",
    title: "React-Based Real-Time Currency Converter",
    text: "A responsive currency converter that fetches real-time exchange rates and provides fast, accurate currency conversions through a clean and simple interface.",
    tags: ["React.js", "JavaScript", "REST API", "CSS"],
    live: 'https://currency-converter.devdeepak.in',
     code: "https://github.com/deepak-k08/currency-converter",
  },
  {
    n: "02",
    title: "React-Based Password Generator",
    text: "A responsive password generator that creates secure, customizable passwords with options for length, numbers, symbols and character combinations.",
    tags: ["React.js", "JavaScript", "CSS"],
    live: 'https://password-generator.devdeepak.in',
    code: "https://github.com/deepak-k08/password-generator",
  },
];
const skills = [
  "Next.js",
  "React.js",
  "JavaScript",
  "TypeScript",
  "Java",
  "HTML & CSS",
  "Git & GitHub",
  "SQL",
  "REST APIs",
];

export default function Home() {
  const [menu, setMenu] = useState(false);

  return (
    <main>
      <nav className="nav shell">
        <a className="logo" href="#top">
          DD<span>.</span>
        </a>
        <button
          className="menuBtn"
          onClick={() => setMenu(!menu)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
        <div className={`links ${menu ? "open" : ""}`}>
          <a href="#about" onClick={() => setMenu(false)}>
            About
          </a>
          <a href="#work" onClick={() => setMenu(false)}>
            Work
          </a>
          <a href="#skills" onClick={() => setMenu(false)}>
            Skills
          </a>
          <a href="#contact" className="navCta" onClick={() => setMenu(false)}>
            Let’s talk ↗
          </a>
        </div>
      </nav>

      <section id="top" className="hero shell">
        <div className="heroCopy">
          <p className="eyebrow">
            <span className="dot" /> AVAILABLE FOR SELECT PROJECTS
          </p>
          <h1>
            Building digital products <em>that feel simple.</em>
          </h1>
          <p className="lead">
            I’m Deepak, a developer focused on building clean, fast and useful
            web experiences with modern technologies.
          </p>
          <div className="actions">
            <a className="primary" href="#work">
              Explore my work <span>↗</span>
            </a>
            <a className="secondary" href="#contact">
              Get in touch
            </a>
          </div>
        </div>
        <div className="heroVisual" aria-hidden="true">
          <div className="orb orb1" />
          <div className="orb orb2" />
          <div className="codeCard">
            <div className="window">
              <i />
              <i />
              <i />
            </div>
            <pre>{`const developer = {
  name: "Deepak",
  focus: "web",
  stack: ["Next.js", "React", "Java"],
  mindset: "keep it simple"
};`}</pre>
          </div>
          <div className="stamp">
            CODE
            <br />
            <b>WITH</b>
            <br />
            PURPOSE
          </div>
        </div>
      </section>

      <section className="ticker">
  {/* Desktop */}
  <div className="tickerDesktop">
    NEXT.JS <span>✦</span> REACT <span>✦</span> JAVASCRIPT{" "}
    <span>✦</span> JAVA <span>✦</span> FULL-STACK <span>✦</span>
  </div>

  {/* Mobile */}
  <div className="tickerMobile">
    <div className="tickerTrack">
      <span>NEXT.JS</span>
      <b>✦</b>
      <span>REACT</span>
      <b>✦</b>
      <span>JAVASCRIPT</span>
      <b>✦</b>
      <span>JAVA</span>
      <b>✦</b>
      <span>FULL-STACK</span>
      <b>✦</b>

      <span>NEXT.JS</span>
      <b>✦</b>
      <span>REACT</span>
      <b>✦</b>
      <span>JAVASCRIPT</span>
      <b>✦</b>
      <span>JAVA</span>
      <b>✦</b>
      <span>FULL-STACK</span>
      <b>✦</b>
    </div>
  </div>
</section>

      <section id="about" className="section shell about">
        <div className="sectionLabel">01 / ABOUT</div>
        <div className="aboutGrid">
          <h2>
            Curious by nature.
            <br />
            <em>Precise by choice.</em>
          </h2>
          <div>
            <p>
              I like turning ideas into interfaces that are clear, responsive
              and genuinely enjoyable to use. My approach is simple: understand
              the problem, remove the noise, then build.
            </p>
            <p>
              From frontend experiences to backend integrations and AI-powered
              experiments, I enjoy working across the stack and learning by
              building.
            </p>
          </div>
        </div>
      </section>

      <section id="work" className="section shell work">
        <div className="sectionHead">
          <div className="sectionLabel">02 / SELECTED WORK</div>
          <span>02 projects</span>
        </div>
        <div className="projectList">
          {projects.map((project) => (
            <article className="project" key={project.n}>
              <div className="projectNum">{project.n}</div>

              <div className="projectMain">
                <h3>{project.title}</h3>

                <p>{project.text}</p>

                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="projectLinks">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo ↗
                  </a>

                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code ↗
                  </a>
                </div>
              </div>

              <div className="arrow">↗</div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section shell skills">
        <div className="sectionLabel">03 / TOOLKIT</div>
        <div className="skillGrid">
          {skills.map((s, i) => (
            <div className="skill" key={s}>
              <span>0{i + 1}</span>
              {s}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact shell">
        <div className="sectionLabel">04 / CONTACT</div>
        <h2>
          Have an idea?
          <br />
          <em>Let’s make it real.</em>
        </h2>
        <a className="mail" href="mailto:hello@devdeepak.in">
          hello@devdeepak.in <span>↗</span>
        </a>
        <div className="socials">
          <a href="https://github.com/deepak-k08">GitHub</a>
          <a href="https://www.linkedin.com/in/dk0899/">LinkedIn</a>
          <a href="/Deepak-Resume.pdf" target="_blank">
            Resume
          </a>
        </div>
      </section>

      <footer className="footer shell">
        <span>© {new Date().getFullYear()} Dev Deepak</span>
        <span>Built with Next.js</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
