export const site = {
  name: 'Abhishek Sutaria',
  initials: 'AS',
  title: 'AI Engineer & Data Scientist',
  email: 'abhishek.sutaria@gmail.com',
  phone: '+1 (930) 333-7194',
  location: 'Bloomington, IN',
  resumeUrl: '/Abhishek_Sutaria_Resume.pdf',
  links: {
    email: 'mailto:abhishek.sutaria@gmail.com',
    github: 'https://github.com/abhishek-sutaria',
    linkedin: 'https://www.linkedin.com/in/abhishek-sutaria',
  },
}

export type NavItem = {
  label: string
  to: string
}

export const nav: NavItem[] = [
  { label: 'About', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/experience' },
]

export type LinkedPhrase = {
  text: string
  href?: string
}

export type BioParagraph = LinkedPhrase[]

/** Short essay-style About page, modeled on neelsomani.com */
export const aboutParagraphs: BioParagraph[] = [
  [
    {
      text: 'I build production AI systems, mostly multi-agent LLM applications, real-time voice pipelines, and the data infrastructure underneath them.',
    },
  ],
  [
    { text: 'Two years as a data engineer at ' },
    {
      text: 'Edelweiss Global Markets',
      href: 'https://www.edelweissfin.com/',
    },
    {
      text: ' running Airflow and PySpark pipelines over 1TB/day of equities and futures data, then an MS in Data Science at ',
    },
    {
      text: 'Indiana University Bloomington',
      href: 'https://luddy.indiana.edu/',
    },
    { text: '. Since then: clinical Text-to-SQL serving 15+ clinicians at ' },
    { text: 'Digbi Health', href: 'https://digbihealth.com/' },
    { text: ', multi-agent RAG at the ' },
    {
      text: 'Kelley School of Business',
      href: 'https://kelley.iu.edu/',
    },
    { text: ', and LLM classification of 100K+ nonprofit missions at Project 990.' },
  ],
  [
    { text: 'The two projects I\'d point you to first are ' },
    {
      text: 'CareBridge',
      href: 'https://github.com/abhishek-sutaria/CareBridge',
    },
    {
      text: ', a multi-agent post-discharge care platform that took 2nd at the Claude Hackathon, and UnStutter AI, a real-time speech accessibility tool that won the Honeywell Hackathon at NSBE 2026 against 35+ teams. Also ',
    },
    {
      text: 'model readiness tooling',
      href: 'https://modelready.onrender.com',
    },
    { text: '.' },
  ],
  [
    { text: 'Open to AI/ML engineering roles. ' },
    {
      text: 'abhishek.sutaria@gmail.com',
      href: 'mailto:abhishek.sutaria@gmail.com',
    },
  ],
]

export const socialLinks = [
  { label: 'Email', href: site.links.email },
  { label: 'LinkedIn', href: site.links.linkedin },
  { label: 'GitHub', href: site.links.github },
  { label: 'Resume', href: site.resumeUrl },
]

export type ProjectItem = {
  name: string
  year: string
  summary: string
  href?: string
}

export const projects: ProjectItem[] = [
  {
    name: 'ModelReady',
    year: '2026',
    summary:
      'End-to-end product that decides whether an LLM is ready for production by combining quality and SLA/performance gates into a single readiness verdict.',
    href: 'https://modelready.onrender.com',
  },
  {
    name: 'UnStutter AI',
    year: '2026',
    summary:
      '1st Place, Honeywell Hackathon @ NSBE 2026 — real-time speech accessibility tool for 70M+ people affected by speech disfluencies.',
  },
  {
    name: 'CareBridge',
    year: '2026',
    summary:
      '2nd Place, Claude Hackathon — multi-agent AI platform automating post-discharge patient follow-ups to reduce hospital readmissions.',
    href: 'https://github.com/abhishek-sutaria/CareBridge',
  },
  {
    name: 'AI Digital Twin of a Professor',
    year: '2025',
    summary:
      'Multi-agent RAG tutoring system with CrewAI/LangChain, Whisper ASR, ElevenLabs TTS, and WebRTC voice UI under 1.2s end-to-end latency.',
    href: 'https://github.com/abhishek-sutaria/digital-professor-research',
  },
  {
    name: 'MeetSmart',
    year: '2025',
    summary:
      'Real-time meeting intelligence with FastAPI and Whisper ASR across 5+ languages — cutting post-meeting documentation time by 80%.',
    href: 'https://github.com/abhishek-sutaria/Luddy_hackathon_2025',
  },
  {
    name: 'Real-Time Trade Anomaly Detection',
    year: '2025',
    summary:
      'Kafka + PySpark Streaming ensemble (Isolation Forest + XGBoost) detecting spoofing patterns at 91% precision and 88% recall.',
  },
  {
    name: 'FinEdu.ai',
    year: '2024',
    summary:
      'Llama-2-7B RAG assistant for finance education — Sentence-Transformers, LlamaIndex, and a Gradio interface for beginner-friendly explanations.',
    href: 'https://github.com/abhishek-sutaria/FinEdu-LLM',
  },
  {
    name: 'Diabetic Retinopathy Detection',
    year: '2021',
    summary:
      'CNN + DR-GAN system achieving 92.3% accuracy across severity stages. 1st Place, IETE-SF DJ Spark; state-level publication.',
    href: 'https://github.com/abhishek-sutaria/Diabetic-Retinopathy',
  },
  {
    name: 'Smart Energy Grids',
    year: '2022',
    summary:
      'Solar radiation forecasting with tuned Random Forests (72% accuracy, +25% vs baselines). Published in Design Engineering Journal; 82+ citations.',
    href: 'https://github.com/abhishek-sutaria/Smart-Energy-Grids-Using-ML',
  },
  {
    name: 'Future of Jobs',
    year: '2026',
    summary: 'Interactive exploration of how AI reshapes labor markets and skill demand.',
    href: 'https://future-of-jobs.vercel.app',
  },
]

export type ExperienceItem = {
  role: string
  org: string
  dates: string
  summary: string
  href?: string
}

export const experience: ExperienceItem[] = [
  {
    role: 'AI Research Engineer',
    org: 'Kelley School of Business, Indiana University',
    dates: 'Sep 2025 – Present',
    summary:
      'Multi-agent RAG tutoring over multimodal academic data (+35% quiz scores in pilot); Whisper + ElevenLabs WebRTC voice UI under 1.2s latency.',
    href: 'https://kelley.iu.edu/',
  },
  {
    role: 'AI Engineer',
    org: 'Project 990 Inc',
    dates: 'Jan 2026 – May 2026',
    summary:
      'Led LLM classification of 100K+ nonprofit missions into 27 NTEE codes (Llama 3.3 70B / Gemma); analytics over 2.97M IRS 990 records across 3,000+ counties.',
  },
  {
    role: 'Data Science Intern',
    org: 'Digbi Health',
    dates: 'Jun 2025 – Nov 2025',
    summary:
      'FastAPI + PostgreSQL clinical data APIs (−40% preprocessing); MCP Text-to-SQL so 15+ clinicians query claims without writing SQL.',
    href: 'https://digbihealth.com/',
  },
  {
    role: 'Research Intern',
    org: 'Indiana University Indianapolis',
    dates: 'May 2025 – Jul 2025',
    summary:
      'Generative modeling pipeline with CycleGAN, VAE-RNN, and Diffusion models; containerized PyTorch Lightning workflows for reproducible temporal prediction.',
  },
  {
    role: 'Data Engineer',
    org: 'Edelweiss Global Markets',
    dates: 'Jul 2022 – Aug 2024',
    summary:
      '40+ Airflow/PySpark ETL pipelines processing 1TB/day; Great Expectations validation (85%→98% integrity); PySpark-on-K8s into ClickHouse for 1M+ TBT records/day.',
  },
]

export const education = {
  graduate: {
    school: 'Indiana University Bloomington',
    degree: 'Master of Science in Data Science',
    dates: 'Aug 2024 – May 2026',
    gpa: '3.72 / 4.0',
  },
  undergrad: {
    school: 'University of Mumbai',
    degree: 'B.E. Electronics & Telecommunication · Honors in AI/ML',
    dates: 'Jun 2018 – May 2022',
    gpa: '3.9 / 4.0',
  },
}
