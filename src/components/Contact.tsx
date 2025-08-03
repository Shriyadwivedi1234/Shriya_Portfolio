import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { submitContactForm, socialLinks, config } from '../utils/api';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const result = await submitContactForm(formData);
      
      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: result.message });
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'An unexpected error occurred. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: config.contactEmail,
      href: socialLinks.email
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8010245399",
      href: socialLinks.phone
    },
    {
      icon: MapPin,
      label: "Location",
      value: config.location,
      href: "#"
    }
  ];

  const socialLinksList = [
    { icon: Github, href: socialLinks.github, label: "GitHub" },
    { icon: Linkedin, href: socialLinks.linkedin, label: "LinkedIn" },
    { icon: ExternalLink, href: "#", label: "Project Demo" }
  ];

  return (
    <section id="contact" className="py-16 px-6 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            I'm always excited to connect with fellow developers, researchers, and potential collaborators. 
            Let's discuss how we can create innovative solutions together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Mail className="mr-3 text-purple-400" size={20} />
                Let's Connect
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed text-base">
                I'm passionate about technology and always eager to learn and collaborate. 
                Whether you have a project idea, research opportunity, or just want to discuss 
                the latest developments in AI and machine learning, feel free to reach out.
              </p>

              <div className="space-y-3">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center space-x-3 p-3 bg-purple-600/10 rounded-xl 
                               hover:bg-purple-600/20 transition-all duration-300 group
                               border border-purple-500/20"
                    >
                      <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-10 h-10 
                                    rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                        <IconComponent size={16} className="text-white" />
                      </div>
                      <div>
                        <div className="text-white/60 text-sm">{info.label}</div>
                        <div className="text-white group-hover:text-purple-300 transition-colors text-base">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-3 text-base">Connect With Me</h4>
                <div className="flex space-x-3">
                  {socialLinksList.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className="p-2 bg-purple-600/20 rounded-xl border border-purple-500/30 
                                 hover:bg-purple-600/30 transition-all duration-300 group
                                 shadow-lg shadow-purple-500/10"
                        title={social.label}
                      >
                        <IconComponent size={16} className="text-white group-hover:text-purple-300 
                                                          transition-colors" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-4">Send Me a Message</h3>
            
            {/* Status Message */}
            {submitStatus.type && (
              <div className={`mb-4 p-3 rounded-xl text-base ${
                submitStatus.type === 'success' 
                  ? 'bg-green-600/20 border border-green-500/30 text-green-300'
                  : 'bg-red-600/20 border border-red-500/30 text-red-300'
              }`}>
                {submitStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-white/80 mb-1 text-base">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 py-2 bg-purple-600/10 border border-purple-500/30 rounded-xl 
                             text-white placeholder-white/50 focus:outline-none focus:border-purple-400 
                             focus:bg-purple-600/20 transition-all duration-300 backdrop-blur-sm text-base
                             disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white/80 mb-1 text-base">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 py-2 bg-purple-600/10 border border-purple-500/30 rounded-xl 
                             text-white placeholder-white/50 focus:outline-none focus:border-purple-400 
                             focus:bg-purple-600/20 transition-all duration-300 backdrop-blur-sm text-base
                             disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-white/80 mb-1 text-base">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-3 py-2 bg-purple-600/10 border border-purple-500/30 rounded-xl 
                           text-white placeholder-white/50 focus:outline-none focus:border-purple-400 
                           focus:bg-purple-600/20 transition-all duration-300 resize-none backdrop-blur-sm text-base
                           disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Project Inquiry / Collaboration"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white/80 mb-1 text-base">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  disabled={isSubmitting}
                  className="w-full px-3 py-2 bg-purple-600/10 border border-purple-500/30 rounded-xl 
                           text-white placeholder-white/50 focus:outline-none focus:border-purple-400 
                           focus:bg-purple-600/20 transition-all duration-300 resize-none backdrop-blur-sm text-base
                           disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tell me about your project or idea..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-xl 
                         text-base font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 
                         flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed
                         disabled:hover:shadow-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl p-6 
                        border border-purple-500/20 backdrop-blur-xl shadow-2xl shadow-purple-500/10">
            <h3 className="text-xl font-semibold mb-3">Ready to Collaborate?</h3>
            <p className="text-white/70 mb-4 max-w-2xl mx-auto text-base">
              Whether you need technical expertise in machine learning, web development consultation, 
              or want to explore innovative AI solutions, I'm here to help bring your ideas to life.
            </p>
            <a 
              href={socialLinks.email}
              className="inline-block bg-white text-[#0a0a0f] px-6 py-2 rounded-full text-base font-medium 
                       hover:bg-white/90 transition-all duration-300 shadow-lg shadow-white/20"
            >
              Schedule a Discussion
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}