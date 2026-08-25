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
  linkedin: "https://www.linkedin.com/in/fathimasana2",
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
    period: "Completed 2026",
    description:
      "Five completed Coursera courses — Mathematics for Machine Learning: Linear Algebra (Imperial College London), Machine Learning Introduction for Everyone (IBM), Computational Thinking for Problem Solving (UPenn), AI for Everyone (DeepLearning.AI) and An Intuitive Introduction to Probability (University of Zurich) — plus 1 Million AI Prompters (Dubai Future Foundation).",
  },
  {
    label: "AI Projects",
    period: "2026",
    description:
      "Built two AI applications end to end — VERA, a voice-first troubleshooting assistant built with Next.js, ElevenLabs, Context.dev and Gemini, and EcoLoop, an AI waste-identification and recycling platform with a Flask backend, computer-vision pipeline, database and deployment.",
  },
  {
    label: "Hackathon",
    period: "2026",
    description:
      "Dubai AI Hub Builder Lab #3 — team project Manuel, a voice agent that reads real device manuals aloud. The team won Best Use of Context.dev.",
  },
  {
    label: "Research",
    period: "Completed 2026",
    description:
      "Completed a research project on how Artificial Intelligence is changing small businesses in the UAE — bringing the Commerce background full circle.",
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
      "A voice-first troubleshooting assistant for everyday devices. You open a link, tap once, and describe the problem out loud — \"my Netgear router has a red light and no internet\" — and VERA takes it from there: it works out which device and model you mean, finds the real manufacturer manual for it, and turns that manual into an ordered repair procedure. Then it becomes a conversation: VERA speaks one step at a time and waits, so you can keep your hands and eyes on the device instead of on a screen. Say \"done\" and it moves on, \"repeat\" and it says it again, \"stuck\" and it helps you around the problem or offers to connect you to a human. The screen mirrors the conversation with the current step, a progress tracker and a \"Why this step?\" panel that shows the exact manual section each instruction came from, so nothing VERA says is unverifiable.",
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
      "Project development and implementation, end to end. I designed and built the AI voice-agent integration — configuring the ElevenLabs conversational agent and wiring it to the app through a server-minted signed session so no API key ever reaches the browser. I designed the system prompt and the one-step-per-turn conversation behaviour, including the safety refusals and the \"done / repeat / stuck\" continuation logic, and built the tool and workflow integration behind it: the retrieval and extraction pipeline that finds the real manual (Context.dev) and turns it into ordered, source-anchored steps (Gemini structured output), plus the session memory, progress tracking and procedure caching that let VERA continue a task instead of restarting it. I developed the voice-first web interface — the voice orb, live step display, progress tracker, \"Why this step?\" source viewer and session summary — and I deployed the application to Vercel and tested the full end-to-end voice interaction on desktop and mobile.",
    github: "https://github.com/fathimasana-ai/vera",
    liveDemo: "https://vera-slxe.vercel.app",
    // Paste your VERA demo video link here (YouTube / Drive), or put the file
    // at public/assets/projects/vera/demo.mp4 and write "/assets/projects/vera/demo.mp4".
    // While this is empty the section shows a "demo video coming soon" panel.
    demoVideo: "",
    screenshots: [
      {
        src: "/assets/projects/vera/interface.png",
        alt: "VERA voice interface — the voice orb with \"Talk to VERA\" and the prompt \"Tap to start, then just talk.\"",
        caption: "The voice interface — one tap, then just talk",
      },
      {
        src: "/assets/projects/vera/mobile.png",
        alt: "VERA voice interface on a mobile screen",
        caption: "Mobile — designed to be used while holding the device",
      },
    ],
    architecture: [
      {
        label: "User Voice",
        detail:
          "Everything starts with the user simply talking. They open the link, tap the voice orb once, and describe the problem in their own words — no forms, no model numbers to type, no menus to navigate. That single tap is what unlocks the microphone in the browser, and from that moment the whole session is a conversation.",
      },
      {
        label: "ElevenLabs",
        detail:
          "This is VERA's ears and voice. ElevenLabs handles the realtime voice loop — turning speech into text, speaking replies back naturally, and managing turn-taking so the user can interrupt mid-sentence and be heard. The voice session is opened through a signed link created on the server, so the API key stays private and the conversation feels immediate rather than like a series of recordings.",
      },
      {
        label: "VERA",
        detail:
          "The brain of the application, running on Vercel. It keeps track of the session — which device, which symptom, which step the user is on and what has already been tried — and decides what needs to be looked up next. Because it always returns a clear, structured result, the assistant never has to guess or improvise an answer.",
      },
      {
        label: "Context.dev / Gemini",
        detail:
          "This is where the real knowledge comes from. Context.dev searches the web for the actual manufacturer manual for that exact model and converts it into clean readable text, including PDFs. Gemini then reads that manual and turns it into a short ordered list of simple steps, keeping a reference to the manual section behind every single step.",
      },
      {
        label: "Retrieved / Processed Information",
        detail:
          "The result is a grounded repair procedure rather than a generic answer: numbered steps, the manual section each step came from, and the user's progress so far. It appears on screen at the same moment it is spoken, so the user can read along, look back, or check exactly why a step was recommended.",
      },
      {
        label: "Voice Response",
        detail:
          "VERA speaks one step, then stops and waits — which is the whole point of the design. The user says \"done\", \"repeat\", \"go back\" or \"stuck\", and VERA continues from exactly the right place instead of starting over. If the problem still cannot be solved, it offers to connect the user to a human helper.",
      },
    ],
  },
  {
    id: "ecoloop",
    name: "EcoLoop",
    subtitle: "AI-powered waste identification and recycling platform",
    summary:
      "EcoLoop is a web platform that makes recycling correctly feel obvious and rewarding. You create an account, photograph an item you are about to throw away, and an AI vision pipeline identifies what the object is and which material it is made of — plastic, paper, glass, metal, e-waste or a battery — then tells you how it should be recycled. Each verified item earns EcoPoints scored by material, and those points build a level and a rank, so the app turns a one-off action into a habit. From the dashboard a user can see their points, level and progress, an estimate of the environmental impact they have saved, and a history of everything they have recycled with the AI result for each item. A leaderboard compares users, a rewards page shows what points can be redeemed for, and profiles let people manage their own account — with an admin dashboard for monitoring activity across the platform.",
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
    github: "https://github.com/fathimasana-ai/ecoloop",
    liveDemo: "https://ecoloop.onrender.com",
    demoVideo: "",
    screenshots: [
      // Replace the src paths with your own screenshots in
      // public/assets/projects/ecoloop/ — see README.md.
      {
        src: "/assets/projects/ecoloop/home.png",
        alt: "EcoLoop landing page — \"AI Powered Recycling. Recycle Smarter, Save the Planet.\"",
        caption: "Landing page",
      },
      {
        src: "/assets/projects/ecoloop/dashboard.png",
        alt: "EcoLoop dashboard showing total EcoPoints, items recycled and level",
        caption: "Dashboard — EcoPoints, items recycled and level",
      },
      {
        src: "/assets/projects/ecoloop/upload.png",
        alt: "EcoLoop upload screen where a photo of waste is submitted for AI analysis",
        caption: "AI waste identification — upload a photo for analysis",
      },
      {
        src: "/assets/projects/ecoloop/leaderboard.png",
        alt: "EcoLoop leaderboard ranking users by EcoPoints and number of uploads",
        caption: "Leaderboard — users ranked by EcoPoints",
      },
      {
        src: "/assets/projects/ecoloop/rewards.png",
        alt: "EcoLoop rewards page listing unlocked EcoPoint badges",
        caption: "Rewards — badges unlocked with EcoPoints",
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
    "How Artificial Intelligence Is Changing Small and Medium-Sized Businesses in the UAE: Barriers to Effective Adoption and Practical Strategies",
  status: "Completed",
  question:
    "What technological, organizational and environmental factors influence the effective adoption of artificial intelligence by SMEs in the UAE, and how can SMEs address the resulting implementation challenges?",
  objective:
    "To identify the technological, organizational and environmental factors affecting AI adoption among UAE SMEs, examine the business value of AI for smaller firms, analyse what makes the move from experimentation to implementation difficult, and develop a practical framework for responsible and scalable adoption.",
  methodology: [
    "Structured qualitative secondary research — no new survey or interview data is claimed.",
    "Evidence drawn from UAE government publications, UAE institutional reports, UAE-specific empirical studies and peer-reviewed academic literature.",
    "Two UAE empirical anchors: a 2025 Mohammed Bin Rashid School of Government study of 81 UAE AI and digital SMEs, and a 2025 peer-reviewed study of 315 respondents in UAE hospitality SMEs.",
    "Sources selected for geographic relevance, business relevance, credibility, recency and methodological transparency.",
    "The Technology–Organization–Environment (TOE) framework used as an analytical lens rather than statistically tested.",
  ],
  areas: [
    "Technology — perceived usefulness, technical readiness, data, advanced computing",
    "Organization — management support, employee capability, financial readiness",
    "Environment — competitive pressure, regulation, ecosystem support",
    "AI governance and responsible-AI requirements",
    "Scaling from pilot to production",
  ],
  findings: [
    "SMEs matter disproportionately in the UAE — roughly 95% of businesses and around 86% of private-sector employment — so their ability to adopt AI is an economy-level question, not just a firm-level one.",
    "AI access is not AI adoption. The UAE's digital foundations are comparatively strong, so the binding constraint has shifted from connectivity to organizational capability: integrating AI into a business process so it creates measurable value while staying responsible and scalable.",
    "In the UAE hospitality SME sample, top-management support showed the strongest relationship with adoption intention (β = .48), ahead of competitive pressure (β = .47), government regulation (β = .43), perceived usefulness (β = .39), competitive advantage (β = .38) and employee capability (β = .30) — AI adoption behaves as a business-transformation decision, not an IT decision.",
    "Skills matter but are not the single biggest barrier; capability has to be built alongside leadership commitment, clear business objectives, data and organizational readiness.",
    "SMEs need evidence of value before they commit: perceived usefulness was significant, and OECD evidence shows returns are hard to estimate — which argues for starting from a business problem rather than from a tool.",
    "Competitive pressure is a strong driver but not proof of value; it should trigger evaluation rather than imitation.",
    "Scaling introduces its own barriers — advanced computing, financing, data, integration, governance and maintenance — so a pilot must ask whether the business can afford, manage, govern and scale the solution, not only whether the technology works.",
  ],
  recommendations: [
    "Start from a business problem and its expected outcome, then choose the AI tool.",
    "Give the initiative a named owner — an owner, manager or designated project leader.",
    "Build capability progressively: AI literacy, then role-specific capability, then implementation and governance capability.",
    "Use small pilots with a defined objective, owner, timeframe, budget and success criteria to test value before larger investment.",
    "Measure business outcomes such as time saved, cost, error rates and response time — AI usage is not itself a measure of success.",
    "Build responsible AI in from the start: privacy, security, transparency, accountability and human oversight, proportional to the risk.",
    "Use external platforms, cloud services and specialist partners where advanced infrastructure or expertise is beyond internal capability.",
    "Scale selectively — only once measurable value is demonstrated and the resources and risks are manageable.",
  ],
  pdf: "/assets/research/ai-and-uae-smes.pdf",
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
    event: "International Digital Fest 2025",
    organisation: "University of Dubai",
    date: "2025",
    description:
      "Presented on a topic related to the UAE and the future of AI, placing second in the presentation category and winning an AED 700 cash prize.",
    highlights: ["AED 700 cash prize", "Topic: the UAE and future AI"],
    proof: "/assets/certificates/international-digital-fest-2025.jpg",
  },
  {
    title: "1st Place — Best Marketing Strategy Award",
    event: "Entrepreneurship Competition",
    organisation: "",
    date: "",
    description:
      "Placed 1st out of more than 30 participating teams, winning the Best Marketing Strategy Award and also receiving the Best Outstanding Creativity and Innovation Award — two awards from the same competition.",
    highlights: [
      "1st Place — 30+ participating teams",
      "Best Marketing Strategy Award",
      "Best Outstanding Creativity and Innovation Award",
    ],
    proof: "/assets/certificates/best-marketing-strategy-award.jpg",
    featured: true,
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
    file: "/assets/certificates/coursera-linear-algebra-imperial.jpg",
    verifyUrl: "https://coursera.org/verify/DWUQ6NKQB9SS",
  },
  {
    title: "Machine Learning Introduction for Everyone",
    issuer: "IBM — Coursera",
    year: "2026",
    file: "/assets/certificates/coursera-ml-intro-ibm.jpg",
    verifyUrl: "https://coursera.org/verify/MF862L4JHKYZ",
  },
  {
    title: "Computational Thinking for Problem Solving",
    issuer: "University of Pennsylvania — Coursera",
    year: "2026",
    file: "/assets/certificates/coursera-computational-thinking-upenn.jpg",
    verifyUrl: "https://coursera.org/verify/EA8P2BPXMWZZ",
  },
  {
    title: "AI for Everyone",
    issuer: "DeepLearning.AI — Coursera",
    year: "2026",
    file: "/assets/certificates/coursera-ai-for-everyone.jpg",
    verifyUrl: "https://coursera.org/verify/J5Q9M0X8R9BD",
  },
  {
    title: "An Intuitive Introduction to Probability",
    issuer: "University of Zurich — Coursera",
    year: "2026",
    file: "/assets/certificates/coursera-probability-zurich.jpg",
    verifyUrl: "https://coursera.org/verify/8CS3TK04J7N3",
  },
  {
    title: "1 Million AI Prompters",
    issuer: "Dubai Future Foundation",
    year: "2026",
    file: "/assets/certificates/1-million-prompters.jpg",
    verifyUrl: "",
  },
];

// ---------------------------------------------------------------------------
// 9. ACADEMIC PROFILE
// ---------------------------------------------------------------------------
//    The first entry is shown as the main academic milestone.
export const education: Education[] = [
  {
    school: "Model Private School",
    location: "Abu Dhabi",
    qualification: "Higher Secondary Education — Commerce Stream (Grade 12)",
    score: "95%",
    scoreLabel: "Higher Secondary aggregate",
    completed: "Completed 2026",
    subjects: ["Accounting", "Economics", "Statistics", "Computer Application"],
  },
  {
    school: "Model Private School",
    location: "Abu Dhabi",
    qualification: "Secondary Education (Grade 10)",
    score: "90%",
    scoreLabel: "Grade 10 aggregate",
    completed: "Completed 2023",
    subjects: ["Mathematics"],
    highlights: ["A grade in Mathematics"],
  },
];

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
  {
    role: "Team Leader — Firqatun Noor, Solace 2024",
    organisation: "Al Rafidain Cultural Fest",
    period: "2024",
    description:
      "Led one of the two teams at Solace 2024, a cultural competition involving over 1,000 students.",
    points: [
      "Led a team of approximately 200 participants in Solace 2024, a cultural competition involving 1,000+ students divided into two groups.",
      "Organised and categorised participants according to the different competition categories and maintained the participant lists.",
      "Coordinated and prepared students for various competitions and helped them understand their roles and responsibilities.",
      "Guided team members by sharing ideas and coordinating competition preparation.",
      "Managed communication and coordination among participants to ensure smooth team organisation and participation.",
    ],
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
    title: "IELTS Academic result",
    description:
      "Test Report Form — Overall Band 6.5 (Listening 7.5, Reading 6.0, Writing 6.0, Speaking 6.5), CEFR level B2. Test date 22 August 2026.",
    href: "/assets/certificates/pdf/ielts-academic.pdf",
    category: "Certificate",
  },
  {
    title: "Higher Secondary result — 95%",
    description:
      "Certificate cum Mark Statement — Board of Higher Secondary Examinations, Government of Kerala, March 2026. Commerce stream at Model Private School, Abu Dhabi.",
    href: "/assets/certificates/pdf/grade-12-certificate.pdf",
    category: "Academic",
  },
  {
    title: "Grade 10 result — 90%",
    description:
      "Secondary School Leaving Certificate — General Education Department, Government of Kerala, March 2024. A grade in Mathematics.",
    href: "/assets/certificates/pdf/grade-10-certificate.pdf",
    category: "Academic",
  },
  {
    title: "International Digital Fest 2025 — 2nd position",
    description:
      "Certificate of Merit — Category 4: Presentation, 5th Edition International Digital Fest, University of Dubai · 10 May 2025.",
    href: "/assets/certificates/international-digital-fest-2025.jpg",
    category: "Award",
  },
  {
    title: "Entrepreneurship Challenge — 1st place",
    description:
      "First position at the Entrepreneurship Challenge organised by the Students' Council of Model Private School, Abu Dhabi, 30 October 2025.",
    href: "/assets/certificates/entrepreneurship-challenge-first-place.jpg",
    category: "Award",
  },
  {
    title: "Best Marketing Strategy Award",
    description:
      "Certificate of Excellence for the Best Marketing Strategy Award at the same Entrepreneurship Challenge.",
    href: "/assets/certificates/best-marketing-strategy-award.jpg",
    category: "Award",
  },
  {
    title: "Research paper — AI and small and medium-sized businesses in the UAE",
    description:
      "Completed 15-page paper: barriers to effective AI adoption among UAE SMEs, analysed through the Technology–Organization–Environment framework, with a seven-phase adoption framework (Define, Assess, Select, Pilot, Measure, Govern, Scale).",
    href: "/assets/research/ai-and-uae-smes.pdf",
    category: "Research",
  },
];
