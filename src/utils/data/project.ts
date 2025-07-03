export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  category: "Web Development" | "AI/ML" | "Mobile" | "Full Stack";
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "AI-Powered Task Management",
    description:
      "A smart task management application that uses machine learning to prioritize tasks and predict completion times. Built with React, Node.js, and TensorFlow.js.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "Node.js", "TensorFlow.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/luuvi/ai-task-manager",
    liveUrl: "https://ai-task-manager-demo.vercel.app",
    category: "AI/ML",
    featured: true,
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product listings, cart functionality, payment integration, and admin dashboard. Built with modern web technologies.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    githubUrl: "https://github.com/luuvi/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
    category: "Full Stack",
    featured: true,
  },
  {
    id: 3,
    title: "Computer Vision Image Classifier",
    description:
      "An image classification web app using deep learning models. Users can upload images and get real-time predictions with confidence scores.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Python", "PyTorch", "OpenCV", "Flask", "React"],
    githubUrl: "https://github.com/luuvi/image-classifier",
    liveUrl: "https://image-classifier-demo.herokuapp.com",
    category: "AI/ML",
    featured: true,
  },
  {
    id: 4,
    title: "Real-time Chat Application",
    description:
      "A modern chat application with real-time messaging, file sharing, emoji reactions, and group chat functionality. Built with Socket.io and React.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "Socket.io", "Node.js", "MongoDB", "JWT"],
    githubUrl: "https://github.com/luuvi/realtime-chat",
    liveUrl: "https://chat-app-demo.netlify.app",
    category: "Web Development",
    featured: false,
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description:
      "A responsive weather application that displays current conditions, forecasts, and weather maps. Features location-based weather and favorite cities.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "API Integration", "Geolocation", "Chart.js"],
    githubUrl: "https://github.com/luuvi/weather-dashboard",
    liveUrl: "https://weather-dashboard-demo.vercel.app",
    category: "Web Development",
    featured: false,
  },
  {
    id: 6,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React and TypeScript. Features dark/light themes, smooth animations, and optimized performance.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "TypeScript", "CSS Modules", "React Router"],
    githubUrl: "https://github.com/luuvi/portfolio-website",
    liveUrl: "https://luuvi-portfolio.vercel.app",
    category: "Web Development",
    featured: false,
  },
  {
    id: 7,
    title: "Data Visualization Dashboard",
    description:
      "An interactive dashboard for visualizing complex datasets with charts, graphs, and real-time updates. Built for business intelligence and analytics.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
    githubUrl: "https://github.com/luuvi/data-viz-dashboard",
    liveUrl: "https://data-dashboard-demo.vercel.app",
    category: "Full Stack",
    featured: false,
  },
  {
    id: 8,
    title: "Natural Language Processing Tool",
    description:
      "A web-based NLP tool for text analysis, sentiment analysis, and entity recognition. Supports multiple languages and provides detailed insights.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Python", "NLTK", "spaCy", "Flask", "React"],
    githubUrl: "https://github.com/luuvi/nlp-analysis-tool",
    liveUrl: "https://nlp-tool-demo.herokuapp.com",
    category: "AI/ML",
    featured: false,
  },
];

export const getFeaturedProjects = (): Project[] => {
  return projectsData.filter((project) => project.featured);
};

export const getProjectsByCategory = (
  category: Project["category"]
): Project[] => {
  return projectsData.filter((project) => project.category === category);
};

export const getAllCategories = (): Project["category"][] => {
  return ["Web Development", "AI/ML", "Mobile", "Full Stack"];
};

export const getProjectById = (id: number): Project | undefined => {
  return projectsData.find((project) => project.id === id);
};
