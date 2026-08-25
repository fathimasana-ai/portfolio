# Fathima Sana — Technical & AI Portfolio

A static-friendly, single-page technical portfolio built with Next.js 15, TypeScript, Tailwind CSS v4, Framer Motion and Lucide icons. All portfolio copy and data comes from `content/content.ts`; the site is intentionally designed so that updates do not require changing the interface code.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To check the production version:

```bash
npm run lint
npx tsc --noEmit
npm run build
npm run start
```

## How to Update My Portfolio

You can safely edit:

- `content/content.ts` — words, links, projects, awards, certificates and other portfolio data.
- `public/assets/` — CVs, screenshots, certificates, proof documents, research PDFs and the social preview image.

Do not edit the files in `app/`, `components/`, configuration files, or `content/types.ts` unless you are comfortable maintaining a Next.js application. Every path written in `content/content.ts` starts at the `public` folder: `/assets/...` means `public/assets/...`.

### Add a new certificate

The portfolio currently lists 7 certificates. Add another object to the `certificates` array when you complete a new course. Keep its preview image in `public/assets/certificates/` and its original PDF in `public/assets/certificates/pdf/`:

Copy a certificate object in the `certificates` list and change only its details:

Before:

```ts
{
  title: "AI for Everyone",
  issuer: "DeepLearning.AI — Coursera",
  year: "2026",
  file: "",
  verifyUrl: "",
},
```

After:

```ts
{
  title: "New Course Name",
  issuer: "Issuing organisation",
  year: "2026",
  file: "/assets/certificates/new-course-name.jpg",
  verifyUrl: "https://example.com/verify",
},
```

Upload `new-course-name.jpg` to `public/assets/certificates/` and the original `new-course-name.pdf` to `public/assets/certificates/pdf/`. For Coursera certificates, `verifyUrl` is the **Verify at** link printed on the certificate. Leave `file` or `verifyUrl` as `""` when it is not available.

### Replace a certificate preview or PDF

Replace the preview in `public/assets/certificates/` or the original PDF in `public/assets/certificates/pdf/` while keeping the same filename, or upload a new file and update the `file` path:

```ts
file: "/assets/certificates/new-course-name.png",
```

Images show as a thumbnail-style card; PDFs show as an openable document link.

### Add a new project

Copy a complete item in the `projects` array. Keep `id` lowercase and without spaces, upload screenshots under `public/assets/projects/<id>/`, and use paths beginning with `/assets/`:

```ts
{
  id: "new-project",
  name: "Project name",
  subtitle: "Short description",
  summary: "What it does.",
  problem: "What problem it addresses.",
  solution: "How it addresses it.",
  features: ["Feature one", "Feature two"],
  stack: ["Python", "Next.js"],
  role: "Your role, described accurately.",
  github: "https://github.com/...",
  liveDemo: "",
  demoVideo: "",
  screenshots: [
    {
      src: "/assets/projects/new-project/overview.png",
      alt: "Description of the screenshot",
      caption: "Overview",
    },
  ],
},
```

Use the existing project objects as the complete field reference. Do not add technologies, awards or claims that are not factually accurate.

### Add a project demo video

For a hosted video, paste the URL into `demoVideo`:

```ts
demoVideo: "https://www.youtube.com/watch?v=example",
```

The project card renders a styled watch button for external video links. For a local file, put an `.mp4` or `.webm` file in the matching project folder and use its `/assets/` path:

```ts
demoVideo: "/assets/projects/vera/voice-demo.mp4",
```

The site renders local `.mp4` and `.webm` files in an accessible native video player. VERA screenshots and videos belong in `public/assets/projects/vera/`; use lowercase kebab-case filenames.

### Update a project link

Change the relevant URL in that project object:

```ts
liveDemo: "https://your-live-demo.example",
```

Set it to `""` to hide the button until the link is ready. The same rule applies to `github` and `demoVideo`.

### Replace project screenshots

Put the new image in the matching project folder and update its `src`, `alt`, and optional `caption`:

```ts
src: "/assets/projects/ecoloop/dashboard-new.png",
alt: "EcoLoop dashboard showing EcoPoints and recycling stats",
caption: "Dashboard — points, level and impact",
```

If a screenshot has not been uploaded yet, the site shows a calm placeholder instead of a broken image.

### Add another academic milestone

`education` is an array. The first entry receives the prominent academic treatment; later entries render as secondary milestone cards. Copy an existing object and change its data:

```ts
export const education: Education[] = [
  {
    school: "Another school",
    location: "City",
    qualification: "Qualification",
    score: "90%",
    scoreLabel: "Final aggregate",
    completed: "Completed 2024",
    subjects: ["Subject"],
    highlights: ["Optional academic highlight"],
  },
];
```

Leave `highlights` out, or use an empty array, when there are no additional lines to show.

### Add experience points

Experience entries can include an optional `points` array. These render as bullets below the description:

```ts
{
  role: "Team Leader",
  organisation: "Organisation",
  period: "2024",
  description: "A concise overview of the role.",
  points: [
    "Specific responsibility or result.",
    "Another accurate responsibility.",
  ],
},
```

Leave `points` out when the entry needs no bullet list.

### Emphasise an award

Set `featured: true` on an award that should receive the larger accent treatment. The awards remain in the same array order:

```ts
{
  title: "Award title",
  event: "Event name",
  organisation: "Organisation",
  date: "2026",
  description: "Accurate description of the award.",
  highlights: ["Short highlight", "Another stat"],
  featured: true,
  proof: "",
},
```

Leave `featured` out for the standard card treatment.

### Upload or update the research PDF, findings and recommendations

Upload the PDF to `public/assets/research/`, then fill in the path and lists:

```ts
findings: [
  "A concise, evidence-supported finding.",
],
recommendations: [
  "A practical recommendation.",
],
pdf: "/assets/research/ai-and-uae-smes.pdf",
```

Add each finding and recommendation as its own accurate string. The research section keeps separate labelled blocks for both lists. When either list is empty, it uses a completed-research fallback; the PDF button stays hidden until `pdf` is set.

### Update awards and other achievements

Edit an existing award object or copy one in the `awards` array:

```ts
{
  title: "Award title",
  event: "Event name",
  organisation: "Organisation",
  date: "2026",
  description: "Accurate description of the award.",
  highlights: ["Short highlight"],
  proof: "",
},
```

Add remaining school, arts or sports items as strings in `otherAchievements`:

```ts
export const otherAchievements: string[] = [
  "Achievement one",
  "Achievement two",
];
```

### Update contact links and CV

Edit the `links` object:

```ts
linkedin: "https://www.linkedin.com/in/your-profile",
github: "https://github.com/your-username",
portfolio: "https://your-domain.example",
cv: "/assets/cv/fathima-sana-cv.pdf",
```

Upload the CV to `public/assets/cv/`. Set any unavailable link to `""`; the corresponding button is hidden.

### Redeploy

After saving your changes:

1. Commit and push the changes to GitHub.
2. Vercel automatically deploys the new version when the repository is connected.
3. Open the Vercel deployment URL to check the result.

If you do not use Git locally, open the repository on GitHub, browse to `content/content.ts` or the relevant `public/assets/` folder, choose **Add file → Upload files** (or edit the file directly), and commit the change on GitHub. Vercel will deploy that commit automatically.

## Where things are

Every website section reads from a named export in `content/content.ts`. Edit the data there; do not edit the section components for normal portfolio updates.

| Website section | Export in `content/content.ts` |
| --- | --- |
| Hero / Profile | `profile`, `links` |
| My Journey | `journeyIntro`, `journey` |
| Technical Skills | `skills` |
| Featured Projects | `projects` |
| Research | `research` |
| Hackathons & Awards | `awards`, `otherAchievements` |
| Certifications & Learning | `certificates` |
| Academic Profile | `education` |
| Leadership & Experience | `experience` |
| Social Impact & Community | `impact` |
| Proof / Documents | `proofs` |
| Contact / footer | `profile`, `links` |

## Asset folders

All folders below contain a `.gitkeep` and a short README:

```text
public/assets/
├── certificates/
├── cv/
├── og/
├── projects/
│   ├── ecoloop/
│   └── vera/
├── proofs/
└── research/
```

Assets are served from `/public/assets/` but written in `content.ts` as `/assets/...`. The website URL `/assets/...` maps to the local path `public/assets/...`. For example, `/assets/projects/ecoloop/home.png` is the file `public/assets/projects/ecoloop/home.png`.
