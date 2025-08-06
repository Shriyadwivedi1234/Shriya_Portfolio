import { useState } from 'react';
import { ExternalLink, Github, Palette, Brain, Globe, Smartphone } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Recommendation System",
      category: "Machine Learning",
      description: "Built a collaborative filtering recommendation system using Python and scikit-learn that improved user engagement by 35%.",
      tech: ["Python", "Pandas", "Scikit-learn", "Flask", "MySQL"],
      icon: Brain,
      image: "🤖",
      type: "ml"
    },
    {
      id: 2,
      title: "Sentiment Analysis Tool",
      category: "Machine Learning",
      description: "Developed a real-time sentiment analysis application using NLP techniques for social media monitoring.",
      tech: ["Python", "NLTK", "TensorFlow", "React", "Node.js"],
      icon: Brain,
      image: "📊",
      type: "ml"
    },
    {
      id: 3,
      title: "Task Management App UI",
      category: "UI/UX Design",
      description: "Designed a clean, intuitive task management interface focusing on user productivity and ease of use.",
      tech: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      icon: Palette,
      image: "📱",
      type: "design"
    },
    {
      id: 4,
      title: "Restaurant Web App",
      category: "Web Development",
      description: "Full-stack restaurant website with online ordering, user authentication, and admin dashboard.",
      tech: ["Python", "Django", "PostgreSQL", "HTML/CSS", "JavaScript"],
      icon: Globe,
      image: "🍕",
      type: "web"
    },
    {
      id: 5,
      title: "Learning Management System",
      category: "Web Development",
      description: "Educational platform with course management, progress tracking, and interactive learning modules.",
      tech: ["Python", "Flask", "SQLAlchemy", "Bootstrap", "jQuery"],
      icon: Globe,
      image: "📚",
      type: "web"
    },
    {
      id: 6,
      title: "Mobile Banking App Concept",
      category: "UI/UX Design",
      description: "Conceptual mobile banking app design focused on accessibility, security, and user-friendly financial management.",
      tech: ["Figma", "User Journey Mapping", "Wireframing", "Prototyping"],
      icon: Smartphone,
      image: "💳",
      type: "design"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'design', label: 'UI/UX Design' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'web', label: 'Web Development' }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.type === selectedCategory);

  return (
    <section id="projects" className="py-20 px-6 relative">
              <div className="w-full max-w-none mx-auto px-4 lg:pl-24 lg:pr-8 xl:pl-28 xl:pr-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            A showcase of my journey from backend development to UI/UX design, 
            featuring machine learning projects, web applications, and design concepts.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                    : 'bg-white/10 backdrop-blur-sm border border-white/30 text-white/70 hover:text-white hover:bg-white/20'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div key={project.id} className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 
                              overflow-hidden hover:bg-white/15 transition-all duration-300 
                              hover:shadow-lg hover:shadow-purple-500/10 h-full">
                  {/* Project Image/Icon */}
                  <div className="h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 
                                flex items-center justify-center text-6xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 
                                  group-hover:from-purple-500/20 group-hover:to-blue-500/20 
                                  transition-all duration-300"></div>
                    <span className="relative z-10">{project.image}</span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                      <IconComponent size={20} className="text-purple-400" />
                    </div>

                    <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-300 
                                 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-white/70 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-3">
                      <button className="flex items-center space-x-2 text-base text-purple-400 
                                       hover:text-purple-300 transition-colors duration-300">
                        <ExternalLink size={16} />
                        <span>View Project</span>
                      </button>
                      {project.type !== 'design' && (
                        <button className="flex items-center space-x-2 text-base text-white/70 
                                         hover:text-white transition-colors duration-300">
                          <Github size={16} />
                          <span>Code</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white/10 backdrop-blur-sm px-8 py-3 rounded-full font-medium 
                           border border-white/30 hover:bg-white/20 transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}