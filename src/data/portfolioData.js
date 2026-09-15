import { 
  Code2, 
  Palette, 
  FileCode2, 
  Atom, 
  Wind, 
  Server, 
  Cpu, 
  Database, 
  FileJson, 
  Zap, 
  Layers, 
  Coffee, 
  TerminalSquare, 
  Binary,
  GitBranch,
  Github,
  Laptop,
  Cloud,
  ShoppingCart,
  Activity,
  Sprout,
  Wrench,
  MessageSquare,
  LayoutDashboard
} from 'lucide-react';

export const portfolioData = {
  personalInfo: {
    name: "ꪜⅈડꫝꪖꪶ D",
    role: "Full-Stack Developer",
    subtitle: "Computer Engineering Student",
    description: "I build modern, scalable and user-friendly web applications using React, Next.js, Node.js, Supabase and modern web technologies.",
    email: "dvishal1145@gmail.com",
    github: "https://github.com/Vishal-1", // Update actual if different
    linkedin: "https://www.linkedin.com/in/d-vishal-b91728372",
    profileImage: "/assets/images/profile.jpg", // Use placeholder or actual if exists
    availability: "AVAILABLE FOR OPPORTUNITIES"
  },
  about: {
    title: "ABOUT ME",
    description: "I am a passionate Full-Stack Developer and Computer Engineering student constantly exploring the latest web technologies. I specialize in building responsive, high-performance applications that provide real-world value. My goal is to create seamless user experiences from frontend to backend.",
    stats: [
      { value: "04+", label: "Projects" },
      { value: "15+", label: "Technologies" },
      { value: "03+", label: "Months Internship" },
      { value: "∞", label: "Learning" }
    ],
    highlights: [
      "🎓 Computer Engineering Student",
      "💻 Full-Stack Web Developer",
      "🚀 Interested in Real-World Applications",
      "⚡ Always Learning New Technologies"
    ]
  },
  skills: [
    {
      category: "FRONTEND",
      items: [
        { name: "HTML", icon: Code2, desc: "Semantic Structure" },
        { name: "CSS", icon: Palette, desc: "Modern Styling" },
        { name: "JavaScript", icon: FileCode2, desc: "ES6+ Logic" },
        { name: "React.js", icon: Atom, desc: "UI Components" },
        { name: "Next.js", icon: Atom, desc: "React Framework" },
        { name: "Tailwind CSS", icon: Wind, desc: "Utility-First CSS" }
      ]
    },
    {
      category: "BACKEND",
      items: [
        { name: "Node.js", icon: Server, desc: "JS Runtime" },
        { name: "Express.js", icon: Cpu, desc: "Web Framework" }
      ]
    },
    {
      category: "DATABASE",
      items: [
        { name: "PostgreSQL", icon: Layers, desc: "Relational DB" },
        { name: "Supabase", icon: Zap, desc: "Firebase Alt" },
        { name: "MongoDB", icon: FileJson, desc: "NoSQL DB" },
        { name: "Firebase", icon: Database, desc: "BaaS Platform" }
      ]
    },
    {
      category: "TOOLS & CLOUD",
      items: [
        { name: "Git", icon: GitBranch, desc: "Version Control" },
        { name: "GitHub", icon: Github, desc: "Code Hosting" },
        { name: "VS Code", icon: Laptop, desc: "Code Editor" },
        { name: "Vercel", icon: Cloud, desc: "Deployment" },
        { name: "AWS", icon: Cloud, desc: "Cloud Services" }
      ]
    }
  ],
  projects: [
    {
      id: "mediverse",
      title: "MEDIVERSE — SMART MEDICINE PLATFORM",
      description: "A modern full-stack healthcare platform designed to help users discover medicines, access medicine-related information, and interact with smart healthcare features through a responsive web interface.",
      techStack: ["React.js", "Node.js", "Express.js", "Supabase", "Tailwind CSS", "JavaScript"],
      features: [
        "User authentication",
        "Medicine search & management",
        "AI healthcare assistant",
        "Healthcare services",
        "Multi-language support",
        "Backend API integration",
        "Supabase database",
        "Responsive modern UI"
      ],
      image: "/assets/images/mediverse.png",
      githubLink: "#",
      liveLink: "#",
      gradient: "from-blue-600 to-violet-600"
    },
    {
      id: "uzhavar-sandhai",
      title: "UZHAVAR SANDHAI — FARM-TO-CUSTOMER MARKETPLACE",
      description: "A full-stack agricultural marketplace that connects customers directly with verified local farmers for fresh-produce shopping.",
      techStack: ["React", "Vite", "Tailwind CSS", "Supabase", "Framer Motion", "Axios"],
      features: [
        "Customer marketplace",
        "Shopping cart",
        "Checkout",
        "Farmer management",
        "Admin dashboard",
        "Rider dispatch",
        "Authentication",
        "Payout management",
        "Responsive UI"
      ],
      image: "/assets/images/uzhavar-landing.png",
      githubLink: "#",
      liveLink: "https://uzhavar-santhai-eight.vercel.app/",
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      id: "online-shopping-cart",
      title: "ONLINE SHOPPING CART",
      description: "A modern e-commerce web application that allows users to browse products, manage their shopping cart, and place orders through a simple and responsive online shopping interface.",
      techStack: ["React.js", "Node.js", "Express.js", "Supabase", "Tailwind CSS"],
      features: [
        "User authentication",
        "Product browsing & search",
        "Add / remove from cart",
        "Quantity & price calculation",
        "Shopping cart management",
        "Checkout & order management",
        "Database integration",
        "Responsive UI"
      ],
      image: "/assets/images/ecommerce.png",
      githubLink: "#",
      liveLink: "#",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      id: "realtime-chat",
      title: "REAL-TIME CHAT",
      description: "A real-time messaging application with modern authentication and responsive chat UI.",
      techStack: ["React", "Node.js", "Supabase", "Firebase"],
      features: ["Real-time messaging", "Authentication", "Chat rooms", "Responsive UI"],
      image: "chat", // Placeholder for CSS mockup
      githubLink: "#",
      liveLink: "#",
      gradient: "from-purple-600 to-pink-600"
    }
  ],
  experience: [
    {
      role: "FULL STACK WEB DEVELOPMENT INTERN",
      company: "Havonz Technologies",
      period: "March 2026 – June 2026",
      skills: [
        "React.js",
        "Full Stack Development",
        "Responsive Web Development",
        "Modern UI Development",
        "Practical Project Experience"
      ]
    }
  ],
  education: [
    {
      institution: "SRI RAMAKRISHNA POLYTECHNIC COLLEGE",
      location: "Coimbatore",
      degree: "Computer Engineering",
      period: "2021 - 2024" // Assuming
    }
  ]
};
