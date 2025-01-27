import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, User, Home, Briefcase, MessageSquare } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import ContactForm from './components/ContactForm';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: MessageSquare },
  ];

  const skills = [
    'JavaScript', 'Node.js', 'Python',
    , 'C++', 'SQL', 'MongoDB', 'Git',
    'Docker', 'AWS', 'REST APIs', 'GraphQL'
  ];

  const projects = [
    {
      title: 'Project 1',
      description: 'Hand-Gesture-Recognition',
      image: 'https://cdn.onix-systems.com/uploads/Hand_Tracking_and_Gesture_Recognition_Using_AI_Business_Applications_and_Limitations_c95ee6d3c0.png',
      github: 'https://github.com/nimesh69/Hand-Gesture-Recognition',
      live: '#'
    },
    {
      title: 'Project 2',
      description: 'Recovering-and-Enhancing-Digital-Facial-Images-',
      image: 'https://cdn.prod.website-files.com/650865454c2393ac25711ff2/650865454c2393ac25712534_facetune-enhance-portraits.webp',
      github: 'https://github.com/nimesh69/Recovering-and-Enhancing-Digital-Facial-Images-',
      live: '#'
    },
    {
      title: 'Project 3',
      description: 'bird classification',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGkEugKmxEqGW-pOfOxWXD04xoEenwDRdJQw&s',
      github: 'https://github.com/simalshakha/bird_classification',
      live: '#'
    },
    {
      title: 'Project 4',
      description: 'face keypoints detection',
      image: 'https://www.researchgate.net/publication/380663711/figure/fig2/AS:11431281244712149@1715970419209/Demonstrating-66-facial-keypoints-on-an-in-house-subject-akin-to-those-tracked-on-DISFA_Q320.jpg',
      github: 'https://github.com/simalshakha/facekeypoints_detection',
      live: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="bottom-right" />
      
      {/* Navigation */}
      <nav className="fixed w-full bg-[#14213d] shadow-sm z-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <img
              src="https://img.freepik.com/premium-photo/letter-s-realistic-glowing-blue-neon-letter-against-blue-background_601748-21783.jpg?w=740" // Replace with your logo's file path or URL
              alt="Logo"
              className="h-8 w-8 mr-2" // Adjust size and spacing as needed
            />
            
          </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                  onClick={() => setActiveSection(item.name.toLowerCase())}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => {
                    setActiveSection(item.name.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                >
                  <item.icon className="inline-block w-5 h-5 mr-2" />
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 md:pt-32 pb-20 bg-blue-200">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">
              Hi, I'm <span className="text-indigo-600">Simal Shakha</span>
            </span>


              <span className="block text-indigo-600">Computer Engineer</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Passionate about building innovative solutions and creating impactful software
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="flex justify-center space-x-6">
                <a href="https://github.com/simalshakha" className="text-gray-400 hover:text-gray-500">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://linkedin.com" className="text-gray-400 hover:text-gray-500">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="sshakha350@gmail.com" className="text-gray-400 hover:text-gray-500">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="pt-20 md:pt-32 pb-20 bg-blue-200">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">About Me</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-500">
            <p className="mb-4">
              I am a Computer Engineer with a passion for creating innovative solutions to complex problems. 
              With a strong foundation in software development and engineering principles, I strive to build 
              efficient and scalable applications that make a difference.
            </p>
            <p>
              My journey in technology has equipped me with both technical expertise and problem-solving skills, 
              allowing me to tackle challenges head-on and deliver high-quality results.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="pt-20 md:pt-32 pb-20 bg-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                <span className="text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="pt-20 md:pt-32 pb-20 bg-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
                  <p className="mt-2 text-gray-500">{project.description}</p>
                  <div className="mt-4 flex space-x-4">
                    <a href={project.github} className="text-gray-400 hover:text-gray-500">
                      <Github className="h-6 w-6" />
                    </a>
                    <a href={project.live} className="text-gray-400 hover:text-gray-500">
                      <ExternalLink className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#e5e5e5]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Contact Me</h2>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-500">© {new Date().getFullYear()} Simal Shakha. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;