import { useEffect, useState, useRef, useCallback } from 'react'
import {
  ArrowRight,
  MapPin,
  Zap,
  GitBranch,
  LineChart,
  Clock,
  Calendar,
  Video,
  CheckCircle2,
  Send,
  X,
  Bot,
  Workflow,
  UserPlus,
  Database,
  Sparkles,
  Plug,
  FileSpreadsheet,
  Mail,
  Linkedin,
  ExternalLink,
} from 'lucide-react'

const TOOL_ICONS = {
  n8n: 'https://cdn.simpleicons.org/n8n/EA4B71',
  Make: 'https://cdn.simpleicons.org/make/6D00CC',
  'Make.com': 'https://cdn.simpleicons.org/make/6D00CC',
  Zapier: 'https://cdn.simpleicons.org/zapier/FF4A00',
  MailerLite: 'https://www.google.com/s2/favicons?domain=mailerlite.com&sz=64',
  GoHighLevel: 'https://www.google.com/s2/favicons?domain=gohighlevel.com&sz=64',
  'Google Sheets': 'https://cdn.simpleicons.org/googlesheets/34A853',
  Gmail: 'https://cdn.simpleicons.org/gmail/EA4335',
  'Google Calendar': 'https://cdn.simpleicons.org/googlecalendar/4285F4',
  Asana: 'https://cdn.simpleicons.org/asana/F06A6A',
  Airtable: 'https://cdn.simpleicons.org/airtable/18BFFF',
  ClickUp: 'https://cdn.simpleicons.org/clickup/7B68EE',
  Slack: 'https://cdn.simpleicons.org/slack/4A154B',
  Discord: 'https://cdn.simpleicons.org/discord/5865F2',
  Calendly: 'https://cdn.simpleicons.org/calendly/006BFF',
  Vapi: 'https://www.google.com/s2/favicons?domain=vapi.ai&sz=64',
  Youform: 'https://www.google.com/s2/favicons?domain=youform.com&sz=64',
  HubSpot: 'https://cdn.simpleicons.org/hubspot/FF7A59',
  Pipedrive: 'https://cdn.simpleicons.org/pipedrive/017737',
  Telegram: 'https://cdn.simpleicons.org/telegram/26A5E4',
  OpenAI: 'https://cdn.simpleicons.org/openai/412991',
  Facebook: 'https://cdn.simpleicons.org/facebook/0866FF',
  LinkedIn: 'https://cdn.simpleicons.org/linkedin/0A66C2',
  'Google Drive': 'https://cdn.simpleicons.org/googledrive/4285F4',
  'Google Docs': 'https://cdn.simpleicons.org/googledocs/4285F4',
  Webhooks: 'https://cdn.simpleicons.org/webhook/6366F1',
  'Webhooks & REST': 'https://cdn.simpleicons.org/webhook/6366F1',
  REST: 'https://cdn.simpleicons.org/json/94A3B8',
  OAuth: 'https://cdn.simpleicons.org/auth0/EB5424',
  Sheets: 'https://cdn.simpleicons.org/googlesheets/34A853',
  Docs: 'https://cdn.simpleicons.org/googledocs/4285F4',
  Drive: 'https://cdn.simpleicons.org/googledrive/4285F4',
  Calendar: 'https://cdn.simpleicons.org/googlecalendar/4285F4',
  Messenger: 'https://cdn.simpleicons.org/messenger/0866FF',
}

function ToolIcon({ name, className = 'h-4 w-4' }) {
  const src = TOOL_ICONS[name]
  const [failed, setFailed] = useState(false)
  if (src && !failed) {
    return <img src={src} alt="" onError={() => setFailed(true)} className={`${className} rounded object-contain`} />
  }
  const mono = (name || '?').slice(0, 2)
  return (
    <span className={`inline-grid place-items-center rounded bg-white/[0.06] text-[0.55rem] font-semibold text-[var(--color-muted)] ${className}`}>
      {mono}
    </span>
  )
}

const NAV = [
  { id: 'about', label: 'Profile' },
  { id: 'works', label: 'Case studies' },
  { id: 'services', label: 'What I automate' },
  { id: 'process', label: 'Process' },
  { id: 'contact', label: 'Contact' },
]

const SERVICES = [
  {
    title: 'Lead-to-CRM Automation',
    icon: UserPlus,
    points: [
      'Capture inquiries from forms, ads, inboxes, and chat',
      'Qualify, enrich, and route the right leads to sales',
      'Keep your CRM accurate without double entry',
    ],
    tools: ['n8n', 'Zapier', 'GoHighLevel', 'HubSpot'],
  },
  {
    title: 'AI Support & Appointment Systems',
    icon: Bot,
    points: [
      'Controlled AI answers based on your approved knowledge',
      'Appointment booking, changes, and customer handoff',
      'Reliable workflows with validation and clear exceptions',
    ],
    tools: ['n8n', 'OpenAI', 'Vapi', 'Google Calendar'],
  },
  {
    title: 'Operations & Workflow Automation',
    icon: Workflow,
    points: [
      'Replace repetitive handoffs, alerts, and data entry',
      'Connect the tools your team already uses',
      'Create trackable systems with practical error handling',
    ],
    tools: ['Make.com', 'Zapier', 'Google Sheets', 'Webhooks'],
  },
]


const PROJECTS = [
  {
    num: '01',
    tag: 'Zapier',
    title: 'Content Repurposing Automation',
    result: 'One recording becomes publish-ready content across platforms without manual repurposing.',
    impact: 'Creates a repeatable production system, so content does not depend on manually recreating the same work in every channel.',
    summary: 'Content workflows redesigned to turn one recording into multiple pieces of publish-ready content across platforms.',
    image: '/projects/content-repurposing.png',
    imageLabel: 'Zapier · content-repurposing.png',
    goal: 'Create a repeatable content workflow that reduces manual repurposing work while keeping content organized and ready for publishing across multiple channels.',
    problem: 'Repurposing a single audio or video manually requires multiple repetitive steps: transcription, writing blog posts, creating social media posts, and logging each piece of content. Without automation, the process becomes time-consuming and difficult to manage consistently.',
    solution: 'Built the content repurposing workflow in Zapier (and demonstrated the same pattern in Make). The automation starts when a new audio or video file is added to a Google Drive or Microsoft folder, generates a transcript, creates two different blog posts, produces Instagram and LinkedIn posts, and logs each step in a Google or Microsoft Sheet.',
    features: [
      'Automated workflow triggered when a new audio or video file is added to a folder',
      'AI-powered transcription and content generation using OpenAI or a similar AI tool',
      'Two different blog posts generated from a single transcription',
      'Instagram and LinkedIn posts created for each article',
      'Automated logging of each content creation step in Google or Microsoft Sheets',
      'Filter paths that decide whether content should be posted based on title or article conditions',
      'Same workflow pattern demonstrated in both Zapier and Make',
    ],
    tools: ['Zapier', 'OpenAI', 'Google Drive', 'Google Sheets'],
    link: '',
  },
  {
    num: '02',
    tag: 'Zapier',
    title: 'Lead Enrichment & Qualification Automation',
    result: 'High-priority leads get researched, routed, and followed up without manual triage.',
    impact: 'Moves qualified prospects to the right person faster while separating low-priority follow-up from the sales team’s urgent work.',
    summary: 'Automated lead enrichment and qualification in Zapier to identify high-priority prospects and trigger the right sales follow-up.',
    image: '/projects/lead-enrichment.png',
    imageLabel: 'Zapier · lead-enrichment.png',
    goal: 'Help sales teams process incoming leads faster by automatically enriching lead information, separating high- and low-priority prospects, and triggering the right follow-up actions.',
    problem: 'Sales teams often need to manually research new leads, determine their priority, and decide how they should be followed up. This slows response times and can result in valuable prospects being overlooked.',
    solution: 'Built a Zapier workflow that captures incoming leads through a webhook, formats the company information, enriches the lead using an external service, and routes prospects through conditional Paths based on their qualification. High-priority leads are saved to Google Sheets, sent to the sales team through Slack, and passed to AI by Zapier to generate a personalized email before being sent through Gmail. Lower-priority leads follow a separate email workflow.',
    features: [
      'Real-time lead capture using Webhooks by Zapier',
      'Company URL formatting and lead data preparation',
      'Lead enrichment using an external enrichment service',
      'Zapier Paths for high- and low-priority lead routing',
      'High-priority leads logged in Google Sheets',
      'Automatic Slack notification to the sales team',
      'AI-generated personalized email drafts for qualified leads',
      'Gmail integration for automated lead follow-up',
      'Different workflows based on lead priority',
    ],
    tools: ['Zapier', 'Webhooks', 'Google Sheets', 'Slack', 'Gmail'],
    link: '',
  },
  {
    num: '03',
    tag: 'n8n',
    title: 'AI Gold Business Customer Support Agent',
    result: 'Fast, consistent answers to gold buying and selling questions from a controlled knowledge base.',
    impact: 'Gives customers an immediate first response while protecting accuracy with an approved source of truth.',
    summary: 'AI-powered support that validates messages and answers gold inquiries using documented business knowledge.',
    image: '/projects/gold-customer-support.png',
    imageLabel: 'n8n · gold-customer-support.png',
    goal: 'Provide customers with fast, consistent answers to gold buying and selling inquiries while reducing the need for staff to manually respond to repetitive questions.',
    problem: 'Customer inquiries about gold buying, selling, requirements, procedures, and business policies require accurate answers. Allowing an AI agent to answer without a controlled information source could result in incorrect or unreliable responses.',
    solution: 'Built an n8n customer support workflow that receives incoming messages through a webhook, filters and validates the request to help identify spam or bot traffic, and only allows valid inquiries to proceed. The workflow retrieves the business knowledge from Google Docs and passes it to an AI Agent powered by Google Gemini. The agent uses the stored documentation as its knowledge source and maintains conversation context through Simple Memory before generating a response that is sent back through an HTTP request.',
    features: [
      'Real-time customer message handling through a webhook',
      'Initial filtering and validation to help block spam and unwanted requests',
      'Google Docs used as the controlled business knowledge source',
      'AI Agent powered by Google Gemini',
      'Responses based on documented gold buying and selling information',
      'Conversation memory for maintaining context during interactions',
      'Automated response delivery through an HTTP request',
      'Knowledge-based approach that limits the AI from relying on unsupported information',
    ],
    tools: ['n8n', 'Google Gemini', 'Google Docs', 'Webhooks'],
    link: '',
  },
  {
    num: '04',
    tag: 'Vapi · n8n',
    title: 'AI Voice Appointment Scheduling System',
    result: 'Callers book, reschedule, or cancel appointments through natural phone conversations.',
    impact: 'Removes routine scheduling friction for callers and reduces the manual calendar work staff need to handle.',
    summary: 'AI voice scheduling for booking, availability checks, rescheduling, and cancellations.',
    image: '/projects/vapi-appointment.png',
    imageLabel: 'Vapi · n8n · vapi-appointment.png',
    goal: 'Give patients a faster and more convenient way to schedule and manage appointments by automating routine scheduling tasks through an AI voice assistant.',
    problem: 'Appointment scheduling often requires staff to manually check calendars, collect patient information, find suitable time slots, and manage rescheduling or cancellations. This creates repetitive work and can make the booking process slower for patients.',
    solution: 'Built an AI voice appointment scheduling system using Vapi with calendar automation and n8n workflows. The voice assistant guides callers through appointment requirements, checks real-time availability, books appointments, and handles rescheduling or cancellations. Custom workflows process calendar data, generate available time slots, convert times between time zones, and return scheduling results directly to the voice assistant.',
    features: [
      'AI voice assistant for natural appointment scheduling conversations',
      'Real-time calendar availability checking',
      'Automated appointment booking with patient details',
      'Appointment rescheduling and cancellation workflows',
      'Custom availability processing with 30-minute appointment slots',
      'Timezone conversion using America/Chicago (CST)',
      'Validation and handling of missing or invalid scheduling data',
      'Friendly error handling when requested slots are unavailable',
      'Call result processing including transcripts, recordings, summaries, and metadata',
    ],
    tools: ['Vapi', 'n8n', 'Calendar API'],
    link: '',
  },
  {
    num: '05',
    tag: 'GoHighLevel',
    title: 'GoHighLevel Lead Capture & Event Follow-Up',
    result: 'Registrants get reminders automatically and leads are qualified after the event.',
    impact: 'Keeps prospects moving from registration through post-event follow-up instead of relying on manual reminder work.',
    summary: 'Event registration, reminders, meeting details, and post-event qualification in GoHighLevel.',
    image: '/projects/ghl-event-funnel.png',
    imageLabel: 'GoHighLevel · ghl-event-funnel.png',
    goal: 'Increase event attendance and improve lead follow-up by automatically capturing registrants, delivering event information, sending timely reminders, and qualifying leads after the event.',
    problem: 'Manually managing event registrations and follow-ups can result in missed reminders, poor attendance, and leads being overlooked after the event. Prospects need the right information at the right time without constant manual follow-up.',
    solution: 'Built a GoHighLevel workflow that captures leads from the event funnel, provides them with the meeting/location link and event information, and automatically sends a sequence of email reminders leading up to the event. After the event, the workflow continues the follow-up process and qualifies leads based on their engagement and responses.',
    features: [
      'Automated lead capture through a GoHighLevel funnel',
      'Meeting and location details automatically delivered to registered leads',
      'Email reminder sent 1 day before the event',
      'Automated reminder 3 hours before the event',
      'Final reminder 1 hour before the event',
      'Post-event follow-up email 1 hour after the event',
      'Automated lead qualification after the event',
      'Structured sequence from registration through post-event qualification',
    ],
    tools: ['GoHighLevel', 'Email automation'],
    link: '',
  },
  {
    num: '06',
    tag: 'Funnel',
    title: 'Roofing Lead Capture & Qualification Funnel',
    result: 'Roofing prospects self-select a service and arrive as structured, prioritizable leads.',
    impact: 'Gives the sales team useful context before the first conversation, rather than treating every inquiry the same.',
    summary: 'Funnel that captures roofing prospects, identifies the service they need, and enriches lead data for follow-up.',
    image: '/projects/roofing-solutions.png',
    imageLabel: 'Funnel · roofing-solutions.png',
    goal: 'Generate and organize qualified roofing leads by giving prospects a clear way to identify the service they need while collecting information that can be used for sales follow-up.',
    problem: 'Roofing companies can receive inquiries for many different services, but treating every lead the same makes it harder to prioritize opportunities. Sales teams also need additional information about prospects to determine which leads are worth pursuing.',
    solution: 'Built a roofing services funnel that presents prospects with multiple service options and captures their interest based on the specific roofing service they need. The funnel supports lead qualification by identifying the requested service and enriches captured lead information to provide the sales team with more useful prospect data.',
    features: [
      'Lead capture through a dedicated roofing services funnel',
      'Service options including installation, repair, cleaning, insulation, emergency, and inspection',
      'Lead qualification based on the roofing service requested',
      'Lead enrichment to gather additional prospect information',
      'Structured lead data for sales follow-up',
      'Service-specific qualification to help prioritize prospects',
    ],
    tools: ['Lead funnel', 'Qualification', 'Enrichment'],
    link: '',
  },
]

const PROCESS = [
  { num: '01', title: 'Feasibility review', desc: 'Show me the manual process, tools involved, and where it currently slows your team down.' },
  { num: '02', title: 'Process map', desc: 'We define triggers, decisions, exceptions, ownership, and what a successful outcome looks like.' },
  { num: '03', title: 'System design', desc: 'I select the right tools and confirm exactly what the automation will and will not handle.' },
  { num: '04', title: 'Build', desc: 'I build clean, testable logic that fits the way your team already works.' },
  { num: '05', title: 'Test real scenarios', desc: 'We test normal cases, missing data, and edge cases before the system goes live.' },
  { num: '06', title: 'Launch & handover', desc: 'You receive deployment, documentation, and a walkthrough of the system you own.' },
]

const STACK = [
  {
    name: 'n8n',
    blurb: 'Self-hosted workflows & complex logic',
    featured: true,
  },
  {
    name: 'Make',
    blurb: 'Visual scenarios across apps',
    featured: true,
  },
  {
    name: 'Zapier',
    blurb: 'Fast zaps and team-ready automations',
    featured: true,
  },
  {
    name: 'MailerLite',
    blurb: 'Email sequences & list automations',
    featured: true,
  },
  {
    name: 'GoHighLevel',
    blurb: 'CRM, pipelines & funnel automation',
    featured: true,
  },
  // Supporting tools
  { name: 'Google Sheets' },
  { name: 'Gmail' },
  { name: 'Google Calendar' },
  { name: 'Asana' },
  { name: 'Airtable' },
  { name: 'ClickUp' },
  { name: 'Slack' },
  { name: 'Discord' },
  { name: 'Calendly' },
  { name: 'Vapi' },
  { name: 'Youform' },
  { name: 'Webhooks & REST' },
]

function AnimatedBackground() {
  const ref = useRef(null)
  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const LINK = 165
    const mouse = { x: -9999, y: -9999 }
    let w = 0, h = 0, nodes = [], pulses = [], raf = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(110, Math.floor((w * h) / 14000))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.3 + 0.7,
      }))
      pulses = []
      if (reduce) frame()
    }

    const frame = () => {
      ctx.clearRect(0, 0, w, h)
      for (const n of nodes) {
        if (!reduce) {
          n.x += n.vx
          n.y += n.vy
          if (n.x < -20) n.x = w + 20
          if (n.x > w + 20) n.x = -20
          if (n.y < -20) n.y = h + 20
          if (n.y > h + 20) n.y = -20
          const dx = n.x - mouse.x
          const dy = n.y - mouse.y
          const d2 = dx * dx + dy * dy
          if (d2 < 14000 && d2 > 1) {
            const f = 0.6 / Math.sqrt(d2)
            n.x += dx * f * 0.4
            n.y += dy * f * 0.4
          }
        }
      }
      // links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < LINK) {
            ctx.strokeStyle = `rgba(122,167,255,${(1 - d / LINK) * 0.3})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
        // mouse links
        const m = nodes[i]
        const md = Math.hypot(m.x - mouse.x, m.y - mouse.y)
        if (md < 180) {
          ctx.strokeStyle = `rgba(92,225,230,${(1 - md / 180) * 0.45})`
          ctx.beginPath()
          ctx.moveTo(m.x, m.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
        }
      }
      // nodes
      for (const n of nodes) {
        ctx.fillStyle = 'rgba(170,200,255,0.55)'
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fill()
      }
      if (reduce) return
      // data pulses travelling along links
      if (pulses.length < 7 && Math.random() < 0.05 && nodes.length > 2) {
        const a = Math.floor(Math.random() * nodes.length)
        let best = -1, bd = LINK
        for (let k = 0; k < nodes.length; k++) {
          if (k === a) continue
          const d = Math.hypot(nodes[a].x - nodes[k].x, nodes[a].y - nodes[k].y)
          if (d < bd && Math.random() < 0.5) { bd = d; best = k }
        }
        if (best >= 0) pulses.push({ a, b: best, t: 0 })
      }
      pulses = pulses.filter((p) => p.t < 1)
      for (const p of pulses) {
        p.t += 0.018
        const A = nodes[p.a], B = nodes[p.b]
        const x = A.x + (B.x - A.x) * p.t
        const y = A.y + (B.y - A.y) * p.t
        const g = ctx.createRadialGradient(x, y, 0, x, y, 14)
        g.addColorStop(0, 'rgba(92,225,230,0.95)')
        g.addColorStop(1, 'rgba(92,225,230,0)')
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(x, y, 14, 0, Math.PI * 2)
        ctx.fill()
      }
      raf = requestAnimationFrame(frame)
    }

    const onMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY }
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999 }
    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseleave', onLeave)
    if (!reduce) raf = requestAnimationFrame(frame)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <div className="bg-stage" aria-hidden>
      <div className="aurora aurora-a" />
      <div className="aurora aurora-b" />
      <div className="aurora aurora-c" />
      <div className="bg-grid" />
      <canvas ref={ref} />
    </div>
  )
}

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!els.length) return
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [ids])
  return active
}

function SpotlightCard({ className = '', children, ...props }) {
  const ref = useRef(null)
  const onMove = useCallback((e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
  }, [])
  return (
    <div ref={ref} onMouseMove={onMove} className={`spotlight ${className}`} {...props}>
      {children}
    </div>
  )
}

function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let t
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          t = setTimeout(() => setVisible(true), delay)
          obs.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    )
    obs.observe(el)
    return () => {
      clearTimeout(t)
      obs.disconnect()
    }
  }, [delay])
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(14px)',
        transition: 'opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {children}
    </div>
  )
}

/* Consistent, left-aligned section header used throughout */
function SectionHeader({ num, label, title, desc, wide = false }) {
  return (
    <Reveal>
      <div className={`mb-12 sm:mb-14 ${wide ? 'max-w-5xl' : 'max-w-2xl'}`}>
        <div className="font-mono mb-5 flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.16em] text-[var(--color-faint)]">
          <span className="text-[var(--color-blue)]">{num}</span>
          <span className="h-px w-8 bg-[var(--color-border-strong)]" />
          <span>{label}</span>
        </div>
        <h2 className="font-display text-balance text-[clamp(2rem,3.8vw,3rem)] leading-[1.08]">{title}</h2>
        {desc && <p className="mt-5 text-[1.02rem] leading-relaxed text-[var(--color-muted)]">{desc}</p>}
      </div>
    </Reveal>
  )
}

const WRAP = 'mx-auto max-w-[1160px] px-6 sm:px-8'

function Nav({ active }) {
  return (
    <nav className="fixed left-1/2 top-4 z-50 flex w-[min(1160px,calc(100%-2rem))] -translate-x-1/2 items-center justify-between gap-4 rounded-full border border-[var(--color-border)] bg-[rgba(5,8,14,0.6)] py-2 pl-5 pr-2 backdrop-blur-xl">
      <a href="#top" className="flex items-center gap-3 text-[var(--color-ink)] no-underline">
        <span className="font-display text-[1.25rem] font-bold leading-none tracking-tight">
          V<em>A</em>
        </span>
        <span className="hidden h-4 w-px bg-[var(--color-border-strong)] sm:block" />
        <span className="hidden text-[0.78rem] font-medium tracking-wide text-[var(--color-muted)] sm:block">
          Vincent Anthony Abellana
        </span>
      </a>

      <ul className="hidden list-none items-center gap-1 p-0 md:flex">
        {NAV.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`inline-block rounded-full px-3.5 py-1.5 text-[0.82rem] font-medium no-underline transition-colors ${
                active === item.id ? 'bg-white/[0.07] text-[var(--color-ink)]' : 'text-[var(--color-muted)] hover:text-[var(--color-ink)]'
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-[var(--color-ink)] px-4 py-2 text-[0.8rem] font-medium text-[#04060c] no-underline transition hover:bg-white"
      >
        Get in touch <ArrowRight size={14} />
      </a>
    </nav>
  )
}

function FlowDiagram() {
  const nodes = [
    { cls: 'n1', label: 'New lead' },
    { cls: 'n2', label: 'Form submit' },
    { cls: 'n3', label: 'CRM sync' },
    { cls: 'n4', label: 'Team alert' },
    { cls: 'n5', label: 'Email' },
    { cls: 'n6', label: 'Webhook' },
  ]
  const lines = [
    { x2: 200, y2: 52, d: '0s' },
    { x2: 348, y2: 120, d: '0.7s' },
    { x2: 344, y2: 280, d: '1.4s' },
    { x2: 200, y2: 348, d: '2.1s' },
    { x2: 56, y2: 280, d: '2.8s' },
    { x2: 52, y2: 120, d: '3.5s' },
  ]
  return (
    <div className="hero-visual-wrap" aria-hidden>
      <div className="hero-visual-ring" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400" fill="none">
        <g stroke="rgba(255,255,255,0.14)" strokeWidth="1" strokeDasharray="3 6">
          {lines.map((l, i) => (
            <line key={i} x1="200" y1="200" x2={l.x2} y2={l.y2} />
          ))}
        </g>
        {lines.map((p, i) => (
          <circle key={i} r="2.5" fill="var(--color-blue)">
            <animate attributeName="cx" values={`200;${p.x2};200`} dur="4.2s" begin={p.d} repeatCount="indefinite" />
            <animate attributeName="cy" values={`200;${p.y2};200`} dur="4.2s" begin={p.d} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;1;1;0" dur="4.2s" begin={p.d} repeatCount="indefinite" />
          </circle>
        ))}
      </svg>
      <div className="hero-core">
        <Zap size={32} strokeWidth={1.6} />
      </div>
      {nodes.map((n) => (
        <div key={n.cls} className={`hero-node ${n.cls}`}>
          <span className="dot" />
          {n.label}
        </div>
      ))}
    </div>
  )
}

function Hero() {
  return (
    <header
      id="top"
      className={`${WRAP} grid min-h-[100dvh] grid-cols-1 items-center gap-10 pb-20 pt-32 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6`}
    >
      <div>
        <div className="chip mb-8 !px-3.5 !py-1.5 !text-[0.78rem] text-[var(--color-ink)]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for work
        </div>
        <h1 className="font-display max-w-[15ch] text-[clamp(2.7rem,5.6vw,4.7rem)] leading-[1.02]">
          Stop losing leads and time to <em>manual work</em>.
        </h1>
        <p className="mb-10 mt-8 max-w-[34rem] text-[1.08rem] leading-relaxed text-[var(--color-muted)]">
          I help service businesses capture, qualify, and follow up with every lead automatically—so their teams spend less time on admin and more time serving customers.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#contact" className="btn-primary">
            Get a feasibility review <ArrowRight size={16} />
          </a>
          <a href="#works" className="btn-ghost">
            See case studies
          </a>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.84rem] text-[var(--color-faint)]">
          <span className="inline-flex items-center gap-2">
            <CheckCircle2 size={14} className="text-[var(--color-blue)]" /> Replies within 24h
          </span>
          <span className="inline-flex items-center gap-2">
            <CheckCircle2 size={14} className="text-[var(--color-blue)]" /> Free feasibility review
          </span>
        </div>
      </div>
      <div className="order-first flex items-center justify-center lg:order-none" aria-hidden>
        <FlowDiagram />
      </div>
    </header>
  )
}

function TrustBar() {
  const tools = ['n8n', 'Make', 'Zapier', 'MailerLite', 'GoHighLevel']
  return (
    <Reveal>
      <div className={WRAP}>
        <div className="flex flex-col items-start gap-5 border-y border-[var(--color-border)] py-7 md:flex-row md:items-center md:justify-between">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--color-faint)]">
            Built with
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {tools.map((name) => (
              <span key={name} className="inline-flex items-center gap-2.5 text-[0.95rem] font-medium text-[var(--color-muted)]">
                <ToolIcon name={name} className="h-5 w-5" />
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  )
}

function Projects() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (!active) return
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active])

  const Block = ({ title, children }) => (
    <div className="mb-8">
      <h4 className="mb-2.5 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-[var(--color-faint)]">{title}</h4>
      {children}
    </div>
  )

  return (
    <section id="works" className={`${WRAP} py-24 sm:py-32`}>
      <SectionHeader
        num="02"
        label="Case studies"
        title={<>Systems built around real <em>operational</em> problems.</>}
        desc="Explore the problem, the system design, and the intended business impact behind each build."
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <Reveal key={`${p.num}-${p.title}`} delay={(i % 3) * 60} className="h-full">
            <button
              type="button"
              onClick={() => setActive(p)}
              className="group h-full w-full cursor-pointer border-0 bg-transparent p-0 text-left text-inherit"
            >
              <SpotlightCard className="card card-hover flex h-full flex-col p-3">
                <div className="relative overflow-hidden rounded-[12px] border border-[var(--color-border)] bg-[var(--color-bg)]">
                  <div className="aspect-[16/10]">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="grid h-full place-items-center">
                        <Zap size={22} className="text-[var(--color-blue)]" />
                      </div>
                    )}
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(9,9,11,0.35)] via-transparent to-transparent" />
                </div>

                <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
                  <div className="mb-3 flex items-center justify-between text-[0.72rem] font-medium uppercase tracking-[0.14em] text-[var(--color-faint)]">
                    <span className="text-[var(--color-blue)]">{p.num}</span>
                    <span>{p.tag}</span>
                  </div>
                  <h3 className="font-display mb-3 text-[1.3rem] leading-[1.2]">{p.title}</h3>
                  <p className="mb-5 line-clamp-3 text-[0.9rem] leading-relaxed text-[var(--color-muted)]">{p.result}</p>
                  {p.tools?.length > 0 && (
                    <div className="mb-5 flex flex-wrap gap-1.5">
                      {p.tools.slice(0, 3).map((t) => (
                        <span key={t} className="chip">
                          <ToolIcon name={t} className="h-3.5 w-3.5" />
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                  <span className="mt-auto inline-flex items-center gap-2 text-[0.85rem] font-medium text-[var(--color-ink)] transition-all group-hover:gap-3">
                    Read case study <ArrowRight size={15} className="text-[var(--color-blue)]" />
                  </span>
                </div>
              </SpotlightCard>
            </button>
          </Reveal>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[200] flex items-end justify-center p-0 sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <button
            type="button"
            className="absolute inset-0 border-0 bg-black/70 backdrop-blur-sm"
            aria-label="Close project details"
            onClick={() => setActive(null)}
          />
          <div className="relative z-[1] flex max-h-[94vh] w-full max-w-[760px] flex-col overflow-hidden rounded-t-[24px] border border-[var(--color-border-strong)] bg-[var(--color-surface)] shadow-[var(--shadow-lift)] sm:rounded-[24px]">
            <div className="flex items-start justify-between gap-4 border-b border-[var(--color-border)] px-6 py-5 sm:px-8">
              <div className="min-w-0">
                <div className="mb-2 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[var(--color-blue)]">
                  {active.num} · {active.tag}
                </div>
                <h3 id="project-modal-title" className="font-display text-[1.5rem] leading-tight sm:text-[1.8rem]">
                  {active.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[var(--color-border)] text-[var(--color-muted)] transition hover:border-[var(--color-border-strong)] hover:text-[var(--color-ink)]"
                aria-label="Close"
              >
                <X size={17} />
              </button>
            </div>

            <div className="overflow-y-auto px-6 py-7 sm:px-8 sm:py-8">
              <div className="mb-8 overflow-hidden rounded-[14px] border border-[var(--color-border)] bg-[var(--color-bg)]">
                <div className="flex items-center gap-2 border-b border-[var(--color-border)] px-3.5 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="ml-2 truncate text-[0.72rem] text-[var(--color-faint)]">
                    {active.imageLabel || `${active.tag} · project`}
                  </span>
                </div>
                <div className="flex min-h-[180px] items-center justify-center">
                  {active.image ? (
                    <img src={active.image} alt={active.title} className="max-h-[380px] w-full object-contain p-3" />
                  ) : (
                    <div className="px-6 py-10 text-center text-[0.82rem] text-[var(--color-muted)]">
                      Add a screenshot at <code>public/projects/</code> and set <code>image</code> on this project.
                    </div>
                  )}
                </div>
              </div>

              {active.result && (
                <p className="font-display mb-9 border-l-2 border-[var(--color-blue)] pl-5 text-[1.2rem] font-medium leading-snug text-[var(--color-ink)]">
                  {active.result}
                </p>
              )}

              {active.goal && (
                <Block title="Business goal">
                  <p className="text-[0.98rem] leading-relaxed text-[var(--color-muted)]">{active.goal}</p>
                </Block>
              )}
              {active.problem && (
                <Block title="Problem">
                  <p className="text-[0.98rem] leading-relaxed text-[var(--color-muted)]">{active.problem}</p>
                </Block>
              )}
              {active.solution && (
                <Block title="Solution">
                  <p className="text-[0.98rem] leading-relaxed text-[var(--color-muted)]">{active.solution}</p>
                </Block>
              )}
              {active.impact && (
                <div className="mb-8 rounded-[14px] border border-[var(--color-border)] bg-white/[0.025] p-5">
                  <h4 className="mb-2.5 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-[var(--color-blue)]">
                    Business impact
                  </h4>
                  <p className="text-[0.98rem] leading-relaxed text-[var(--color-ink)]">{active.impact}</p>
                </div>
              )}
              {active.features?.length > 0 && (
                <Block title="Key features">
                  <ul className="m-0 list-none space-y-3 p-0">
                    {active.features.map((item) => (
                      <li key={item} className="flex gap-3 text-[0.94rem] leading-relaxed text-[var(--color-muted)]">
                        <span className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-[var(--color-blue)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Block>
              )}
              {active.tools?.length > 0 && (
                <Block title="Tools">
                  <div className="flex flex-wrap gap-2">
                    {active.tools.map((t) => (
                      <span key={t} className="chip !text-[0.8rem]">
                        <ToolIcon name={t} className="h-3.5 w-3.5" />
                        {t}
                      </span>
                    ))}
                  </div>
                </Block>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--color-border)] px-6 py-4 sm:px-8">
              <button type="button" onClick={() => setActive(null)} className="btn-ghost !px-5 !py-2 !text-[0.85rem]">
                Close
              </button>
              {active.link ? (
                <a href={active.link} target="_blank" rel="noreferrer" className="btn-primary !px-5 !py-2 !text-[0.85rem]">
                  Open link <ArrowRight size={15} />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

function Services() {
  return (
    <section id="services" className={`${WRAP} py-24 sm:py-32`}>
      <SectionHeader
        num="03"
        label="What I automate"
        title={<>Automation that protects <em>revenue</em> and frees your team.</>}
        desc="I focus on systems that protect revenue, reduce repetitive workload, and make the next action obvious for your team."
      />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {SERVICES.map((s, i) => {
          const Icon = s.icon
          return (
            <Reveal key={s.title} delay={i * 70} className="h-full">
              <SpotlightCard className="card card-hover flex h-full flex-col p-7">
                <div className="mb-8 flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-[12px] border border-[var(--color-border-strong)] bg-white/[0.03]">
                    <Icon size={20} className="text-[var(--color-blue)]" strokeWidth={1.6} />
                  </div>
                  <span className="font-display text-[1.1rem] text-[var(--color-faint)]">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-display mb-5 text-[1.35rem] leading-[1.2]">{s.title}</h3>
                <ul className="mb-8 flex flex-1 list-none flex-col gap-3.5 p-0">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3 text-[0.92rem] leading-snug text-[var(--color-muted)]">
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-[var(--color-blue)]" strokeWidth={1.8} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                {s.tools?.length > 0 && (
                  <div className="mt-auto flex flex-wrap gap-1.5 border-t border-[var(--color-border)] pt-5">
                    {s.tools.map((t) => (
                      <span key={t} className="chip">
                        <ToolIcon name={t} className="h-3.5 w-3.5" />
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </SpotlightCard>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

function About() {
  const benefits = [
    { icon: Zap, title: 'Faster responses', text: 'Every inquiry is captured, qualified, and routed to the right person right away.' },
    { icon: Database, title: 'Cleaner data', text: 'Your CRM stays accurate without double entry or manual copy-pasting.' },
    { icon: CheckCircle2, title: 'A system you own', text: 'Tested against real scenarios and handed over with documentation.' },
  ]
  return (
    <section id="about" className={`${WRAP} py-24 sm:py-32`}>
      <SectionHeader
        num="01"
        label="Profile"
        wide
        title={<>I help service businesses stop losing leads because of <em>slow follow-up</em>.</>}
      />
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
        <Reveal>
          <div className="max-w-[360px] lg:max-w-none">
            <div className="aspect-[4/5] overflow-hidden rounded-[20px] border border-[var(--color-border)] bg-[var(--color-card)]">
              <img
                src="/Profile.png"
                alt="Vincent Anthony Abellana"
                className="h-full w-full object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="card mt-4 grid grid-cols-1 divide-y divide-[var(--color-border)] !rounded-[16px] text-[0.86rem]">
              {[
                { icon: MapPin, label: 'Based in', value: 'Cebu, Philippines · UTC+8' },
                { icon: Clock, label: 'Response time', value: 'Within 24 hours' },
                { icon: Workflow, label: 'Works with', value: 'Clients worldwide' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center justify-between gap-4 px-4 py-3">
                  <span className="inline-flex items-center gap-2 text-[var(--color-faint)]">
                    <Icon size={14} className="text-[var(--color-blue)]" /> {label}
                  </span>
                  <span className="text-right font-medium text-[var(--color-ink)]">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="space-y-6 text-[1.04rem] leading-[1.75] text-[var(--color-muted)]">
            <p className="font-display text-[1.45rem] font-medium leading-[1.35] tracking-[-0.02em] text-[var(--color-ink)]">
              Hi, I&apos;m Vincent, an automation specialist. I build systems that capture, qualify, and follow up with every lead automatically, so your team can focus on serving customers.
            </p>
            <p>
              Most teams don&apos;t lose leads because of bad marketing. They lose them in the gaps: a form that never reaches the CRM, a follow-up that waits until Monday, a spreadsheet nobody updated. I find those gaps and close them with workflows that run on their own.
            </p>
            <p>
              I build with <strong className="font-medium text-[var(--color-ink)]">n8n, Make, Zapier, and GoHighLevel</strong>, connecting the tools your team already uses and adding AI only where it genuinely helps, like support replies and voice appointment booking.
            </p>

            <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3">
              {benefits.map(({ icon: Icon, title, text }) => (
                <div key={title} className="card !rounded-[16px] p-4">
                  <Icon size={17} className="mb-3 text-[var(--color-blue)]" strokeWidth={1.8} />
                  <h4 className="mb-1.5 text-[0.92rem] font-medium text-[var(--color-ink)]">{title}</h4>
                  <p className="text-[0.82rem] leading-relaxed text-[var(--color-muted)]">{text}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {['Lead follow-up', 'CRM integration', 'AI support & booking', 'Service operations'].map((t) => (
                <span key={t} className="chip !px-3.5 !py-1.5 !text-[0.8rem] text-[var(--color-ink)]">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-3">
              <a href="#contact" className="btn-primary">
                Get a free feasibility review <ArrowRight size={16} />
              </a>
              <a href="#works" className="btn-ghost">
                See my work
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section id="process" className={`${WRAP} py-24 sm:py-32`}>
      <SectionHeader
        num="04"
        label="Process"
        title={<>A practical path from bottleneck to a <em>working system</em>.</>}
        desc="A clear scope, a reliable build, and a system your team can understand after launch."
      />
      <div className="grid grid-cols-1 border-l border-t border-[var(--color-border)] sm:grid-cols-2 lg:grid-cols-3">
        {PROCESS.map((step, i) => (
          <Reveal key={step.num} delay={(i % 3) * 60}>
            <div className="h-full border-b border-r border-[var(--color-border)] p-7 transition-colors hover:bg-white/[0.02] sm:p-8">
              <div className="font-display mb-6 text-[2rem] leading-none text-[var(--color-blue)]/80">{step.num}</div>
              <h4 className="mb-2 text-[1.02rem] font-medium text-[var(--color-ink)]">{step.title}</h4>
              <p className="text-[0.9rem] leading-relaxed text-[var(--color-muted)]">{step.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Stack() {
  const featured = STACK.filter((s) => s.featured)
  const more = STACK.filter((s) => !s.featured)
  return (
    <section id="stack" className={`${WRAP} py-24 sm:py-32`}>
      <SectionHeader
        num="05"
        label="Toolkit"
        title={<>Tools I build with <em>every day</em>.</>}
        desc="Core platforms I use to design, connect, and ship automation systems."
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((s, i) => (
          <Reveal key={s.name} delay={(i % 3) * 50} className="h-full">
            <SpotlightCard className="card card-hover flex h-full items-start gap-4 p-6">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[12px] border border-[var(--color-border-strong)] bg-white/[0.03]">
                <ToolIcon name={s.name} className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-[1.02rem] font-medium text-[var(--color-ink)]">{s.name}</h3>
                <p className="mt-1 text-[0.88rem] leading-relaxed text-[var(--color-muted)]">{s.blurb}</p>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
      {more.length > 0 && (
        <Reveal>
          <div className="mt-12">
            <p className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--color-faint)]">Also work with</p>
            <div className="flex flex-wrap gap-2.5">
              {more.map((s) => (
                <span key={s.name} className="chip !px-3.5 !py-2 !text-[0.85rem] transition hover:border-[var(--color-border-strong)] hover:text-[var(--color-ink)]">
                  <ToolIcon name={s.name} className="h-4 w-4" />
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      )}
    </section>
  )
}

function Education() {
  return (
    <section id="education" className={`${WRAP} py-16 sm:py-24`}>
      <Reveal>
        <div className="grid grid-cols-1 gap-6 border-t border-[var(--color-border)] pt-12 md:grid-cols-[1fr_2fr] md:gap-12">
          <div className="flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--color-faint)]">
            <span className="text-[var(--color-blue)]">06</span>
            <span className="h-px w-8 bg-[var(--color-border-strong)]" />
            <span>Education</span>
          </div>
          <div>
            <h3 className="font-display text-[1.5rem] leading-tight">Bachelor of Science in Information Technology</h3>
            <p className="mt-2 text-[0.95rem] text-[var(--color-muted)]">St. Cecelia&apos;s College (SCC) · 2020 to 2025</p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%]"
        aria-hidden
        style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(138,180,255,0.09), transparent 70%)' }}
      />
      <div className={`${WRAP} relative`}>
        <Reveal>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="chip mb-8 !px-3.5 !py-1.5 !text-[0.78rem] text-[var(--color-ink)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for projects
            </div>
            <h2 className="font-display text-[clamp(2.2rem,4.6vw,3.6rem)] leading-[1.06]">
              Have a process that should not need a person <em>every time</em>?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-[var(--color-muted)]">
              Send the workflow, tools involved, and the point where it slows your team down. I&apos;ll tell you what can be automated and whether it is worth building.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-5">
            <Reveal delay={40} className="flex-1">
              <a
                href="mailto:virtualvincentanthony@gmail.com?subject=Automation%20project%20inquiry"
                className="card card-hover group flex h-full flex-col p-7 no-underline"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-[12px] border border-[var(--color-border-strong)] bg-white/[0.03] text-[var(--color-blue)]">
                    <Mail size={20} strokeWidth={1.6} />
                  </div>
                  <span className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-[var(--color-blue)]">Preferred</span>
                </div>
                <p className="font-display mb-3 text-[1.45rem] leading-tight text-[var(--color-ink)]">Request a feasibility review</p>
                <p className="mb-6 break-all text-[0.92rem] text-[var(--color-muted)]">virtualvincentanthony@gmail.com</p>
                <span className="mt-auto inline-flex items-center gap-2 text-[0.88rem] font-medium text-[var(--color-ink)] transition-all group-hover:gap-3">
                  Start the conversation <ArrowRight size={16} className="text-[var(--color-blue)]" />
                </span>
              </a>
            </Reveal>

            <Reveal delay={70} className="flex-1">
              <a
                href="https://www.linkedin.com/in/vincent-anthony-134912151/"
                target="_blank"
                rel="noreferrer"
                className="card card-hover group flex h-full flex-col p-7 no-underline"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-[12px] border border-[var(--color-border-strong)] bg-white/[0.03] text-[var(--color-blue)]">
                    <Linkedin size={20} strokeWidth={1.6} />
                  </div>
                  <span className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-[var(--color-faint)]">LinkedIn</span>
                </div>
                <p className="font-display mb-3 text-[1.45rem] leading-tight text-[var(--color-ink)]">Connect on LinkedIn</p>
                <p className="mb-6 text-[0.92rem] text-[var(--color-muted)]">Best for project inquiries, collaborations, and quick intros.</p>
                <span className="mt-auto inline-flex items-center gap-2 text-[0.88rem] font-medium text-[var(--color-ink)] transition-all group-hover:gap-3">
                  View profile <ExternalLink size={15} className="text-[var(--color-blue)]" />
                </span>
              </a>
            </Reveal>
          </div>

          <Reveal delay={90} className="h-full">
            <div className="card flex h-full flex-col overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--color-border)] px-6 py-5">
                <div>
                  <p className="mb-1 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-[var(--color-blue)]">Schedule a meeting</p>
                  <h3 className="font-display text-[1.3rem] leading-tight">Book a 15-minute call</h3>
                </div>
                <div className="flex gap-4 text-[0.8rem] text-[var(--color-muted)]">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={14} className="text-[var(--color-blue)]" /> 15 min
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Video size={14} className="text-[var(--color-blue)]" /> Video
                  </span>
                </div>
              </div>
              <div className="min-h-[620px] flex-1 overflow-hidden bg-[#0a0e17]">
                <iframe
                  title="Schedule a meeting"
                  src="https://calendly.com/alexiskinabangan/30min?hide_gdpr_banner=1&background_color=0a0e17&text_color=f4f4f5&primary_color=7aa7ff"
                  className="h-full min-h-[620px] w-full border-0"
                />
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[0.86rem] text-[var(--color-faint)]">
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 size={14} className="text-[var(--color-blue)]" /> Reply within 24 hours
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin size={14} className="text-[var(--color-blue)]" /> Philippines · UTC+8
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock size={14} className="text-[var(--color-blue)]" /> One business day worldwide
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] px-8 py-10 text-center text-[0.8rem] text-[var(--color-faint)]">
      <p>© {new Date().getFullYear()} Vincent Anthony Abellana · Automation Specialist</p>
    </footer>
  )
}

export default function App() {
  const active = useActiveSection(NAV.map((n) => n.id))
  return (
    <>
      <AnimatedBackground />
      <Nav active={active} />
      <Hero />
      <About />
      <TrustBar />
      <Projects />
      <Services />
      <Process />
      <Stack />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}
