const projects = [
  {
    title: "RawEstate CRM",
    status: "In Progress",
    description:
      "A real-estate CRM application with dashboards, leads and analytics — built to learn core application concepts like CRUD, state, and data-driven UI.",
    technologies: ["React", "Tailwind CSS"],
    image: "/images/rawestate.png",
    github: "",
    liveDemo: "",
    caseStudy: null,
  },

  {
    title: "RawTech CBT",
    status: "In Progress",
    description:
      "A JAMB-style computer-based testing platform for Nigerian students, with question navigation, timer, and auto-submission.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express"],
    image: "/images/jamb-cbt.png",
    github: "",
    liveDemo: "",
    caseStudy: {
      overview:
        "RawTech CBT is a mobile-first JAMB practice platform designed to help Nigerian students practice past questions in a realistic CBT environment.",
      problem:
        "Students need accessible JAMB practice, mostly on mobile devices with inconsistent internet access. A raw score alone doesn't show what a student needs to improve.",
      solution:
        "Students practice questions in a realistic CBT interface, submit answers, and receive results that highlight areas to improve.",
      features: [
        "Practice selection by subject/topic",
        "CBT-style interface with timer",
        "Question navigator",
        "Answer selection and changing answers",
        "Manual submission confirmation",
        "Auto-submit when time runs out",
        "Results and score calculation",
        "External question API integration",
      ],
      architecture:
        "React frontend → Question Service → Vite dev proxy → Node.js/Express backend → external question API → question mapper → typed Question[] → CBT interface.",
      decisions: [
        {
          question: "Why a backend instead of calling the API directly from the browser?",
          answer: "Keeps the external API key on the server instead of exposing it in client-side code.",
        },
        {
          question: "Why a question mapper?",
          answer: "The external API has its own response shape, so the backend converts it into RawTech's internal Question type.",
        },
        {
          question: "Why TypeScript?",
          answer: "Defines predictable question and answer structures across the app.",
        },
      ],
      challenges: [
        {
          challenge: "External API response didn't match the app's internal question structure.",
          solution: "Built a question mapper that converts the external response into RawTech's internal Question type.",
        },
        {
          challenge: "Frontend and backend running on different ports during development.",
          solution: "Configured a Vite dev proxy to forward /api requests to Express.",
        },
      ],
      learned: [
        "React state management",
        "TypeScript interfaces",
        "REST APIs",
        "Node.js and Express",
        "Data mapping",
        "Vite dev proxy",
      ],
    },
  },
]

export default projects