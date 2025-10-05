import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Achyutem Dubey",
  initials: "AD",
  url: "https://achyutem.vercel.app",
  location: "Gorakhpur, UP",
  locationLink: "https://www.google.com/maps/place/gorakpur",
  description:
    "Software Engineer and UI/UX Nerd.",
  summary:
    "Software developer who occasionally writes code that works. I turn coffee into features, spend hours arguing with bugs I probably caused, and specialize in solving problems nobody asked for.",
  avatarUrl: "/me.png",
  skills: [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express.js",
  "Python",
  "PostgreSQL",
  "Convex",
  "Docker",
  "Bash",
  "Git",
],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "achyutem.ad@gmail.com",
    tel: "+91",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/achyutem",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/achyutemdubey/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "achyutem.ad@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "MGUG",
      href: "https://mgug.ac.in",
      badges: [],
      location: "On-site",
      title: "Software Developer",
      logoUrl: "/mgug.png",
      start: "April 2025",
      end: "Current",
      description:
        "Migrated legacy Core PHP LMS to React/TypeScript/Express, achieving ~18× faster load speeds and ~40% lower CPU usage. Rebuilt the main university website with SSR, code-splitting, and caching, improving Lighthouse score from 41→95 and reducing load time by 12s. Built an internal workflow & collaboration hub with real-time updates and role-based dashboards, cutting manual coordination by ~50%.",
    },
    {
      company: "S2T.ai",
      badges: [],
      href: "https://s2t.ai",
      location: "Remote",
      title: "Software Developer Intern",
      logoUrl: "/s2t.png",
      start: "March 2024",
      end: "May 2024",
      description:
        "Re-engineered in-house ticketing system with multi-format uploads, reducing manual work by ~30% and cutting load times by 1.2s. Built a cross-platform document viewer with lazy loading and keyboard navigation, boosting render speeds ~40%. Designed a data visualization dashboard with interactive charts and filters, reducing manual reporting by ~60% and improving performance by ~50%.",
    },
  ],
  education: [
    {
      school: "Chaudhary Charan Singh University (CCSU)",
      href: "https://ccsuniversity.ac.in",
      degree: "Bachelor of Computer Applications (BCA)",
      logoUrl: "/ccsu.jpg",
      start: "2019",
      end: "2022",
    },
    {
      school: "Maharishi University of Information Technology (MUIT)",
      href: "https://www.muit.in",
      degree: "Master of Computer Applications (MCA)",
      logoUrl: "/muit.png",
      start: "2022",
      end: "2024",
    },
  ],
  projects: [
  {
    title: "Hire Truth",
    href: "https://hire-truth.vercel.app",
    dates: "2024 – Present",
    active: true,
    description:
      "Community-driven platform to share and read honest reviews about companies that ghost candidates or demand immediate joining. Helps job seekers make better decisions with transparent insights.",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "PostgreSQL",
    ],
    links: [
      {
        type: "Website",
        href: "https://hire-truth.vercel.app",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/hire-truth.png",
  },
  {
    title: "NotesForge",
    href: "https://github.com/Achyutem/NotesForge",
    dates: "2024 – Present",
    active: true,
    description:
      "A fast, lightweight task manager built with Next.js and TypeScript. Focused on efficiency and simplicity with SQLite backend, designed for personal productivity and small teams.",
    technologies: [
      "Next.js",
      "TypeScript",
      "SQLite",
      "TailwindCSS",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/Achyutem/NotesForge",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/notes.png",
  },
  {
    title: "Jan Ausadhi Catalog",
    href: "https://achyutem.github.io/JanAushadhi?ref=portfolio",
    dates: "2023",
    active: true,
    description:
      "A lightweight, installable PWA supporting India’s Pradhan Mantri Bhartiya Janaushadhi Pariyojana (PMBJP). Provides a clean, ad-free way to explore generic medicines and compare prices.",
    technologies: [
      "PWA",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    links: [
      {
        type: "Website",
        href: "https://achyutem.github.io/JanAushadhi?ref=portfolio",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/Achyutem/JanAushadhi",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/medicine.png",
  },
  {
    title: "Inflation Calculator",
    href: "https://achyutem.github.io/inflation/?ref=github",
    dates: "2023",
    active: true,
    description:
      "Interactive tool to track and visualize the inflation of Indian currency over time, helping users understand purchasing power changes and financial trends.",
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "FOSS",
    ],
    links: [
      {
        type: "Website",
        href: "https://achyutem.github.io/inflation/?ref=github",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/Achyutem/inflation",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/inflation.png",
  },
],
} as const;
