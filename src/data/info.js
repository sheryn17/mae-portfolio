// Edit this file to update your portfolio content — everything on the site pulls from here.

export const profile = {
  name: "Sheryn Mae Abril",
  shortName: "Mae",
  tagline: "BS Computer Science — Cybersecurity & Digital Forensics",
  blurb:
    "Second-year Computer Science student at Asia Pacific College, building toward a career as a software developer while practicing offensive security on the side — from AI-integrated web apps to vulnerability assessments.",
  email: "sgabril@student.apc.edu.ph",
  phone: "0927 339 6647",
  github: "https://github.com/", // TODO: add your GitHub URL
  linkedin: "", // TODO: add your LinkedIn URL profile
  facebook: "", // TODO: add your Facebook URL
  messenger: "", // TODO: add your Messenger link
  resumeUrl: "/Resume.pdf",
};

export const about = `I'm a second-year BS Computer Science student at Asia Pacific College, specializing in Cybersecurity and Digital Forensics. I split my time between building applications — most recently an AI-integrated HR platform — and hands-on security labs: exploiting deliberately vulnerable apps, running network reconnaissance, and working through frameworks like OWASP Top 10 and MITRE ATT&CK. My goal is to work as a software developer while keeping a security-first mindset, and to support my family after graduating.`;

export const techStack = {
  Development: ["Next.js", "Python", "Supabase", "Gemini API", "RapidFuzz"],
  "Security & Forensics": [
    "Burp Suite",
    "sqlmap",
    "Nmap",
    "Wireshark",
    "Kali Linux",
    "OWASP Top 10",
    "MITRE ATT&CK",
    "PTES",
  ],
};

export const education = [
  {
    school: "Asia Pacific College",
    degree: "BS Computer Science — Cybersecurity & Digital Forensics",
    period: "2nd Year, ongoing",
    details: "Coursework spans secure development, penetration testing, digital forensics fundamentals, and modeling & simulation.",
  },
];

export const experience = [
  {
    title: "Capstone Developer — HR GameChanger",
    org: "Team Fourtitude",
    period: "Ongoing",
    details:
      "Building an AI-integrated HR web portal for HR CALABARZON Group, Inc. Wrote 49 structured test cases across 8 modules and contributed to the system's rationale guide and methodology documentation.",
  },
  {
    title: "Simulation Researcher — Parking Occupancy Study",
    org: "Team Sisterakas · MODESIM SF241",
    period: "Coursework",
    details:
      "Modeled parking occupancy at two Makati facilities as a dynamic stochastic discrete-event system, using AI-predicted arrival probabilities from a Kaggle dataset.",
  },
];

export const projects = [
  {
    title: "HR GameChanger",
    tag: "Capstone",
    description:
      "AI-integrated HR web portal covering member profiles, session management, career paths, payments, and an analytics dashboard.",
    stack: ["Next.js", "Supabase", "HitPay/HMAC", "Gemini API"],
  },
  {
    title: "Parking Occupancy Simulation",
    tag: "Modeling & Simulation",
    description:
      "Dynamic stochastic discrete-event model comparing occupancy at two Makati parking facilities.",
    stack: ["Python", "Jupyter", "Kaggle dataset"],
  },
  {
    title: "bWAPP Vulnerability Assessment",
    tag: "VAPT Report",
    description:
      "Penetration test against a deliberately vulnerable web app: SQL injection (GET + blind boolean), stored XSS, and reflected XSS, each documented with proof-of-concept steps and remediation.",
    stack: ["Kali Linux", "Burp Suite", "sqlmap"],
  },
  {
    title: "RizLife: Module 3",
    tag: "Humanities Project",
    description:
      "AI-generated video and storybook created for a group finals project on the life and works of José Rizal.",
    stack: ["AI video", "Storytelling"],
  },
];

// Add real certifications here as you earn them — leave the array empty to hide the section.
export const certifications = [
  {
    title: "Advanced Cyber Threat Intelligence",
    issuer: "LinkedIn Learning",
    date: "March 2026",
  },
  {
    title: "Cybersecurity Awareness: Cybersecurity Terminology",
    issuer: "LinkedIn Learning",
    date: "September 2026",
  },
  {
    title: "Machine Learning with Python: Foundations",
    issuer: "LinkedIn Learning",
    date: "August 2026",
  },
  {
    title: "Creating a Business Plan",
    issuer: "LinkedIn Learning",
    date: "January 2025",
  },
  {
    title: "Design Thinking Program",
    issuer: "UnionBank UBP Xcellerator Program",
    date: "March 2026",
  },
];
