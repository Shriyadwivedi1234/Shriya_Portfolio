import { Navigation } from '../components/Navigation';
import { Code, Database, Brain, Award, CheckCircle, ExternalLink, Star, Zap } from 'lucide-react';
import { useEffect } from 'react';

export function Skills() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      description: "Core programming languages for development",
      skills: [
        { name: "Python", level: "Advanced" },
        { name: "Java", level: "Intermediate" },
        { name: "SQL", level: "Intermediate" },
        { name: "JavaScript", level: "Intermediate" },
      ]
    },
    {
      title: "Web Technologies",
      icon: Code,
      description: "Frontend and backend web development",
      skills: [
        { name: "HTML/CSS", level: "Advanced" },
        { name: "Django", level: "Intermediate" },
        { name: "React", level: "Intermediate" },
        { name: "Responsive Design", level: "Advanced" },
      ]
    },
    {
      title: "Machine Learning & AI",
      icon: Brain,
      description: "Artificial intelligence and machine learning frameworks",
      skills: [
        { name: "TensorFlow", level: "Advanced" },
        { name: "OpenCV", level: "Intermediate" },
        { name: "CNN", level: "Advanced" },
        { name: "SVM, KNN", level: "Intermediate" },
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Database,
      description: "Development tools and database management",
      skills: [
        { name: "VS Code", level: "Expert" },
        { name: "IntelliJ IDEA", level: "Intermediate" },
        { name: "MySQL", level: "Intermediate" },
        { name: "MongoDB", level: "Intermediate" },
      ]
    }
  ];

  const certifications = [
    {
      title: "Code Unnati – SAP (Advanced Course 2024-25)",
      issuer: "SAP",
      date: "July 2025",
      certificateId: "CU25_17907",
      status: "Active"
    },
    {
      title: "Code Unnati – SAP (2023-24)",
      issuer: "SAP", 
      date: "2024",
      certificateId: "CU24_5949",
      status: "Completed"
    },
    {
      title: "Data Analytics for Beginners",
      issuer: "IBM SkillsBuild",
      date: "2024",
      certificateId: "IBM-001",
      status: "Completed"
    },
    {
      title: "Intro to Data Analytics",
      issuer: "IBM SkillsBuild",
      date: "2024",
      certificateId: "IBM-002",
      status: "Completed"
    },
    {
      title: "Data Analytics Using R",
      issuer: "IBM SkillsBuild",
      date: "2024",
      certificateId: "IBM-003",
      status: "Completed"
    },
    {
      title: "Getting Started with Enterprise Data Science",
      issuer: "IBM SkillsBuild",
      date: "March 2024",
      certificateId: "IBM-004",
      status: "Completed"
    }
  ];

  const softSkills = [
    "Leadership", "Team Collaboration", "Communication", "Problem Solving",
    "Critical Thinking", "Project Management", "Research & Analysis", "Code Debugging"
  ];

  const getSkillLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-gradient-to-r from-purple-500 to-pink-500 text-white";
      case "Advanced":
        return "bg-gradient-to-r from-blue-500 to-cyan-500 text-white";
      case "Intermediate":
        return "bg-gradient-to-r from-green-500 to-emerald-500 text-white";
      case "Beginner":
        return "bg-gradient-to-r from-orange-500 to-yellow-500 text-white";
      default:
        return "bg-purple-600/20 text-purple-300 border border-purple-500/30";
    }
  };

  const getSkillLevelIcon = (level: string) => {
    switch (level) {
      case "Expert":
        return <Zap size={12} />;
      case "Advanced":
        return <Star size={12} />;
      case "Intermediate":
        return <CheckCircle size={12} />;
      default:
        return <CheckCircle size={12} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Skills & <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Expertise</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my technical skills, certifications, and expertise 
              developed through academic projects and continuous learning.
            </p>
          </div>

          {/* Technical Skills - Modern Card Layout */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 
                                          hover:bg-black/40 hover:border-purple-400/30 transition-all duration-300 group">
                  <div className="flex items-start mb-6">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-14 h-14 rounded-2xl 
                                  flex items-center justify-center mr-4 shadow-lg shadow-purple-500/25 
                                  group-hover:scale-105 transition-transform duration-300">
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-white mb-2">{category.title}</h3>
                      <p className="text-white/60 text-base leading-relaxed">{category.description}</p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="group/skill">
                        <div className="bg-purple-600/10 rounded-xl p-4 border border-purple-500/20 
                                      hover:bg-purple-600/20 transition-all duration-300 h-full">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-white font-medium text-base">{skill.name}</span>
                          </div>
                          
                          <div className="flex items-center justify-end">
                            <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium
                                           ${getSkillLevelColor(skill.level)} shadow-sm`}>
                              {getSkillLevelIcon(skill.level)}
                              <span>{skill.level}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Soft Skills - Chip Layout */}
          <div className="mb-20">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Soft Skills
            </h2>
            
            <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20">
              <div className="flex flex-wrap gap-4 justify-center">
                {softSkills.map((skill, index) => (
                  <div key={index} className="group">
                    <span className="inline-flex items-center px-6 py-3 bg-purple-600/20 rounded-full 
                                   border border-purple-500/30 text-white font-medium text-base
                                   hover:bg-purple-600/30 hover:border-purple-400/50 transition-all duration-300
                                   shadow-lg shadow-purple-500/10 group-hover:shadow-purple-500/20">
                      <CheckCircle size={16} className="mr-2 text-purple-400" />
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Proficiency Legend */}
          <div className="mb-20">
            <h2 className="text-2xl font-semibold text-center mb-8">Proficiency Levels</h2>
            <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-orange-500 to-yellow-500 w-12 h-12 rounded-xl 
                                flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <CheckCircle size={20} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-1">Beginner</h4>
                  <p className="text-white/60 text-base">Basic understanding</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-12 h-12 rounded-xl 
                                flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <CheckCircle size={20} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-1">Intermediate</h4>
                  <p className="text-white/60 text-base">Working knowledge</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 rounded-xl 
                                flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Star size={20} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-1">Advanced</h4>
                  <p className="text-white/60 text-base">Strong proficiency</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-xl 
                                flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Zap size={20} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-1">Expert</h4>
                  <p className="text-white/60 text-base">Mastery level</p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications - Clean Layout */}
          <div className="mb-20">
            <h2 className="text-3xl font-semibold text-center mb-12 flex items-center justify-center">
              <Award className="mr-3 text-purple-400" size={32} />
              Certifications & Achievements
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-black/30 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20 
                                          hover:bg-black/40 hover:border-purple-400/30 transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors leading-tight text-base">
                        {cert.title}
                      </h4>
                      <p className="text-purple-300 font-medium text-base mb-1">{cert.issuer}</p>
                      <p className="text-white/60 text-base">{cert.date}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle size={18} className="text-green-400" />
                      <span className="text-xs text-white bg-purple-600/30 px-3 py-1 rounded-full border border-purple-500/30">
                        {cert.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-purple-500/20">
                    <span className="text-xs text-white/50">ID: {cert.certificateId}</span>
                    <button className="flex items-center space-x-1 text-sm text-purple-400 
                                     hover:text-purple-300 transition-colors">
                      <ExternalLink size={12} />
                      <span>Verify</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Special Achievement */}
            <div className="mt-8 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-6 
                          border border-purple-500/20 backdrop-blur-xl">
              <div className="flex items-center mb-4">
                <Award className="mr-3 text-purple-400" size={24} />
                <h4 className="font-semibold text-white text-lg">Semi-Finalist - Innovation Marathon 2023–24</h4>
              </div>
              <p className="text-white/80 text-base">
                Recognized for innovative project ideas and technical excellence in a competitive innovation challenge.
              </p>
              <p className="text-purple-300 font-medium mt-2">March 2024</p>
            </div>
          </div>

          {/* Learning Philosophy */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl p-12 
                          border border-purple-500/20 backdrop-blur-xl">
              <Brain className="mx-auto mb-6 text-purple-400" size={48} />
              <h2 className="text-3xl font-semibold mb-6">Continuous Learning</h2>
              <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
                Technology evolves rapidly, and I believe in staying ahead of the curve through 
                continuous learning and hands-on practice. I regularly explore new frameworks, 
                participate in online courses, and contribute to open-source projects to expand 
                my knowledge and skills.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-6 py-3 bg-purple-600/20 rounded-full border border-purple-500/30 
                               text-white/90 backdrop-blur-sm text-base">
                  Always Learning
                </span>
                <span className="px-6 py-3 bg-purple-600/20 rounded-full border border-purple-500/30 
                               text-white/90 backdrop-blur-sm text-base">
                  Research-Oriented
                </span>
                <span className="px-6 py-3 bg-purple-600/20 rounded-full border border-purple-500/30 
                               text-white/90 backdrop-blur-sm text-base">
                  Innovation-Focused
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}