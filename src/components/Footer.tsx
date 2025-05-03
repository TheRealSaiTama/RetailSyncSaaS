import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Twitter, 
  Linkedin, 
  Facebook, 
  Mail, 
  ArrowRight, 
  GithubIcon, 
  Globe, 
  MessageSquare 
} from 'lucide-react';
import { useChat } from '../context/ChatContext';

const Footer = () => {
  const { toggleChat } = useChat();

  return (
    <footer className="bg-background dark:bg-background border-t border-border dark:border-border transition-colors duration-300">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center mb-6 group">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-retail-purple to-retail-light-blue flex items-center justify-center text-white font-bold text-lg mr-2 transition-all group-hover:shadow-lg group-hover:shadow-white/30">
                RS
              </div>
              <span className="text-lg font-heading font-bold text-foreground group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-retail-teal group-hover:to-retail-light-blue transition-all">RetailSync</span>
            </Link>
            <p className="text-sm text-foreground mb-6">
              Revolutionary multi-agent AI technology for retail inventory optimization.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/CodesPasta" className="text-foreground hover:text-retail-teal transition-colors p-2 rounded-full hover:bg-muted" target="_blank" rel="noopener noreferrer">
                <Twitter size={18} />
              </a>
              <a href="https://www.linkedin.com/in/therealsaitama" className="text-foreground hover:text-retail-teal transition-colors p-2 rounded-full hover:bg-muted" target="_blank" rel="noopener noreferrer">
                <Linkedin size={18} />
              </a>
              <a href="https://www.instagram.com/stillhatetrigo/" className="text-foreground hover:text-retail-teal transition-colors p-2 rounded-full hover:bg-muted" target="_blank" rel="noopener noreferrer">
                <Facebook size={18} />
              </a>
              <a href="https://www.github.com/therealsaitama" className="text-foreground hover:text-retail-teal transition-colors p-2 rounded-full hover:bg-muted" target="_blank" rel="noopener noreferrer">
                <GithubIcon size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg mb-6 text-foreground font-bold">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/solutions/retail-director" className="text-sm text-foreground flex items-center group hover:translate-x-1 transition-all">
                  <span className="w-0 overflow-hidden group-hover:w-1.5 group-hover:mr-1 transition-all opacity-0 group-hover:opacity-100 bg-retail-teal h-1.5 rounded-full"></span>
                  For Retail Operations Directors
                </Link>
              </li>
              <li>
                <Link to="/solutions/store-manager" className="text-sm text-foreground flex items-center group hover:translate-x-1 transition-all">
                  <span className="w-0 overflow-hidden group-hover:w-1.5 group-hover:mr-1 transition-all opacity-0 group-hover:opacity-100 bg-retail-teal h-1.5 rounded-full"></span>
                  For Store Managers
                </Link>
              </li>
              <li>
                <Link to="/solutions/supply-chain" className="text-sm text-foreground flex items-center group hover:translate-x-1 transition-all">
                  <span className="w-0 overflow-hidden group-hover:w-1.5 group-hover:mr-1 transition-all opacity-0 group-hover:opacity-100 bg-retail-teal h-1.5 rounded-full"></span>
                  For Supply Chain Managers
                </Link>
              </li>
              <li>
                <Link to="/solutions/financial" className="text-sm text-foreground flex items-center group hover:translate-x-1 transition-all">
                  <span className="w-0 overflow-hidden group-hover:w-1.5 group-hover:mr-1 transition-all opacity-0 group-hover:opacity-100 bg-retail-teal h-1.5 rounded-full"></span>
                  For Financial Officers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg mb-6 text-foreground font-bold">Features</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/features/multi-agent" className="text-sm text-foreground flex items-center group hover:translate-x-1 transition-all">
                  <span className="w-0 overflow-hidden group-hover:w-1.5 group-hover:mr-1 transition-all opacity-0 group-hover:opacity-100 bg-retail-teal h-1.5 rounded-full"></span>
                  Multi-Agent Architecture
                </Link>
              </li>
              <li>
                <Link to="/features/demand-forecasting" className="text-sm text-foreground flex items-center group hover:translate-x-1 transition-all">
                  <span className="w-0 overflow-hidden group-hover:w-1.5 group-hover:mr-1 transition-all opacity-0 group-hover:opacity-100 bg-retail-teal h-1.5 rounded-full"></span>
                  Advanced Demand Forecasting
                </Link>
              </li>
              <li>
                <Link to="/features/inventory" className="text-sm text-foreground flex items-center group hover:translate-x-1 transition-all">
                  <span className="w-0 overflow-hidden group-hover:w-1.5 group-hover:mr-1 transition-all opacity-0 group-hover:opacity-100 bg-retail-teal h-1.5 rounded-full"></span>
                  Inventory Optimization
                </Link>
              </li>
              <li>
                <Link to="/features/pricing" className="text-sm text-foreground flex items-center group hover:translate-x-1 transition-all">
                  <span className="w-0 overflow-hidden group-hover:w-1.5 group-hover:mr-1 transition-all opacity-0 group-hover:opacity-100 bg-retail-teal h-1.5 rounded-full"></span>
                  Dynamic Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg mb-6 text-foreground font-bold">Get in Touch</h3>
            <div className="flex items-center mb-4 group hover:translate-x-1 transition-all">
              <Mail size={16} className="mr-2 text-retail-teal" />
              <a href="mailto:keshavjhagithub@gmail.com" className="text-sm text-foreground">
                keshavjhagithub@gmail.com
              </a>
            </div>
            <div className="flex items-center mb-4 group hover:translate-x-1 transition-all">
              <Globe size={16} className="mr-2 text-retail-teal" />
              <a href="https://www.retailsync.vercel.com" className="text-sm text-foreground">
                www.retailsync.vercel.com
              </a>
            </div>
            <div className="flex items-center mb-6 group hover:translate-x-1 transition-all">
              <MessageSquare size={16} className="mr-2 text-retail-teal" />
              <button 
                onClick={toggleChat} 
                className="text-sm text-foreground text-left hover:text-retail-teal transition-colors"
              >
                Live Chat Support
              </button>
            </div>
            
            <div className="bg-muted/60 dark:bg-muted/80 rounded-lg p-4 mb-6 hover:bg-muted transition-all border border-border dark:border-border shadow-lg">
              <h4 className="text-sm font-medium mb-2 text-foreground">Subscribe to our newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-background text-foreground placeholder-foreground rounded-l-lg px-3 py-2 text-sm flex-grow focus:outline-none focus:ring-1 focus:ring-retail-teal border-0"
                />
                <button className="bg-primary hover:opacity-90 text-primary-foreground rounded-r-lg px-3 py-2 transition-all">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} RetailSync. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-xs text-foreground hover:text-retail-teal transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-foreground hover:text-retail-teal transition-colors">Terms of Service</Link>
            <Link to="/contact" className="text-xs text-foreground hover:text-retail-teal transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
