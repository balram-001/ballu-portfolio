
import "./App.css";

export default function App() {
  return (
    <main className="portfolio">
      <nav className="navbar">
        <a href="#" className="logo">Ballu<span>.</span></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#project">Project</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="about">
        <div className="hero-content">
          <div className="intro">
            <div className="photo-wrap">
              <img
                src="/profile.jpeg"
                alt="Ballu"
                className="profile-photo"
              />
            </div>

            <span className="eyebrow">
              STUDENT · PRODUCT BUILDER
            </span>

            <h1>
              Hey, I'm Ballu.
              <br />
              <span>I build ideas into products.</span>
            </h1>

            <p>
              I'm a student exploring software development,
              product thinking and how technology can solve
              real-world business problems. I enjoy taking an
              idea, understanding the problem behind it and
              building something practical that people can use.
            </p>

            <p>
              Right now, I'm working on Astra OS — a privacy-first
              desktop automation assistant designed to help developers
              and operations teams move work across approved apps,
              screens and browser tabs with simple commands.
            </p>

            <p>
              My current focus is building a working MVP,
              learning through hands-on development and
              improving the product step by step.
            </p>

            <div className="hero-actions">
              <a href="#project" className="button">
                Explore my project ↗
              </a>
              <a href="#contact" className="secondary-link">
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="project">
        <div className="section-heading">
          <span className="section-label">01 / CURRENT PROJECT</span>
          <span className="status">MVP IN DEVELOPMENT</span>
        </div>

        <h2>Astra OS</h2>

        <p className="section-intro">
          A zero-trust, cross-screen live desktop automation engine
          that helps developers and enterprise teams complete work
          across approved applications with visibility, control and
          privacy by default.
        </p>

        <div className="project-overview">
          <div>
            <h3>The problem I'm solving</h3>
            <p>
              Developers and operations teams lose hours every day
              switching between browser tabs, spreadsheets, local tools
              and enterprise apps to copy data, fix UI issues and fill
              repetitive forms.
            </p>
            <p>
              Most AI assistants are limited to the IDE or a single app,
              while OS-level automation creates valid privacy concerns.
              Astra OS lets users connect only the exact windows and tabs
              needed for a task, then forgets that context after execution.
            </p>
          </div>

          <div className="problem-flow">
            <span>Work spread across apps</span>
            <span className="flow-arrow">↓</span>
            <span>Manual switching and copy-paste</span>
            <span className="flow-arrow">↓</span>
            <span>Slow, error-prone execution</span>
          </div>
        </div>

        <div className="subheading">
          <span className="section-label">02 / MVP</span>
          <h3>What I'm building right now</h3>
          <p>
            My MVP focuses on one complete workflow:
            approve windows → enter a command →
            review the proposed action → execute safely.
          </p>
        </div>

        <div className="feature-grid">
          <article className="feature">
            <span className="feature-number">01</span>
            <h4>Command widget</h4>
            <p>
              Use a lightweight desktop widget to trigger workflows
              with inline commands such as /fix, /sync and /fill.
            </p>
          </article>

          <article className="feature">
            <span className="feature-number">02</span>
            <h4>Approved context</h4>
            <p>
              Connect only the specific app windows, browser tabs
              or URLs needed for a workflow; everything else
              stays inaccessible.
            </p>
          </article>

          <article className="feature">
            <span className="feature-number">03</span>
            <h4>Cross-screen actions</h4>
            <p>
              Read permitted context from one screen and carry out
              a related action in another approved application.
            </p>
          </article>

          <article className="feature">
            <span className="feature-number">04</span>
            <h4>Human approval</h4>
            <p>
              Show the planned action for review before execution,
              so users remain in control of every automation.
            </p>
          </article>

          <article className="feature">
            <span className="feature-number">05</span>
            <h4>Zero-trust privacy</h4>
            <p>
              Stay blind by default, capture context only on command,
              and clear volatile visual data from memory after use.
            </p>
          </article>

          <article className="feature">
            <span className="feature-number">06</span>
            <h4>Coordinate-safe execution</h4>
            <p>
              Restrict mouse and keyboard actions to approved windows,
              preventing automations from reaching unrelated apps.
            </p>
          </article>
        </div>

        <div className="workflow">
          <span className="section-label">MVP WORKFLOW</span>
          <div className="workflow-steps">
            <span>Approve windows</span>
            <b>→</b>
            <span>Enter /fix, /sync or /fill</span>
            <b>→</b>
            <span>Review action</span>
            <b>→</b>
            <span>Execute safely</span>
            <b>→</b>
            <span>Forget context</span>
          </div>
        </div>
      </section>

      <section className="section" id="roadmap">
        <div className="section-heading">
          <span className="section-label">03 / PRODUCT ROADMAP</span>
          <span className="future-status">PLANNED</span>
        </div>

        <h2>Where the product is going</h2>

        <p className="section-intro">
          The long-term vision is to make trustworthy desktop
          automation feel as natural as typing a command, while
          keeping every app connection, action and piece of
          on-screen context under the user's control.
        </p>

        <div className="roadmap">
          <article className="roadmap-item">
            <div className="roadmap-meta">
              <span>PHASE 01</span>
              <span>Current</span>
            </div>
            <div>
              <h3>Working MVP</h3>
              <p>
                Build the desktop command widget, approved-window
                connection flow, action review and secure execution
                for core developer and operations workflows.
              </p>
            </div>
          </article>

          <article className="roadmap-item">
            <div className="roadmap-meta">
              <span>PHASE 02</span>
              <span>Beta</span>
            </div>
            <div>
              <h3>Cross-app connections</h3>
              <p>
                Add approved browser, IDE, spreadsheet and enterprise
                app connections with granular tab and URL isolation.
              </p>
            </div>
          </article>

          <article className="roadmap-item">
            <div className="roadmap-meta">
              <span>PHASE 03</span>
              <span>Beta</span>
            </div>
            <div>
              <h3>Workflow automation</h3>
              <p>
                Support reliable /fix, /sync and /fill workflows that
                move data and complete actions across connected screens.
              </p>
            </div>
          </article>

          <article className="roadmap-item">
            <div className="roadmap-meta">
              <span>PHASE 04</span>
              <span>Future</span>
            </div>
            <div>
              <h3>Trust control center</h3>
              <p>
                Add access controls, blackout masking, secure exception
                handling and clear audit visibility for enterprise teams.
              </p>
            </div>
          </article>

          <article className="roadmap-item">
            <div className="roadmap-meta">
              <span>PHASE 05</span>
              <span>Future</span>
            </div>
            <div>
              <h3>Intelligent operations</h3>
              <p>
                Add explainable automation plans, dry-run testing,
                analytics and suggestions based on human corrections.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section about-section">
        <span className="section-label">04 / HOW I BUILD</span>
        <h2>Learning by building.</h2>
        <p>
          I'm developing my skills through real projects,
          experimenting with ideas and understanding how
          software works beyond just the interface.
          My goal is to build useful products, learn
          from feedback and improve through iteration.
        </p>

        <div className="skills">
          <span>React</span>
          <span>JavaScript</span>
          <span>Product Thinking</span>
          <span>UI Development</span>
          <span>Desktop Automation</span>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <span className="section-label">05 / CONTACT</span>
        <h2>Have an idea or feedback?</h2>
        <p>
          I'm open to connecting with people interested
          in product building, software and desktop automation.
        </p>
        <a
          className="email-link"
          href="mailto:balramptdr799@gmail.com"
        >
          balramptdr799@gmail.com ↗
        </a>
      </section>

      <footer className="footer">
        <span>© 2026 Ballu</span>
        <span>Designed and built with React</span>
      </footer>
    </main>
  );
}
