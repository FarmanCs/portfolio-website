import getMongoClient from "./mongodb";

export interface Skill {
  _id: string;
  name: string;
  category: "frontend" | "backend" | "database" | "devops" | "other";
  proficiency: number; // 1-100
  icon?: string;
}

export interface Project {
  _id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  createdAt: Date;
}

export interface Experience {
  _id: string;
  company: string;
  position: string;
  location: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  description: string[];
  technologies: string[];
}

export interface About {
  _id: string;
  name: string;
  title: string;
  location: string;
  email: string;
  phone?: string;
  bio: string;
  avatar: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    whatsapp?: string;
  };
}

// Fallback data for when MongoDB is not available
const fallbackSkills: Skill[] = [
  // MERN Stack Core
  {
    _id: "1",
    name: "MongoDB",
    category: "database",
    proficiency: 88,
    icon: "🍃",
  },
  {
    _id: "2",
    name: "Express.js",
    category: "backend",
    proficiency: 90,
    icon: "🚂",
  },
  {
    _id: "3",
    name: "React.js",
    category: "frontend",
    proficiency: 85,
    icon: "⚛️",
  },
  {
    _id: "4",
    name: "Node.js",
    category: "backend",
    proficiency: 92,
    icon: "🟢",
  },

  // Frontend Skills
  {
    _id: "5",
    name: "Next.js",
    category: "frontend",
    proficiency: 80,
    icon: "⚡",
  },
  {
    _id: "6",
    name: "JavaScript",
    category: "frontend",
    proficiency: 95,
    icon: "🟨",
  },
  {
    _id: "7",
    name: "HTML/CSS",
    category: "frontend",
    proficiency: 85,
    icon: "🌐",
  },
  {
    _id: "8",
    name: "Bootstrap",
    category: "frontend",
    proficiency: 80,
    icon: "🎨",
  },

  // Backend Skills
  {
    _id: "9",
    name: "RESTful APIs",
    category: "backend",
    proficiency: 92,
    icon: "🔗",
  },
  {
    _id: "10",
    name: "JWT Authentication",
    category: "backend",
    proficiency: 88,
    icon: "🔐",
  },
  {
    _id: "11",
    name: "MVC Architecture",
    category: "backend",
    proficiency: 90,
    icon: "🏗️",
  },

  // Database Skills
  {
    _id: "12",
    name: "MySQL",
    category: "database",
    proficiency: 80,
    icon: "🐬",
  },

  // DevOps & Tools
  {
    _id: "13",
    name: "GitHub",
    category: "devops",
    proficiency: 85,
    icon: "📝",
  },
  {
    _id: "14",
    name: "Postman",
    category: "devops",
    proficiency: 80,
    icon: "📮",
  },
  {
    _id: "15",
    name: "Stripe Payments",
    category: "devops",
    proficiency: 75,
    icon: "💳",
  },
  {
    _id: "16",
    name: "Cloudinary",
    category: "devops",
    proficiency: 75,
    icon: "☁️",
  },

  // Other Skills
  {
    _id: "17",
    name: "Microsoft Office",
    category: "other",
    proficiency: 85,
    icon: "📄",
  },
  {
    _id: "18",
    name: "Cisco Networking",
    category: "other",
    proficiency: 70,
    icon: "🌐",
  },
  {
    _id: "19",
    name: "Typing Skills",
    category: "other",
    proficiency: 80,
    icon: "⌨️",
  },
];

const fallbackAbout: About = {
  _id: "1",
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

const fallbackProjects: Project[] = [
  {
    _id: "1",
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
    _id: "2",
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
    _id: "3",
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

const fallbackExperience: Experience[] = [
  {
    _id: "1",
    company: "Curious Packet",
    position: "Junior MERN Stack Developer",
    location: "Lahore, Pakistan",
    startDate: new Date("2025-04-24"),
    current: true,
    description: [
      "Currently working remotely as a Junior MERN Stack Developer",
      "Gaining practical experience with MongoDB, Express.js, React.js, and Node.js to build and improve web applications",
      "Collaborating with development team to debug issues and optimize full-stack performance",
    ],
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Next.js"],
  },
  {
    _id: "2",
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

export async function getSkills(): Promise<Skill[]> {
  try {
    const client = await getMongoClient();
    const db = client.db("portfolio");

    const skills = await db
      .collection("skills")
      .find({})
      .sort({ category: 1, proficiency: -1 })
      .toArray();

    // Convert MongoDB documents to plain objects
    return JSON.parse(JSON.stringify(skills)) as Skill[];
  } catch (error) {
    console.log("MongoDB connection failed, using fallback data for skills");
    return fallbackSkills;
  }
}

export async function getProjects(): Promise<Project[]> {
  try {
    const client = await getMongoClient();
    const db = client.db("portfolio");

    const projects = await db
      .collection("projects")
      .find({})
      .sort({ featured: -1, createdAt: -1 })
      .toArray();

    // Convert MongoDB documents to plain objects
    return JSON.parse(JSON.stringify(projects)) as Project[];
  } catch (error) {
    console.log("MongoDB connection failed, using fallback data for projects");
    return fallbackProjects;
  }
}

export async function getExperience(): Promise<Experience[]> {
  try {
    const client = await getMongoClient();
    const db = client.db("portfolio");

    const experience = await db
      .collection("experience")
      .find({})
      .sort({ startDate: -1 })
      .toArray();

    // Convert MongoDB documents to plain objects
    return JSON.parse(JSON.stringify(experience)) as Experience[];
  } catch (error) {
    console.log(
      "MongoDB connection failed, using fallback data for experience"
    );
    return fallbackExperience;
  }
}

export async function getAbout(): Promise<About | null> {
  try {
    const client = await getMongoClient();
    const db = client.db("portfolio");

    const about = await db.collection("about").findOne({});

    // Convert MongoDB document to plain object
    return about ? (JSON.parse(JSON.stringify(about)) as About) : null;
  } catch (error) {
    console.log("MongoDB connection failed, using fallback data for about");
    return fallbackAbout;
  }
}
