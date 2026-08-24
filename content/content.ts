// ============================================================================
//  THIS IS THE ONLY FILE YOU NEED TO EDIT TO UPDATE YOUR PORTFOLIO.
//  Everything on the website is read from here.
//
//  Rules of thumb:
//   - Text goes inside "quotes".
//   - Lists are inside [square brackets], each item separated by a comma.
//   - To hide a button or a link, set it to an empty string: ""
//   - Files (certificates, screenshots, PDFs) live in /public/assets/...
//     and are written here as a path starting with /assets/...
//   - After editing: save, commit, push. Vercel redeploys automatically.
//     See "How to Update My Portfolio" in README.md.
// ============================================================================

import type {
  Award,
  Certificate,
  Education,
  Experience,
  Impact,
  JourneyStep,
  Links,
  Profile,
  Project,
  Proof,
  Research,
  SkillGroup,
} from "./types";

// ---------------------------------------------------------------------------
// 1. PROFILE  (hero section + SEO / link previews)
// ---------------------------------------------------------------------------
export const profile: Profile = {
  name: "Fathima Sana",
  tagline: "AI • Business • Technology",
  intro:
    "Commerce graduate from Abu Dhabi exploring the intersection of Artificial Intelligence, business, and real-world problem solving.",
  location: "Abu Dhabi, United Arab Emirates",
  seoTitle: "Fathima Sana — AI • Business • Technology",
  seoDescription:
    "Technical and AI portfolio of Fathima Sana: voice AI and applied AI projects, hackathon awards, research on AI in UAE SMEs, and certifications.",
  ogImage: "/assets/og/og-image.png",
};

// ---------------------------------------------------------------------------
// 2. LINKS  (used in the hero, the contact section and the footer)
// ---------------------------------------------------------------------------
export const links: Links = {
  email: "fathimasalam901@gmail.com",
  // TODO: paste your LinkedIn profile URL here.
  linkedin: "",
  github: "https://github.com/fathimasana-ai",
  // TODO: replace with your live Vercel address once deployed.
  portfolio: "",
  // Put your CV at public/assets/cv/fathima-sana-cv.pdf
  cv: "/assets/cv/fathima-sana-cv.pdf",
};

// ---------------------------------------------------------------------------
// 3. MY JOURNEY  (timeline)
// ---------------------------------------------------------------------------
export const journeyIntro =
  "My route into Artificial Intelligence started in a Commerce classroom. Accounting, Economics and Statistics taught me to read numbers and understand how a business actually works — and that is exactly where I started noticing problems worth automating. I taught myself Python, moved into structured AI courses, and then into building and shipping real AI applications.";

export const journey: JourneyStep[] = [
  {
    label: "Commerce",
    period: "Higher Secondary",
    description:
      "Accounting, Economics, Statistics and Computer Application — the business and data foundation I still reason with.",
  },
  {
    label: "Python",
    period: "2026",
    description:
      "Self-taught programming through small command-line projects: a calculator, a quiz game, an expense tracker, a contact book.",
  },
  {
    label: "AI Courses",
    period: "2026",
    description:
      "Structured study — AI for Everyone (DeepLearning.AI), Machine Learning Introduction (IBM), Computational Thinking (UPenn), Mathematics for Machine Learning: Linear Algebra (Imperial College London).",
  },
  {
    label: "AI Projects",
    period: "2026",
    description:
      "Built EcoLoop, an AI waste-identification and recycling platform, end to end: Flask app, computer-vision pipeline, database and deployment.",
  },
  {
    label: "Hackathon",
    period: "2026",
    description:
      "Dubai AI Hub Builder Lab #3 — team project Manuel, a voice agent that reads real device manuals aloud. The team won Best Use of Context.dev.",
  },
  {
    label: "Research",
    period: "In progress",
    description:
      "Researching how Artificial Intelligence is changing small and medium-sized businesses in the UAE — bringing the Commerce background full circle.",
  },
];

// ---------------------------------------------------------------------------
// 4. TECHNICAL SKILLS
// ---------------------------------------------------------------------------
export const skills: SkillGroup[] = [
  {
    category: "Programming Languages",
    items: ["Python", "JavaScript", "SQL"],
  },
  {
    category: "Web Technologies",
    items: ["HTML", "CSS", "Next.js", "Flask"],
  },
  {
    category: "AI",
    items: [
      "Artificial Intelligence",
      "Large Language Models",
      "AI Agents",
      "Voice AI",
      "Prompt Engineering",
      "AI-powered Applications",
    ],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "Vercel", "Gemini", "ElevenLabs", "Context.dev"],
  },
];

// ---------------------------------------------------------------------------
// 5. FEATURED PROJECTS
// ---------------------------------------------------------------------------
export const projects: Project[] = [
  {
    id: "vera",
    name: "VERA",
    subtitle: "Voice-Enabled Reasoning Assistant",
    summary:
      "A voice-first troubleshooting assistant. You open a link, tap once, and say what is wrong with a device in plain words. VERA finds the real manufacturer manual, reasons through the problem with you, and walks you through the fix one spoken step at a time — remembering where you are and showing which part of the manual each step came from.",
    problem:
      "When a router shows a red light or a dishwasher shows an error code, every option is bad: a 90-page PDF nobody opens, forum threads for the wrong model, or a chatbot that invents eight steps in one breath. The problem is not the model's knowledge — it is pace, trust and grounding. That is hardest for people with low tech confidence, whose hands and eyes are already busy holding the device.",
    solution:
      "A single voice conversation over the web. ElevenLabs owns the realtime voice loop; a server-side step engine finds and reads the actual manual, and Gemini turns it into an ordered list of atomic steps, each traceable back to the document. VERA speaks one step per turn and waits for you.",
    features: [
      "One spoken step per turn — VERA waits for \"done\", \"repeat\", \"stuck\" or \"skip\" before moving on.",
      "Conversational memory — structured session context (device, symptom, progress, outcomes) so follow-up questions are not treated as brand-new questions.",
      "Context-aware task continuation with a visible progress tracker.",
      "Multi-source grounded reasoning — candidate manual sources are scraped in parallel and cross-checked during extraction.",
      "\"Why this step?\" — every step can reveal the manual section and verbatim quote it came from.",
      "Session summary — a copyable record of device, symptom, completed steps and sources used.",
      "Safe fallbacks — clearly-labelled generic guidance when no manual is found, and a refusal path for unsafe (mains / gas) symptoms.",
      "Escalation to a human helper when the problem cannot be resolved.",
      "Voice-first dark interface built around a single luminous voice orb.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "React",
      "ElevenLabs Agents",
      "Gemini",
      "Context.dev",
      "Vercel",
      "Git/GitHub",
    ],
    role:
      "VERA is my own project. I built it on the permitted Manuel codebase and substantially developed it from there: I designed and implemented the conversational memory layer, the progress tracker and task-continuation behaviour, the multi-source extraction and procedure cache, the \"Why this step?\" source viewer and the session summary, plus VERA's new identity and voice-first interface. I configured and synced the ElevenLabs agent, wired the Gemini and Context.dev integrations behind server routes, and deployed and tested the result.",
    attribution:
      "VERA is built on Manuel (github.com/llmziad/Manuel), a team hackathon project I was part of, which won Best Use of Context.dev at Dubai AI Hub Builder Lab #3. I did not create the original Manuel project; its original developer gave permission to modify and extend the code, and VERA is my own extended version of it.",
    github: "https://github.com/fathimasana-ai/vera",
    // TODO: paste the VERA live demo URL here.
    liveDemo: "",
    // TODO: paste the demo video link here.
    demoVideo: "",
    screenshots: [],
    architecture: [
      {
        label: "User Voice",
        detail:
          "You tap once and describe the problem out loud. The tap is what unlocks the microphone in the browser.",
      },
      {
        label: "ElevenLabs",
        detail:
          "The realtime voice layer: speech-to-text, text-to-speech, turn-taking and barge-in. The session is opened through a server-minted signed URL, so the API key never reaches the browser.",
      },
      {
        label: "VERA",
        detail:
          "The step engine on Vercel. It holds the session memory, decides what to retrieve, and returns a typed result so the agent always has something safe to say.",
      },
      {
        label: "Context.dev / Gemini",
        detail:
          "Context.dev searches for and scrapes the real manual into clean markdown (PDFs included); Gemini uses structured output to turn it into ordered, atomic steps with a source anchor on each one.",
      },
      {
        label: "Retrieved / Processed Information",
        detail:
          "A grounded procedure: numbered steps, the manual section each came from, and progress state — rendered on screen while it is spoken.",
      },
      {
        label: "Voice Response",
        detail:
          "One step, spoken, then VERA waits for you. \"Done\", \"repeat\", \"go back\" and \"stuck\" all continue from the right place.",
      },
    ],
  },
  {
    id: "ecoloop",
    name: "EcoLoop",
    subtitle: "AI-powered waste identification and recycling platform",
    summary:
      "A web platform where you photograph an item of waste, an AI vision pipeline identifies what it is and which material it is made of, and you earn EcoPoints for recycling it — with levels, a leaderboard, rewards and an environmental-impact estimate to keep the habit going.",
    problem:
      "People want to recycle but are unsure what is actually recyclable and which bin an item belongs in, and there is little immediate feedback or motivation for doing it correctly.",
    solution:
      "Upload a photo; an open-vocabulary detector plus a material classifier decide what the object is and what it is made of, confidence thresholds refuse to guess when the models disagree, and verified recycling is rewarded with points, levels and a leaderboard.",
    features: [
      "Photo upload with AI waste identification (open-vocabulary object detection, a waste-material classifier, and a dedicated battery detector).",
      "Confidence thresholds and a conflict check — when two different materials score too closely, the app awards nothing rather than guessing.",
      "EcoPoints scored by material, with user levels and rank progression.",
      "Personal dashboard with recycling stats and environmental-impact estimates.",
      "Upload history with per-item results, and a leaderboard across users.",
      "Rewards page, user profiles and profile editing.",
      "Accounts with hashed passwords and session-based login.",
      "Admin dashboard for monitoring platform-wide activity.",
      "Server-side image compression and EXIF orientation handling on upload.",
      "SEO groundwork: canonical tags, structured data, robots.txt and a generated sitemap.",
    ],
    stack: [
      "Python",
      "Flask",
      "SQL",
      "PostgreSQL",
      "SQLAlchemy",
      "Roboflow (YOLO-World)",
      "Pillow",
      "HTML",
      "CSS",
      "JavaScript",
      "Jinja2",
      "Gunicorn",
      "Git/GitHub",
    ],
    role:
      "Sole developer. I designed and built the whole application: the Flask routes and data model, the AI identification pipeline and its thresholds, the points and levels logic, all page templates and styling, and the deployment with a hosted PostgreSQL database and environment-based configuration.",
    attribution:
      "The live application is branded Wastivo — the same project after a rename.",
    github: "https://github.com/fathimasana-ai/ecoloop",
    liveDemo: "https://ecoloop.onrender.com",
    demoVideo: "",
    screenshots: [
      // Replace the src paths with your own screenshots in
      // public/assets/projects/ecoloop/ — see README.md.
      {
        src: "/assets/projects/ecoloop/home.png",
        alt: "EcoLoop home page",
        caption: "Landing page",
      },
      {
        src: "/assets/projects/ecoloop/dashboard.png",
        alt: "EcoLoop dashboard showing EcoPoints and recycling stats",
        caption: "Dashboard — points, level and impact",
      },
      {
        src: "/assets/projects/ecoloop/upload.png",
        alt: "EcoLoop waste identification result after uploading a photo",
        caption: "AI waste identification",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// 6. RESEARCH
//    Update "findings", "recommendations" and "pdf" once the research is done.
// ---------------------------------------------------------------------------
export const research: Research = {
  title:
    "How Artificial Intelligence Is Changing Small and Medium-Sized Businesses in the UAE",
  status: "In progress",
  question:
    "How is the adoption of Artificial Intelligence changing the way small and medium-sized businesses in the UAE operate, compete and grow?",
  objective:
    "To examine where UAE SMEs are actually applying AI, what benefits and barriers they experience, and what this means for business owners and policymakers.",
  methodology: [
    "Review of published reports and literature on AI adoption among UAE and regional SMEs.",
    "Structured questions covering current AI use, motivation, cost and perceived risk.",
    "Comparison of AI use across business functions and sectors.",
    "Qualitative analysis of the responses and secondary sources.",
  ],
  areas: [
    "Marketing and customer engagement",
    "Customer service and support automation",
    "Operations and inventory",
    "Accounting, finance and reporting",
    "Skills, training and hiring",
    "Cost, trust and data-privacy barriers",
  ],
  // Findings will be published here once the research is complete.
  findings: [],
  recommendations: [],
  // Put the final PDF at public/assets/research/ and paste the path here.
  pdf: "",
};

// ---------------------------------------------------------------------------
// 7. HACKATHONS & AWARDS
// ---------------------------------------------------------------------------
export const awards: Award[] = [
  {
    title: "Categorical Award Winner — Best Use of Context.dev",
    event: "Dubai AI Hub Builder Lab #3",
    organisation: "Dubai AI Hub",
    date: "2026",
    description:
      "Built Manuel — \"a manual that talks back\" — a voice agent that finds a device's real manufacturer manual and walks the user through the fix one spoken step at a time. I collaborated with my team, contributed ideas and development work, and the team received the award.",
    highlights: [
      "Team project: Manuel",
      "Awarded for the strongest use of Context.dev",
      "Voice agent built with ElevenLabs, Context.dev and Gemini",
    ],
    proof: "",
  },
  {
    title: "2nd Position — Category 4: Presentation",
    event: "International Digital Fest 2026",
    organisation: "University of Dubai",
    date: "2026",
    description:
      "Presented on a topic related to the UAE and the future of AI, placing second in the presentation category and winning an AED 700 cash prize.",
    highlights: ["AED 700 cash prize", "Topic: the UAE and future AI"],
    proof: "",
  },
  {
    title: "Best Marketing Strategy Award",
    event: "Entrepreneurship Competition",
    organisation: "",
    date: "",
    description:
      "Recognised for the strongest marketing strategy in an entrepreneurship competition.",
    highlights: [],
    proof: "",
  },
];

// Remaining school, arts and sports awards — shown in a compact list.
export const otherAchievements: string[] = [
  // TODO: add your remaining school / arts / sports awards here, one per line.
];

// ---------------------------------------------------------------------------
// 8. CERTIFICATIONS & LEARNING
//    To add a certificate: copy one block, change the details, and put the
//    image or PDF in public/assets/certificates/.
// ---------------------------------------------------------------------------
export const certificates: Certificate[] = [
  {
    title: "Mathematics for Machine Learning: Linear Algebra",
    issuer: "Imperial College London — Coursera",
    year: "2026",
    file: "",
    verifyUrl: "",
  },
  {
    title: "Machine Learning Introduction for Everyone",
    issuer: "IBM — Coursera",
    year: "2026",
    file: "",
    verifyUrl: "",
  },
  {
    title: "Computational Thinking for Problem Solving",
    issuer: "University of Pennsylvania — Coursera",
    year: "2026",
    file: "",
    verifyUrl: "",
  },
  {
    title: "AI for Everyone",
    issuer: "DeepLearning.AI — Coursera",
    year: "2026",
    file: "",
    verifyUrl: "",
  },
  {
    title: "IELTS Academic — Overall Band 6.5",
    issuer: "IELTS",
    year: "2026",
    file: "",
    verifyUrl: "",
  },
];

// ---------------------------------------------------------------------------
// 9. ACADEMIC PROFILE
// ---------------------------------------------------------------------------
export const education: Education = {
  school: "Model Private School",
  location: "Abu Dhabi",
  qualification: "Higher Secondary Education — Commerce Stream",
  score: "96%",
  scoreLabel: "Higher Secondary aggregate",
  completed: "Completed 2026",
  subjects: ["Accounting", "Economics", "Statistics", "Computer Application"],
};

// ---------------------------------------------------------------------------
// 10. LEADERSHIP & EXPERIENCE
// ---------------------------------------------------------------------------
export const experience: Experience[] = [
  {
    role: "Arts Secretary",
    organisation: "Student Council",
    period: "",
    description:
      "Elected to the student council as Arts Secretary, responsible for organising and leading school arts activities and representing students in council decisions.",
  },
  {
    role: "Event Planner & Event Manager",
    organisation: "Al Fattah Events",
    period: "April 2025 – January 2026",
    description:
      "Planned and managed events end to end — preparation, coordination with the team on site, and running the event on the day.",
  },
  {
    role: "Event Coordinator",
    organisation: "Mohammed bin Zayed Stadium",
    period: "May 2025",
    description:
      "Coordinated on-site logistics and supported the smooth running of a stadium event.",
  },
];

// ---------------------------------------------------------------------------
// 11. SOCIAL IMPACT & COMMUNITY
// ---------------------------------------------------------------------------
export const impact: Impact[] = [
  {
    title: "Volunteer",
    organisation: "Mohammed bin Zayed Stadium / Volunteer.ae",
    description:
      "Volunteered at stadium events through the Volunteer.ae programme, assisting with visitor support and event operations.",
  },
  {
    title: "42 Abu Dhabi — selection process",
    organisation: "42 Abu Dhabi",
    description:
      "Took part in the 42 Abu Dhabi interview and selection process for its peer-to-peer software engineering programme.",
  },
  {
    title: "Digital media support — artist YouTube channel",
    organisation: "YouTube",
    description:
      "Helped with shooting, editing and channel management for an artist's YouTube channel, contributing to content that reached 100K+ views according to the channel's analytics.",
  },
];

// ---------------------------------------------------------------------------
// 12. PROOF / DOCUMENTS
//     Each item: Title → short description → View Proof.
//     Put the file in public/assets/proofs/ (or /assets/certificates/, etc.)
//     and paste the path into "href". Leave href as "" for "coming soon".
// ---------------------------------------------------------------------------
export const proofs: Proof[] = [
  {
    title: "Dubai AI Hub Builder Lab #3 — award",
    description:
      "Categorical award: Best Use of Context.dev, for the team project Manuel.",
    href: "",
    category: "Award",
  },
  {
    title: "International Digital Fest 2026 — 2nd position",
    description: "Presentation category, University of Dubai.",
    href: "",
    category: "Award",
  },
  {
    title: "Coursera certificates",
    description:
      "Imperial College London, IBM, University of Pennsylvania and DeepLearning.AI course certificates.",
    href: "",
    category: "Certificate",
  },
  {
    title: "IELTS Academic result",
    description: "Overall Band 6.5.",
    href: "",
    category: "Certificate",
  },
  {
    title: "Higher Secondary result — 96%",
    description: "Commerce stream, Model Private School, Abu Dhabi.",
    href: "",
    category: "Academic",
  },
  {
    title: "Research paper — AI and UAE SMEs",
    description:
      "Full research document. Will be published here once the research is complete.",
    href: "",
    category: "Research",
  },
  {
    title: "EcoLoop — project screenshots",
    description:
      "Screens from the live AI waste-identification platform, including the dashboard and an identification result.",
    href: "",
    category: "Project",
  },
];
