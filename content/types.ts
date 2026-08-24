// Types for the content in content.ts.
// You normally do not need to edit this file — it only describes which fields
// each item in content.ts can have. If your editor underlines something in
// content.ts in red, this file explains which fields are expected.

export type Profile = {
  name: string;
  tagline: string;
  intro: string;
  location: string;
  /** Shown in the browser tab and in Google / link previews. */
  seoTitle: string;
  seoDescription: string;
  /** Image used for link previews (WhatsApp, LinkedIn, X). Path inside /public. */
  ogImage: string;
};

export type Links = {
  email: string;
  linkedin: string;
  github: string;
  /** Public address of this portfolio, e.g. https://fathimasana.vercel.app */
  portfolio: string;
  /** Path to the CV inside /public, e.g. /assets/cv/fathima-sana-cv.pdf */
  cv: string;
};

export type JourneyStep = {
  label: string;
  period: string;
  description: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type ProjectLink = {
  label: string;
  /** Leave empty ("") to hide the button until you have the link. */
  href: string;
};

export type Screenshot = {
  /** Path inside /public, e.g. /assets/projects/ecoloop/dashboard.png */
  src: string;
  /** Describe the image for screen readers and for when it fails to load. */
  alt: string;
  caption?: string;
};

export type ArchitectureStep = {
  label: string;
  detail: string;
};

export type Project = {
  /** Used in the URL anchor, lowercase, no spaces. */
  id: string;
  name: string;
  subtitle: string;
  summary: string;
  problem: string;
  solution?: string;
  features: string[];
  stack: string[];
  role: string;
  /** Optional honest note, e.g. how the project relates to earlier work. */
  attribution?: string;
  github: string;
  liveDemo: string;
  /** YouTube / Drive link to a demo video. Leave "" to hide the button. */
  demoVideo: string;
  screenshots: Screenshot[];
  /** Only used by VERA's "How it works" diagram. Leave out for other projects. */
  architecture?: ArchitectureStep[];
};

export type Research = {
  title: string;
  status: string;
  question: string;
  objective: string;
  methodology: string[];
  areas: string[];
  /** Add your findings here once the research is finished. */
  findings: string[];
  recommendations: string[];
  /** Path to the PDF inside /public. Leave "" until the PDF is ready. */
  pdf: string;
};

export type Award = {
  title: string;
  event: string;
  organisation: string;
  date: string;
  description: string;
  highlights: string[];
  /** Path or URL to proof. Leave "" to hide the link. */
  proof: string;
};

export type Certificate = {
  title: string;
  issuer: string;
  year: string;
  /** Certificate image or PDF inside /public. Leave "" to show a placeholder. */
  file: string;
  /** Official verification link from Coursera / the issuer. Leave "" to hide. */
  verifyUrl: string;
  note?: string;
};

export type Education = {
  school: string;
  location: string;
  qualification: string;
  score: string;
  scoreLabel: string;
  completed: string;
  subjects: string[];
};

export type Experience = {
  role: string;
  organisation: string;
  period: string;
  description: string;
};

export type Impact = {
  title: string;
  organisation: string;
  description: string;
};

export type Proof = {
  title: string;
  description: string;
  /** Path inside /public or an external URL. Leave "" to mark as coming soon. */
  href: string;
  category: string;
};
