import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { 
  Award, 
  BarChart3, 
  Briefcase, 
  Globe, 
  Heart, 
  Lightbulb, 
  Target, 
  Users, 
  Zap,
  ChevronRight
} from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      title: "CEO & Co-Founder",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      bio: "Former retail operations executive with 15+ years of experience at Fortune 500 retailers. Sarah brings deep industry knowledge and a passion for innovation."
    },
    {
      name: "Michael Chen",
      title: "CTO & Co-Founder",
      image: "https://randomuser.me/api/portraits/men/42.jpg",
      bio: "AI researcher with a PhD from MIT and 10+ years in machine learning. Previously led AI teams at top tech companies focusing on predictive analytics."
    },
    {
      name: "Priya Patel",
      title: "Chief Product Officer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "Product leader with expertise in retail technology. Former VP of Product at a leading inventory management platform serving global retailers."
    },
    {
      name: "David Rodriguez",
      title: "Chief Data Scientist",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      bio: "Expert in predictive modeling with previous experience optimizing supply chains for multinational retail corporations."
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We constantly push boundaries to create cutting-edge solutions.",
      icon: Lightbulb
    },
    {
      title: "Excellence",
      description: "We hold ourselves to the highest standards in everything we do.",
      icon: Award
    },
    {
      title: "Customer Focus",
      description: "Our customers' success is our primary measure of achievement.",
      icon: Target
    },
    {
      title: "Collaboration",
      description: "We believe in the power of diverse teams working together.",
      icon: Users
    },
    {
      title: "Integrity",
      description: "We act with honesty, transparency, and accountability.",
      icon: Heart
    },
    {
      title: "Impact",
      description: "We measure success by the tangible value we create.",
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background transition-colors duration-300">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-r from-retail-blue to-retail-purple dark:from-retail-blue/80 dark:to-retail-purple/80 relative overflow-hidden transition-colors">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1496307653780-42ee777d4833')] bg-center bg-cover opacity-10"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white dark:text-foreground mb-6">
                Transforming Retail Through Intelligence
              </h1>
              <p className="text-xl text-white/90 dark:text-muted-foreground mb-8">
                RetailSync is revolutionizing how retailers manage inventory with multi-agent AI technology that creates a collaborative ecosystem between every part of the retail supply chain.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="#mission" className="bg-white dark:bg-card text-retail-purple hover:bg-opacity-90 dark:hover:bg-opacity-80 px-6 py-3 rounded-lg font-medium transition-all">
                  Our Mission
                </Link>
                <Link to="#team" className="bg-white/20 dark:bg-white/10 text-white dark:text-foreground hover:bg-white/30 dark:hover:bg-white/20 px-6 py-3 rounded-lg font-medium transition-all">
                  Meet Our Team
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="py-20 bg-card dark:bg-card transition-colors">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block bg-retail-purple/10 px-4 py-2 rounded-full text-retail-purple font-medium text-sm mb-4">
                  Our Mission
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  We're on a mission to eliminate inventory inefficiencies in retail
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  At RetailSync, we believe that retailers shouldn't have to choose between stockouts and overstock. Our mission is to create a world where retail inventory is perfectly optimized—the right products in the right places at the right time.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  By harnessing the power of multi-agent AI systems, we're creating a future where inventory management is proactive, not reactive, and where retailers of all sizes can thrive in an increasingly competitive landscape.
                </p>
                <div className="flex items-center space-x-6 mt-8">
                  <div>
                    <div className="text-4xl font-bold text-retail-purple">200+</div>
                    <div className="text-muted-foreground">Retail Clients</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-retail-blue">15M+</div>
                    <div className="text-muted-foreground">SKUs Managed</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-retail-teal">$2B+</div>
                    <div className="text-muted-foreground">Inventory Optimized</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-retail-purple/5 rounded-full blur-[80px] -z-10"></div>
                <div className="bg-card dark:bg-card rounded-xl shadow-xl overflow-hidden transition-colors">
                  <img 
                    src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                    alt="Data Visualization" 
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-3">Our Approach</h3>
                    <p className="text-muted-foreground mb-4">
                      We've built a revolutionary platform where AI agents representing each component of the retail ecosystem—stores, warehouses, suppliers, and customers—communicate and collaborate to solve complex inventory challenges.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-retail-purple/10 flex items-center justify-center mr-3 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-retail-purple"></div>
                        </div>
                        <span>AI agents that understand retail</span>
                      </div>
                      <div className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-retail-purple/10 flex items-center justify-center mr-3 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-retail-purple"></div>
                        </div>
                        <span>Real-time collaboration</span>
                      </div>
                      <div className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-retail-purple/10 flex items-center justify-center mr-3 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-retail-purple"></div>
                        </div>
                        <span>Decision-making with explanations</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted dark:bg-muted transition-colors">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="inline-block bg-retail-blue/10 dark:bg-retail-blue/20 px-4 py-2 rounded-full text-retail-blue font-medium text-sm mb-4">
                Our Values
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The Principles That Guide Us
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our values shape everything we do—from how we build our product to how we interact with our customers and each other.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value) => (
                <div key={value.title} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
                  <div className="h-14 w-14 rounded-lg bg-gradient-to-br from-retail-purple to-retail-blue flex items-center justify-center text-white mb-6">
                    <value.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 bg-card dark:bg-card transition-colors">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="inline-block bg-retail-teal/10 px-4 py-2 rounded-full text-retail-teal font-medium text-sm mb-4">
                Our Team
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet the Minds Behind RetailSync
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our team combines expertise in retail operations, artificial intelligence, and supply chain optimization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.map((member) => (
                <div key={member.name} className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full md:w-40 h-60 md:h-auto object-cover"
                  />
                  <div className="p-6 flex-1">
                    <h3 className="text-xl font-bold mb-1 text-foreground">{member.name}</h3>
                    <div className="text-retail-purple font-medium mb-4">{member.title}</div>
                    <p className="text-muted-foreground mb-4">
                      {member.bio}
                    </p>
                    <a href="#" className="text-retail-blue hover:underline flex items-center text-sm">
                      LinkedIn Profile <ChevronRight size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link to="/careers" className="btn-primary inline-flex items-center">
                <Briefcase size={18} className="mr-2" />
                Join Our Team
              </Link>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20 bg-muted dark:bg-muted transition-colors">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="inline-block bg-retail-light-blue/10 dark:bg-retail-light-blue/20 px-4 py-2 rounded-full text-retail-light-blue font-medium text-sm mb-4">
                Our Partners
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                We Work With Industry Leaders
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our extensive partnerships enable seamless integration with your existing retail ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md flex items-center justify-center h-24">
                  <div className="text-xl font-bold text-muted-foreground flex items-center">
                    <Globe className="mr-2" /> Partner {index + 1}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link to="/partners" className="text-retail-light-blue hover:underline flex items-center justify-center font-medium">
                View all partners <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-retail-blue to-retail-purple dark:from-retail-blue/80 dark:to-retail-purple/80 text-white dark:text-foreground transition-colors">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-6">Join the Retail Revolution</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto text-white/90 dark:text-muted-foreground">
              Schedule a demo to see how RetailSync can transform your retail operations with AI
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/demo" className="bg-white dark:bg-card text-retail-purple hover:bg-opacity-90 dark:hover:bg-opacity-80 px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300">
                Request a Demo
              </Link>
              <Link to="/contact" className="bg-white/20 dark:bg-white/10 text-white dark:text-foreground hover:bg-white/30 dark:hover:bg-white/20 px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
