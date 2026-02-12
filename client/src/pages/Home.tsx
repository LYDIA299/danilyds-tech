import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Moon, Sun, ChevronDown, Monitor, Smartphone, Server, Brain, Code, Database, Sparkles } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

/**
 * DaniLyds Technologies - Premium Tech Minimalism Design
 * 
 * Design Philosophy: Premium Tech Minimalism
 * - Deep navy (#0f172a) foundation with vibrant teal (#14b8a6) accents
 * - Generous whitespace and asymmetric layouts
 * - Subtle animations and micro-interactions
 * - Professional, trustworthy, forward-thinking aesthetic
 */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [filterActive, setFilterActive] = useState('all');

  // Scroll effect for sticky nav
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to sections
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveNav(sectionId);
      setMobileMenuOpen(false);
    }
  };

  // Form submission handler
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1000);
  };

  // Fade-in on scroll effect
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 'web',
      title: 'Custom Web Applications',
      description: 'Responsive, feature-rich web platforms using React, Next.js, Node.js, or Django. Ideal for SaaS, dashboards, e-commerce backends.',
      Icon: Monitor,
      tags: ['React', 'Next.js', 'Node.js', 'Django']
    },
    {
      id: 'mobile',
      title: 'Mobile App Development',
      description: 'Native & cross-platform apps (Flutter, React Native) for iOS and Android — from MVP to full-scale enterprise solutions.',
      Icon: Smartphone,
      tags: ['Flutter', 'React Native', 'iOS', 'Android']
    },
    {
      id: 'backend',
      title: 'Backend & API Development',
      description: 'Robust, secure APIs and servers (Node.js, Python/FastAPI, cloud databases) that power your entire ecosystem.',
      Icon: Server,
      tags: ['Node.js', 'Python', 'FastAPI', 'PostgreSQL']
    },
    {
      id: 'ai',
      title: 'AI & Machine Learning Integration',
      description: 'Add intelligent features: predictive analytics, recommendation engines, chatbots, image recognition — using TensorFlow, PyTorch, or custom models.',
      Icon: Brain,
      tags: ['TensorFlow', 'PyTorch', 'NLP', 'Computer Vision']
    },
    {
      id: 'support',
      title: 'Maintenance, Upgrades & Consulting',
      description: 'Keep your software secure and modern with proactive support, performance tuning, and strategic tech advice.',
      Icon: Code,
      tags: ['DevOps', 'Monitoring', 'Security', 'Performance']
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'Mobile Fintech Wallet',
      category: 'mobile',
      client: 'Uganda',
      description: 'Secure payment app with AI fraud detection',
      outcome: 'Reduced fraud attempts by 65%',
      tech: ['React Native', 'Node.js', 'TensorFlow'],
      metrics: '65% fraud reduction'
    },
    {
      id: 2,
      title: 'AI-Powered E-Learning Platform',
      category: 'ai',
      client: 'EdTech Startup',
      description: 'Personalized learning paths and content recommendations',
      outcome: '40% increase in course completion',
      tech: ['React', 'Django', 'PyTorch'],
      metrics: '40% completion increase'
    },
    {
      id: 3,
      title: 'Retail Inventory & POS System',
      category: 'web',
      client: 'Retail Chain',
      description: 'Real-time stock management + analytics dashboard',
      outcome: 'Streamlined operations, real-time insights',
      tech: ['Next.js', 'PostgreSQL', 'AWS'],
      metrics: 'Real-time inventory'
    },
    {
      id: 4,
      title: 'Customer Service AI Chatbot',
      category: 'ai',
      client: 'E-Commerce',
      description: '24/7 intelligent support for e-commerce',
      outcome: 'Cut response time from hours to seconds',
      tech: ['Python', 'NLP', 'APIs'],
      metrics: 'Hours → Seconds'
    },
    {
      id: 5,
      title: 'Health Monitoring Mobile App',
      category: 'mobile',
      client: 'HealthTech',
      description: 'Patient tracking with predictive alerts',
      outcome: 'Improved patient engagement and outcomes',
      tech: ['Flutter', 'Firebase', 'ML Models'],
      metrics: 'Predictive alerts'
    }
  ];

  const filteredProjects = filterActive === 'all' 
    ? projects 
    : projects.filter(p => p.category === filterActive);

  const processSteps = [
    { number: '1', title: 'Discovery & Strategy', description: 'We understand your business goals, target users, and technical requirements through collaborative workshops.' },
    { number: '2', title: 'Design & Prototyping', description: 'Our designers create intuitive, beautiful interfaces. We validate concepts through interactive prototypes.' },
    { number: '3', title: 'Development & Testing', description: 'Our engineers build scalable, maintainable code with rigorous testing at every stage.' },
    { number: '4', title: 'Launch & Support', description: 'We deploy with confidence and provide ongoing support, monitoring, and optimization.' }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white dark:bg-slate-900 shadow-lg' 
          : 'bg-white dark:bg-slate-900'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-teal-600 dark:from-white dark:to-teal-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
              >
                DaniLyds
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {['home', 'about', 'services', 'work', 'contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    activeNav === item
                      ? 'bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300'
                      : 'text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-slate-600" />
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {['home', 'about', 'services', 'work', 'contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen pt-20 flex items-center overflow-hidden"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/yKdrwVluPvL2XISy0DQu6q/sandbox/1VKfWsifjowUafJDTK71cd-img-1_1770641813000_na1fn_aGVyby1iZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUveUtkcndWbHVQdkwyWElTeTBEUXU2cS9zYW5kYm94LzFWS2ZXc2lmam93VWFmSkRUSzcxY2QtaW1nLTFfMTc3MDY0MTgxMzAwMF9uYTFmbl9hR1Z5YnkxaVp3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=BMkQH2dORi8W-bZKnV84swMRZfB5VM73KGHQ0rXGs~Zetz-zKr-dJ4jVdDFctr0WtBBKNbY93-eQ817pctmKBD~xUZWVfyiDnt2TOB6WqLli~QL8Gl6BpSKrd0iyW~4vbIW9yY5-IpBWXVOHeSHAoCvAViweLarjrdezOiBZ1kcrwLzRzdrVw6DksxIo8QgEw~-yebeztlHoGPC38Oo~UaSYthjGH4v8Kf3l2UBKYoBKRjLjgFQK0RhLG92G2qoH66H0NDu97ljuKcB9AiCOssDL-86b~XTwdv1f3K12agQOLn~SARxcVGr8iT9-FkrODDtn7e9GkIjtc9DroD06JQ__')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 dark:from-slate-900/95 via-white/90 dark:via-slate-900/90 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              DaniLyds Technologies
            </h1>
            <p className="text-xl md:text-2xl text-teal-600 dark:text-teal-400 font-semibold mb-6">
              Custom Software & AI Solutions That Drive Real Business Growth
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
              We partner with ambitious businesses in Uganda and worldwide to build powerful, scalable web applications, mobile apps, backend systems, and intelligent AI features. From secure fintech platforms to predictive analytics tools, our solutions reduce costs, automate processes, and unlock new revenue opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-gradient-to-r from-slate-900 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Start Your Project
              </button>
              <button
                onClick={() => scrollToSection('work')}
                className="px-8 py-4 border-2 border-teal-600 text-teal-600 dark:text-teal-400 font-semibold rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-300"
              >
                See Our Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-in opacity-0 transition-opacity duration-700">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">Who We Are</h2>
            
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-12 leading-relaxed max-w-3xl">
              DaniLyds Technologies is a Kampala-based software agency founded with one mission: to deliver world-class custom software that actually moves the needle for our clients. With deep roots in Uganda's growing tech ecosystem and global project experience, our team combines technical excellence with practical business insight. We specialize in turning complex ideas into reliable, maintainable, and future-proof digital products — especially those powered by AI and machine learning.
            </p>

            {/* Values */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Our Values</h3>
              <div className="flex flex-wrap gap-4">
                {['Client-First Approach', 'Technical Mastery', 'Transparent Communication', 'Rapid Delivery', 'Long-Term Partnership'].map((value, idx) => (
                  <div
                    key={idx}
                    className="px-6 py-3 bg-white dark:bg-slate-700 rounded-lg border border-teal-200 dark:border-teal-700 text-slate-900 dark:text-white font-semibold"
                  >
                    {value}
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                { stat: '100%', label: 'On-Time Delivery' },
                { stat: '5+', label: 'Countries Served' },
                { stat: '70%+', label: 'Projects with AI' }
              ].map((item, idx) => (
                <div key={idx} className="text-center p-8 bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600">
                  <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">{item.stat}</div>
                  <div className="text-slate-700 dark:text-slate-300 font-semibold">{item.label}</div>
                </div>
              ))}
            </div>

            {/* Process */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Our Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {processSteps.map((step, idx) => (
                  <div key={idx} className="relative">
                    <div className="bg-white dark:bg-slate-700 p-6 rounded-lg border border-slate-200 dark:border-slate-600">
                      <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-3">{step.number}</div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{step.title}</h4>
                      <p className="text-slate-700 dark:text-slate-300 text-sm">{step.description}</p>
                    </div>
                    {idx < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-teal-600 dark:text-teal-400">
                        <ChevronDown className="w-6 h-6 rotate-90" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="text-teal-600 dark:text-teal-400 font-semibold hover:text-teal-700 dark:hover:text-teal-300 flex items-center justify-center gap-2 mx-auto"
              >
                Ready to Collaborate? <span className="text-xl">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-in opacity-0 transition-opacity duration-700">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">What We Deliver</h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-12 max-w-3xl">
              We offer end-to-end custom software development tailored to your exact needs. Every project is built for performance, security, scalability, and easy future upgrades.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const IconComponent = service.Icon;
                return (
                <div
                  key={service.id}
                  className="group bg-slate-50 dark:bg-slate-800 p-8 rounded-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-teal-300 dark:hover:border-teal-600 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 mb-6 flex items-center justify-center bg-teal-100 dark:bg-teal-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-10 h-10 text-teal-600 dark:text-teal-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs font-semibold rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-teal-600 dark:text-teal-400 font-semibold hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
                  >
                    Get Quote →
                  </button>
                </div>
              )})}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-in opacity-0 transition-opacity duration-700">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Selected Projects</h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 max-w-3xl">
              Real results from real clients. We focus on measurable impact: faster operations, higher user engagement, and strong ROI.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3 mb-12">
              {['all', 'web', 'mobile', 'ai', 'backend'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setFilterActive(filter)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all ${
                    filterActive === filter
                      ? 'bg-teal-600 text-white'
                      : 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-600 hover:border-teal-600 dark:hover:border-teal-400'
                  }`}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white dark:bg-slate-700 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-600 hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-48 bg-gradient-to-br from-slate-900 to-teal-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-5xl font-bold mb-2">{project.id}</div>
                      <div className="text-sm opacity-80">{project.category.toUpperCase()}</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{project.client}</p>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">{project.description}</p>
                    <div className="mb-4 p-3 bg-teal-50 dark:bg-teal-900/20 rounded border border-teal-200 dark:border-teal-700">
                      <p className="text-sm font-semibold text-teal-700 dark:text-teal-300">
                        ✓ {project.outcome}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-300 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button className="text-teal-600 dark:text-teal-400 font-semibold hover:text-teal-700 dark:hover:text-teal-300 transition-colors">
                      View Case Study →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-in opacity-0 transition-opacity duration-700">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Let's Create Something Exceptional</h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-12">
              Whether you have a clear vision or just an idea, our team is here to guide you from concept to launch. Drop us a message — we'll reply within 24 hours.
            </p>

            {/* Contact Form */}
            <form onSubmit={handleFormSubmit} className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg border border-slate-200 dark:border-slate-700 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">Business Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="your@business.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">Phone (Optional)</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="+256 xxx xxx xxx"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">Project Type *</label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="">Select a type</option>
                    <option value="web">Web App</option>
                    <option value="mobile">Mobile App</option>
                    <option value="ai">AI Feature</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">Project Brief *</label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full px-8 py-4 bg-gradient-to-r from-slate-900 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>

              {formStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-lg text-green-700 dark:text-green-300 text-center font-semibold">
                  ✓ Message sent successfully! We'll be in touch within 24 hours.
                </div>
              )}
            </form>

            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Email</h3>
                <a href="mailto:danilyds.tech@gmail.com" className="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300">
                  danilyds.tech@gmail.com
                </a>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Phone</h3>
                <a href="tel:+256700123456" className="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300">
                  +256 740 265 703
                </a>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Location</h3>
                <p className="text-slate-700 dark:text-slate-300">Kampala, Uganda</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4">DaniLyds Technologies</h3>
              <p className="text-slate-400">Building intelligent software for tomorrow.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-teal-400 transition-colors">About</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-teal-400 transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('work')} className="hover:text-teal-400 transition-colors">Portfolio</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">LinkedIn</a>
                <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">GitHub</a>
                <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">WhatsApp</a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>© 2026 DaniLyds Technologies | Kampala, Uganda | Building Intelligent Software for Tomorrow</p>
          </div>
        </div>
      </footer>

      {/* Fade-in Animation Styles */}
      <style>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }
        .fade-in-visible {
          opacity: 1;
          transform: translateY(0);
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
