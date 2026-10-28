import Content from "./pages/Content"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore
import mobileNavigationScript from "./scripts/portfolio-mobile-nav.inline"

type PortfolioLink = {
  label: string
  href: string
}

type PortfolioCardProps = {
  number: string
  status: string
  title: string
  lede: string
  copy: string
  tags: string[]
  links: PortfolioLink[]
  featured?: boolean
  wide?: boolean
  event?: boolean
}

const ContentPage = Content()

const CosmicDoodle = () => (
  <svg class="portfolio-cosmic-doodle" viewBox="0 0 1400 700" aria-hidden="true" focusable="false">
    <path
      class="cosmic-route"
      d="M36 128C78 103 117 94 152 111c26 13 26 39 55 47 56 14 123-22 185-32 34-6 41-1 41 24 0 24 23 29 53 12 37-22 64-50 105-66 29-11 37 18 52 43 20 31 48 35 77 14 33-24 73-45 102-42 33 4 37 44 51 70 17 30 56 23 88 6 51-30 102-63 151-50 50 14 66 56 103 64 39 9 53-17 81-21 27-4 43 15 45 38 3 37-33 50-52 75-27 35 11 55 3 90-7 32-39 47-38 77 2 36 46 48 43 81-3 35-41 53-38 86 3 31 34 44 32 76-2 31-31 48-27 75"
    />

    <g class="cosmic-star cosmic-star-cream">
      <path d="M175 72v42M154 93h42M161 79l28 28M189 79l-28 28" />
    </g>
    <g class="cosmic-star">
      <path d="M785 99v28M771 113h28M776 104l18 18M794 104l-18 18" />
    </g>
    <g class="cosmic-star cosmic-star-cream">
      <path d="M1116 123v25M1104 136h25M1109 129l15 15M1124 129l-15 15" />
    </g>
    <g class="cosmic-star cosmic-star-cream">
      <path d="M1268 344v27M1255 357h27M1260 350l16 16M1276 350l-16 16" />
    </g>
    <g class="cosmic-star">
      <path d="M1324 620v34M1307 637h34M1313 626l22 22M1335 626l-22 22" />
    </g>

    <g class="cosmic-planet">
      <circle cx="1227" cy="92" r="15" />
      <ellipse cx="1227" cy="92" rx="28" ry="8" transform="rotate(-25 1227 92)" />
    </g>
    <g class="cosmic-planet cosmic-planet-cream">
      <circle cx="1250" cy="483" r="17" />
      <ellipse cx="1250" cy="483" rx="31" ry="9" transform="rotate(-30 1250 483)" />
    </g>

    <g class="cosmic-dots">
      <circle cx="95" cy="52" r="3.3" />
      <circle cx="226" cy="79" r="2.6" />
      <circle cx="250" cy="88" r="2" />
      <circle cx="384" cy="145" r="3" />
      <circle cx="549" cy="132" r="2.3" />
      <circle cx="675" cy="122" r="2.8" />
      <circle cx="742" cy="150" r="2.2" />
      <circle cx="947" cy="104" r="3.3" />
      <circle cx="1050" cy="155" r="2.5" />
      <circle cx="1170" cy="119" r="3.2" />
      <circle cx="1292" cy="141" r="2.5" />
      <circle cx="1323" cy="169" r="2.2" />
      <circle cx="1272" cy="265" r="3" />
      <circle cx="1300" cy="315" r="2.4" />
      <circle cx="1287" cy="400" r="3.2" />
      <circle cx="1315" cy="427" r="2" />
      <circle cx="1298" cy="555" r="2.8" />
      <circle cx="1307" cy="679" r="2.4" />
    </g>
    <g class="cosmic-dots cosmic-dots-cream">
      <circle cx="652" cy="115" r="3.2" />
      <circle cx="920" cy="145" r="2.4" />
      <circle cx="1201" cy="163" r="2.8" />
      <circle cx="1290" cy="372" r="2.6" />
      <circle cx="1277" cy="515" r="2.2" />
    </g>
  </svg>
)

const PortfolioCard = ({
  number,
  status,
  title,
  lede,
  copy,
  tags,
  links,
  featured = false,
  wide = false,
  event = false,
}: PortfolioCardProps) => {
  const classes = [
    "portfolio-card",
    featured && "portfolio-card-featured",
    wide && "portfolio-card-wide",
    event && "portfolio-card-event",
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <div class={classes} role="group" aria-label={title}>
      <div class="portfolio-card-topline">
        <p class="portfolio-status">{status}</p>
        <p class="portfolio-number">{number}</p>
      </div>
      <h3>{title}</h3>
      <p class="portfolio-card-lede">{lede}</p>
      <p class="portfolio-card-copy">{copy}</p>
      <ul class="portfolio-tags" aria-label={`${title} technologies`}>
        {tags.map((tag) => (
          <li>{tag}</li>
        ))}
      </ul>
      <p class="portfolio-card-links">
        {links.map((link) => (
          <a href={link.href}>{link.label}</a>
        ))}
      </p>
    </div>
  )
}

const PortfolioPage: QuartzComponent = (props: QuartzComponentProps) => {
  if (props.fileData.slug !== "portfolio") {
    return <ContentPage {...props} />
  }

  return (
    <article class="popover-hint portfolio-page">
      <div class="portfolio-content">
        <header class="portfolio-intro">
          <CosmicDoodle />
          <p class="portfolio-kicker">PORTFOLIO / 2026</p>
          <h1>
            HIII, I’M
            <br />
            ABHINEETH.
          </h1>
          <p class="portfolio-lede">
            I build useful, slightly curious software: local-language tools, student products,
            experiments, and things made with a deadline closing in.
          </p>
          <p class="portfolio-contact-links" aria-label="Contact links">
            <a href="https://github.com/AbhineethVS">GitHub</a>
            <a href="https://www.linkedin.com/in/abhineethvs/">LinkedIn</a>
            <a href="mailto:abhineethvs71@gmail.com">abhineethvs71@gmail.com</a>
          </p>
        </header>

        <section class="portfolio-toolkit" aria-labelledby="toolkit-heading">
          <div class="portfolio-section-heading">
            <p class="portfolio-kicker">TOOLKIT</p>
            <h2 id="toolkit-heading">Things I reach for.</h2>
          </div>
          <dl class="toolkit-grid">
            <div class="toolkit-row">
              <dt>Languages</dt>
              <dd>
                <span>TypeScript</span>
                <span>JavaScript</span>
                <span>Python</span>
                <span>Kotlin</span>
                <span>C</span>
                <span>C#</span>
              </dd>
            </div>
            <div class="toolkit-row">
              <dt>AI / ML</dt>
              <dd>
                <span>OpenAI</span>
                <span>Claude</span>
                <span>PyTorch</span>
                <span>YOLOv11</span>
                <span>Hugging Face</span>
                <span>OpenCLIP</span>
                <span>OpenCV</span>
                <span>Sarvam AI</span>
                <span>RAG</span>
                <span>Embeddings</span>
                <span>Vision models</span>
                <span>Structured outputs</span>
                <span>STT / TTS</span>
                <span>MCP</span>
                <span>Agent workflows</span>
              </dd>
            </div>
            <div class="toolkit-row">
              <dt>Frontend</dt>
              <dd>
                <span>React</span>
                <span>Next.js</span>
                <span>Vite</span>
                <span>Tailwind CSS</span>
                <span>shadcn/ui</span>
                <span>PWA</span>
              </dd>
            </div>
            <div class="toolkit-row">
              <dt>Backend</dt>
              <dd>
                <span>Node.js</span>
                <span>Express</span>
                <span>FastAPI</span>
                <span>Flask</span>
                <span>Supabase</span>
                <span>MongoDB</span>
                <span>Zod</span>
              </dd>
            </div>
            <div class="toolkit-row">
              <dt>Mobile &amp; games</dt>
              <dd>
                <span>Android</span>
                <span>Gradle</span>
                <span>Chrome Extensions</span>
                <span>Unity</span>
              </dd>
            </div>
            <div class="toolkit-row">
              <dt>Infra &amp; tools</dt>
              <dd>
                <span>Vercel</span>
                <span>Render</span>
                <span>Docker</span>
                <span>Azure</span>
                <span>PostHog</span>
                <span>Vitest</span>
                <span>Git</span>
                <span>Cursor</span>
              </dd>
            </div>
          </dl>
        </section>

        <section
          class="portfolio-section"
          id="selected-work"
          aria-labelledby="selected-work-heading"
        >
          <div class="portfolio-section-heading">
            <p class="portfolio-kicker">01 / MY WORK</p>
            <h2 id="selected-work-heading">Things I build.</h2>
          </div>

          <div class="portfolio-grid">
            <PortfolioCard
              featured
              number="01"
              status="BUILDING · ANDROID"
              title="PARAYOO"
              lede="Speak Malayalam. Text Manglish."
              copy="A floating voice bubble that turns Malayalam speech into natural Manglish inside the apps people already use, without changing keyboards or passing text through a clipboard."
              tags={["Kotlin", "Android", "Accessibility Service", "Sarvam AI"]}
              links={[{ label: "Visit Parayoo", href: "https://www.parayoo.in/" }]}
            />
            <PortfolioCard
              number="02"
              status="LIVE · OPEN SOURCE"
              title="ETLABAN"
              lede="Same data, less suffering."
              copy="A calm, fast student companion for CET attendance, results, and study materials, built around the questions students actually ask."
              tags={["Python", "JavaScript", "PWA", "Vercel"]}
              links={[
                { label: "Open ETLaban", href: "https://etlaban.vercel.app/" },
                { label: "GitHub", href: "https://github.com/AbhineethVS/ETLaban" },
              ]}
            />
            <PortfolioCard
              number="03"
              status="SHIPPED · PAYING CLIENT"
              title="GYMFLOW"
              lede="A local problem, taken seriously."
              copy="A gym-management SaaS shaped by listening to local gym owners, then built, deployed, and sold to a real client."
              tags={["React", "Node.js", "MongoDB", "Azure"]}
              links={[{ label: "Read the story", href: "./GymFlow---The-Story" }]}
            />
            <PortfolioCard
              wide
              number="04"
              status="RESEARCH · ANDROID INTERNALS"
              title="PARAYOO KEYBOARD LAB"
              lede="The experiment behind the overlay."
              copy="A black-box Android test harness that mapped when a voice-dictation bubble should appear. Its findings now guide Parayoo’s keyboard and focus behaviour."
              tags={["Kotlin", "Accessibility APIs", "IME", "Android SDK"]}
              links={[
                {
                  label: "View the lab",
                  href: "https://github.com/AbhineethVS/wisprflow-sandbox",
                },
              ]}
            />
          </div>
        </section>

        <section
          class="portfolio-section"
          id="hackathons-and-jams"
          aria-labelledby="hackathons-and-jams-heading"
        >
          <div class="portfolio-section-heading">
            <p class="portfolio-kicker">02 / HACKATHONS &amp; JAMS</p>
            <h2 id="hackathons-and-jams-heading">Built with a clock running.</h2>
            <p class="portfolio-section-copy">
              Time-boxed projects made with teams, constraints, and a lot of curiosity.
            </p>
          </div>

          <div class="portfolio-grid">
            <PortfolioCard
              event
              number="05"
              status="CODEX NIGHTLINE · KOCHI"
              title="PARAYOO: FIRST PROTOTYPE"
              lede="The first small version of the idea."
              copy="My first hackathon project, a voice prototype that converts Malayalam speech into Malayalam text. It became an early step toward Parayoo."
              tags={["Android", "Speech to Text", "Malayalam", "Hackathon"]}
              links={[
                {
                  label: "GitHub",
                  href: "https://github.com/AbhineethVS/codex-nightline-hackathon",
                },
                { label: "Event", href: "https://www.codexnightline.in/" },
              ]}
            />
            <PortfolioCard
              event
              number="06"
              status="DSOLVE 2026 · TEAM OF 4"
              title="TOOTHPASTE.CV"
              lede="A two-minute visual oral-health screen."
              copy="Five guided photos go through a multi-model vision review and a custom CV layer, returning a clear, evidence-led screening report."
              tags={["Next.js", "FastAPI", "YOLOv11", "OpenCLIP"]}
              links={[
                { label: "Try the demo", href: "https://toothpaste-cv.vercel.app/" },
                { label: "GitHub", href: "https://github.com/AbhineethVS/toothpaste-cv" },
              ]}
            />
            <PortfolioCard
              event
              number="07"
              status="SLASHFORGE · DOTSLASH / CET"
              title="LUMA"
              lede="A source-grounded study desk."
              copy="A workspace for course PDFs where every answer points back to the page it came from, with study tools built from the same sources."
              tags={["React", "FastAPI", "OpenAI", "PyMuPDF"]}
              links={[
                { label: "Open LUMA", href: "https://luma-study.onrender.com/" },
                { label: "GitHub", href: "https://github.com/AbhineethVS/luma-study" },
              ]}
            />
            <PortfolioCard
              event
              number="08"
              status="GMTK GAME JAM 2026 · TEAM OF 3"
              title="EXPLODING CHICKENS"
              lede="Keep the flock alive."
              copy="A chaotic farm-survival game of countdown chickens, waves, and escalating mayhem, made for GMTK Game Jam 2026."
              tags={["Unity", "C#", "2D URP", "Game Jam"]}
              links={[
                { label: "Play it", href: "https://aadithya-pradeep.itch.io/exploding-chickens" },
                {
                  label: "GitHub",
                  href: "https://github.com/AbhineethVS/Exploding-Chickens-GMTK26",
                },
              ]}
            />
            <PortfolioCard
              event
              number="09"
              status="DEVIN HACKS · KOCHI"
              title="REMODEL"
              lede="Give any site a new look in one sentence."
              copy="A Chrome extension that reskins or rebuilds live webpages from a style prompt, while preserving working links, forms, and interactions."
              tags={["Chrome Extension", "OpenAI", "TypeScript", "Design Systems"]}
              links={[
                { label: "View Remodel", href: "https://remodel-web-sigma.vercel.app/" },
                { label: "GitHub", href: "https://github.com/AbhineethVS/devin-hacks" },
              ]}
            />
            <PortfolioCard
              event
              number="10"
              status="OPENAI DEVDAY EXCHANGE · KOCHI"
              title="WISHBOUND"
              lede="Make a wish. Walk through a portal. The next world changes."
              copy="A pixel-art platformer where a natural-language wish becomes a playable outdoor route and dungeon, while the game’s movement, combat, and physics stay safely deterministic."
              tags={["TypeScript", "Phaser", "OpenAI", "Vite"]}
              links={[
                { label: "Play Wishbound", href: "https://wishbound-vuhq.onrender.com/" },
                { label: "GitHub", href: "https://github.com/AbhineethVS/devday-hack" },
                { label: "Event", href: "https://luma.com/z10nz8gp?tk=jMZnoI" },
              ]}
            />
          </div>
        </section>

        <section class="portfolio-community" id="community" aria-labelledby="community-heading">
          <div>
            <p class="portfolio-kicker">03 / COMMUNITY</p>
            <h2 id="community-heading">arinjilley?</h2>
          </div>
          <div class="portfolio-community-copy">
            <p class="portfolio-card-lede">
              A small club making sure good hackathons do not get lost in a chat.
            </p>
            <p>
              A shared, deadline-first home for hackathons and updates, made with friends for the
              wider CET community.
            </p>
            <p class="portfolio-card-links">
              <a href="https://arinjilley.pages.dev/">Visit arinjilley?</a>
              <a href="https://github.com/AbhineethVS/arinjilley-web">GitHub</a>
            </p>
          </div>
        </section>
      </div>
    </article>
  )
}

PortfolioPage.afterDOMLoaded = mobileNavigationScript

export default (() => PortfolioPage) satisfies QuartzComponentConstructor
