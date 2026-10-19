
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
              Right now, I'm working on a CRM Handoff Assistant
              — a product concept designed to help B2B sales
              teams handle incoming leads, find the right
              existing accounts and make better ownership
              decisions across their CRM systems.
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

        <h2>CRM Handoff Assistant</h2>

        <p className="section-intro">
          A CRM operations control layer that helps B2B sales
          teams connect incoming leads to the correct accounts,
          resolve ownership conflicts and manage lead handoffs
          with greater visibility and control.
        </p>

        <div className="project-overview">
          <div>
            <h3>The problem I'm solving</h3>
            <p>
              When a new lead enters HubSpot, the company may
              already exist in Salesforce under a different name.
              The account may have an existing owner, an open
              opportunity or specific territory rules.
            </p>
            <p>
              If the lead gets attached to the wrong account,
              it can reach the wrong salesperson, delay follow-up
              and create duplicate records. Sales teams often
              resolve these issues through manual CRM checks,
              spreadsheets and internal messages.
            </p>
          </div>

          <div className="problem-flow">
            <span>New lead received</span>
            <span className="flow-arrow">↓</span>
            <span>Wrong account or owner</span>
            <span className="flow-arrow">↓</span>
            <span>Delayed sales follow-up</span>
          </div>
        </div>

        <div className="subheading">
          <span className="section-label">02 / MVP</span>
          <h3>What I'm building right now</h3>
          <p>
            My MVP focuses on one complete workflow:
            HubSpot lead → Salesforce account match →
            owner recommendation → human approval.
          </p>
        </div>

        <div className="feature-grid">
          <article className="feature">
            <span className="feature-number">01</span>
            <h4>Lead inbox</h4>
            <p>
              View incoming leads with their name, email,
              company and domain. Select a lead to review
              its handoff.
            </p>
          </article>

          <article className="feature">
            <span className="feature-number">02</span>
            <h4>Account matching</h4>
            <p>
              Compare company domains and names against
              existing Salesforce accounts. Show possible
              matches and explain why they look related.
            </p>
          </article>

          <article className="feature">
            <span className="feature-number">03</span>
            <h4>Ownership recommendation</h4>
            <p>
              Identify the current account owner and
              recommend the salesperson who should
              receive the lead.
            </p>
          </article>

          <article className="feature">
            <span className="feature-number">04</span>
            <h4>Human approval</h4>
            <p>
              Allow the user to approve a recommendation
              or send an uncertain case for manual review
              instead of silently changing CRM records.
            </p>
          </article>

          <article className="feature">
            <span className="feature-number">05</span>
            <h4>Handoff tracking</h4>
            <p>
              Track whether a lead has been reviewed,
              routed successfully or sent for manual
              review. Keep an activity history.
            </p>
          </article>

          <article className="feature">
            <span className="feature-number">06</span>
            <h4>Follow-up workflow</h4>
            <p>
              Design the approved handoff to create a
              follow-up task for the assigned salesperson,
              with a due time and related account.
            </p>
          </article>
        </div>

        <div className="workflow">
          <span className="section-label">MVP WORKFLOW</span>
          <div className="workflow-steps">
            <span>HubSpot lead</span>
            <b>→</b>
            <span>Account match</span>
            <b>→</b>
            <span>Owner review</span>
            <b>→</b>
            <span>Approval</span>
            <b>→</b>
            <span>Salesforce handoff</span>
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
          The long-term vision is to build a complete CRM
          Handoff Control Layer that can detect, explain
          and help resolve problems between connected
          sales systems.
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
                Build the lead review interface, account
                matching, owner recommendations, human
                approval and activity tracking.
              </p>
            </div>
          </article>

          <article className="roadmap-item">
            <div className="roadmap-meta">
              <span>PHASE 02</span>
              <span>Beta</span>
            </div>
            <div>
              <h3>Real CRM integrations</h3>
              <p>
                Connect HubSpot and Salesforce using
                authorized integrations. Fetch real leads,
                accounts, contacts, users and opportunities.
              </p>
            </div>
          </article>

          <article className="roadmap-item">
            <div className="roadmap-meta">
              <span>PHASE 03</span>
              <span>Beta</span>
            </div>
            <div>
              <h3>Routing and automation</h3>
              <p>
                Apply configurable routing rules, assign
                the correct owner, update approved CRM
                records and create follow-up tasks.
              </p>
            </div>
          </article>

          <article className="roadmap-item">
            <div className="roadmap-meta">
              <span>PHASE 04</span>
              <span>Future</span>
            </div>
            <div>
              <h3>Conflict control center</h3>
              <p>
                Detect duplicate accounts, conflicting
                ownership, sync failures and routing
                exceptions. Add an exception inbox,
                SLA escalation and audit logs.
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
                Add explainable matching, routing
                recommendations, dry-run testing,
                analytics and suggestions based on
                previous human corrections.
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
          <span>CRM Workflows</span>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <span className="section-label">05 / CONTACT</span>
        <h2>Have an idea or feedback?</h2>
        <p>
          I'm open to connecting with people interested
          in product building, software and CRM workflows.
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
