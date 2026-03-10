export const projects = [
  {
    slug: "naturespots",
    title: "NatureSpots",
    shortDescription:
      "A full-stack app for discovering and saving nature spots, with user accounts and database-backed content.",
    longDescription:
      "NatureSpots is a full-stack web application that allows users to discover, create and manage nature locations. focused on building real user flows: authentication, protected actions, and database-driven content. It’s built with Flask on the backend and uses SQLite for data storage, with a simple frontend to browse and manage spots. NOTE: The demo is hosted on a free infrastructure, so database may reset occasionally.",
    techStack: ["Python", "Flask", "SQL", "HTML/CSS"],
    features: [
      "User registration and login",
      "Create and manage nature spots",
      "Database-backed content",
      "Responsive UI for browsing spots",
    ],
    learnings: [
      "How to structure a Flask app with templates and routes",
      "Handling sessions/auth flows cleanly",
      "Working with database models and CRUD patterns",
    ],
    challenges: [
      "Keeping user flows smooth (auth + redirects)",
      "Avoiding duplicate or inconsistent data",
      "Balancing clarity of code with speed of building",
    ],
    links: {
      live: "https://naturespots.onrender.com/",
      github: "https://github.com/astong2/NatureSpotsApp",
    },
  },
  {
    slug: "member-registration-system",
    title: "Member Registration System",
    shortDescription:
      "A Flask app that handles registration, login, sessions, and user flows. To be used as a larger project",
    longDescription:
      "This project was built to strengthen my backend foundations: authentication, sessions, validation, and clean application structure. It focuses on building reliable core functionality that can be reused in larger apps.",
    techStack: ["Python", "Flask", "Auth", "Templates"],
    features: [
      "User registration and login flow",
      "Session handling",
      "Clean routing and templates",
    ],
    learnings: [
      "Authentication basics and session management",
      "Clear separation of concerns in a small Flask app",
      "Improving UX with predictable flows",
    ],
    challenges: [
      "Edge cases around duplicate users",
      "Keeping the code simple but scalable",
    ],
    links: {
      github: "https://github.com/astong2/member-registration-system",
    },
  },
];
