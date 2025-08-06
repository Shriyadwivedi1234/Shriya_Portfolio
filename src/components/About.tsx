import { GraduationCap, Code, Palette, Users, Target, Heart } from 'lucide-react';

export function About() {
  const stats = [
    { number: "4+", label: "Years of Study" },
    { number: "10+", label: "Projects Completed" },
    { number: "2", label: "ML Projects" },
    { number: "100%", label: "Passion for Design" }
  ];

  const journey = [
    {
      icon: GraduationCap,
      title: "Computer Engineering Student",
      description: "Currently in final year, building strong technical foundations in software development and system design."
    },
    {
      icon: Code,
      title: "Backend Development",
      description: "Experienced in Python web development and machine learning, creating robust backend solutions."
    },
    {
      icon: Palette,
      title: "UI/UX Transition",
      description: "Passionate about creating beautiful, user-centered designs. Transitioning focus to UI/UX design."
    }
  ];

  return (
    <section id="about" className="py-20 px-6 relative">
              <div className="w-full max-w-none mx-auto px-4 lg:pl-24 lg:pr-8 xl:pl-28 xl:pr-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A passionate computer engineering student evolving into a UI/UX designer, 
            combining technical expertise with creative vision to craft exceptional digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Heart className="mr-3 text-red-400" size={24} />
                My Story
              </h3>
              <p className="text-white/80 leading-relaxed mb-4">
                As a final-year Computer Engineering student, I've spent years mastering the technical 
                side of software development. I've built machine learning models, developed Python web 
                applications, and solved complex technical challenges.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                However, I discovered my true passion lies in understanding users and creating 
                intuitive, beautiful interfaces that make technology accessible and enjoyable. 
                This realization led me to transition into UI/UX design.
              </p>
              <p className="text-white/80 leading-relaxed">
                My unique background gives me a deep understanding of both technical constraints 
                and user needs, allowing me to design solutions that are both feasible and delightful.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 
                                        text-center hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 
                              bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-white/70 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-3xl font-semibold text-center mb-12">My Journey</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {journey.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 
                                h-full hover:bg-white/15 transition-all duration-300">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 w-16 h-16 rounded-2xl 
                                  flex items-center justify-center mb-6">
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <h4 className="text-xl font-semibold mb-4">{step.title}</h4>
                    <p className="text-white/70 leading-relaxed">{step.description}</p>
                  </div>
                  {index < journey.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 
                                  bg-gradient-to-r from-purple-400 to-blue-400"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 inline-block">
            <Target className="mx-auto mb-4 text-purple-400" size={32} />
            <h4 className="text-xl font-semibold mb-4">My Goal</h4>
            <p className="text-white/80 max-w-2xl">
              To become a skilled UI/UX designer who bridges the gap between technical possibilities 
              and user needs, creating digital products that are both innovative and intuitive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}