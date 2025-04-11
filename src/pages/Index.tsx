
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import MultiAgentSection from '../components/MultiAgentSection';
import FeaturesSection from '../components/FeaturesSection';
import PersonasSection from '../components/PersonasSection';
import PricingSection from '../components/PricingSection';
import TestimonialSection from '../components/TestimonialSection';
import CTASection from '../components/CTASection';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background transition-colors duration-300">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        {/* Quick Links */}
        <section className="py-8 backdrop-blur-sm bg-muted/60 dark:bg-muted/80 border-y border-border transition-colors">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <Link to="/features" className="flex items-center text-primary font-medium hover:underline group transition-all hover:scale-105">
                Explore Features <ArrowRight size={16} className="ml-1 group-hover:ml-2 transition-all" />
              </Link>
              <Link to="/solutions" className="flex items-center text-secondary font-medium hover:underline group transition-all hover:scale-105">
                Industry Solutions <ArrowRight size={16} className="ml-1 group-hover:ml-2 transition-all" />
              </Link>
              <Link to="/pricing" className="flex items-center text-accent font-medium hover:underline group transition-all hover:scale-105">
                View Pricing <ArrowRight size={16} className="ml-1 group-hover:ml-2 transition-all" />
              </Link>
              <Link to="/demo" className="flex items-center text-foreground font-medium hover:underline group transition-all hover:scale-105">
                Request Demo <ArrowRight size={16} className="ml-1 group-hover:ml-2 transition-all" />
              </Link>
            </div>
          </div>
        </section>
        
        <MultiAgentSection />
        <FeaturesSection />
        <PersonasSection />
        <TestimonialSection />
        <PricingSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
