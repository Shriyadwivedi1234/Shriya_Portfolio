// API utility functions for portfolio backend integration

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
}

export interface SkillData {
  category: string;
  skills: Array<{
    name: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
    icon?: string;
  }>;
}

// Contact form submission
export const submitContactForm = async (formData: ContactFormData): Promise<{ success: boolean; message: string }> => {
  try {
    // In a real application, this would send to your backend API
    // For now, we'll simulate the API call
    console.log('Contact form submitted:', formData);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // You can integrate with services like:
    // - EmailJS for email sending
    // - Formspree for form handling
    // - Your own backend API
    
    return {
      success: true,
      message: 'Thank you for your message! I will get back to you soon.'
    };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      success: false,
      message: 'Sorry, there was an error sending your message. Please try again.'
    };
  }
};

// Get projects data
export const getProjects = async (): Promise<ProjectData[]> => {
  try {
    // In a real application, this would fetch from your backend API
    // For now, we'll return mock data
    const projects: ProjectData[] = [
      {
        id: 1,
        title: "Plant Disease Detection using CNN",
        description: "Built an image classification model using Convolutional Neural Networks to detect plant leaf diseases.",
        technologies: ["Python", "TensorFlow", "OpenCV", "CNN", "Image Processing"],
        githubUrl: "https://github.com/shriyadwivedi29/plant-disease-detection",
        featured: true
      },
      {
        id: 2,
        title: "Blood Cancer Cell Detection",
        description: "Developed machine learning models to detect leukemia from microscopic images.",
        technologies: ["Python", "CNN", "SVM", "KNN", "Random Forest", "Medical Imaging"],
        githubUrl: "https://github.com/shriyadwivedi29/blood-cancer-detection",
        featured: true
      },
      {
        id: 3,
        title: "Multilingual Voice Translation System",
        description: "Real-time speech-to-speech translator for multilingual communication.",
        technologies: ["Python", "Tkinter", "SpeechRecognition", "Googletrans", "gTTS"],
        githubUrl: "https://github.com/shriyadwivedi29/voice-translation",
        featured: false
      },
      {
        id: 4,
        title: "Audio to Sign Language Converter",
        description: "Built an innovative audio input system that converts spoken language into sign language.",
        technologies: ["Python", "Django", "JavaScript", "OpenCV", "HTML/CSS"],
        githubUrl: "https://github.com/shriyadwivedi29/sign-language-converter",
        featured: true
      }
    ];
    
    return projects;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};

// Get skills data
export const getSkills = async (): Promise<SkillData[]> => {
  try {
    const skills: SkillData[] = [
      {
        category: "Programming Languages",
        skills: [
          { name: "Python", level: "Advanced" },
          { name: "Java", level: "Intermediate" },
          { name: "SQL", level: "Intermediate" },
          { name: "JavaScript", level: "Intermediate" }
        ]
      },
      {
        category: "Web Technologies",
        skills: [
          { name: "HTML/CSS", level: "Advanced" },
          { name: "Django", level: "Intermediate" },
          { name: "React", level: "Intermediate" },
          { name: "Responsive Design", level: "Advanced" }
        ]
      },
      {
        category: "Machine Learning & AI",
        skills: [
          { name: "TensorFlow", level: "Advanced" },
          { name: "OpenCV", level: "Intermediate" },
          { name: "CNN", level: "Advanced" },
          { name: "SVM, KNN", level: "Intermediate" }
        ]
      },
      {
        category: "Tools & Platforms",
        skills: [
          { name: "VS Code", level: "Expert" },
          { name: "IntelliJ IDEA", level: "Intermediate" },
          { name: "MySQL", level: "Intermediate" },
          { name: "MongoDB", level: "Intermediate" }
        ]
      }
    ];
    
    return skills;
  } catch (error) {
    console.error('Error fetching skills:', error);
    return [];
  }
};

// Analytics tracking (optional)
export const trackPageView = (page: string) => {
  try {
    // Integrate with Google Analytics, Mixpanel, or your preferred analytics service
    console.log('Page view tracked:', page);
    
    // Example Google Analytics 4 integration:
    // if (typeof window !== 'undefined' && window.gtag) {
    //   window.gtag('config', 'GA_MEASUREMENT_ID', {
    //     page_path: page
    //   });
    // }
  } catch (error) {
    console.error('Error tracking page view:', error);
  }
};

// Download CV functionality
export const downloadCV = async (): Promise<void> => {
  try {
    // In a real application, this would trigger a file download
    // You can store your CV in the public folder and link to it
    const cvUrl = '/shriya-dwivedi-cv.pdf';
    
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Shriya_Dwivedi_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Error downloading CV:', error);
    // Fallback to opening in new tab
    window.open('/shriya-dwivedi-cv.pdf', '_blank');
  }
};

// Email integration
export const sendEmail = (to: string, subject: string, body: string): void => {
  try {
    const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  } catch (error) {
    console.error('Error opening email client:', error);
  }
};

// Social media links
export const socialLinks = {
  github: 'https://github.com/shriyadwivedi29',
  linkedin: 'https://linkedin.com/in/shriya-dwivedi',
  email: 'mailto:shriyadwivedi29@gmail.com',
  phone: 'tel:+918010245399'
};

// Configuration
export const config = {
  siteName: 'Shriya Dwivedi - Portfolio',
  siteDescription: 'Computer Engineering Student specializing in AI & Machine Learning',
  contactEmail: 'shriyadwivedi29@gmail.com',
  location: 'Ambernath, Maharashtra, India',
  githubUsername: 'shriyadwivedi29',
  linkedinUsername: 'shriya-dwivedi'
}; 