import { Code, Palette, Database, Brain, Smartphone, Monitor, ExternalLink } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: "Programming & Development",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 75 },
        { name: "HTML/CSS", level: 85 },
        { name: "React", level: 70 },
        { name: "Django/Flask", level: 80 }
      ]
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Figma", level: 85 },
        { name: "Adobe XD", level: 75 },
        { name: "Prototyping", level: 80 },
        { name: "User Research", level: 70 },
        { name: "Wireframing", level: 85 }
      ]
    },
    {
      title: "Machine Learning",
      icon: Brain,
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "Scikit-learn", level: 85 },
        { name: "TensorFlow", level: 75 },
        { name: "Pandas", level: 90 },
        { name: "NumPy", level: 85 },
        { name: "Data Analysis", level: 80 }
      ]
    },
    {
      title: "Database & Tools",
      icon: Database,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "MySQL", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "Git/GitHub", level: 85 },
        { name: "Docker", level: 65 },
        { name: "AWS", level: 60 }
      ]
    }
  ];

  const designPrinciples = [
    {
      icon: Monitor,
      title: "User-Centered Design",
      description: "Focusing on user needs and creating intuitive experiences"
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Ensuring seamless experiences across all devices"
    },
    {
      icon: Palette,
      title: "Visual Hierarchy",
      description: "Creating clear information architecture and navigation"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 relative">
              <div className="w-full max-w-none mx-auto px-4 lg:pl-24 lg:pr-8 xl:pl-28 xl:pr-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Skills & <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A comprehensive skill set spanning from technical development to creative design, 
            bridging the gap between functionality and user experience.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 
                                        hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className={`bg-gradient-to-r ${category.color} w-12 h-12 rounded-xl 
                                flex items-center justify-center mr-4`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-white/80">{skill.name}</span>
                        <span className="text-white/60">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div 
                          className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Design Principles */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-center mb-12">Design Philosophy</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {designPrinciples.map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 
                                          text-center hover:bg-white/15 transition-all duration-300">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 w-16 h-16 rounded-2xl 
                                flex items-center justify-center mx-auto mb-4">
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3">{principle.title}</h4>
                  <p className="text-white/70">{principle.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications/Learning */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
          <h3 className="text-2xl font-semibold mb-4">Continuous Learning</h3>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Currently pursuing additional certifications in UX design and staying updated with the latest 
            design trends and development technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <span className="px-4 py-2 bg-white/20 rounded-full text-base">Google UX Design Certificate (In Progress)</span>
            <span className="px-4 py-2 bg-white/20 rounded-full text-base">Interaction Design Foundation</span>
            <span className="px-4 py-2 bg-white/20 rounded-full text-base">Design Thinking Workshops</span>
          </div>
          <div className="flex justify-center">
            <button 
              onClick={() => window.open(`https://drive.google.com/file/d/1YwCcvfRHqKV5lccwxjf4EhrvxZpOp1T5/view?usp=sharing`, '_blank')}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 
                       text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/25 
                       transition-all duration-300 font-medium"
            >
              <ExternalLink size={16} />
              <span>View Certificates</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}