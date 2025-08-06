import { Navigation } from '../components/Navigation';
import { GraduationCap, Award, Target, Heart, MapPin, Calendar } from 'lucide-react';
import { useEffect } from 'react';

export function About() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const education = [
    {
      degree: "B.E. in Computer Engineering",
      institution: "Lokmanya Tilak College of Engineering, Navi Mumbai",
      period: "2022 – 2026",
      grade: "CGPA: 8.50",
      focus: "UI/UX Designer"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Smt. Chandibai Himathmal Mansukhani College",
      period: "2020 – 2022",
      grade: "Percentage: 72%",
      focus: "Science Stream"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Sri Satya Sai Niketan High School",
      period: "2019 – 2020",
      grade: "Percentage: 92.6%",
      focus: "Learn. Explore. Prepare."
    }
  ];

  const achievements = [
    "Semi-Finalist - Innovation Marathon 2023–24",
    "Code Unnati – SAP Advanced Course Certification",
    "IBM SkillsBuild Data Analytics Certifications",
    "Published Research on Blood Cancer Cell Detection"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">About Me</span>
            </h1>
            <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
              A passionate computer engineering student evolving into a UI/UX designer, 
            combining technical expertise with creative vision to craft exceptional digital experiences.
            </p>
          </div>

            {/* Personal Introduction */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-5">
              <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-6 border border-purple-500/20">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Heart className="mr-3 text-purple-400" size={25} />
              Who I Am
              </h2>
              <div className="space-y-3 text-white/80 leading-relaxed text-[1.0625rem]">
              <p>
              I'm Shriya Parmanand Dwivedi, a final-year Computer Engineering student at 
              Lokmanya Tilak College of Engineering, Navi Mumbai. My journey in technology 
              began with a curiosity about how machines can learn and make decisions.
              </p>
              <p>
              With a strong foundation in Python programming and machine learning, I've 
              developed several projects ranging from plant disease detection to blood 
              cancer cell analysis. My research work has been published, demonstrating 
              my commitment to contributing meaningful solutions to real-world problems.
              </p>
              <p>
              Beyond technical skills, I believe in the power of continuous learning and 
              collaboration. I'm constantly exploring new technologies and frameworks 
              to enhance my skill set and create impactful solutions.
              </p>
              </div>
              
              <div className="mt-4 flex items-center space-x-3 text-purple-300 text-[1.0625rem]">
              <MapPin size={17} />
              <span>Based in Ambernath, Maharashtra, India</span>
              </div>
              </div>
            </div>

            <div className="space-y-5">
              {/* Current Status */}
              <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-5 
                border border-purple-500/20 backdrop-blur-xl">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Target className="mr-3 text-purple-400" size={19} />
              Current Focus
              </h3>
              <ul className="space-y-2 text-white/80 text-[1.0625rem]">
              <li>• Completing B.E. in Computer Engineering (Final Year)</li>
              <li>• Deepening expertise in Machine Learning & AI</li>
              <li>• Building innovative projects with real-world applications</li>
              <li>• Major interest in UI/UX</li>
              </ul>
              </div>

              {/* Key Achievements */}
              <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-5 border border-purple-500/20">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Award className="mr-3 text-purple-400" size={19} />
              Key Achievements
              </h3>
              <ul className="space-y-2">
              {achievements.map((achievement, index) => (
              <li key={index} className="text-white/80 flex items-start text-[1.0625rem]">
                <span className="text-purple-400 mr-2">•</span>
                {achievement}
              </li>
              ))}
              </ul>
              </div>
            </div>
            </div>

            {/* Education Section */}
            <div className="mb-24">
              <h2 className="text-xl md:text-2xl font-semibold text-center mb-12 flex items-center justify-center text-white">
                <GraduationCap className="mr-3 text-purple-400" size={28} />
                Educational Journey
              </h2>
              
              <div className="space-y-10">
              {education.map((edu, index) => (
              <div key={index} className="relative">
              <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-purple-500/20 hover:bg-black/40 transition-all duration-300">
              <div className="grid md:grid-cols-3 gap-8 items-center">
              <div>
              <h3 className="text-base md:text-lg font-semibold text-white mb-2">{edu.degree}</h3>
              <p className="text-purple-300 text-sm md:text-base">{edu.institution}</p>
              </div>
              <div className="space-y-2">
              <div className="flex items-center text-white/70 text-sm md:text-base">
              <Calendar size={16} className="mr-2 text-purple-400" />
              {edu.period}
              </div>
              <div className="text-white/80 font-medium text-sm md:text-base">{edu.grade}</div>
              </div>
              <div className="text-white/70 text-sm md:text-base">{edu.focus}</div>
              </div>
              </div>
              
              {index < education.length - 1 && (
              <div className="flex justify-center my-7">
              <div className="w-0.5 h-10 bg-gradient-to-b from-purple-400 to-blue-400"></div>
              </div>
              )}
              </div>
              ))}
              </div>
            </div>

            {/* Goals & Vision */}
            <div className="text-center mb-16">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl p-8 
                    border border-purple-500/20 backdrop-blur-xl">
              <Target className="mx-auto mb-4 text-purple-400" size={40} />
              <h2 className="text-2xl font-semibold mb-4">My Vision</h2>
              <p className="text-lg text-white/80 max-w-4xl mx-auto leading-relaxed">
              To leverage the power of artificial intelligence and machine learning to solve complex 
              real-world problems, particularly in healthcare and technology. I aim to bridge the gap 
              between cutting-edge research and practical applications that can make a meaningful 
              difference in people's lives.
              </p>
            </div>
            </div>
        </div>
      </main>
    </div>
    
  );
}