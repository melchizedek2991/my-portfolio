const projects = [
  {
    title: "RawEstate CRM",
    status: "In Progress",
    description:
      "A real estate management application for agents and agencies — properties, leads, clients, agents, and tasks in one place, with a dashboard and reports section.",
    technologies: ["React", "Tailwind CSS", "Recharts"],
    image: "/images/13.png",
    github: "",
    liveDemo: "",
    caseStudy: {
      screenshots: ["/images/13.png", "/images/14.png"], 
      video: "https://www.youtube.com/embed/ipfTAqwHFcM",
      overview:
        "RawEstate CRM is a real estate management application built to help agents and agencies organize properties, leads, clients, agents, and follow-up tasks in one place, with a dashboard and reports section.",
      problem:
        "Real estate businesses often manage information across notebooks, spreadsheets, and messaging apps, making it hard to track which agent is handling a lead, which property a lead wants, client details, follow-ups, and the overall state of the business.",
      solution:
        "Users manage properties, agents, clients, and leads from one dashboard — creating leads and connecting them to an agent and property, tracking lead status, creating tasks tied to agents/clients/leads, and viewing business data through reports.",
      features: [
        "Dashboard (main entry point)",
        "Properties management",
        "Agents management",
        "Clients management",
        "Leads: create, edit, delete, search by name",
        "Lead status tracking (New, Contacted, Qualified)",
        "Tasks: create, edit, delete, assign to agent/client/lead",
        "Task priority and status tracking",
        "Reports with period filter and Recharts visualizations",
        "Data persisted in Local Storage",
      ],
      architecture:
        "React + Vite, component-based structure (Sidebar, Topbar, LeadForm, LeadTable, TaskForm, ReportChart, etc.) with page-level views for Dashboard, Properties, Leads, Tasks, and Reports. Data currently persists in browser Local Storage; a backend and database are planned next.",
      decisions: [
        {
          question: "Why store agentId and propertyId on a lead instead of the agent/property name directly?",
          answer: "Storing IDs and looking up the related agent/property mirrors how relationships work in a real relational database, rather than duplicating data across records.",
        },
        {
          question: "Why Local Storage for now instead of a real database?",
          answer: "It lets the frontend and data relationships get built and tested first; the plan is to move this data layer to a real backend once the core application logic is solid.",
        },
      ],
            challenges: [
        {
          challenge: "Connecting related entities — a Lead needed to reference an Agent and Property without directly storing their names.",
          solution: "Implemented the relationship using IDs (agentId, propertyId), with LeadRow looking up the matching agent and property from those IDs.",
        },
        {
          challenge: "Debugging component and import errors, such as LeadRow importing a CSS file that didn't exist, and duplicated code in the Tasks section causing repeated task creation and state updates.",
          solution: "Traced each error back to its source file using Vite's error output, fixing incorrect imports and removing duplicated logic.",
        },
        {
          challenge: "The Reports section initially used hardcoded figures for revenue, properties, clients, and other stats instead of real data.",
          solution: "Began replacing the hardcoded figures with calculations from actual Local Storage records, and introduced timestamps so records can eventually be filtered by reporting period.",
        },
      ],
      learned: [
        "Component-based architecture",
        "CRUD operations",
        "Modeling relationships between data (leads, agents, properties)",
        "State management across multiple sections",
        "Data visualization with Recharts",
        "Local Storage as a data layer",
      ],
    },
  },

  {
    title: "RawTech CBT",
    status: "In Progress",
    description:
      "A JAMB-style computer-based testing platform for Nigerian students, with question navigation, timer, and auto-submission.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express"],
    image: "/images/7.png",
    github: "",
    liveDemo: "",
        caseStudy: {
      screenshots: ["/images/7.png", "/images/12.png"],
      video: "https://www.youtube.com/embed/TSIY-mWGi7s",
      overview:
        "RawTech CBT is a mobile-first JAMB practice platform designed to help Nigerian students practice past questions in a realistic Computer-Based Test environment. It's also being built as a full-stack learning project covering React, TypeScript, REST APIs, Node.js, Express, and application state management.",
      problem:
        "JAMB candidates need an accessible way to practice questions in an environment close to the real CBT experience — answering, changing answers, navigating between questions, managing time, submitting, and seeing results immediately, not just a static list of questions.",
      solution:
        "Students select a practice mode (by subject, year, or topic), answer and navigate questions, monitor remaining time, submit manually or automatically when time runs out, and review their score. The app integrates an external question API while keeping its internal question structure independent from that API's format.",
      features: [
        "Practice by subject, year, or topic",
        "CBT-style question interface with countdown timer",
        "Question navigator",
        "Answer selection and changing answers",
        "Unanswered-question handling",
        "Manual submission confirmation",
        "Automatic submission when time expires",
        "Results screen with score, incorrect, and unanswered breakdown",
        "External question API integration",
        "Backend API layer (Node.js + Express)",
        "Question mapping from external format to internal format",
        "Local question fallback if the backend request fails",
      ],
      architecture:
        "React frontend → questionService.ts → Vite dev proxy → Node.js/Express backend → external question API → questionMapper.ts → internal Question[] → CBT interface. The frontend never needs to understand the external API's structure — the backend converts external questions into RawTech's own Question type.",
      decisions: [
        {
          question: "Why use a backend instead of calling the external API directly from the browser?",
          answer: "Creates a separation between the client app and the external question provider, and gives the app a controlled place to handle that communication (including keeping the API key server-side).",
        },
        {
          question: "Why use a question mapper?",
          answer: "The external API and RawTech don't share a data structure (e.g. the external API represents options as an object like {A, B, C, D}, while RawTech uses an array of {label, text}). A mapper converts the response so every component works with one consistent internal Question type, regardless of where questions come from.",
        },
        {
          question: "Why TypeScript?",
          answer: "Defines predictable structures for questions, options, and exam data, making structural errors easier to catch during development and giving a clear contract between parts of the app.",
        },
        {
          question: "Why a Vite dev proxy?",
          answer: "The React frontend and Express backend run on different ports during development. The proxy forwards frontend requests like /api/questions to Express without hardcoding the backend URL throughout the frontend.",
        },
      ],
      challenges: [
        {
          challenge: "External API data didn't match the app's internal question structure.",
          solution: "Built questionMapper.ts to transform the external API response into RawTech's internal Question type.",
        },
        {
          challenge: "Frontend and backend ran on different ports during development.",
          solution: "Configured a Vite dev proxy to forward /api requests to the Express backend.",
        },
        {
          challenge: "The CBT interface shouldn't depend on one specific question provider.",
          solution: "Created a Question abstraction and question service so the app works with Question[] regardless of source — making it possible to add RawTech's own question bank later without rewriting the CBT interface.",
        },
      ],
      learned: [
        "React state management",
        "TypeScript types",
        "Component architecture",
        "REST API integration",
        "Node.js and Express",
        "Data mapping",
        "Vite dev proxy",
        "Frontend/backend communication",
        "Separation of concerns",
      ],
    },
  },
]

export default projects