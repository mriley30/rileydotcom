export const siteConfig = {
  name: "Mike Riley",
  title: "Mike Riley - Software Engineer",
  description: "Personal website and portfolio of Mike Riley - Backend Developer, Cloud Consultant, and Software Engineer",
  url: "https://rileydotcom.com",
  ogImage: "https://rileydotcom.com/og.jpg",
  
  // Contact Information
  contact: {
    email: "michaelriley79@gmail.com",
    phone: "",
    location: "Indianapolis Area",
  },
  
  // Social Media Links
  socials: {
    github: "https://github.com/mriley30",
    linkedin: "https://www.linkedin.com/in/mike-riley-56b045172/",
    instagram: "https://instagram.com/mriley30",
    youtube: "https://youtube.com/@yourusername",
  },
  
  // Navigation
  navigation: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ],
  
  // Skills
  skills: [
    {
      name: 'Backend Development',
      description: 'C#, .NET Core, ASP.NET, Entity Framework',
      icon: 'Code'
    },
    {
      name: 'Cloud & DevOps',
      description: 'Azure, Google Cloud Platform, Docker, Kubernetes',
      icon: 'Globe'
    },
    {
      name: 'API Development',
      description: 'RESTful APIs, gRPC Microservices, Web APIs',
      icon: 'Palette'
    },
    {
      name: 'Database & Tools',
      description: 'SQL, MySQL, PostgreSQL, GitHub, CI/CD',
      icon: 'Zap'
    },
  ],
  
  // Featured Projects
  featuredProjects: [
    {
      title: 'Multi-Cloud VM Deployment Solution',
      description: 'Implemented a solution that seamlessly deployed Virtual Machines in both Azure and Google Cloud Platform, used by health agencies across multiple states to securely share sensitive information.',
      technologies: ['C#', '.NET Core', 'Azure', 'Google Cloud Platform', 'Docker'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Healthcare Information Tracking System',
      description: 'Developed the backend of an application to track medical information for immigrants, allowing medical professionals to track important details and health appointments for those entering the United States.',
      technologies: ['C#', 'ASP.NET Core', 'Entity Framework', 'SQL Server', 'RESTful APIs'],
      github: '#',
      live: '#',
      featured: true
    },
  ],
  
  // SEO
  seo: {
    title: "Mike Riley - Developer, Creator, Tech Enthusiast",
    description: "Personal website and portfolio of Mike Riley. Full-stack developer passionate about creating meaningful digital experiences.",
    keywords: ['Mike Riley', 'Developer', 'Portfolio', 'Web Development', 'React', 'Next.js'],
    author: 'Mike Riley',
    creator: 'Mike Riley',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: 'Mike Riley',
    },
  },
}
