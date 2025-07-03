export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  credentialUrl?: string;
  category: "AI/ML" | "SE";
  skills: string[];
}

export const certificatesData: Certificate[] = [
  // AI/ML Certificates
  {
    id: 1,
    title: "Data Science Professional Certificate",
    issuer: "IBM",
    date: "2024",
    description:
      "Comprehensive data science program covering Python, SQL, data analysis, machine learning, and data visualization using real-world datasets and industry tools.",
    image: "/placeholder.svg?height=200&width=300",
    credentialUrl:
      "https://coursera.org/verify/professional-cert/ibm-data-science",
    category: "AI/ML",
    skills: [
      "Python",
      "SQL",
      "Data Analysis",
      "Machine Learning",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Jupyter",
    ],
  },
  {
    id: 2,
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "2024",
    description:
      "Advanced deep learning specialization covering neural networks, CNNs, RNNs, sequence models, and practical implementation using TensorFlow and Keras.",
    image: "/placeholder.svg?height=200&width=300",
    credentialUrl: "https://coursera.org/verify/specialization/deeplearning-ai",
    category: "AI/ML",
    skills: [
      "TensorFlow",
      "Keras",
      "Neural Networks",
      "CNN",
      "RNN",
      "Deep Learning",
      "Python",
      "Computer Vision",
    ],
  },

  // Software Engineering Certificates
  {
    id: 3,
    title: "Meta Full-Stack Developer Specialization",
    issuer: "Meta",
    date: "2024",
    description:
      "Complete full-stack development program covering React, Node.js, databases, version control, and modern web development practices from Meta engineers.",
    image: "/placeholder.svg?height=200&width=300",
    credentialUrl: "https://coursera.org/verify/specialization/meta-fullstack",
    category: "SE",
    skills: [
      "React",
      "Node.js",
      "JavaScript",
      "HTML/CSS",
      "Git",
      "MongoDB",
      "Express.js",
      "REST APIs",
    ],
  },
  {
    id: 4,
    title: "AWS Fundamentals Specialization",
    issuer: "Amazon Web Services",
    date: "2024",
    description:
      "Foundational AWS cloud computing specialization covering core services, security, architecture, and best practices for cloud deployment and management.",
    image: "/placeholder.svg?height=200&width=300",
    credentialUrl:
      "https://coursera.org/verify/specialization/aws-fundamentals",
    category: "SE",
    skills: [
      "AWS",
      "Cloud Computing",
      "EC2",
      "S3",
      "Lambda",
      "DevOps",
      "Cloud Architecture",
      "Security",
    ],
  },
];

export const getCertificatesByCategory = (category: "AI/ML" | "SE") => {
  return certificatesData.filter((cert) => cert.category === category);
};

export const getAllCategories = () => {
  return ["AI/ML", "SE"] as const;
};
