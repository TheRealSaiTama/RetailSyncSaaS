
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { 
  Check, 
  X, 
  Store, 
  Users, 
  BarChart3, 
  Calendar, 
  MessageSquare,
  HelpCircle,
  Cloud,
  Lock,
  FileText,
  Database,
  Clock
} from 'lucide-react';

const PricingPage = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const toggleBillingPeriod = () => {
    setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly');
  };

  const plans = [
    {
      name: "Essential",
      monthlyPrice: 499,
      yearlyPrice: 4990,
      description: "Perfect for small retailers with up to 5 locations looking to optimize inventory.",
      color: "blue",
      features: [
        { name: "Up to 5 store locations", included: true },
        { name: "Basic demand forecasting", included: true },
        { name: "Standard dashboard & reports", included: true },
        { name: "Email support", included: true },
        { name: "Mobile app access", included: true },
        { name: "API access", included: false },
        { name: "Custom integrations", included: false },
        { name: "Advanced agent collaboration", included: false },
        { name: "White-glove onboarding", included: false },
        { name: "Dedicated account manager", included: false },
      ],
      cta: "Get Started"
    },
    {
      name: "Professional",
      monthlyPrice: 1499,
      yearlyPrice: 14990,
      description: "For growing retailers with up to 25 locations requiring advanced features.",
      color: "purple",
      popular: true,
      features: [
        { name: "Up to 25 store locations", included: true },
        { name: "Advanced demand forecasting", included: true },
        { name: "Custom dashboards & reports", included: true },
        { name: "Priority support", included: true },
        { name: "Mobile app access", included: true },
        { name: "API access", included: true },
        { name: "Custom integrations", included: true },
        { name: "Advanced agent collaboration", included: true },
        { name: "White-glove onboarding", included: false },
        { name: "Dedicated account manager", included: false },
      ],
      cta: "Get Started"
    },
    {
      name: "Enterprise",
      monthlyPrice: null,
      yearlyPrice: null,
      description: "For large retailers with unlimited locations requiring full customization.",
      color: "teal",
      features: [
        { name: "Unlimited store locations", included: true },
        { name: "Full ML-powered forecasting", included: true },
        { name: "Fully customizable dashboard", included: true },
        { name: "24/7 priority support", included: true },
        { name: "Mobile app access", included: true },
        { name: "API access", included: true },
        { name: "Custom integrations", included: true },
        { name: "Advanced agent collaboration", included: true },
        { name: "White-glove onboarding", included: true },
        { name: "Dedicated account manager", included: true },
      ],
      cta: "Contact Sales"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background transition-colors duration-300">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-muted dark:bg-muted py-24 transition-colors">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Simple, Transparent <span className="text-retail-purple">Pricing</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-10">
                Choose the plan that fits your business needs. Every plan includes our core multi-agent AI technology.
              </p>

              {/* Billing Toggle */}
              <div className="flex items-center justify-center mb-12">
                <span className={`text-sm transition-colors duration-300 ${billingPeriod === 'monthly' ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
                  Monthly
                </span>
                <button
                  className="mx-4 relative inline-flex h-6 w-12 items-center rounded-full bg-muted dark:bg-muted transition-colors duration-300 border border-border dark:border-border"
                  onClick={toggleBillingPeriod}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full transition-all duration-300 ${
                      billingPeriod === 'yearly'
                        ? 'translate-x-7 bg-primary'
                        : 'translate-x-1 bg-background dark:bg-background border border-border dark:border-border'
                    }`}
                  />
                </button>
                <span className={`text-sm transition-colors duration-300 ${billingPeriod === 'yearly' ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
                  Yearly <span className="bg-primary/20 text-primary px-2 py-0.5 text-xs rounded-full ml-1 transition-colors duration-300">Save 20%</span>
                </span>
              </div>

              {/* Pricing Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan) => (
                  <div 
                    key={plan.name}
                    className={`bg-card dark:bg-card rounded-xl overflow-hidden shadow-lg relative transition-colors ${
                      plan.popular ? 'md:-mt-4 ring-2 ring-retail-purple' : ''
                    }`}
                  >
                    {plan.popular && (
                      <div className="bg-retail-purple text-white text-xs uppercase font-bold py-1 px-4 absolute top-0 right-0 rounded-bl-lg">
                        Most Popular
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
                      <p className="text-muted-foreground text-sm mb-6 h-12">
                        {plan.description}
                      </p>
                      <div className="mb-6">
                        {plan.monthlyPrice !== null ? (
                          <div className="flex items-end">
                            <span className="text-4xl font-bold">
                              ${billingPeriod === 'monthly' ? plan.monthlyPrice : Math.round(plan.yearlyPrice! / 12)}
                            </span>
                            <span className="text-muted-foreground ml-2 mb-1">/month</span>
                          </div>
                        ) : (
                          <div className="text-3xl font-bold">Custom Pricing</div>
                        )}
                        {plan.yearlyPrice !== null && billingPeriod === 'yearly' && (
                          <p className="text-sm text-muted-foreground mt-1">
                            Billed annually (${plan.yearlyPrice})
                          </p>
                        )}
                      </div>
                      <Link
                        to={plan.name === "Enterprise" ? "/contact" : `/pricing/${plan.name.toLowerCase()}`}
                        className={`block text-center py-2 px-4 rounded-lg font-medium transition-all duration-300 w-full ${
                          plan.popular 
                            ? 'bg-retail-purple text-white hover:bg-opacity-90'
                            : plan.name === "Enterprise"
                              ? 'bg-retail-teal text-white hover:bg-opacity-90'
                              : 'bg-retail-blue text-white hover:bg-opacity-90'
                        }`}
                      >
                        {plan.cta}
                      </Link>
                    </div>
                    <div className="border-t border-gray-100 p-6">
                      <h4 className="font-medium text-sm text-muted-foreground mb-4">WHAT'S INCLUDED:</h4>
                      <ul className="space-y-3">
                        {plan.features.map((feature) => (
                          <li key={feature.name} className="flex items-start">
                            {feature.included ? (
                              <Check size={18} className="text-retail-teal mr-2 flex-shrink-0 mt-0.5" />
                            ) : (
                              <X size={18} className="text-gray-300 mr-2 flex-shrink-0 mt-0.5" />
                            )}
                            <span className={feature.included ? 'text-foreground' : 'text-muted-foreground'}>
                              {feature.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">All Plans Include</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Every RetailSync plan is powered by our core multi-agent AI platform with these essential features
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-muted dark:bg-muted rounded-xl flex transition-colors">
                <div className="h-12 w-12 bg-retail-blue/10 rounded-lg flex items-center justify-center mr-4">
                  <Store className="text-retail-blue h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">Store Agent</h3>
                  <p className="text-muted-foreground text-sm">
                    Monitors real-time POS data and detects sales patterns
                  </p>
                </div>
              </div>
      
              <div className="p-6 bg-muted dark:bg-muted rounded-xl flex transition-colors">
                <div className="h-12 w-12 bg-retail-purple/10 rounded-lg flex items-center justify-center mr-4">
                  <Database className="text-retail-purple h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">Warehouse Agent</h3>
                  <p className="text-muted-foreground text-sm">
                    Tracks inventory levels across distribution centers
                  </p>
                </div>
              </div>
      
              <div className="p-6 bg-muted dark:bg-muted rounded-xl flex transition-colors">
                <div className="h-12 w-12 bg-retail-teal/10 rounded-lg flex items-center justify-center mr-4">
                  <BarChart3 className="text-retail-teal h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">Demand Forecasting</h3>
                  <p className="text-muted-foreground text-sm">
                    ML-powered prediction using sales history and trends
                  </p>
                </div>
              </div>
      
              <div className="p-6 bg-muted dark:bg-muted rounded-xl flex transition-colors">
                <div className="h-12 w-12 bg-retail-light-blue/10 rounded-lg flex items-center justify-center mr-4">
                  <Clock className="text-retail-light-blue h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">Real-Time Updates</h3>
                  <p className="text-muted-foreground text-sm">
                    Inventory and sales data refreshed in real-time
                  </p>
                </div>
              </div>
      
              <div className="p-6 bg-muted dark:bg-muted rounded-xl flex transition-colors">
                <div className="h-12 w-12 bg-retail-light-purple/10 rounded-lg flex items-center justify-center mr-4">
                  <FileText className="text-retail-light-purple h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">Standard Reports</h3>
                  <p className="text-muted-foreground text-sm">
                    Essential retail analytics and performance reports
                  </p>
                </div>
              </div>
      
              <div className="p-6 bg-muted dark:bg-muted rounded-xl flex transition-colors">
                <div className="h-12 w-12 bg-retail-blue/10 rounded-lg flex items-center justify-center mr-4">
                  <Cloud className="text-retail-blue h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">Cloud Hosting</h3>
                  <p className="text-muted-foreground text-sm">
                    Secure, reliable cloud infrastructure included
                  </p>
                </div>
              </div>
      
              <div className="p-6 bg-muted dark:bg-muted rounded-xl flex transition-colors">
                <div className="h-12 w-12 bg-retail-purple/10 rounded-lg flex items-center justify-center mr-4">
                  <Lock className="text-retail-purple h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">Enterprise Security</h3>
                  <p className="text-muted-foreground text-sm">
                    SOC 2 compliant with end-to-end encryption
                  </p>
                </div>
              </div>
      
              <div className="p-6 bg-muted dark:bg-muted rounded-xl flex transition-colors">
                <div className="h-12 w-12 bg-retail-teal/10 rounded-lg flex items-center justify-center mr-4">
                  <Users className="text-retail-teal h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">User Management</h3>
                  <p className="text-muted-foreground text-sm">
                    Role-based access control for your team
                  </p>
                </div>
              </div>
      
              <div className="p-6 bg-muted dark:bg-muted rounded-xl flex transition-colors">
                <div className="h-12 w-12 bg-retail-light-blue/10 rounded-lg flex items-center justify-center mr-4">
                  <MessageSquare className="text-retail-light-blue h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">Basic Support</h3>
                  <p className="text-muted-foreground text-sm">
                    Email support with 24-hour response time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-retail-gray">
          <div className="container-custom max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">
                Have questions about our pricing? Find answers below or contact us
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-card dark:bg-card rounded-lg shadow-md overflow-hidden transition-colors">
                <div className="p-6">
                  <h3 className="text-lg font-bold flex items-center mb-3 text-foreground">
                    <HelpCircle size={18} className="text-retail-purple mr-2" />
                    How do I determine which plan is right for my business?
                  </h3>
                  <p className="text-muted-foreground">
                    The best plan depends on the size of your retail operation and your specific needs. The Essential plan works well for small retailers with up to 5 locations who need basic inventory optimization. The Professional plan is ideal for growing retailers with up to 25 locations requiring more advanced features and integrations. The Enterprise plan is designed for large retailers with complex needs and unlimited locations.
                  </p>
                </div>
              </div>

              <div className="bg-card dark:bg-card rounded-lg shadow-md overflow-hidden transition-colors">
                <div className="p-6">
                  <h3 className="text-lg font-bold flex items-center mb-3 text-foreground">
                    <HelpCircle size={18} className="text-retail-purple mr-2" />
                    Can I change plans later as my business grows?
                  </h3>
                  <p className="text-muted-foreground">
                    Absolutely! You can upgrade your plan at any time as your business grows. Your data and configurations will be seamlessly transferred to your new plan. If you're on an annual plan, we'll prorate the remaining value toward your new subscription.
                  </p>
                </div>
              </div>

              <div className="bg-card dark:bg-card rounded-lg shadow-md overflow-hidden transition-colors">
                <div className="p-6">
                  <h3 className="text-lg font-bold flex items-center mb-3 text-foreground">
                    <HelpCircle size={18} className="text-retail-purple mr-2" />
                    What integrations are included in each plan?
                  </h3>
                  <p className="text-muted-foreground">
                    All plans include standard integrations with popular POS systems, ERP platforms, and e-commerce stores. The Professional and Enterprise plans include additional custom integrations with legacy systems, supply chain management tools, and financial software. Enterprise customers receive completely customized integration solutions.
                  </p>
                </div>
              </div>

              <div className="bg-card dark:bg-card rounded-lg shadow-md overflow-hidden transition-colors">
                <div className="p-6">
                  <h3 className="text-lg font-bold flex items-center mb-3 text-foreground">
                    <HelpCircle size={18} className="text-retail-purple mr-2" />
                    Is there a setup or implementation fee?
                  </h3>
                  <p className="text-muted-foreground">
                    Implementation services are available as an add-on for Essential and Professional plans. Enterprise plans include white-glove implementation as part of the package. Implementation costs vary based on the complexity of your retail operation and integration needs.
                  </p>
                </div>
              </div>

              <div className="bg-card dark:bg-card rounded-lg shadow-md overflow-hidden transition-colors">
                <div className="p-6">
                  <h3 className="text-lg font-bold flex items-center mb-3 text-foreground">
                    <HelpCircle size={18} className="text-retail-purple mr-2" />
                    Is there a contract or minimum commitment?
                  </h3>
                  <p className="text-muted-foreground">
                    Monthly plans can be canceled at any time. Annual plans provide a 20% discount and are paid upfront for a 12-month period. Enterprise plans typically have a minimum 12-month commitment with custom terms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-retail-blue to-retail-purple dark:from-retail-blue/80 dark:to-retail-purple/80 text-white dark:text-foreground transition-colors">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Retail Operations?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto text-white/90 dark:text-muted-foreground">
              Get started with RetailSync today and transform your inventory management
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/demo" className="bg-white dark:bg-card text-retail-purple hover:bg-opacity-90 dark:hover:bg-opacity-80 px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300">
                Request a Demo
              </Link>
              <Link to="/contact" className="bg-white/20 dark:bg-white/10 text-white dark:text-foreground hover:bg-white/30 dark:hover:bg-white/20 px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300">
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
