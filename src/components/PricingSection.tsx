
import React from 'react';
import { Link } from 'react-router-dom';
import { Check, HelpCircle } from 'lucide-react';

const PricingSection = () => {
  const tiers = [
    {
      name: "Essential",
      description: "For small retailers with basic inventory needs",
      price: "$499",
      frequency: "/month",
      features: [
        "Up to 5 store locations",
        "Basic forecasting",
        "Standard reports",
        "Email support",
        "Real-time inventory tracking"
      ],
      cta: "Get Started",
      link: "/pricing/essential",
      popular: false
    },
    {
      name: "Professional",
      description: "For growing retailers with complex needs",
      price: "$1,499",
      frequency: "/month",
      features: [
        "Up to 25 store locations",
        "Advanced forecasting",
        "Custom reports",
        "Priority support",
        "API access",
        "Dynamic pricing engine",
        "Supplier coordination"
      ],
      cta: "Get Started",
      link: "/pricing/professional",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large retailers with sophisticated operations",
      price: "Custom",
      frequency: "",
      features: [
        "Unlimited store locations",
        "Full multi-agent optimization",
        "Custom integrations",
        "Dedicated account manager",
        "White-glove onboarding",
        "Advanced analytics package",
        "24/7 priority support"
      ],
      cta: "Contact Sales",
      link: "/pricing/enterprise",
      popular: false
    }
  ];

  return (
    <section className="section-padding bg-background transition-colors duration-300 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-retail-blue/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-retail-purple/5 rounded-full blur-[100px] -z-10" />
      
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your business needs. All plans include our core multi-agent technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`bg-card dark:bg-card rounded-xl overflow-hidden shadow-lg relative transition-colors ${tier.popular ? 'ring-2 ring-retail-purple' : ''}`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-retail-purple text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-2 text-foreground">{tier.name}</h3>
                <p className="text-muted-foreground mb-6 h-12">{tier.description}</p>
                
                <div className="mb-6">
                  <span className="text-3xl md:text-4xl font-bold text-foreground">{tier.price}</span>
                  <span className="text-muted-foreground">{tier.frequency}</span>
                </div>
                
                <Link
                  to={tier.link}
                  className={`block w-full py-3 px-4 rounded-lg text-center font-medium mb-8 ${
                    tier.popular
                      ? 'bg-retail-purple hover:bg-retail-blue text-white'
                      : 'bg-card dark:bg-card border border-retail-purple text-retail-purple hover:bg-retail-purple hover:text-white'
                  } transition-colors duration-300`}
                >
                  {tier.cta}
                </Link>
                
                <div className="space-y-3">
                  <p className="text-sm font-medium text-foreground">Includes:</p>
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check size={16} className="text-retail-teal mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-muted dark:bg-muted rounded-xl p-8 transition-colors">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2 text-foreground">Need a custom solution?</h3>
              <p className="text-muted-foreground max-w-xl">
                Our enterprise plans can be tailored to your specific business requirements. Talk to our experts to design the perfect solution.
              </p>
            </div>
            <Link
              to="/contact"
              className="btn-primary whitespace-nowrap"
            >
              Contact Sales
            </Link>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-bold text-center mb-8 text-foreground">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: "How long does implementation take?",
                a: "Implementation typically takes 2-4 weeks for Essential plans, 4-6 weeks for Professional plans, and 6-12 weeks for Enterprise plans, depending on the complexity of your systems and integrations."
              },
              {
                q: "Can RetailSync integrate with my existing systems?",
                a: "Yes, RetailSync is designed to integrate with most major POS systems, ERP systems, e-commerce platforms, and warehouse management systems through our robust API."
              },
              {
                q: "Is training included in the price?",
                a: "Basic training is included in all plans. Professional and Enterprise plans include more comprehensive training and onboarding services."
              },
              {
                q: "Can I upgrade my plan as my business grows?",
                a: "Absolutely! You can upgrade your plan at any time. Our team will help ensure a smooth transition as your business scales."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-card dark:bg-card p-6 rounded-xl shadow-sm transition-colors">
                <h4 className="flex items-start font-bold mb-3 text-foreground">
                  <HelpCircle size={20} className="text-retail-purple mr-2 flex-shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-muted-foreground pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
