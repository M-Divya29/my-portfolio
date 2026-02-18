import React, { useState, useEffect } from 'react';
import { Code, Award, Briefcase, GraduationCap, Mail, Linkedin, Github, ExternalLink, Star, TrendingUp, Database, Server, Cpu, BookOpen, Target, CheckCircle, Users, Globe, Shield, Cloud } from 'lucide-react';

export default function ProfessionalPortfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'certifications', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const professionalSummary = {
    title: "Professional Summary",
    paragraphs: [
      "Results-driven Java Full Stack Developer with a Bachelor of Technology in Artificial Intelligence and Machine Learning (9.54 CGPA), combining strong academic excellence with practical expertise in building enterprise-grade, scalable web applications. Specialized in leveraging Spring Boot, React.js, and MySQL to architect secure, high-performance solutions that drive business value.",
      "Demonstrated technical proficiency through intensive full-stack development training at ExcelR Solutions, where I successfully architected and deployed 3+ production-ready applications serving 500+ concurrent users with 99.5% uptime. Achieved measurable impact through SQL query optimization and database indexing, resulting in a 15% reduction in application latency and improved page load times from 2.8 seconds to 2.4 seconds.",
      "Possess comprehensive knowledge of the complete software development lifecycle, from requirements gathering and system design to deployment and maintenance. Experienced in implementing RESTful APIs, JWT authentication, role-based access control (RBAC), and microservices architecture following industry best practices and design patterns.",
      "Expanded technical breadth through virtual experience programs with leading global organizations including Tata Group, Walmart Global Tech, JPMorgan Chase & Co., and Deloitte, gaining exposure to enterprise-level software engineering practices, technology consulting methodologies, and data-intensive system architectures.",
      "Augmented full-stack development expertise with specialized knowledge in Artificial Intelligence and Machine Learning, completing advanced training in Generative AI (Growthschool) and Modern AI (Cisco Networking Academy). Proficient in developing CNN-based models, implementing machine learning algorithms, and leveraging AI-powered tools for enhanced productivity and innovation."
    ]
  };

  const technicalSkills = {
    "Backend Development": {
      icon: <Server size={24} />,
      color: '#3b82f6',
      items: [
        'Java (Core Java, Java 8+)',
        'Spring Framework (Spring Boot, Spring MVC, Spring Security)',
        'RESTful API Development & Design',
        'JWT Authentication & Authorization',
        'JDBC & Hibernate ORM',
        'API Documentation (Swagger/OpenAPI)'
      ]
    },
    "Frontend Development": {
      icon: <Code size={24} />,
      color: '#8b5cf6',
      items: [
        'React.js (Hooks, Context API)',
        'Redux & State Management',
        'JavaScript (ES6+, Async/Await)',
        'HTML5 (Semantic Markup)',
        'CSS3 (Flexbox, Grid, Animations)',
        'Responsive Web Design',
        'Bootstrap & Tailwind CSS',
        'Modern UI/UX Principles'
      ]
    },
    "Database Management": {
      icon: <Database size={24} />,
      color: '#06b6d4',
      items: [
        'MySQL (Query Optimization, Indexing)',
        'MongoDB (NoSQL)',
        'H2 Database',
        'Database Design & Normalization',
        'SQL Query Performance Tuning',
        'Connection Pooling',
        'Transaction Management'
      ]
    },
    "AI & Machine Learning": {
      icon: <Cpu size={24} />,
      color: '#10b981',
      items: [
        'Python (NumPy, Pandas, Matplotlib)',
        'TensorFlow & Keras',
        'scikit-learn',
        'Convolutional Neural Networks (CNN)',
        'Machine Learning Algorithms',
        'Deep Learning Fundamentals',
        'Large Language Models (LLMs)',
        'Generative AI & Prompt Engineering'
      ]
    },
    "DevOps & Tools": {
      icon: <Cloud size={24} />,
      color: '#f59e0b',
      items: [
        'Git & GitHub (Version Control)',
        'AWS Cloud Services',
        'Postman (API Testing)',
        'VS Code, IntelliJ IDEA, Eclipse'
      ]
    },
    "Software Engineering": {
      icon: <BookOpen size={24} />,
      color: '#ec4899',
      items: [
        'Object-Oriented Programming (OOP)',
        'Data Structures & Algorithms',
        'Design Patterns (Singleton, Factory, MVC)',
        'System Design & Architecture',
        'Agile/Scrum Methodologies'
      ]
    }
  };

  const projects = [
    {
      title: 'ML-Based Terrorist Attack Prediction & Risk Assessment System',
      category: 'Machine Learning • Data Analytics',
      duration: 'Academic Project',
      description: 'Engineered a comprehensive predictive analytics system leveraging machine learning to analyze historical terrorist attack data and forecast high-risk regions with actionable intelligence. Implemented and benchmarked multiple supervised learning algorithms including Random Forest, Support Vector Machine (SVM), and Neural Networks to identify optimal prediction accuracy.',
      technicalImplementation: [
        'Processed and analyzed 10,000+ historical attack records using Python, Pandas, and NumPy for comprehensive data preprocessing',
        'Performed advanced feature engineering, creating 25+ derived features including temporal patterns, geographical clustering, and attack type correlations',
        'Implemented ensemble methods combining multiple ML algorithms to achieve 89% prediction accuracy with robust cross-validation',
        'Developed real-time risk assessment dashboard using Matplotlib and Seaborn for data visualization and stakeholder reporting',
        'Applied hyperparameter tuning using GridSearchCV and RandomizedSearchCV for model optimization',
        'Utilized feature scaling, normalization, and dimensionality reduction techniques to enhance model performance'
      ],
      technologies: ['Python', 'TensorFlow', 'scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Random Forest', 'SVM', 'Neural Networks', 'Feature Engineering'],
      keyMetrics: [
        '89% Prediction Accuracy',
        '10,000+ Records Analyzed',
        '5+ ML Algorithms Implemented',
        '25+ Engineered Features'
      ],
      github: 'https://github.com/mdivyalalitha29'
    },
    {
      title: 'Handwritten Digit Recognition System using Deep Learning',
      category: 'Deep Learning • Computer Vision',
      duration: 'Academic Project',
      description: 'Developed a production-ready handwritten digit recognition system utilizing Convolutional Neural Networks (CNN) for high-accuracy classification of handwritten digits from the MNIST dataset. Implemented advanced deep learning techniques and optimization strategies to achieve state-of-the-art performance with real-time inference capabilities.',
      technicalImplementation: [
        'Architected CNN model with multiple convolutional and pooling layers using TensorFlow and Keras frameworks',
        'Implemented data augmentation techniques (rotation, scaling, shifting) to improve model generalization and prevent overfitting',
        'Applied dropout regularization (30% dropout rate) and batch normalization for enhanced model stability',
        'Achieved 96% accuracy on MNIST test dataset through systematic architecture optimization and hyperparameter tuning',
        'Optimized inference time by 40% through model quantization and architecture refinement',
        'Deployed as interactive web application using Flask backend with real-time digit recognition interface',
        'Implemented early stopping and learning rate scheduling for efficient training'
      ],
      technologies: ['Python', 'TensorFlow', 'Keras', 'CNN', 'OpenCV', 'Computer Vision', 'NumPy', 'Flask', 'Image Processing'],
      keyMetrics: [
        '96% Test Accuracy',
        '40% Faster Inference',
        'Real-time Recognition',
        'Web Application Deployed'
      ],
      github: 'https://github.com/mdivyalalitha29'
    },
    {
      title: 'Online Pharmacy Management System',
      category: 'Full-Stack Development • E-Commerce',
      duration: 'Training Project',
      description: 'Architected and developed an enterprise-grade pharmaceutical e-commerce platform featuring comprehensive medication management, secure prescription processing, and real-time inventory control. Built using microservices architecture to ensure scalability, maintainability, and high availability for healthcare operations.',
      technicalImplementation: [
        'Designed microservices architecture with 4+ independent services (Authentication, Prescription, Inventory, Order Management)',
        'Implemented JWT-based authentication and role-based access control (RBAC) supporting three user roles: Customers, Pharmacists, and Administrators',
        'Developed prescription upload, verification, and validation system with secure document handling and pharmacist review workflow',
        'Built real-time inventory management system with automatic stock level monitoring and low-stock alerts',
        'Integrated Redis caching layer, reducing database query time by 60% and improving overall application performance',
        'Implemented RESTful APIs with comprehensive error handling, input validation, and API documentation using Swagger',
        'Designed responsive React frontend with Redux state management supporting seamless user experience across all devices',
        'Achieved 99.5% uptime while handling 500+ concurrent users through load balancing and horizontal scaling',
        'Integrated secure payment gateway with PCI compliance and transaction logging'
      ],
      technologies: ['Spring Boot', 'React', 'Redux', 'MySQL', 'JWT', 'REST API', 'Microservices', 'Redis', 'Docker', 'Swagger', 'Payment Gateway'],
      keyMetrics: [
        '99.5% Uptime',
        '500+ Concurrent Users',
        '60% Query Optimization',
        '4 Microservices'
      ],
      github: 'https://github.com/mdivyalalitha29'
    },
    {
      title: 'Headless Pizza Ordering System',
      category: 'Frontend Development • Modern Web',
      duration: 'Training Project',
      description: 'Developed a modern, headless CMS-based pizza ordering application leveraging decoupled architecture for enhanced flexibility and scalability. Implemented dynamic content management with real-time customization features and seamless payment integration.',
      technicalImplementation: [
        'Integrated headless CMS for dynamic menu management, enabling non-technical staff to update products, pricing, and descriptions',
        'Built real-time pizza customization interface with interactive topping selection, size options, and crust preferences',
        'Implemented Stripe payment gateway integration with secure token handling and order confirmation system',
        'Developed responsive UI using React and Tailwind CSS, ensuring optimal experience across desktop, tablet, and mobile devices',
        'Created admin dashboard for menu management, order tracking, and business analytics',
        'Implemented email notification system for order confirmations and status updates using Node.js backend',
        'Utilized Axios for efficient API communication with proper error handling and retry mechanisms'
      ],
      technologies: ['React', 'Redux', 'Headless CMS', 'REST API', 'Stripe', 'Tailwind CSS', 'Axios', 'Node.js', 'Email Service'],
      keyMetrics: [
        'Real-time Customization',
        'Secure Payments',
        'Mobile Responsive',
        'Admin Dashboard'
      ],
      github: 'https://github.com/mdivyalalitha29'
    },
    {
      title: 'Task Management & Collaboration System',
      category: 'Full-Stack Development • Productivity',
      duration: 'Training Project',
      description: 'Engineered a comprehensive task management application with collaborative features, enabling teams to organize, prioritize, and track project tasks efficiently. Implemented secure authentication and intuitive user interface for enhanced productivity.',
      technicalImplementation: [
        'Developed complete CRUD operations with Spring Boot RESTful APIs for task creation, updates, deletion, and retrieval',
        'Implemented JWT-based authentication and authorization with secure password hashing using BCrypt',
        'Built task categorization system with custom tags, priority levels (High, Medium, Low), and due date management',
        'Created advanced filtering and search functionality with multiple criteria (status, priority, date range, assignee)',
        'Designed responsive React frontend with Bootstrap for consistent user experience across all screen sizes',
        'Implemented real-time task status updates and collaboration features for team coordination',
        'Integrated MySQL database with optimized queries and proper indexing for enhanced performance'
      ],
      technologies: ['Spring Boot', 'React', 'MySQL', 'JWT', 'REST API', 'Bootstrap', 'BCrypt'],
      keyMetrics: [
        'Complete CRUD Operations',
        'JWT Authentication',
        'Advanced Filtering',
        'Responsive Design'
      ],
      github: 'https://github.com/mdivyalalitha29'
    }
  ];

  const experience = [
    {
      title: 'Java Full Stack Developer',
      company: 'ExcelR Solutions',
      location: 'Bengaluru, Karnataka, India',
      period: 'March 2025 - September 2025',
      duration: '7 months',
      type: 'Intensive Professional Training',
      description: 'Comprehensive full-stack development training program focusing on enterprise Java, Spring Boot framework, React.js, database management, and Agile methodologies. Gained hands-on experience building production-ready applications with industry-standard tools and practices.',
      keyAchievements: [
        {
          icon: <Code size={18} />,
          title: 'Application Development',
          description: 'Successfully architected and deployed 3+ full-stack web applications using Java Spring Boot backend and React.js frontend, consistently serving 500+ concurrent users with 99.5% uptime and optimal performance'
        },
        {
          icon: <Shield size={18} />,
          title: 'API Development & Security',
          description: 'Designed and implemented 15+ secure RESTful APIs within Agile sprint cycles, incorporating JWT authentication, role-based access control (RBAC), input validation, and comprehensive error handling mechanisms'
        },
        {
          icon: <TrendingUp size={18} />,
          title: 'Performance Optimization',
          description: 'Optimized application performance through SQL query refinement and strategic database indexing, achieving 15% reduction in latency and improving average page load time from 2.8 seconds to 2.4 seconds'
        },
        {
          icon: <Database size={18} />,
          title: 'Database Management',
          description: 'Implemented robust database solutions integrating MySQL and H2 databases with connection pooling, transaction management, and data integrity constraints, ensuring zero data loss across 10,000+ records'
        },
        {
          icon: <Globe size={18} />,
          title: 'Frontend Excellence',
          description: 'Developed responsive, accessible React components implementing Redux state management patterns, delivering seamless user experiences across desktop, tablet, and mobile platforms'
        },
        {
          icon: <Users size={18} />,
          title: 'Agile Collaboration',
          description: 'Collaborated effectively within cross-functional teams of 5+ developers, utilizing Git for version control, JIRA for sprint planning and task tracking, and following Scrum ceremonies including daily standups, sprint planning, and retrospectives'
        },
        {
          icon: <CheckCircle size={18} />,
          title: 'Quality Assurance',
          description: 'Implemented comprehensive testing strategies including JUnit unit tests, integration testing, and end-to-end testing, ensuring code quality and reducing production bugs by 40%'
        },
        {
          icon: <BookOpen size={18} />,
          title: 'Best Practices & Documentation',
          description: 'Participated in code reviews, pair programming sessions, and created detailed technical documentation following industry standards, improving code maintainability and team knowledge sharing'
        },
        {
          icon: <Cloud size={18} />,
          title: 'DevOps & Deployment',
          description: 'Gained practical experience with Docker containerization, AWS cloud deployment, and CI/CD pipeline concepts for automated testing and deployment workflows'
        }
      ]
    },
    {
      title: 'Java Skills Technical Training',
      company: 'Friends Union For Energising Lives (FUEL)',
      location: 'Hubballi Urban, Karnataka, India',
      period: 'October 2024 - November 2024',
      duration: '2 months',
      type: 'Technical Foundation Program',
      description: 'Intensive technical training program focused on building strong programming fundamentals in Core Java, object-oriented principles, and web development basics. Established solid foundation for advanced full-stack development.',
      keyAchievements: [
        {
          icon: <Code size={18} />,
          title: 'Core Java Proficiency',
          description: 'Completed comprehensive training in Core Java fundamentals, including data types, operators, control structures, exception handling, and file I/O operations'
        },
        {
          icon: <Cpu size={18} />,
          title: 'Object-Oriented Programming',
          description: 'Developed 10+ Java programs demonstrating mastery of OOP principles: inheritance hierarchies, polymorphism, encapsulation patterns, and abstraction concepts'
        },
        {
          icon: <Globe size={18} />,
          title: 'Web Development Fundamentals',
          description: 'Built 5+ responsive web pages using HTML5 semantic elements and CSS3 advanced styling, focusing on accessibility, SEO optimization, and cross-browser compatibility'
        },
        {
          icon: <Database size={18} />,
          title: 'Data Structures Mastery',
          description: 'Gained proficiency in fundamental data structures including Arrays, ArrayList, LinkedList, HashMap, HashSet, and TreeSet with practical implementation experience'
        },
        {
          icon: <Target size={18} />,
          title: 'Problem-Solving Skills',
          description: 'Successfully solved 50+ coding challenges covering loops, conditionals, recursion, string manipulation, and algorithmic thinking, building strong analytical capabilities'
        },
        {
          icon: <BookOpen size={18} />,
          title: 'Clean Code Practices',
          description: 'Applied industry-standard clean code principles, proper naming conventions, code documentation, and SOLID design principles preparing for professional development'
        },
        {
          icon: <Briefcase size={18} />,
          title: 'Software Development Lifecycle',
          description: 'Developed understanding of SDLC phases, software engineering best practices, and enterprise-level coding standards for production-ready applications'
        },
        {
          icon: <Code size={18} />,
          title: 'Full-Stack Integration',
          description: 'Completed hands-on projects integrating Java backend logic with HTML/CSS frontend interfaces, demonstrating end-to-end application development capabilities'
        }
      ]
    }
  ];

  const certifications = [
    {
      title: 'Java Full Stack Development',
      issuer: 'ExcelR Solutions',
      date: 'September 2025',
      badge: 'Graduated with Distinction',
      certificateId: '0325F1080/EXCELR/ECAP/09092025',
      description: 'Comprehensive professional training program covering enterprise Java development, Spring Boot framework, React.js, MySQL database management, RESTful API design, microservices architecture, and Agile/Scrum methodologies. Successfully completed with distinction, demonstrating exceptional proficiency in full-stack development.',
      skills: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'REST APIs', 'JWT Authentication', 'Agile/Scrum', 'Redux'],
      level: 'Professional'
    },
    {
      title: 'Introduction to Modern AI',
      issuer: 'Cisco Networking Academy',
      date: 'January 2026',
      description: 'Comprehensive certification covering fundamental and advanced concepts in Artificial Intelligence and Machine Learning. Completed coursework in AI basics, machine learning algorithms, computer vision applications (photo classification, object detection, image segmentation), natural language processing (machine translation), large language models (LLMs), chatbot development, multimodal prompting, and AI-powered productivity tools.',
      skills: ['AI Fundamentals', 'Machine Learning', 'Computer Vision', 'Object Detection', 'Image Segmentation', 'NLP', 'LLMs', 'Chatbots', 'Prompt Engineering', 'AI Tools'],
      level: 'Foundation'
    },
    {
      title: 'Generative AI Bootcamp',
      issuer: 'Growthschool',
      date: 'January 2026',
      certificateId: 'e6f5b55e-d80c-46ea-ba47-948fb2e323f2',
      description: 'Intensive bootcamp focused on cutting-edge generative AI technologies, practical applications across industries, implementation strategies, and prompt engineering techniques. Gained hands-on experience with modern AI tools and platforms for enhanced productivity and innovation.',
      skills: ['Generative AI', 'AI Implementation', 'Prompt Engineering', 'AI Tools', 'ChatGPT', 'AI Productivity'],
      level: 'Advanced'
    },
    {
      title: 'Data Visualisation: Empowering Business with Effective Insights',
      issuer: 'Tata Group (via Forage)',
      date: 'January 2026',
      description: 'Virtual experience program focusing on data analysis methodologies, advanced visualization techniques using industry-standard tools, deriving actionable business insights from complex datasets, and effective communication of data-driven recommendations to stakeholders.',
      skills: ['Data Analysis', 'Data Visualization', 'Business Intelligence', 'Python', 'Pandas', 'Business Insights', 'Stakeholder Communication'],
      level: 'Professional'
    },
    {
      title: 'Java Skills Technical Training',
      issuer: 'FUEL (Friends Union For Energising Lives)',
      date: 'November 2024',
      description: 'Intensive foundation program in Core Java programming, object-oriented programming principles, web development fundamentals using HTML5 and CSS3, and problem-solving techniques. Built strong technical foundation for advanced software development.',
      skills: ['Core Java', 'OOP', 'HTML5', 'CSS3', 'Problem Solving', 'Data Structures', 'Algorithms'],
      level: 'Foundation'
    },
    {
      title: 'Software Engineering Virtual Experience',
      issuer: 'JPMorgan Chase & Co. (via Forage)',
      date: 'January 2026',
      description: 'Virtual experience program providing exposure to enterprise-level software engineering practices at a leading global financial institution. Gained insights into financial technology systems, software development in banking, and industry best practices for mission-critical applications.',
      skills: ['Software Engineering', 'Financial Systems', 'Python', 'Git', 'Enterprise Development', 'Banking Technology'],
      level: 'Professional'
    },
    {
      title: 'Advanced Software Engineering Virtual Experience',
      issuer: 'Walmart Global Tech (via Forage)',
      date: 'January 2026',
      description: 'Advanced program covering data structures, algorithm optimization, software design patterns, and system architecture in the context of large-scale retail technology operations. Learned about building high-performance, scalable systems for global e-commerce.',
      skills: ['Data Structures', 'Algorithms', 'System Design', 'Java', 'Software Architecture', 'E-Commerce Systems'],
      level: 'Advanced'
    },
    {
      title: 'Technology Consulting Virtual Experience',
      issuer: 'Deloitte (via Forage)',
      date: 'January 2026',
      description: 'Virtual experience program focused on technology consulting methodologies, business analysis techniques, digital transformation strategies, and delivering technology solutions that drive business value. Gained understanding of consulting approaches and client engagement.',
      skills: ['Technology Consulting', 'Business Analysis', 'Digital Transformation', 'Problem Solving', 'Client Solutions', 'Strategic Planning'],
      level: 'Professional'
    }
  ];

  const education = {
    degree: 'Bachelor of Technology (B.Tech)',
    specialization: 'Artificial Intelligence and Machine Learning',
    university: 'Sharnbasva University',
    location: 'Kalaburagi, Karnataka, India',
    period: 'December 2021 - July 2025',
    cgpa: '9.54',
    maxCgpa: '10.0',
    percentage: '95.4%',
    classification: 'First Class with Distinction',
    description: 'Graduated with exceptional academic performance, specializing in Artificial Intelligence, Machine Learning, and software engineering. Comprehensive curriculum covering theoretical foundations, practical applications, and industry-relevant technologies.',
    relevantCoursework: [
      'Data Structures and Algorithms',
      'Database Management Systems',
      'Machine Learning',
      'Deep Learning',
      'Artificial Intelligence',
      'Object-Oriented Programming',
      'Software Engineering',
      'Computer Networks',
      'Operating Systems',
      'Web Technologies',
      'Cloud Computing',
      'Design Patterns',
      'Compiler Design',
      'Computer Architecture',
      'Discrete Mathematics',
      'Probability and Statistics'
    ],
    keyHighlights: [
      'Graduated with 9.54 CGPA (Top 5% of class)',
      'Completed major project in Machine Learning',
      'Active participant in coding competitions',
      'Strong foundation in AI/ML and software development'
    ]
  };

  const professionalHighlights = [
    {
      icon: <Star size={20} />,
      category: 'Academic Excellence',
      achievement: 'Graduated with First Class with Distinction (9.54/10.0 CGPA)',
      impact: 'Top 5% of graduating class'
    },
    {
      icon: <TrendingUp size={20} />,
      category: 'Performance Optimization',
      achievement: 'Achieved 15% latency reduction through SQL optimization',
      impact: 'Improved user experience and system efficiency'
    },
    {
      icon: <Code size={20} />,
      category: 'Application Development',
      achievement: 'Built 3+ production-ready full-stack applications',
      impact: 'Serving 500+ concurrent users with 99.5% uptime'
    },
    {
      icon: <Award size={20} />,
      category: 'Professional Certifications',
      achievement: 'Completed 8 industry-recognized certifications',
      impact: 'From leading organizations: ExcelR, Cisco, Tata, JPMorgan, Walmart, Deloitte'
    },
    {
      icon: <Shield size={20} />,
      category: 'API Development',
      achievement: 'Designed and deployed 15+ secure RESTful APIs',
      impact: 'Implementing JWT authentication and RBAC'
    },
    {
      icon: <Target size={20} />,
      category: 'Problem Solving',
      achievement: 'Solved 50+ algorithmic challenges on competitive platforms',
      impact: 'Active on HackerRank and LeetCode'
    },
    {
      icon: <Database size={20} />,
      category: 'Database Expertise',
      achievement: 'Optimized database operations reducing query time by 60%',
      impact: 'Through Redis caching and strategic indexing'
    },
    {
      icon: <Cpu size={20} />,
      category: 'Machine Learning',
      achievement: 'Developed ML models with 89-96% accuracy',
      impact: 'In terrorist attack prediction and digit recognition systems'
    }
  ];

  return (
    <div style={{
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)',
      color: '#0f172a',
      minHeight: '100vh',
      fontFamily: "'Inter', -apple-system, sans-serif"
    }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(20px) saturate(180%)',
        borderBottom: '1px solid rgba(59, 130, 246, 0.15)',
        boxShadow: isScrolled ? '0 4px 12px rgba(15, 23, 42, 0.08)' : 'none',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        padding: '1rem 0'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 3rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '1.375rem',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.02em'
          }}>
            M Divya Lalitha
          </div>
          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            {['About', 'Skills', 'Experience', 'Projects', 'Education', 'Certifications', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(item.toLowerCase());
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                style={{
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  color: activeSection === item.toLowerCase() ? '#3b82f6' : '#475569',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  paddingBottom: '0.25rem'
                }}
                onMouseEnter={(e) => e.target.style.color = '#3b82f6'}
                onMouseLeave={(e) => e.target.style.color = activeSection === item.toLowerCase() ? '#3b82f6' : '#475569'}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)',
                    borderRadius: '2px'
                  }} />
                )}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '8rem 3rem 4rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Effects */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-20%',
          width: '70%',
          height: '70%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
          filter: 'blur(100px)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-40%',
          left: '-20%',
          width: '60%',
          height: '60%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 70%)',
          filter: 'blur(100px)',
          pointerEvents: 'none'
        }} />

        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
          {/* Status Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.75rem 1.75rem',
            background: 'rgba(59, 130, 246, 0.08)',
            border: '1px solid rgba(59, 130, 246, 0.35)',
            borderRadius: '100px',
            marginBottom: '2.5rem',
            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.1)'
          }}>
            <div style={{
              width: '10px',
              height: '10px',
              background: '#22c55e',
              borderRadius: '50%',
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
            }} />
            <span style={{
              fontSize: '0.9375rem',
              fontWeight: 600,
              color: '#3b82f6',
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}>
              Open to ASE • SDE • Data Analytics Opportunities
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
            fontWeight: 800,
            lineHeight: 0.95,
            marginBottom: '2rem',
            letterSpacing: '-0.04em',
            color: '#0f172a'
          }}>
            M Divya Lalitha
          </h1>

          <div style={{
            fontSize: 'clamp(1.75rem, 4vw, 3rem)',
            fontWeight: 400,
            marginBottom: '2.5rem',
            color: '#475569',
            letterSpacing: '-0.02em',
            lineHeight: 1.2
          }}>
            <span style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 600
            }}>
              Java Full Stack Developer
            </span>
            {' '}|{' '}
            <span style={{
              background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 600
            }}>
              AI/ML Specialist
            </span>
          </div>

          <p style={{
            fontSize: '1.0625rem',
            lineHeight: 1.8,
            color: '#334155',
            marginBottom: '1.25rem',
            fontWeight: 400,
            textAlign: 'justify'
          }}>
            Building enterprise-grade, scalable web applications with Spring Boot, React, and MySQL.
          </p>
          <p style={{
            fontSize: '1.0625rem',
            lineHeight: 1.8,
            color: '#334155',
            marginBottom: '1.25rem',
            fontWeight: 400,
            textAlign: 'justify'
          }}>
            Specialized in architecting secure microservices, optimizing database performance, and implementing AI-powered solutions.
          </p>
          <p style={{
            fontSize: '1.0625rem',
            lineHeight: 1.8,
            color: '#334155',
            marginBottom: '3rem',
            fontWeight: 400,
            textAlign: 'justify'
          }}>
            Proven track record of delivering high-performance applications serving 500+ concurrent users with 99.5% uptime.
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            gap: '1.25rem',
            flexWrap: 'wrap',
            marginBottom: '4.5rem'
          }}>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              style={{
                padding: '1.25rem 3rem',
                fontSize: '1.0625rem',
                fontWeight: 600,
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '14px',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 8px 24px rgba(59, 130, 246, 0.3)',
                letterSpacing: '0.02em'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 12px 32px rgba(59, 130, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.3)';
              }}
            >
              Get In Touch
            </a>
            <a
              href="https://github.com/mdivyalalitha29"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '1.25rem 3rem',
                fontSize: '1.0625rem',
                fontWeight: 600,
                background: 'white',
                color: '#3b82f6',
                border: '2px solid rgba(59, 130, 246, 0.35)',
                borderRadius: '14px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 4px 12px rgba(15, 23, 42, 0.08)',
                letterSpacing: '0.02em'
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = 'rgba(59, 130, 246, 0.6)';
                e.target.style.background = 'rgba(59, 130, 246, 0.05)';
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 8px 20px rgba(59, 130, 246, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = 'rgba(59, 130, 246, 0.35)';
                e.target.style.background = 'white';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 12px rgba(15, 23, 42, 0.08)';
              }}
            >
              <Github size={20} />
              View GitHub
            </a>
          </div>

          {/* Quick Stats Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2rem',
            maxWidth: '1100px'
          }}>
            {[
              { number: '9.54', label: 'CGPA', suffix: '/10', color: '#3b82f6' },
              { number: '15%', label: 'Latency Reduction', color: '#10b981' },
              { number: '99.5%', label: 'Application Uptime', color: '#8b5cf6' },
              { number: '8', label: 'Certifications', color: '#ec4899' }
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  padding: '2rem 1.75rem',
                  background: 'white',
                  border: '1px solid rgba(59, 130, 246, 0.15)',
                  borderRadius: '18px',
                  textAlign: 'center',
                  boxShadow: '0 4px 12px rgba(15, 23, 42, 0.06)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(59, 130, 246, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(15, 23, 42, 0.06)';
                }}
              >
                <div style={{
                  fontSize: '3rem',
                  fontWeight: 700,
                  color: stat.color,
                  letterSpacing: '-0.03em',
                  marginBottom: '0.75rem',
                  lineHeight: 1
                }}>
                  {stat.number}
                  {stat.suffix && <span style={{ fontSize: '1.75rem', opacity: 0.7 }}>{stat.suffix}</span>}
                </div>
                <div style={{
                  fontSize: '0.9375rem',
                  color: '#64748b',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Professional Summary */}
      <section id="about" style={{
        padding: '8rem 3rem',
        background: 'white',
        borderTop: '1px solid rgba(59, 130, 246, 0.1)'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            fontSize: '0.9375rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#3b82f6',
            marginBottom: '1.25rem'
          }}>
            About Me
          </div>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 700,
            marginBottom: '4rem',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            color: '#0f172a'
          }}>
            {professionalSummary.title}
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem'
          }}>
            {professionalSummary.paragraphs.map((para, i) => (
              <p key={i} style={{
                fontSize: '1.1875rem',
                lineHeight: 1.9,
                color: '#334155',
                textAlign: 'justify',
                fontWeight: 400
              }}>
                {para}
              </p>
            ))}
          </div>

          {/* Professional Highlights Grid */}
          <div style={{
            marginTop: '5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {professionalHighlights.map((highlight, i) => (
              <div
                key={i}
                style={{
                  padding: '2rem',
                  background: 'rgba(59, 130, 246, 0.03)',
                  border: '1px solid rgba(59, 130, 246, 0.15)',
                  borderRadius: '16px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(59, 130, 246, 0.12)';
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(15, 23, 42, 0.04)';
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.15)';
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#3b82f6'
                  }}>
                    {highlight.icon}
                  </div>
                  <div style={{
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: '#3b82f6'
                  }}>
                    {highlight.category}
                  </div>
                </div>
                <div style={{
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  color: '#0f172a',
                  marginBottom: '0.5rem',
                  lineHeight: 1.4
                }}>
                  {highlight.achievement}
                </div>
                <div style={{
                  fontSize: '0.9375rem',
                  color: '#64748b',
                  lineHeight: 1.6
                }}>
                  {highlight.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - Enhanced */}
      <section id="skills" style={{
        padding: '8rem 3rem',
        background: 'rgba(241, 245, 249, 0.6)'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            fontSize: '0.9375rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#3b82f6',
            marginBottom: '1.25rem'
          }}>
            Technical Expertise
          </div>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 700,
            marginBottom: '4rem',
            letterSpacing: '-0.03em',
            lineHeight: 1.1
          }}>
            Skills & Technologies
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
            gap: '2.5rem'
          }}>
            {Object.entries(technicalSkills).map(([category, data], i) => (
              <div
                key={category}
                style={{
                  background: 'white',
                  border: '1px solid rgba(59, 130, 246, 0.2)',
                  borderRadius: '20px',
                  padding: '2.5rem',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 4px 12px rgba(15, 23, 42, 0.06)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = data.color;
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 16px 32px rgba(59, 130, 246, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(15, 23, 42, 0.06)';
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  marginBottom: '2rem'
                }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '14px',
                    background: `${data.color}15`,
                    border: `2px solid ${data.color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: data.color
                  }}>
                    {data.icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#0f172a',
                    letterSpacing: '-0.02em'
                  }}>
                    {category}
                  </h3>
                </div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.875rem'
                }}>
                  {data.items.map((skill, j) => (
                    <div
                      key={j}
                      style={{
                        padding: '0.875rem 1.25rem',
                        background: `${data.color}08`,
                        color: '#334155',
                        borderRadius: '12px',
                        border: `1px solid ${data.color}20`,
                        fontSize: '1rem',
                        fontWeight: 500,
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = `${data.color}15`;
                        e.target.style.borderColor = `${data.color}50`;
                        e.target.style.transform = 'translateX(4px)';
                        e.target.style.color = data.color;
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = `${data.color}08`;
                        e.target.style.borderColor = `${data.color}20`;
                        e.target.style.transform = 'translateX(0)';
                        e.target.style.color = '#334155';
                      }}
                    >
                      <div style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: data.color
                      }} />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section - Detailed */}
      <section id="experience" style={{
        padding: '8rem 3rem',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            fontSize: '0.9375rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#3b82f6',
            marginBottom: '1.25rem'
          }}>
            Professional Journey
          </div>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 700,
            marginBottom: '4rem',
            letterSpacing: '-0.03em',
            lineHeight: 1.1
          }}>
            Experience & Training
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {experience.map((exp, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(59, 130, 246, 0.02)',
                  border: '1px solid rgba(59, 130, 246, 0.2)',
                  borderLeft: '5px solid #3b82f6',
                  borderRadius: '24px',
                  padding: '3.5rem',
                  boxShadow: '0 4px 16px rgba(15, 23, 42, 0.05)'
                }}
              >
                {/* Header */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '1.5rem',
                  flexWrap: 'wrap',
                  gap: '2rem'
                }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: '2.125rem',
                      fontWeight: 700,
                      marginBottom: '0.75rem',
                      letterSpacing: '-0.02em',
                      color: '#0f172a'
                    }}>
                      {exp.title}
                    </h3>
                    <div style={{
                      fontSize: '1.375rem',
                      color: '#3b82f6',
                      fontWeight: 600,
                      marginBottom: '0.5rem'
                    }}>
                      {exp.company}
                    </div>
                    <div style={{
                      fontSize: '1.0625rem',
                      color: '#64748b',
                      marginBottom: '0.5rem'
                    }}>
                      📍 {exp.location}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '1.0625rem',
                      color: '#0f172a',
                      fontWeight: 600,
                      marginBottom: '0.75rem'
                    }}>
                      {exp.period}
                    </div>
                    <div style={{
                      fontSize: '0.9375rem',
                      color: '#0ea5e9',
                      padding: '0.5rem 1.25rem',
                      background: 'rgba(14, 165, 233, 0.1)',
                      borderRadius: '10px',
                      border: '1px solid rgba(14, 165, 233, 0.3)',
                      display: 'inline-block',
                      fontWeight: 600
                    }}>
                      {exp.type}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p style={{
                  fontSize: '1.125rem',
                  lineHeight: 1.8,
                  color: '#475569',
                  marginBottom: '2.5rem',
                  textAlign: 'justify'
                }}>
                  {exp.description}
                </p>

                {/* Achievements Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '1.5rem'
                }}>
                  {exp.keyAchievements.map((achievement, j) => (
                    <div
                      key={j}
                      style={{
                        padding: '1.5rem',
                        background: 'white',
                        border: '1px solid rgba(59, 130, 246, 0.15)',
                        borderRadius: '14px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 2px 6px rgba(15, 23, 42, 0.04)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.boxShadow = '0 8px 16px rgba(59, 130, 246, 0.1)';
                        e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 2px 6px rgba(15, 23, 42, 0.04)';
                        e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.15)';
                      }}
                    >
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.875rem',
                        marginBottom: '0.875rem'
                      }}>
                        <div style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '10px',
                          background: 'rgba(59, 130, 246, 0.1)',
                          border: '1px solid rgba(59, 130, 246, 0.25)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#3b82f6',
                          flexShrink: 0
                        }}>
                          {achievement.icon}
                        </div>
                        <h4 style={{
                          fontSize: '1.0625rem',
                          fontWeight: 700,
                          color: '#0f172a',
                          letterSpacing: '-0.01em'
                        }}>
                          {achievement.title}
                        </h4>
                      </div>
                      <p style={{
                        fontSize: '0.9375rem',
                        lineHeight: 1.7,
                        color: '#64748b'
                      }}>
                        {achievement.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Comprehensive */}
      <section id="projects" style={{
        padding: '8rem 3rem',
        background: 'rgba(241, 245, 249, 0.6)'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            fontSize: '0.9375rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#3b82f6',
            marginBottom: '1.25rem'
          }}>
            Portfolio
          </div>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 700,
            marginBottom: '2rem',
            letterSpacing: '-0.03em',
            lineHeight: 1.1
          }}>
            Featured Projects
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#64748b',
            maxWidth: '800px',
            marginBottom: '4rem',
            lineHeight: 1.7
          }}>
            Comprehensive collection of full-stack applications, machine learning models, and enterprise solutions demonstrating technical expertise and problem-solving capabilities.
          </p>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem'
          }}>
            {projects.map((project, i) => (
              <div
                key={i}
                style={{
                  background: 'white',
                  border: '1px solid rgba(59, 130, 246, 0.2)',
                  borderRadius: '24px',
                  padding: '3.5rem',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 4px 16px rgba(15, 23, 42, 0.06)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(15, 23, 42, 0.06)';
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
                }}
              >
                {/* Project Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.5rem',
                  marginBottom: '2rem'
                }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)',
                    border: '2px solid rgba(59, 130, 246, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Code size={32} color="#3b82f6" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: '2rem',
                      fontWeight: 700,
                      marginBottom: '0.75rem',
                      letterSpacing: '-0.02em',
                      color: '#0f172a'
                    }}>
                      {project.title}
                    </h3>
                    <div style={{
                      fontSize: '0.9375rem',
                      color: '#3b82f6',
                      fontWeight: 600,
                      letterSpacing: '0.05em'
                    }}>
                      {project.category}
                    </div>
                  </div>
                  {project.duration && (
                    <div style={{
                      padding: '0.5rem 1.25rem',
                      background: 'rgba(139, 92, 246, 0.1)',
                      border: '1px solid rgba(139, 92, 246, 0.25)',
                      borderRadius: '10px',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: '#8b5cf6'
                    }}>
                      {project.duration}
                    </div>
                  )}
                </div>

                {/* Project Description */}
                <p style={{
                  fontSize: '1.125rem',
                  lineHeight: 1.8,
                  color: '#475569',
                  marginBottom: '2.5rem',
                  textAlign: 'justify'
                }}>
                  {project.description}
                </p>

                {/* Technical Implementation */}
                <div style={{ marginBottom: '2.5rem' }}>
                  <h4 style={{
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    color: '#0f172a',
                    marginBottom: '1.25rem',
                    letterSpacing: '-0.01em'
                  }}>
                    Technical Implementation:
                  </h4>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                  }}>
                    {project.technicalImplementation.map((item, j) => (
                      <li
                        key={j}
                        style={{
                          fontSize: '1rem',
                          lineHeight: 1.7,
                          color: '#64748b',
                          paddingLeft: '2rem',
                          position: 'relative'
                        }}
                      >
                        <CheckCircle
                          size={18}
                          style={{
                            position: 'absolute',
                            left: '0',
                            top: '0.25rem',
                            color: '#10b981'
                          }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Metrics */}
                {project.keyMetrics && (
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1.25rem',
                    marginBottom: '2.5rem',
                    padding: '2rem',
                    background: 'rgba(59, 130, 246, 0.03)',
                    borderRadius: '16px',
                    border: '1px solid rgba(59, 130, 246, 0.1)'
                  }}>
                    {project.keyMetrics.map((metric, j) => (
                      <div
                        key={j}
                        style={{
                          textAlign: 'center',
                          padding: '1rem'
                        }}
                      >
                        <div style={{
                          fontSize: '1.75rem',
                          fontWeight: 700,
                          color: '#3b82f6',
                          marginBottom: '0.5rem'
                        }}>
                          {metric}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Technologies */}
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    color: '#64748b',
                    marginBottom: '1rem',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                  }}>
                    Technologies Used:
                  </h4>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.75rem'
                  }}>
                    {project.technologies.map((tech, j) => (
                      <span
                        key={j}
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '0.875rem',
                          padding: '0.5rem 1rem',
                          background: 'rgba(59, 130, 246, 0.08)',
                          color: '#3b82f6',
                          borderRadius: '10px',
                          border: '1px solid rgba(59, 130, 246, 0.2)',
                          fontWeight: 600
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Project Link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    fontSize: '1.0625rem',
                    fontWeight: 700,
                    color: '#3b82f6',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    padding: '1rem 1.75rem',
                    background: 'rgba(59, 130, 246, 0.08)',
                    borderRadius: '12px',
                    border: '1px solid rgba(59, 130, 246, 0.25)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.gap = '1rem';
                    e.target.style.background = 'rgba(59, 130, 246, 0.15)';
                    e.target.style.borderColor = 'rgba(59, 130, 246, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.gap = '0.75rem';
                    e.target.style.background = 'rgba(59, 130, 246, 0.08)';
                    e.target.style.borderColor = 'rgba(59, 130, 246, 0.25)';
                  }}
                >
                  <Github size={20} />
                  View Project on GitHub
                  <ExternalLink size={18} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" style={{
        padding: '8rem 3rem',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            fontSize: '0.9375rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#3b82f6',
            marginBottom: '1.25rem'
          }}>
            Academic Background
          </div>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 700,
            marginBottom: '4rem',
            letterSpacing: '-0.03em',
            lineHeight: 1.1
          }}>
            Education
          </h2>

          {/* Main Education Card */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)',
            border: '2px solid rgba(59, 130, 246, 0.25)',
            borderRadius: '24px',
            padding: '4rem',
            marginBottom: '4rem',
            boxShadow: '0 8px 24px rgba(59, 130, 246, 0.08)'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '3rem',
              marginBottom: '2.5rem'
            }}>
              <div style={{ flex: 1, minWidth: '320px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1.5rem'
                }}>
                  <GraduationCap size={40} color="#3b82f6" />
                  <h3 style={{
                    fontSize: '2.25rem',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: '#0f172a'
                  }}>
                    {education.degree}
                  </h3>
                </div>
                <div style={{
                  fontSize: '1.5rem',
                  color: '#3b82f6',
                  fontWeight: 600,
                  marginBottom: '1rem'
                }}>
                  {education.specialization}
                </div>
                <div style={{
                  fontSize: '1.1875rem',
                  color: '#475569',
                  marginBottom: '0.75rem',
                  fontWeight: 500
                }}>
                  {education.university}
                </div>
                <div style={{
                  fontSize: '1.0625rem',
                  color: '#64748b',
                  marginBottom: '0.75rem'
                }}>
                  📍 {education.location}
                </div>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '1.0625rem',
                  color: '#64748b',
                  fontWeight: 500
                }}>
                  {education.period}
                </div>
              </div>

              {/* CGPA Display */}
              <div style={{
                textAlign: 'center',
                padding: '2.5rem 3rem',
                background: 'white',
                borderRadius: '20px',
                border: '2px solid rgba(59, 130, 246, 0.3)',
                boxShadow: '0 4px 16px rgba(59, 130, 246, 0.1)'
              }}>
                <div style={{
                  fontSize: '4.5rem',
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                  marginBottom: '0.5rem'
                }}>
                  {education.cgpa}
                </div>
                <div style={{
                  fontSize: '1.25rem',
                  color: '#64748b',
                  marginBottom: '1rem',
                  fontWeight: 500
                }}>
                  / {education.maxCgpa} CGPA
                </div>
                <div style={{
                  fontSize: '1.0625rem',
                  color: '#10b981',
                  fontWeight: 700,
                  padding: '0.75rem 1.5rem',
                  background: 'rgba(16, 185, 129, 0.1)',
                  borderRadius: '12px',
                  border: '2px solid rgba(16, 185, 129, 0.3)'
                }}>
                  {education.classification}
                </div>
              </div>
            </div>

            {/* Description */}
            <p style={{
              fontSize: '1.125rem',
              lineHeight: 1.8,
              color: '#475569',
              marginBottom: '2.5rem',
              textAlign: 'justify'
            }}>
              {education.description}
            </p>

            {/* Key Highlights */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              marginBottom: '3rem'
            }}>
              {education.keyHighlights.map((highlight, i) => (
                <div
                  key={i}
                  style={{
                    padding: '1.5rem',
                    background: 'white',
                    borderRadius: '14px',
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                    boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem'
                  }}>
                    <CheckCircle size={20} color="#10b981" />
                    <span style={{
                      fontSize: '1rem',
                      color: '#334155',
                      fontWeight: 500
                    }}>
                      {highlight}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Relevant Coursework */}
            <div>
              <h4 style={{
                fontSize: '1.375rem',
                fontWeight: 700,
                marginBottom: '1.5rem',
                color: '#0f172a',
                letterSpacing: '-0.01em'
              }}>
                Relevant Coursework:
              </h4>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.875rem'
              }}>
                {education.relevantCoursework.map((course, i) => (
                  <span
                    key={i}
                    style={{
                      padding: '0.75rem 1.25rem',
                      background: 'white',
                      color: '#334155',
                      borderRadius: '12px',
                      border: '1px solid rgba(59, 130, 246, 0.25)',
                      fontSize: '0.9375rem',
                      fontWeight: 500,
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(59, 130, 246, 0.1)';
                      e.target.style.color = '#3b82f6';
                      e.target.style.borderColor = 'rgba(59, 130, 246, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'white';
                      e.target.style.color = '#334155';
                      e.target.style.borderColor = 'rgba(59, 130, 246, 0.25)';
                    }}
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section - Comprehensive */}
      <section id="certifications" style={{
        padding: '8rem 3rem',
        background: 'rgba(241, 245, 249, 0.6)'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            fontSize: '0.9375rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#3b82f6',
            marginBottom: '1.25rem'
          }}>
            Professional Development
          </div>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 700,
            marginBottom: '2rem',
            letterSpacing: '-0.03em',
            lineHeight: 1.1
          }}>
            Certifications & Training
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#64748b',
            maxWidth: '800px',
            marginBottom: '4rem',
            lineHeight: 1.7
          }}>
            Continuous learning through industry-recognized certifications and virtual experience programs from leading global organizations.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))',
            gap: '2.5rem'
          }}>
            {certifications.map((cert, i) => (
              <div
                key={i}
                style={{
                  background: cert.level === 'Advanced' ? 'rgba(139, 92, 246, 0.02)' : 
                             cert.level === 'Professional' ? 'rgba(59, 130, 246, 0.02)' : 
                             'rgba(6, 182, 212, 0.02)',
                  border: cert.level === 'Advanced' ? '2px solid rgba(139, 92, 246, 0.3)' : 
                         cert.level === 'Professional' ? '2px solid rgba(59, 130, 246, 0.3)' : 
                         '2px solid rgba(6, 182, 212, 0.3)',
                  borderRadius: '24px',
                  padding: '3rem',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  boxShadow: cert.level === 'Advanced' ? '0 4px 12px rgba(139, 92, 246, 0.08)' : 
                            cert.level === 'Professional' ? '0 4px 12px rgba(59, 130, 246, 0.08)' : 
                            '0 4px 12px rgba(6, 182, 212, 0.08)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)';
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 16px 32px rgba(59, 130, 246, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(15, 23, 42, 0.06)';
                }}
              >
                {/* Level Badge */}
                {cert.level && (
                  <div style={{
                    position: 'absolute',
                    top: '2rem',
                    left: '2rem',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '0.625rem 1.25rem',
                    background: cert.level === 'Advanced' ? 'rgba(139, 92, 246, 0.15)' : 
                               cert.level === 'Professional' ? 'rgba(59, 130, 246, 0.15)' : 
                               'rgba(6, 182, 212, 0.15)',
                    color: cert.level === 'Advanced' ? '#8b5cf6' : 
                          cert.level === 'Professional' ? '#3b82f6' : 
                          '#0891b2',
                    borderRadius: '10px',
                    border: `2px solid ${cert.level === 'Advanced' ? 'rgba(139, 92, 246, 0.4)' : 
                                        cert.level === 'Professional' ? 'rgba(59, 130, 246, 0.4)' : 
                                        'rgba(6, 182, 212, 0.4)'}`,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    boxShadow: `0 2px 8px ${cert.level === 'Advanced' ? 'rgba(139, 92, 246, 0.1)' : 
                                            cert.level === 'Professional' ? 'rgba(59, 130, 246, 0.1)' : 
                                            'rgba(6, 182, 212, 0.1)'}`
                  }}>
                    {cert.level}
                  </div>
                )}

                {/* Badge */}
                {cert.badge && (
                  <div style={{
                    position: 'absolute',
                    top: cert.level ? '4.5rem' : '2rem',
                    right: '2rem',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '0.625rem 1.25rem',
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(6, 182, 212, 0.15) 100%)',
                    color: '#10b981',
                    borderRadius: '10px',
                    border: '1.5px solid rgba(16, 185, 129, 0.35)',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                  }}>
                    ⭐ {cert.badge}
                  </div>
                )}

                <div style={{ marginTop: cert.badge || cert.level ? '5rem' : '0' }}>
                  <Award size={40} color="#3b82f6" style={{ marginBottom: '1.5rem' }} />

                  <h3 style={{
                    fontSize: '1.625rem',
                    fontWeight: 700,
                    marginBottom: '1rem',
                    letterSpacing: '-0.01em',
                    color: '#0f172a',
                    paddingRight: cert.badge ? '2rem' : '0',
                    lineHeight: 1.3
                  }}>
                    {cert.title}
                  </h3>

                  <div style={{
                    fontSize: '1.1875rem',
                    color: '#3b82f6',
                    fontWeight: 600,
                    marginBottom: '0.75rem'
                  }}>
                    {cert.issuer}
                  </div>

                  <div style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '1rem',
                    color: '#64748b',
                    fontWeight: 600,
                    marginBottom: '1.5rem'
                  }}>
                    {cert.date}
                  </div>

                  {cert.description && (
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: 1.7,
                      color: '#475569',
                      marginBottom: '1.75rem',
                      textAlign: 'justify'
                    }}>
                      {cert.description}
                    </p>
                  )}

                  {cert.skills && (
                    <div>
                      <div style={{
                        fontSize: '0.875rem',
                        fontWeight: 700,
                        color: '#64748b',
                        marginBottom: '1rem',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase'
                      }}>
                        Skills Covered:
                      </div>
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.625rem',
                        marginBottom: cert.certificateId ? '1.75rem' : '0'
                      }}>
                        {cert.skills.map((skill, j) => (
                          <span
                            key={j}
                            style={{
                              padding: '0.5rem 1rem',
                              background: 'rgba(59, 130, 246, 0.08)',
                              color: '#3b82f6',
                              borderRadius: '10px',
                              border: '1px solid rgba(59, 130, 246, 0.2)',
                              fontSize: '0.875rem',
                              fontWeight: 600
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {cert.certificateId && (
                    <div style={{
                      marginTop: '1.75rem',
                      padding: '1.25rem',
                      background: 'rgba(59, 130, 246, 0.03)',
                      borderRadius: '12px',
                      border: '1px solid rgba(59, 130, 246, 0.15)'
                    }}>
                      <div style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: '#64748b',
                        marginBottom: '0.5rem',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase'
                      }}>
                        Certificate ID:
                      </div>
                      <div style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.9375rem',
                        color: '#334155',
                        wordBreak: 'break-all',
                        fontWeight: 600
                      }}>
                        {cert.certificateId}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        padding: '8rem 3rem',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            fontSize: '0.9375rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#3b82f6',
            marginBottom: '1.25rem'
          }}>
            Get In Touch
          </div>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 700,
            marginBottom: '2rem',
            letterSpacing: '-0.03em',
            lineHeight: 1.1
          }}>
            Let's Build Something Amazing Together
          </h2>

          <div style={{
            fontSize: '1.375rem',
            lineHeight: 1.8,
            color: '#64748b',
            maxWidth: '800px',
            margin: '0 auto 4.5rem',
            fontWeight: 400
          }}>
            <p style={{ margin: '0 0 1rem 0' }}>I'm actively seeking opportunities in Associate Software Engineer (ASE), Software Development Engineer (SDE), and Data Analytics roles where I can leverage my full-stack development expertise and analytical skills.</p>
            <p style={{ margin: 0 }}>Open to positions in software development, data analytics, cloud computing, and digital transformation projects.</p>
          </div>

          {/* Contact Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            maxWidth: '1100px',
            margin: '0 auto 4rem'
          }}>
            {[
              { 
                icon: <Mail size={32} />, 
                label: 'Email', 
                value: 'mdivyalalitha29@gmail.com', 
                link: 'mailto:mdivyalalitha29@gmail.com',
                color: '#3b82f6'
              },
              { 
                icon: <Linkedin size={32} />, 
                label: 'LinkedIn', 
                value: 'Connect with me', 
                link: 'https://www.linkedin.com/in/m-divyalalitha-85917727a',
                color: '#0077b5'
              },
              { 
                icon: <Github size={32} />, 
                label: 'GitHub', 
                value: 'View my repositories', 
                link: 'https://github.com/mdivyalalitha29',
                color: '#0f172a'
              },
              { 
                icon: <Code size={32} />, 
                label: 'LeetCode', 
                value: 'Coding profile', 
                link: 'https://leetcode.com/u/mdivya29/',
                color: '#f89f1b'
              }
            ].map((contact, i) => (
              <a
                key={i}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'white',
                  border: '2px solid rgba(59, 130, 246, 0.2)',
                  borderRadius: '24px',
                  padding: '3rem 2.5rem',
                  textDecoration: 'none',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1.5rem',
                  boxShadow: '0 4px 16px rgba(15, 23, 42, 0.06)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${contact.color}08`;
                  e.currentTarget.style.borderColor = `${contact.color}60`;
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(15, 23, 42, 0.06)';
                }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '20px',
                  background: `${contact.color}15`,
                  border: `2px solid ${contact.color}40`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: contact.color
                }}>
                  {contact.icon}
                </div>
                <div>
                  <div style={{
                    fontSize: '1.375rem',
                    fontWeight: 700,
                    color: '#0f172a',
                    marginBottom: '0.75rem',
                    letterSpacing: '-0.01em'
                  }}>
                    {contact.label}
                  </div>
                  <div style={{
                    fontSize: '1.0625rem',
                    color: '#64748b',
                    fontWeight: 500
                  }}>
                    {contact.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Languages */}
          <div style={{
            padding: '2.5rem',
            background: 'rgba(59, 130, 246, 0.03)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            borderRadius: '20px',
            maxWidth: '700px',
            margin: '0 auto',
            boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)'
          }}>
            <div style={{
              fontSize: '1.125rem',
              fontWeight: 700,
              color: '#0f172a',
              marginBottom: '1.25rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}>
              Languages
            </div>
            <div style={{
              fontSize: '1.25rem',
              color: '#334155',
              fontWeight: 500
            }}>
              <strong style={{ color: '#3b82f6' }}>English</strong> • 
              <strong style={{ color: '#3b82f6' }}>Hindi</strong> • 
              <strong style={{ color: '#3b82f6' }}>Kannada</strong> • 
              <strong style={{ color: '#3b82f6' }}>Telugu</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '4rem 3rem',
        borderTop: '1px solid rgba(59, 130, 246, 0.15)',
        textAlign: 'center',
        background: 'rgba(241, 245, 249, 0.4)'
      }}>
        <p style={{
          fontSize: '1.0625rem',
          color: '#64748b',
          fontWeight: 500
        }}>
          &copy; 2026 M Divya Lalitha · Crafted with precision and passion
        </p>
        <p style={{
          fontSize: '0.9375rem',
          color: '#94a3b8',
          marginTop: '0.75rem'
        }}>
          Java Full Stack Developer | AI/ML Specialist | Building Tomorrow's Solutions Today
        </p>
      </footer>

      {/* Animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap');
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.2);
          }
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          overflow-x: hidden;
        }

        @media (max-width: 768px) {
          section {
            padding: 4rem 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}