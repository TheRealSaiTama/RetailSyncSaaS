
import React from 'react';
import { LineChart, ShieldCheck, BarChart3, PackageSearch, DollarSign, Zap } from 'lucide-react';

const features = [
  {
    icon: <LineChart size={24} className="text-retail-light-blue" />,
    title: "Advanced Demand Forecasting",
    description: "ML-powered prediction using historical sales, seasonal patterns, weather forecasts, and market trends.",
    color: "bg-retail-light-blue/10",
    border: "border-retail-light-blue/20"
  },
  {
    icon: <PackageSearch size={24} className="text-retail-purple" />,
    title: "Intelligent Inventory Optimization",
    description: "Dynamic reorder points, store-specific recommendations, and automated replenishment workflows.",
    color: "bg-retail-purple/10",
    border: "border-retail-purple/20"
  },
  {
    icon: <DollarSign size={24} className="text-retail-teal" />,
    title: "Dynamic Pricing Engine",
    description: "Real-time price adjustments based on inventory levels, demand patterns, and competitive pricing.",
    color: "bg-retail-teal/10",
    border: "border-retail-teal/20"
  },
  {
    icon: <BarChart3 size={24} className="text-retail-light-purple" />,
    title: "Comprehensive Analytics",
    description: "Product performance analysis, category management insights, and seasonal trend analysis.",
    color: "bg-retail-light-purple/10",
    border: "border-retail-light-purple/20"
  },
  {
    icon: <Zap size={24} className="text-retail-blue" />,
    title: "Anomaly Detection",
    description: "Identification of unusual sales patterns, theft detection, and early warning of potential stockouts.",
    color: "bg-retail-blue/10",
    border: "border-retail-blue/20"
  },
  {
    icon: <ShieldCheck size={24} className="text-green-500" />,
    title: "Supply Chain Coordination",
    description: "Automated purchase orders, delivery schedule optimization, and supplier performance tracking.",
    color: "bg-green-500/10",
    border: "border-green-500/20"
  }
];

const FeaturesSection = () => {
  return (
    <section className="section-padding bg-background transition-colors duration-300">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Powerful Features</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            RetailSync combines advanced AI with practical tools to transform your inventory management processes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`border border-border dark:border-border rounded-xl p-6 card-hover bg-card dark:bg-card transition-colors ${feature.border}`}
            >
              <div className={`${feature.color} rounded-lg inline-flex p-3 mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-retail-purple/10 to-retail-blue/10 dark:from-retail-purple/20 dark:to-retail-blue/20 rounded-2xl p-8 md:p-12 transition-colors">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Drive Measurable Business Results</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-retail-teal rounded-full p-1 text-white mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <strong className="block text-lg text-foreground">20-30% reduction</strong>
                    <span className="text-muted-foreground">in inventory holding costs</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-retail-teal rounded-full p-1 text-white mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <strong className="block text-lg text-foreground">15-25% improvement</strong>
                    <span className="text-muted-foreground">in inventory turnover</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-retail-teal rounded-full p-1 text-white mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <strong className="block text-lg text-foreground">40-60% reduction</strong>
                    <span className="text-muted-foreground">in stockout incidents</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-retail-teal rounded-full p-1 text-white mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <strong className="block text-lg text-foreground">5-10% increase</strong>
                    <span className="text-muted-foreground">in gross margin</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="bg-card dark:bg-card rounded-xl shadow-lg p-6 transition-colors">
                <h4 className="text-lg font-bold mb-4 flex items-center text-foreground">
                  <BarChart3 size={20} className="text-retail-purple mr-2" />
                  ROI Calculator
                </h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-muted-foreground mb-1">Annual Inventory Value</label>
                    <div className="bg-muted dark:bg-muted rounded-lg p-2 text-lg font-medium text-foreground transition-colors">$5,000,000</div>
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-1">Current Stockout Rate</label>
                    <div className="bg-muted dark:bg-muted rounded-lg p-2 text-lg font-medium text-foreground transition-colors">4.2%</div>
                  </div>
                  <div className="pt-4 border-t border-border dark:border-border">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-foreground">Projected Annual Savings</span>
                      <span className="text-2xl font-bold text-accent">$1,250,000</span>
                    </div>
                    <div className="text-sm text-muted-foreground">Based on industry averages for businesses your size</div>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 -bottom-6 -right-6">
                <div className="w-20 h-20 bg-retail-purple rounded-lg opacity-10"></div>
              </div>
              <div className="absolute -z-10 -top-6 -left-6">
                <div className="w-12 h-12 bg-retail-teal rounded-lg opacity-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
