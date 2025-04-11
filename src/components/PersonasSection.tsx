
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Store, Truck, DollarSign } from 'lucide-react';

const personas = [
  {
    icon: <BarChart3 className="text-retail-purple" size={24} />,
    title: "Retail Operations Director",
    name: "Sarah Johnson",
    pain: "Inconsistent inventory levels, difficulty in coordinating between stores, high inventory costs.",
    goal: "Standardize inventory processes, reduce holding costs, improve coordination.",
    link: "/solutions/retail-director",
    color: "from-retail-purple to-retail-blue"
  },
  {
    icon: <Store className="text-retail-light-blue" size={24} />,
    title: "Store Manager",
    name: "Marcus Chen",
    pain: "Frequent stockouts, manual inventory counts, lost sales.",
    goal: "Maintain optimal stock levels, reduce time spent on inventory management.",
    link: "/solutions/store-manager",
    color: "from-retail-light-blue to-retail-teal"
  },
  {
    icon: <Truck className="text-retail-teal" size={24} />,
    title: "Supply Chain Manager",
    name: "David Rodriguez",
    pain: "Poor visibility into store needs, late or rush orders, inefficient logistics.",
    goal: "Streamline supplier coordination, optimize delivery schedules.",
    link: "/solutions/supply-chain",
    color: "from-retail-teal to-green-500"
  },
  {
    icon: <DollarSign className="text-retail-light-purple" size={24} />,
    title: "Financial Officer",
    name: "Priya Patel",
    pain: "High inventory carrying costs, capital tied up in slow-moving stock.",
    goal: "Reduce inventory costs, improve cash flow, increase inventory turnover.",
    link: "/solutions/financial",
    color: "from-retail-light-purple to-retail-purple"
  }
];

const PersonasSection = () => {
  return (
    <section className="section-padding bg-background transition-colors duration-300">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Tailored Solutions for Every Role</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            RetailSync addresses the specific challenges faced by key stakeholders across your retail organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {personas.map((persona, index) => (
            <div key={index} className="bg-card dark:bg-card rounded-xl overflow-hidden card-hover transition-colors">
              <div className={`h-2 bg-gradient-to-r ${persona.color}`}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-muted dark:bg-muted rounded-lg p-2 mr-3 transition-colors">
                    {persona.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">{persona.title}</h3>
                    <p className="text-sm text-muted-foreground">{persona.name}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-foreground mb-1">Pain Points:</h4>
                  <p className="text-muted-foreground">{persona.pain}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-foreground mb-1">Goals:</h4>
                  <p className="text-muted-foreground">{persona.goal}</p>
                </div>
                
                <Link
                  to={persona.link}
                  className="inline-flex items-center text-retail-purple hover:text-retail-blue font-medium text-sm"
                >
                  <span>See how RetailSync helps</span>
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonasSection;
