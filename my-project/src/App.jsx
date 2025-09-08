import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, ExternalLink, Mail, Linkedin, Star, ArrowRight } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState({});

  const projects = [
    {
      id: 1,
      title: "Pdf AI",
      description: "PDF.ai is a powerful RAG-based chatbot that enables seamless interaction with PDF documents. Built using LangChain, LangGraph, and Google Vertex AI (Gemini-1.5), it provides accurate, context-aware responses for effortless information retrieval.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: ["React", "Flask", "MongoDB", "LangChain  "],
      github: "https://github.com/ArnavAnand10/Pdf.AI",
      live: "https://info-ai-alpha.vercel.app/signin",
    },
    {
      id: 2,
      title: "CourtConnect",
      description: "Built a FastAPI-powered system for FIR registration and court hearing transcription with PDF reporting, Google Speech-to-Text integration, and MongoDB storage",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tech: [
  "FastAPI",
  "React",
  "MongoDB",
  "Google Cloud Speech-to-Text",
  "FFmpeg",
  "PyDub",],
      github: "https://github.com/ArnavAnand10/Innoverse",
      live: "#",
      featured: false
    },
    {
      id: 3,
      title: "BookWellCare",
      description: "Platform Connecting Patient With Doctors!",
      
      tech: ["React", "mongoDB", "Node JS, Firebase"],
      github: "https://github.com/ArnavAnand10/BookWellCare",
      live: "",
      featured: false
    },
    {
      id: 4,
      title: "Resume AI Agent",
      description: "A robust Node.js/Express-based API system that leverages Google Gemini AI for intelligent resume parsing, MongoDB for data persistence, and enterprise-grade security features. The system includes PDF processing, structured data extraction, and advanced search capabilities.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tech: [],
      github: "https://github.com/ArnavAnand10/NeoBuild-Interview-Task",
      live: "#",
      featured: false
    }
  ];

  const companies = [
    { 
      name: "Ennobler Private Limited", 
      logo: "https://via.placeholder.com/120x60/6b7280/ffffff?text=CloudSoft",
      website: "https://www.ennobler.co.in/" 
    },
    { 
      name: "Department of Tourism ", 
      logo: "https://via.placeholder.com/120x60/6b7280/ffffff?text=CloudSoft",
      

      website: "https://jandktourism.jk.gov.in/index.html" 
    },
    { 
      name: "Linux World Informatics", 
      logo: "https://via.placeholder.com/120x60/6b7280/ffffff?text=CloudSoft",
      website: "https://in.linkedin.com/company/linuxworld-informatics-pvt-ltd"
    },
     { 
      name: "Linux World Informatics", 
      logo: "https://via.placeholder.com/120x60/6b7280/ffffff?text=CloudSoft",
    },
   
    
  ];

  const [currentCompanyIndex, setCurrentCompanyIndex] = useState(0);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCompanyIndex((prev) => (prev + 1) % Math.ceil(companies.length / 4));
    }, 3000);
    return () => clearInterval(interval);
  }, [companies.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-900">
            Anand
          </div>
          <div className="hidden md:flex space-x-8">
            {['About', 'Companies', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-medium"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center relative bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto w-full">
          <div className="mb-8">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-8 rounded-full bg-gray-900 flex items-center justify-center">
              <span className="text-2xl sm:text-4xl font-bold text-white">AN</span>
            </div>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 text-gray-900">
            Arnav Anand
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-600">
            Full Stack Developer | GenAI
          </p>
          <p className="text-base sm:text-lg mb-12 text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences that blend innovative functionality with clean, minimal design. 
            Passionate about creating solutions that make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              View My Work <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-900 text-gray-900 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </button>
      </section>

      <section id="about" className="min-h-screen flex items-center py-16 sm:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 text-gray-900">
            About Me
          </h2>
          <div className={`text-center transform transition-all duration-1000 ${isVisible.about ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed max-w-3xl mx-auto">
              I'm a passionate developer who loves turning complex problems into simple, beautiful solutions. 
              With expertise in modern web technologies and a keen eye for design, I create experiences that users love.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, 
              or sketching out ideas for the next big thing.
            </p>
            <div className="flex justify-center gap-4">
              <a href="https://github.com/ArnavAnand10" className="p-3 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-300">
                <Github className="w-6 h-6 text-gray-700" />
              </a>
              <a href="https://www.linkedin.com/in/arnavanand710/?originalSubdomain=in" className="p-3 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-300">
                <Linkedin className="w-6 h-6 text-gray-700" />
              </a>
              
            </div>
          </div>
        </div>
      </section>

      <section id="companies" className="min-h-screen flex items-center py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 text-gray-900">
            Worked With
          </h2>
         
          
          <div className="relative overflow-hidden justify-center">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentCompanyIndex * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(companies.length / 3) }, (_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4">
                    {companies.slice(slideIndex * 4, slideIndex * 4 + 4).map((company, index) => (
                      <div
                        key={company.name}
                        className={`group flex items-center justify-center h-20 sm:h-24 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-lg transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                          isVisible.companies ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                        }`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                        onClick={() => company.website && window.open(company.website, '_blank')}
                      >
                        <div className="relative w-full h-full flex items-center justify-center p-4">
                          <img 
                            src={company.logo} 
                            alt={`${company.name} logo`}
                            className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-300"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'block';
                            }}
                          />
                          <div className="hidden text-gray-600 font-semibold text-center">
                            {company.name}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(companies.length / 4) }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCompanyIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentCompanyIndex ? 'bg-gray-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

     <section id="projects" className="min-h-screen flex items-center py-16 sm:py-20 px-4 sm:px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto w-full">
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 text-gray-900">
      Featured Projects
    </h2>

    <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`group relative bg-white rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-500 transform hover:scale-105 p-6 ${
            isVisible.projects ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
          style={{ transitionDelay: `${index * 200}ms` }}
        >
          {project.featured && (
            <div className="absolute top-4 right-4 z-10">
              <Star className="w-6 h-6 text-yellow-500 fill-current" />
            </div>
          )}

          <h3 className="text-xl font-bold mb-3 text-gray-900">{project.title}</h3>

          <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <a
              href={project.github}
              className="flex items-center justify-center gap-2 flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-300"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
            <a
              href={project.live}
              className="flex items-center justify-center gap-2 flex-1 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      <section id="contact" className="min-h-screen flex items-center py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center w-full">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-gray-900">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
          <div className="space-y-6">
            <a
              href="mailto:your.email@example.com"
              className="inline-flex items-center gap-4 px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="w-5 h-5" />
             arnavanand710@gmail.com
            </a>
            <div className="flex justify-center gap-6">
              <a href="https://github.com/ArnavAnand10" className="p-4 bg-gray-50 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors duration-300">
                <Github className="w-6 h-6 text-gray-700" />
              </a>
              <a href="https://www.linkedin.com/in/arnavanand710/?originalSubdomain=in" className="p-4 bg-gray-50 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors duration-300">
                <Linkedin className="w-6 h-6 text-gray-700" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 sm:px-6 border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500">
            © 2025 Arnav Anand. Crafted with passion and lots of coffee ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;