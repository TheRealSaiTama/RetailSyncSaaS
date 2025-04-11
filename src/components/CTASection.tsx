
import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Store, Truck, Users } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="section-padding bg-background transition-colors duration-300 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-retail-purple/5 rounded-full blur-[100px] -z-10" />
      
      <div className="container-custom">
        <div className="bg-gradient-to-r from-retail-purple to-retail-blue dark:from-retail-purple/80 dark:to-retail-blue/80 rounded-2xl overflow-hidden shadow-xl transition-colors">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Transform Your Inventory Management?</h2>
              <p className="text-lg opacity-90 mb-8 text-white/90">
                Join the retailers who have revolutionized their operations with RetailSync's multi-agent AI platform.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                <Link to="/demo" className="bg-white text-retail-purple hover:bg-opacity-90 transition-colors duration-300 font-medium rounded-lg px-6 py-3 text-center">
                  Schedule a Demo
                </Link>
                <Link to="/pricing" className="bg-white/20 hover:bg-white/30 dark:bg-white/10 dark:hover:bg-white/20 transition-colors duration-300 text-white font-medium rounded-lg px-6 py-3 text-center">
                  View Pricing
                </Link>
              </div>
              
              <div className="text-sm opacity-80 text-white/80">
                No credit card required. Get a personalized demo and consultation.
              </div>
            </div>
            
            <div className="bg-muted/60 dark:bg-muted/80 backdrop-blur-md relative p-8 hidden lg:block transition-colors">
              <div className="absolute inset-0 bg-gradient-to-r from-retail-purple/30 to-retail-blue/30 dark:from-retail-purple/40 dark:to-retail-blue/40"></div>
              
              <div className="relative grid grid-cols-2 gap-4 h-full">
                <div className="bg-card dark:bg-card rounded-xl shadow-lg p-4 flex items-center transition-colors">
                  <div className="bg-retail-light-blue/20 p-3 rounded-lg mr-3">
                    <Store className="text-retail-light-blue" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Stores</div>
                    <div className="text-xl font-bold text-foreground">54</div>
                  </div>
                </div>
                
                <div className="bg-card dark:bg-card rounded-xl shadow-lg p-4 flex items-center transition-colors">
                  <div className="bg-retail-purple/20 p-3 rounded-lg mr-3">
                    <Truck className="text-retail-purple" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Suppliers</div>
                    <div className="text-xl font-bold text-foreground">26</div>
                  </div>
                </div>
                
                <div className="bg-card dark:bg-card rounded-xl shadow-lg p-4 flex items-center transition-colors">
                  <div className="bg-retail-teal/20 p-3 rounded-lg mr-3">
                    <Users className="text-retail-teal" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Customers</div>
                    <div className="text-xl font-bold text-foreground">125K</div>
                  </div>
                </div>
                
                <div className="bg-card dark:bg-card rounded-xl shadow-lg p-4 flex items-center transition-colors">
                  <div className="bg-retail-light-purple/20 p-3 rounded-lg mr-3">
                    <BarChart3 className="text-retail-light-purple" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">SKUs</div>
                    <div className="text-xl font-bold text-foreground">9.6K</div>
                  </div>
                </div>
                
                <div className="col-span-2 bg-card dark:bg-card rounded-xl shadow-lg p-4 transition-colors">
                  <div className="flex justify-between items-center mb-3">
                    <div className="font-medium text-foreground">Optimization Progress</div>
                    <div className="text-retail-teal font-bold">78%</div>
                  </div>
                  <div className="w-full bg-muted dark:bg-muted rounded-full h-2.5 transition-colors">
                    <div className="bg-retail-teal h-2.5 rounded-full" style={{ width: "78%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
