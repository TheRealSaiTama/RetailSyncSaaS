import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  ChevronRight,
  Linkedin,
  Building,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      title: "CEO & Co-Founder",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      bio: "Former retail operations executive with 15+ years of experience at Fortune 500 retailers. Sarah brings deep industry knowledge and a passion for innovation.",
      linkedin: "#"
    },
    {
      name: "Michael Chen",
      title: "CTO & Co-Founder",
      image: "https://randomuser.me/api/portraits/men/42.jpg",
      bio: "AI researcher with a PhD from MIT and 10+ years in machine learning. Previously led AI teams at top tech companies focusing on predictive analytics.",
      linkedin: "#"
    },
    {
      name: "Priya Patel",
      title: "Chief Product Officer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "Product leader with expertise in retail technology. Former VP of Product at a leading inventory management platform serving global retailers.",
      linkedin: "#"
    },
    {
      name: "David Rodriguez",
      title: "Chief Data Scientist",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      bio: "Expert in predictive modeling with previous experience optimizing supply chains for multinational retail corporations.",
      linkedin: "#"
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We constantly push boundaries to create cutting-edge solutions.",
      icon: Lightbulb,
      color: "text-retail-purple",
      bgColor: "bg-retail-purple/10"
    },
    {
      title: "Excellence",
      description: "We hold ourselves to the highest standards in everything we do.",
      icon: Award,
      color: "text-retail-blue",
      bgColor: "bg-retail-blue/10"
    },
    {
      title: "Customer Focus",
      description: "Our customers' success is our primary measure of achievement.",
      icon: Target,
      color: "text-retail-teal",
      bgColor: "bg-retail-teal/10"
    },
    {
      title: "Collaboration",
      description: "We believe in the power of diverse teams working together.",
      icon: Users,
      color: "text-retail-light-blue",
      bgColor: "bg-retail-light-blue/10"
    },
    {
      title: "Integrity",
      description: "We act with honesty, transparency, and accountability.",
      icon: Heart,
      color: "text-retail-light-purple",
      bgColor: "bg-retail-light-purple/10"
    },
    {
      title: "Impact",
      description: "We measure success by the tangible value we create.",
      icon: Zap,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10"
    }
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardHover = {
    hover: { scale: 1.03, transition: { duration: 0.3 } }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background transition-colors duration-300">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-28 md:py-36 bg-gradient-to-br from-retail-blue via-retail-purple to-retail-light-purple dark:from-retail-blue/90 dark:via-retail-purple/90 dark:to-retail-light-purple/90 relative overflow-hidden transition-colors">
          {/* Subtle animated background shapes */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/5 rounded-full filter blur-3xl opacity-50 animate-blob"
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1, delay: 0.2 }}
          ></motion.div>
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-white/5 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000"
             initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1, delay: 0.4 }}
          ></motion.div>
           <motion.div
            className="absolute bottom-10 left-10 w-48 h-48 bg-white/5 rounded-full filter blur-2xl opacity-40 animate-blob animation-delay-4000"
             initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1, delay: 0.6 }}
          ></motion.div>

          <div className="container-custom relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="max-w-3xl text-center mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
                Transforming Retail Through Intelligence
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10 font-medium">
                RetailSync is revolutionizing how retailers manage inventory with multi-agent AI technology, creating a collaborative ecosystem across the entire supply chain.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="#mission" className="btn-white">
                    Our Mission
                  </Link>
                </motion.div>
                 <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="#team" className="btn-secondary-outline-white">
                    Meet Our Team
                  </Link>
                 </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="py-20 lg:py-28 bg-background dark:bg-background transition-colors">
          <div className="container-custom">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={fadeIn}>
                <div className="inline-block bg-retail-purple/10 px-4 py-2 rounded-full text-retail-purple font-semibold text-sm mb-5">
                  Our Mission & Vision
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Eliminating Inventory Inefficiencies in Retail
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  At RetailSync, we believe retailers shouldn't choose between stockouts and overstock. Our mission is to create a world where inventory is perfectly optimized—the right products, right places, right time.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  By harnessing multi-agent AI, we're building a future where inventory management is proactive, intelligent, and empowers retailers of all sizes to thrive.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                   <motion.div variants={fadeIn} className="bg-muted dark:bg-muted/50 p-4 rounded-lg">
                     <div className="text-4xl font-bold text-retail-purple mb-1">200+</div>
                     <div className="text-sm text-muted-foreground font-medium">Retail Clients</div>
                   </motion.div>
                   <motion.div variants={fadeIn} className="bg-muted dark:bg-muted/50 p-4 rounded-lg">
                     <div className="text-4xl font-bold text-retail-blue mb-1">15M+</div>
                     <div className="text-sm text-muted-foreground font-medium">SKUs Managed</div>
                   </motion.div>
                   <motion.div variants={fadeIn} className="bg-muted dark:bg-muted/50 p-4 rounded-lg">
                     <div className="text-4xl font-bold text-retail-teal mb-1">$2B+</div>
                     <div className="text-sm text-muted-foreground font-medium">Inventory Optimized</div>
                   </motion.div>
                 </div>
              </motion.div>
              <motion.div variants={fadeIn} className="relative">
                <Card className="overflow-hidden shadow-xl border border-border dark:border-border transition-colors">
                  <CardContent className="p-0">
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt="AI Data Visualization"
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-4 text-foreground">Our Approach: Collaborative AI</h3>
                      <p className="text-muted-foreground mb-5">
                        Our platform features AI agents representing stores, warehouses, suppliers, and customers. They communicate and collaborate in real-time to solve complex inventory challenges autonomously.
                      </p>
                      <div className="space-y-3">
                        {[
                          "Retail-Specific AI Agents",
                          "Real-time Collaboration Network",
                          "Explainable Decision-Making"
                        ].map((item, idx) => (
                          <motion.div
                            key={idx}
                            variants={fadeIn}
                            className="flex items-center"
                          >
                            <div className="h-5 w-5 rounded-full bg-retail-purple/10 flex items-center justify-center mr-3 flex-shrink-0">
                              <div className="h-2 w-2 rounded-full bg-retail-purple"></div>
                            </div>
                            <span className="text-foreground font-medium">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 lg:py-28 bg-muted dark:bg-muted transition-colors">
          <div className="container-custom">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <div className="inline-block bg-retail-blue/10 dark:bg-retail-blue/20 px-4 py-2 rounded-full text-retail-blue font-semibold text-sm mb-5">
                Our Core Values
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                The Principles That Guide Us
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our values shape everything we do—from product development to customer interactions and team collaboration.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {values.map((value) => (
                <motion.div key={value.title} variants={fadeIn} whileHover="hover" className="h-full">
                  <Card className="bg-background dark:bg-card rounded-xl shadow-lg p-6 h-full border border-border dark:border-border hover:border-retail-purple/50 dark:hover:border-retail-purple/50 transition-all duration-300 transform hover:-translate-y-1">
                    <CardHeader className="p-0 mb-5 flex-row items-center space-x-4">
                      <div className={`h-14 w-14 rounded-lg ${value.bgColor} flex items-center justify-center flex-shrink-0`}>
                        <value.icon size={28} className={value.color} />
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 lg:py-28 bg-background dark:bg-background transition-colors">
          <div className="container-custom">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <div className="inline-block bg-retail-teal/10 px-4 py-2 rounded-full text-retail-teal font-semibold text-sm mb-5">
                Our Leadership
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Meet the Minds Behind RetailSync
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our diverse team combines deep expertise in retail operations, artificial intelligence, and supply chain optimization.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-10"
            >
              {teamMembers.map((member) => (
                <motion.div
                  key={member.name}
                  variants={fadeIn}
                  whileHover="hover"
                  className="bg-card dark:bg-card rounded-xl shadow-lg overflow-hidden border border-border dark:border-border hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start"
                >
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full sm:w-48 h-48 object-cover flex-shrink-0"
                    variants={cardHover}
                  />
                  <div className="p-6 flex-1 text-center sm:text-left">
                    <h3 className="text-xl font-bold mb-1 text-foreground">{member.name}</h3>
                    <div className="text-retail-purple font-semibold mb-3">{member.title}</div>
                    <p className="text-muted-foreground text-sm mb-4">
                      {member.bio}
                    </p>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-retail-blue hover:text-retail-purple transition-colors inline-flex items-center text-sm font-medium group"
                    >
                      <Linkedin size={16} className="mr-2 group-hover:text-retail-purple transition-colors" />
                      LinkedIn Profile
                      <ChevronRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="mt-16 text-center"
            >
              <Link to="/careers" className="btn-primary inline-flex items-center group">
                <Briefcase size={18} className="mr-2 group-hover:animate-pulse" />
                Join Our Growing Team
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Partners Section - Animated Logo Slider */}
        <section className="py-20 lg:py-28 bg-muted dark:bg-muted transition-colors">
          <div className="container-custom">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <div className="inline-block bg-retail-light-blue/10 dark:bg-retail-light-blue/20 px-4 py-2 rounded-full text-retail-light-blue font-semibold text-sm mb-5">
                Ecosystem & Partners
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Integrating with Your Tech Stack
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                RetailSync seamlessly integrates with leading ERP, POS, and e-commerce platforms through robust APIs and strategic partnerships.
              </p>
            </motion.div>

            {/* Animated Partner Logo Slider */}
            <div className="relative w-full overflow-x-hidden py-4">
              <motion.div
                className="flex gap-12 min-w-max"
                initial={{ x: 0 }}
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 18,
                  ease: "linear"
                }}
                style={{ width: "max-content" }}
              >
                {[
                  { name: "Amazon", src: "/partners/amazon.png" },
                  { name: "Flipkart", src: "/partners/flipkart.png" },
                  { name: "Walmart", src: "/partners/walmart.png" },
                  { name: "Dmart", src: "/partners/dmart.png" },
                  { name: "Meesho", src: "/partners/meesho.png" },
                  // Repeat for seamless loop
                  { name: "Amazon", src: "/partners/amazon.png" },
                  { name: "Flipkart", src: "/partners/flipkart.png" },
                  { name: "Walmart", src: "/partners/walmart.png" },
                  { name: "Dmart", src: "/partners/dmart.png" },
                  { name: "Meesho", src: "/partners/meesho.png" },
                ].map((partner, idx) => (
                  <motion.div
                    key={partner.name + idx}
                    whileHover={{ scale: 1.08, filter: "grayscale(0)", boxShadow: "0 8px 32px rgba(80,80,180,0.18)" }}
                    className="flex flex-col items-center justify-center px-6"
                    style={{ minWidth: 160 }}
                  >
                    <div className="bg-white dark:bg-card rounded-2xl shadow-lg p-4 flex items-center justify-center transition-all duration-300"
                      style={{
                        filter: "grayscale(1)",
                        transition: "filter 0.3s"
                      }}
                    >
                      <img
                        src={partner.src}
                        alt={partner.name + " logo"}
                        className="h-16 w-auto object-contain"
                        style={{ maxWidth: 120 }}
                        loading="lazy"
                      />
                    </div>
                    <span className="mt-3 text-base font-semibold text-muted-foreground">{partner.name}</span>
                  </motion.div>
                ))}
              </motion.div>
              {/* Gradient fade on edges for effect */}
              <div className="pointer-events-none absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-muted via-muted/80 to-transparent z-10" />
              <div className="pointer-events-none absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-muted via-muted/80 to-transparent z-10" />
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="mt-12 text-center"
            >
              <Link to="/integrations" className="text-retail-light-blue hover:text-retail-purple transition-colors flex items-center justify-center font-medium group">
                Explore Integrations
                <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-24 bg-gradient-to-r from-retail-blue via-retail-purple to-retail-light-purple dark:from-retail-blue/90 dark:via-retail-purple/90 dark:to-retail-light-purple/90 text-white transition-colors">
          <div className="container-custom text-center">
             <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.3 }}
               variants={fadeIn}
             >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Retail Revolution</h2>
              <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto font-medium">
                Ready to see how RetailSync's multi-agent AI can transform your inventory management and boost your bottom line?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                 <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                   <Link to="/demo" className="btn-white">
                     Request a Personalized Demo
                   </Link>
                 </motion.div>
                 <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                   <Link to="/contact" className="btn-secondary-outline-white">
                     Contact Sales
                   </Link>
                 </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
