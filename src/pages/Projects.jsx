import { useMemo, useState, useId } from 'react'
import '../styles/Projects.css'
import DemoButton from '../components/DemoButton.jsx'

// Optional: if you want icons later, we can add them.
// For now: clean + consistent with your site.

export default function Projects() {
  const [openKey, setOpenKey] = useState('')
  const sectionId = useId()

  const projects = useMemo(
    () => [
      {
        key: 'command-gui',
        title: 'Command GUI',
        subtitle: 'Local web app for authenticated satellite commanding + ground testing',
        status: 'Production tooling',
        heroImage: 'gui/gui1.png', // <-- change to your actual path
        tags: ['React', 'Django', 'Python', 'JWT', 'Ops Tooling'],
        links: [
          // No repo for this one (per your note)
          // { label: 'Writeup', href: '#', kind: 'secondary' },
        ],
        overview: [
          `Our SmallSat team needed a safe, fast way to issue commands during live operations and simulation.`,
          `I built a terminal-style GUI with autocomplete, role-based command access, and guardrails for dangerous actions.`,
        ],
        highlights: [
          {
            label: 'Frontend',
            items: [
              'JWT login flow; authenticated sessions for authorized operators.',
              'Terminal UI with autocomplete + inline command help (shows options while typing).',
              'Dangerous-command confirmation flow (second step required before sending).',
              'Role-based permissions: some commands restricted to specific users.',
            ],
          },
          {
            label: 'Backend',
            items: [
              'Command allowlist + validation: rejects any command not on the accepted list.',
              'Per-command descriptions + metadata (used for UI help + safety labeling).',
              'Bridges approved commands to a Python command-sender script.',
              'Parses returned packet responses and streams formatted output back to the UI.',
            ],
          },
        ],
        gallery: [
          { src: '/gui/gui1.png', alt: 'Command GUI Success' },
          { src: '/gui/gui2.png', alt: 'Command GUI Error' },
          { src: '/gui/gui3.png', alt: 'Command GUI command help + autocomplete' },
          { src: '/gui/gui4.png', alt: 'Command GUI sensitive command' },
          { src: '/gui/gui5.png', alt: 'Command GUI confirmation' },
        ],
      },
      {
        key: 'cdh-system',
        title: 'CDH Health Monitoring System',
        subtitle:
          'Real-time telemetry ingestion + rule-based fault response for satellite subsystems',
        status: 'Production flight software',
        heroImage: '/cdh/cdh.png', // <-- change
        tags: ['C++', 'Embedded', 'Telemetry', 'Fault Response', 'Integration'],
        links: [],
        overview: [
          `I built the CDH-side health pipeline that ingests packets from satellite subsystems and maintains a live table of current health metrics.`,
          `It evaluates thresholds continuously, can take automatic protective actions, and packages telemetry for downlink.`,
        ],
        highlights: [
          {
            label: 'Telemetry pipeline',
            items: [
              'Receives subsystem packets (GPS, EPS, ADCS, Detector) on ~10s intervals.',
              'Parses packets and updates an in-memory health table (current values per metric).',
              'Logs raw packets to local files for review and debugging.',
            ],
          },
          {
            label: 'Health + safety',
            items: [
              'Rule-based threshold checks (config/table driven so limits can be updated safely).',
              'Automatic protective actions (disable subsystems, notify ground when limits exceeded).',
              'Supports commanding hooks so operators can query current health values via the Command GUI.',
            ],
          },
          {
            label: 'Downlink',
            items: [
              'Generates Low Rate Telemetry (LRT) packets summarizing health for ground processing + storage.',
              'Generates Health & Safety (H&S) packets for critical metrics monitoring.',
            ],
          },
        ],
        gallery: [
          { src: '/cdh/cdh.png', alt: 'CDH & Comms software structure diagram' },
          {
            src: '/cdh/cdh1.png',
            alt: 'CDH Software flowchart',
          },
        ],
      },
      {
        key: 'chatapp',
        title: 'ChatApp',
        subtitle:
          'Real-time chat with friends, typing indicators, unread badges, and Markdown support',
        status: 'Live demo',
        heroImage: '/chat/chat1.png', // <-- change
        tags: ['Django', 'React', 'WebSockets', 'Redis', 'Channels', 'JWT'],
        links: [
          { label: 'Live Demo', href: 'https://chatapp.alexehlebracht.com', kind: 'primary' },
          // { label: 'Repo', href: 'https://github.com/YOURNAME/YOURREPO', kind: 'secondary' },
        ],
        overview: [
          `A responsive, real-time chat app built with Django Channels + WebSockets—everything updates instantly: friend requests, presence, and messages.`,
          `Messages support Markdown so you can share code blocks, tables, and formatted notes naturally.`,
          `Try the live demo to see it in action!`,
          `Showcase account: username - "ShowcaseAccount", password - "ShowcasePassword!"`,
        ],
        highlights: [
          {
            label: 'Real-time features',
            items: [
              'WebSocket messaging pipeline with Django Channels + Redis.',
              'Typing indicator, unread message indicator, and online presence.',
              'Friend system: search, pending requests, accepted friends, active online list—fully real-time.',
            ],
          },
          {
            label: 'Accounts + profiles',
            items: [
              'JWT auth for login/session handling.',
              'Profiles with first/last name + image; editable after creation.',
              'Stable usernames (cannot be changed) to keep identity consistent.',
            ],
          },
          {
            label: 'UX',
            items: [
              'Fully responsive layout for desktop + mobile.',
              'Markdown rendering for rich messages (headings, lists, tables, code blocks).',
            ],
          },
        ],
        gallery: [
          { src: '/chat/chat1.png', alt: 'ChatApp login screen' },
          { src: '/chat/chat2.png', alt: 'All Friends Page' },
          { src: '/chat/chat3.png', alt: 'Online Friends Page' },
          { src: '/chat/chat4.png', alt: 'Edit Profile Page' },
          { src: '/chat/chat5.png', alt: 'Private Messaging Page' },
          { src: '/chat/chat6.jpeg', alt: 'Mobile responsive layout' },
        ],
      },
      {
        key: 'survival-game',
        title: '3D Survival Game',
        subtitle:
          'Engineless C++/OpenGL game with marching cubes terrain, water, grass, and shader pipeline',
        status: 'Work in progress',
        heroImage: '/game/game1.png', // <-- change
        tags: ['C++', 'OpenGL', 'GLSL', 'Marching Cubes', 'Rendering', 'Performance'],
        links: [],
        overview: [
          `This is my long-term “dream game” project: a survival game built without a game engine—everything is written from scratch in C++ and OpenGL.`,
          `The goal is to build the full rendering + world pipeline by hand and iterate toward gameplay systems over time.`,
        ],
        highlights: [
          {
            label: 'World + rendering',
            items: [
              'Terrain generated using the Marching Cubes algorithm.',
              'Custom terrain shader pipeline.',
              'Water shader with reflection + ripples.',
              'Grass shader with wind motion; instanced rendering for density.',
              'Skybox + atmosphere setup.',
            ],
          },
          {
            label: 'Performance',
            items: [
              'Chunk-based terrain so off-screen chunks aren’t rendered.',
              'Grass LOD: quality reduces with distance until culled.',
              'Currently averaging ~1200 FPS with existing systems (room to grow as features expand).',
            ],
          },
        ],
        gallery: [
          { src: '/game/game1.png', alt: '3D game scene' },
          { src: '/game/game2.png', alt: '3D game scene Higher Up' },
        ],
      },
      {
        key: 'maze-solver',
        title: 'Maze Solver',
        subtitle:
          'Interactive A* pathfinding visualizer with custom mazes, animation, and exploration view',
        status: 'Live demo',
        heroImage: '/maze/maze1.png', // <-- change
        tags: ['React', 'Algorithms', 'A*', 'Visualization', 'UI'],
        links: [
          { label: 'Live Demo', href: 'https://maze.alexehlebracht.com', kind: 'primary' },
          // { label: 'Repo', href: 'https://github.com/YOURNAME/YOURREPO', kind: 'secondary' },
        ],
        overview: [
          `A visual A* maze solver where you can generate random mazes or draw your own.`,
          `It can animate the search process, showing explored nodes and the final path solution.`,
        ],
        highlights: [
          {
            label: 'Features',
            items: [
              'Random maze generation + manual drawing/editing.',
              'Resizable grid (control maze size).',
              'Optional animation: exploration first, then final path highlight.',
              'Clear visualization of explored area vs solution path.',
            ],
          },
        ],
        gallery: [
          { src: '/maze/maze1.png', alt: 'Standard Maze' },
          { src: '/maze/maze2.png', alt: 'Biggest Possible Maze' },
          { src: '/maze/maze3.png', alt: 'Drawn Hello Maze' },
        ],
      },
    ],
    []
  )

  const toggle = (key) => setOpenKey((prev) => (prev === key ? '' : key))

  return (
    <section className="Projects" aria-label="Projects" id="projects">
      <div className="Projects-card">
        <div className="Projects-header">
          <h2 className="Projects-title">Projects</h2>
          <div className="Projects-rule" />
          <p className="Projects-subtitle">
            A mix of satellite software, full-stack systems, and graphics-heavy side projects.
          </p>
        </div>

        <div className="Projects-list">
          {projects.map((p, idx) => {
            const isOpen = openKey === p.key
            const panelId = `${sectionId}-${p.key}-panel`
            const buttonId = `${sectionId}-${p.key}-button`

            return (
              <article key={p.key} className={`ProjectRow ${isOpen ? 'is-open' : ''}`}>
                <button
                  id={buttonId}
                  className="ProjectRow-top"
                  type="button"
                  onClick={() => toggle(p.key)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <div className="ProjectRow-left">
                    <div className="ProjectRow-kicker">
                      <span className="ProjectRow-index">{String(idx + 1).padStart(2, '0')}</span>
                      <span className="ProjectRow-status">{p.status}</span>
                    </div>

                    <h3 className="ProjectRow-title">{p.title}</h3>
                    <p className="ProjectRow-subtitle">{p.subtitle}</p>

                    <div className="ProjectRow-tags" aria-label={`${p.title} technologies`}>
                      {p.tags.map((t) => (
                        <span key={t} className="ProjectTag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="ProjectRow-right">
                    <div className="ProjectRow-imageWrap" aria-hidden="true">
                      {/* If you prefer <picture>, we can swap it in later */}
                      <img
                        className="ProjectRow-image"
                        src={p.heroImage}
                        alt=""
                        loading="lazy"
                        onError={(e) => {
                          // graceful fallback if the path isn’t set yet
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                      <div className="ProjectRow-imageFallback">Preview</div>
                    </div>

                    <div className="ProjectRow-chevron" aria-hidden="true">
                      <span className="ProjectRow-chevronLine" />
                      <span className="ProjectRow-chevronLine" />
                    </div>
                  </div>
                </button>

                {/* Smooth accordion using grid rows */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="ProjectRow-panel"
                >
                  <div className="ProjectRow-panelInner">
                    <div className="ProjectDetail">
                      <div className="ProjectDetail-col">
                        <h4 className="ProjectDetail-heading">Overview</h4>
                        {p.overview.map((line, i) => (
                          <p key={i} className="ProjectDetail-paragraph">
                            {line}
                          </p>
                        ))}

                        {p.links?.length > 0 && (
                          <div className="ProjectDetail-links" aria-label={`${p.title} links`}>
                            {p.links.map((l) => (
                              <DemoButton key={l.href} demoLink={l.href} />
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="ProjectDetail-col">
                        <h4 className="ProjectDetail-heading">Details</h4>

                        <div className="ProjectDetail-blocks">
                          {p.highlights.map((block) => (
                            <div key={block.label} className="ProjectDetail-block">
                              <div className="ProjectDetail-blockTitle">{block.label}</div>
                              <ul className="ProjectDetail-list">
                                {block.items.map((it) => (
                                  <li key={it}>{it}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {p.gallery?.length > 0 && (
                      <div className="ProjectGallery" aria-label={`${p.title} images`}>
                        <div className="ProjectGallery-head">
                          <h4 className="ProjectDetail-heading">Gallery</h4>
                          <div className="ProjectGallery-hint">Scroll</div>
                        </div>

                        <div className="ProjectGallery-row">
                          {p.gallery.map((img) => (
                            <figure key={img.src} className="ProjectGallery-item">
                              <img
                                src={img.src}
                                alt={img.alt}
                                loading="lazy"
                                onError={(e) => {
                                  // hide broken images gracefully
                                  e.currentTarget.style.display = 'none'
                                }}
                              />
                              <figcaption>{img.alt}</figcaption>
                            </figure>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
