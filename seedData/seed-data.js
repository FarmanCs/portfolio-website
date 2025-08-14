const { MongoClient } = require("mongodb");

const MONGO_URL =
  process.env.MONGO_URL ||
  "mongodb+srv://farmancs2024:uPbXyl42FKkF5KW1@portfolio.yk5tjh9.mongodb.net/portfolio";

async function seedData() {
  const client = new MongoClient(MONGO_URL);

  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("portfolio");

    // Clear existing data
    await db.collection("about").deleteMany({});
    await db.collection("skills").deleteMany({});
    await db.collection("projects").deleteMany({});
    await db.collection("experience").deleteMany({});

    // Insert About data for Farman Ullah
    const aboutData = {
      name: "Farman Ullah",
      title: "MERN Stack Developer",
      location: "Lahore, Pakistan",
      email: "farmancs2024@gmail.com",
      phone: "+92 3499279661",
      bio: "Passionate MERN Stack Developer with expertise in MongoDB, Express.js, React.js, and Node.js, along with Next.js and MySQL. Specializing in building scalable RESTful APIs and secure authentication systems(JWT). Proficient in integrating third-party services like Stripe for payments and Cloudinary for media management, while following MVC architecture for clean and maintainable code. Certified in Google IT Support and Node.js, Express.js & MongoDB Bootcamp (Udemy). Eager to contribute to innovative projects and grow in a dynamic software development environment.",
      avatar: "/profile.png",
      socialLinks: {
        github: "https://github.com/FarmanCs",
        linkedin: "https://www.linkedin.com/in/farman-ullah99/",
        whatsapp: "+923499279661",
      },
    };

    await db.collection("about").insertOne(aboutData);
    console.log("✅ About data inserted");

    // Insert Skills data based on Farman's CV - MERN Stack Focus
    const skillsData = [
      // MERN Stack Core
      { name: "MongoDB", category: "database", proficiency: 88, icon: "🍃" },
      { name: "Express.js", category: "backend", proficiency: 90, icon: "🚂" },
      { name: "React.js", category: "frontend", proficiency: 85, icon: "⚛️" },
      { name: "Node.js", category: "backend", proficiency: 92, icon: "🟢" },

      // Frontend Skills
      { name: "Next.js", category: "frontend", proficiency: 80, icon: "⚡" },
      { name: "JavaScript", category: "frontend", proficiency: 95, icon: "🟨" },
      { name: "HTML/CSS", category: "frontend", proficiency: 85, icon: "🌐" },
      { name: "Bootstrap", category: "frontend", proficiency: 80, icon: "🎨" },

      // Backend Skills
      {
        name: "RESTful APIs",
        category: "backend",
        proficiency: 92,
        icon: "🔗",
      },
      {
        name: "JWT Authentication",
        category: "backend",
        proficiency: 88,
        icon: "🔐",
      },
      {
        name: "MVC Architecture",
        category: "backend",
        proficiency: 90,
        icon: "🏗️",
      },

      // Database Skills
      { name: "MySQL", category: "database", proficiency: 80, icon: "🐬" },

      // DevOps & Tools
      { name: "GitHub", category: "devops", proficiency: 85, icon: "📝" },
      { name: "Postman", category: "devops", proficiency: 80, icon: "📮" },
      {
        name: "Stripe Payments",
        category: "devops",
        proficiency: 75,
        icon: "💳",
      },
      { name: "Cloudinary", category: "devops", proficiency: 75, icon: "☁️" },

      // Other Skills
      {
        name: "Microsoft Office",
        category: "other",
        proficiency: 85,
        icon: "📄",
      },
      {
        name: "Cisco Networking",
        category: "other",
        proficiency: 70,
        icon: "🌐",
      },
    ];

    await db.collection("skills").insertMany(skillsData);
    console.log("✅ Skills data inserted");

    // Insert Projects data based on Farman's CV
    const projectsData = [
      {
        title:
          "Complete MERN Stack Development with Node.js, Express.js, React.js, and MongoDB",
        description:
          "Designed and developed a full-stack MERN application using Node.js, Express.js, React.js, and MongoDB. Built a RESTful API enabling seamless communication between the frontend and backend. Implemented JWT-based authentication and authorization to secure user data and ensure role-based access control. Utilized MongoDB for efficient database design, including data modeling, indexing, and query optimization. Integrated Stripe for secure payment processing and Cloudinary for media upload and management. Followed MVC architecture to ensure a clean, scalable, and maintainable codebase.",
        technologies: [
          "MongoDB",
          "Express.js",
          "React.js",
          "Node.js",
          "JWT Authentication",
          "Stripe Payments",
          "Cloudinary",
          "MVC Architecture",
        ],
        image:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
        githubUrl: "https://github.com/FarmanCs/Node.js-Advance.git",
        liveUrl: "",
        featured: true,
        createdAt: new Date("2024-01-15"),
      },
      {
        title: "React Project Portfolio",
        description:
          "A comprehensive React-based project showcasing modern web development practices and responsive design principles.",
        technologies: ["React.js", "JavaScript", "HTML/CSS"],
        image:
          "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
        githubUrl: "https://github.com/FarmanCs/react-project.git",
        liveUrl: "",
        featured: true,
        createdAt: new Date("2023-12-01"),
      },
      {
        title: "JavaScript Bankist Project",
        description:
          "A JavaScript-based banking application demonstrating advanced JavaScript concepts and modern web development techniques.",
        technologies: ["JavaScript", "HTML/CSS", "DOM Manipulation"],
        image:
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
        githubUrl: "https://github.com/FarmanCs/javaScript-bankist-project.git",
        liveUrl: "",
        featured: false,
        createdAt: new Date("2023-11-15"),
      },
    ];

    await db.collection("projects").insertMany(projectsData);
    console.log("✅ Projects data inserted");

    // Insert Experience data based on Farman's CV
    const experienceData = [
      {
        company: "Curious Packet",
        position: "Junior Backend Developer",
        location: "Lahore, Pakistan",
        startDate: new Date("2025-04-24"),
        current: true,
        description: [
          "Currently working remotely as a Junior MERN Stack Developer",
          "Gaining practical experience with MongoDB, Express.js, React.js, and Node.js to build and improve web applications",
          "Collaborating with development team to debug issues and optimize full-stack performance",
        ],
        technologies: [
          "MongoDB",
          "Express.js",
          "React.js",
          "Node.js",
          "Next.js",
        ],
      },
      {
        company: "AAA Digital Company",
        position: "Backend Development Intern",
        location: "Lahore, Pakistan",
        startDate: new Date("2024-12-20"),
        endDate: new Date("2025-03-15"),
        current: false,
        description: [
          "Enhanced skills by working on real-world MERN stack projects using advanced technologies",
          "Integrated Stripe for payment processing and Cloudinary for file uploads",
          "Developed full-stack features using React.js, Next.js, and Node.js",
          "Collaborated with the development team to debug issues and optimize full-stack performance",
          "Significantly boosted MERN stack development knowledge and practical understanding of modern web technologies",
        ],
        technologies: [
          "MongoDB",
          "Express.js",
          "React.js",
          "Node.js",
          "Next.js",
          "Stripe",
          "Cloudinary",
        ],
      },
    ];

    await db.collection("experience").insertMany(experienceData);
    console.log("✅ Experience data inserted");

    console.log("🎉 Database seeded successfully with Farman Ullah's data!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await client.close();
  }
}

// Run the seed function
seedData();
