import { useState, useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { ExternalLink, Github, Brain, Globe, Mic, Eye, Award } from 'lucide-react';

export function Projects() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Plant Disease Detection using CNN",
      category: "Machine Learning",
      description: "Built an image classification model using Convolutional Neural Networks to detect plant leaf diseases. Preprocessed large datasets and achieved high accuracy in disease identification.",
      tech: ["Python", "TensorFlow", "OpenCV", "CNN", "Image Processing"],
      icon: Brain,
      type: "ml",
      featured: true,
      status: "Completed"
    },
    {
      id: 2,
      title: "Blood Cancer Cell Detection",
      category: "Research & ML",
      description: "Developed machine learning models to detect leukemia from microscopic images. Conducted comparative analysis using CNN, SVM, KNN, and Random Forest algorithms based on accuracy, precision, and recall.",
      tech: ["Python", "CNN", "SVM", "KNN", "Random Forest", "Medical Imaging"],
      icon: Brain,
      type: "ml",
      featured: true,
      status: "Published Research",
      badge: "Published"
    },
    {
      id: 3,
      title: "Multilingual Voice Translation System",
      category: "AI & NLP",
      description: "Real-time speech-to-speech translator for multilingual communication using a graphical user interface. Supports multiple languages with voice recognition and synthesis.",
      tech: ["Python", "Tkinter", "SpeechRecognition", "Googletrans", "gTTS", "pyttsx3", "playsound", "langdetect"],
      icon: Mic,
      type: "ai",
      featured: false,
      status: "Completed"
    },
    {
      id: 4,
      title: "Audio to Sign Language Converter",
      category: "Web Development & AI",
      description: "Built an innovative audio input system that converts spoken language into sign language visual output, making communication more accessible for the hearing-impaired community.",
      tech: ["Python", "Django", "JavaScript", "OpenCV", "HTML/CSS", "SQLite", "Computer Vision"],
      icon: Eye,
      type: "web",
      featured: true,
      status: "Completed"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'ai', label: 'AI & NLP' },
    { id: 'web', label: 'Web Development' }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.type === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 px-6">
        <div className="w-full max-w-none mx-auto px-4 lg:pl-24 lg:pr-8 xl:pl-28 xl:pr-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              My <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8 leading-relaxed">
              A showcase of my technical journey through machine learning, AI, and web development projects 
              that solve real-world problems and contribute to meaningful research.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 text-base ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25'
                      : 'bg-purple-600/20 backdrop-blur-sm border border-purple-500/30 text-white/70 hover:text-white hover:bg-purple-600/30'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {filteredProjects.map((project) => {
              const IconComponent = project.icon;
              return (
                <div key={project.id} className="group">
                  <div className={`bg-black/30 backdrop-blur-xl rounded-2xl border border-purple-500/20 
                                overflow-hidden hover:bg-black/40 transition-all duration-300 
                                hover:shadow-lg hover:shadow-purple-500/20 h-full ${
                                  project.featured ? 'border-purple-400/40' : ''
                                }`}>
                    
                    {/* Project Header */}
                    <div className="p-6 border-b border-purple-500/20">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-12 h-12 
                                        rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                            <IconComponent size={24} className="text-white" />
                          </div>
                          <div>
                            <span className="px-3 py-1 bg-purple-600/20 rounded-full text-base font-medium text-purple-300 border border-purple-500/30">
                              {project.category}
                            </span>
                            {project.badge && (
                              <span className="ml-2 px-3 py-1 bg-green-600/20 rounded-full text-base font-medium text-green-300 border border-green-500/30">
                                {project.badge}
                              </span>
                            )}
                          </div>
                        </div>
                        {project.featured && (
                          <Award size={20} className="text-yellow-400" />
                        )}
                      </div>

                      <h3 className="text-2xl font-semibold mb-3 group-hover:text-purple-300 
                                   transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-white/70 leading-relaxed text-base">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="p-6">
                      <h4 className="font-medium mb-3 text-white/90 text-base">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, index) => (
                          <span key={index} className="px-3 py-1 bg-purple-600/10 rounded-full text-base text-white/80 
                                                     border border-purple-500/20">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-base text-purple-300 font-medium">
                          Status: {project.status}
                        </span>
                        
                        <div className="flex space-x-3">
                          <button className="flex items-center space-x-2 text-base text-purple-400 
                                           hover:text-purple-300 transition-colors duration-300 group">
                            <ExternalLink size={16} />
                            <span>View Project</span>
                          </button>
                          {project.type !== 'research' && (
                            <button className="flex items-center space-x-2 text-base text-white/70 
                                             hover:text-white transition-colors duration-300 group">
                              <Github size={16} />
                              <span>Code</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Research Highlight */}
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl p-8 
                        border border-purple-500/20 backdrop-blur-xl mb-16">
            <div className="text-center">
              <Award className="mx-auto mb-4 text-yellow-400" size={48} />
              <h2 className="text-3xl font-semibold mb-4">Published Research</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-6">
                My research on "Blood Cancer Cell Detection" has been published, contributing to the 
                advancement of AI applications in healthcare. This work demonstrates the potential 
                of machine learning in medical diagnosis and early disease detection.
              </p>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 rounded-full 
                               font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 
                               flex items-center space-x-2 mx-auto text-base">
                <ExternalLink size={20} />
                <span>View Research Paper</span>
              </button>
            </div>
          </div>

            {/* Call to Action */}
            <div className="text-center">
            <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-semibold mb-4">Interested in Collaboration?</h3>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto text-base">
              I'm always looking for opportunities to work on innovative projects, 
              especially in AI, machine learning, and healthcare technology.
              </p>
              <a 
              href="mailto:shriyadwivedi29@gmail.com"
              className="inline-block bg-white text-[#0a0a0f] px-8 py-3 rounded-full font-medium 
                   hover:bg-white/90 transition-all duration-300 shadow-lg shadow-white/20 text-base"
              >
              Let's Discuss Your Project
              </a>
            </div>
            </div>
            <div className="mb-16" />
        </div>
      </main>
    </div>
  );
}