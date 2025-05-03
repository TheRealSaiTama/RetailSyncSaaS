import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart, Package, Truck, Users, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="pt-28 pb-20 md:pb-28 overflow-hidden bg-background transition-colors duration-300">
      <div className="container-custom relative">
        <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-retail-purple/10 dark:bg-retail-purple/20 rounded-full blur-[100px] -z-10 animate-pulse-light" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-retail-blue/10 dark:bg-retail-blue/20 rounded-full blur-[100px] -z-10 animate-pulse-light" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 text-center lg:text-left">
            <div className="inline-block bg-retail-purple/10 dark:bg-retail-purple/30 text-retail-purple rounded-full px-4 py-1 text-sm font-medium mb-6">
              Revolutionary Inventory Management
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Multi-Agent AI</span> for Retail Inventory Optimization
            </h1>
            <p className="text-lg md:text-xl text-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Revolutionize your retail inventory management with AI agents that collaborate to eliminate stockouts, reduce excess inventory, and maximize profitability.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/demo" className="btn-primary flex items-center">
                <span>Request a Demo</span>
                <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link to="/features/multi-agent" className="btn-secondary">
                How It Works
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-6 relative">
            <div className="bg-card dark:bg-card p-6 rounded-2xl shadow-lg relative z-10 max-w-lg mx-auto transition-colors">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="font-bold text-lg text-primary">RetailSync Dashboard</h2>
                  <p className="text-sm text-muted-foreground">Live Inventory Optimization</p>
                </div>
                <div className="text-accent font-bold">
                  +24% ROI
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-muted dark:bg-muted rounded-lg p-4 transition-colors">
                  <div className="text-sm text-muted-foreground mb-1">Stock Efficiency</div>
                  <div className="text-xl font-bold text-primary">94.3%</div>
                  <div className="text-xs text-accent">↑ 12.4%</div>
                </div>
                <div className="bg-muted dark:bg-muted rounded-lg p-4 transition-colors">
                  <div className="text-sm text-muted-foreground mb-1">Stockout Rate</div>
                  <div className="text-xl font-bold text-primary">0.8%</div>
                  <div className="text-xs text-accent">↓ 78.5%</div>
                </div>
              </div>
              
              <div className="relative h-40 bg-gradient-to-r from-retail-light-blue/20 to-retail-light-purple/20 dark:from-retail-light-blue/10 dark:to-retail-light-purple/10 rounded-lg mb-6 p-4 transition-colors">
                <div className="absolute bottom-0 left-0 right-0 h-[80%]">
                  <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="w-full h-full">
                    <path
                      fill="none"
                      stroke="#2d8cff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      d="M0,25 C15,10 30,20 45,15 S75,5 100,15"
                    />
                    <path
                      fill="none"
                      stroke="#9b87f5"
                      strokeWidth="2"
                      strokeLinecap="round" 
                      strokeDasharray="4 4"
                      d="M0,25 C25,25 25,10 50,10 S75,20 100,5"
                    />
                  </svg>
                </div>
                <div className="text-xs text-muted-foreground absolute top-2 left-3">Inventory Balance</div>
                <div className="text-xs text-right absolute bottom-2 right-3 text-primary font-medium">Real-time optimization</div>
              </div>
              
              <div className="flex justify-between">
                <div className="flex items-center text-sm text-primary">
                  <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
                  <span>Actual</span>
                </div>
                <div className="flex items-center text-sm text-secondary">
                  <div className="w-3 h-3 rounded-full bg-secondary mr-2"></div>
                  <span>Predicted</span>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[600px] max-h-[600px] -z-10">
              <div className="absolute w-12 h-12 bg-card dark:bg-card rounded-xl shadow-lg flex items-center justify-center top-[5%] left-[15%] animate-float transition-colors">
                <ShoppingCart className="text-primary" size={24} />
              </div>
              <div className="absolute w-12 h-12 bg-card dark:bg-card rounded-xl shadow-lg flex items-center justify-center top-[75%] left-[30%] animate-float transition-colors" style={{ animationDelay: "1s" }}>
                <Package className="text-primary" size={24} />
              </div>
              <div className="absolute w-12 h-12 bg-card dark:bg-card rounded-xl shadow-lg flex items-center justify-center top-[20%] right-[20%] animate-float transition-colors" style={{ animationDelay: "2s" }}>
                <Truck className="text-accent" size={24} />
              </div>
              <div className="absolute w-12 h-12 bg-card dark:bg-card rounded-xl shadow-lg flex items-center justify-center top-[60%] right-[10%] animate-float transition-colors" style={{ animationDelay: "1.5s" }}>
                <Users className="text-secondary" size={24} />
              </div>
              <div className="absolute w-12 h-12 bg-card dark:bg-card rounded-xl shadow-lg flex items-center justify-center top-[40%] left-[5%] animate-float transition-colors" style={{ animationDelay: "0.5s" }}>
                <Zap className="text-primary" size={24} />
              </div>
              
              <div className="absolute top-0 left-0 right-0 bottom-0 border-2 border-dashed border-retail-light-purple/20 rounded-full"></div>
              <div className="absolute top-[10%] left-[10%] right-[10%] bottom-[10%] border-2 border-dashed border-retail-blue/20 rounded-full"></div>
              <div className="absolute top-[20%] left-[20%] right-[20%] bottom-[20%] border-2 border-dashed border-retail-teal/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
