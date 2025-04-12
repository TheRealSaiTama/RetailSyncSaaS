import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Check,
  X,
  Store,
  Users,
  BarChart3,
  MessageSquare,
  HelpCircle,
  Cloud,
  Lock,
  FileText,
  Database,
  Clock,
  Zap,
  Cpu,
  Settings2,
  Headset,
  Rocket,
  UserCheck,
  ChevronRight,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

import { plans as sharedPlans } from '../data/pricing';

const PricingPage = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const toggleBillingPeriod = () => {
    setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly');
  };

  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardHover = {
     hover: { scale: 1.03, y: -5, transition: { duration: 0.3 } }
   };

  // Map icon strings to actual icon components
  const iconMap = {
    Store,
    BarChart3,
    FileText,
    Cpu,
    MessageSquare,
    Users,
    Settings2,
    Zap,
    Headset,
    UserCheck,
    Rocket,
  };

  // Convert shared plans to use icon components
  const plans = sharedPlans.map(plan => ({
    ...plan,
    features: plan.features.map(f => ({
      ...f,
      icon: iconMap[f.icon] || null,
    })),
  }));

  const includedFeatures = [
     { title: "Store Agent", icon: Store, color: "retail-blue", description: "Monitors real-time POS data and detects sales patterns" },
     { title: "Warehouse Agent", icon: Database, color: "retail-purple", description: "Tracks inventory levels across distribution centers" },
     { title: "Basic Demand Forecasting", icon: BarChart3, color: "retail-teal", description: "ML-powered prediction using sales history and trends" },
     { title: "Real-Time Updates", icon: Clock, color: "retail-light-blue", description: "Inventory and sales data refreshed in real-time" },
     { title: "Standard Reports", icon: FileText, color: "retail-light-purple", description: "Essential retail analytics and performance reports" },
     { title: "Cloud Hosting", icon: Cloud, color: "retail-blue", description: "Secure, reliable cloud infrastructure included" },
     { title: "Enterprise Security", icon: Lock, color: "retail-purple", description: "SOC 2 compliant with end-to-end encryption" },
     { title: "User Management", icon: Users, color: "retail-teal", description: "Role-based access control for your team" },
     { title: "Basic Support", icon: MessageSquare, color: "retail-light-blue", description: "Email support with 24-hour response time" },
   ];

  const faqs = [
      { q: "How do I determine which plan is right for my business?", a: "The best plan depends on the size of your retail operation and your specific needs. The Essential plan works well for small retailers with up to 5 locations who need core inventory optimization. The Professional plan is ideal for growing retailers with up to 25 locations requiring more advanced features and integrations. The Enterprise plan is designed for large retailers with complex needs and unlimited locations." },
      { q: "Can I change plans later as my business grows?", a: "Absolutely! You can upgrade your plan at any time as your business grows. Your data and configurations will be seamlessly transferred to your new plan. If you're on an annual plan, we'll prorate the remaining value toward your new subscription." },
      { q: "What integrations are included in each plan?", a: "All plans include standard integrations with popular POS systems, ERP platforms, and e-commerce stores. The Professional and Enterprise plans include additional custom integrations with legacy systems, supply chain management tools, and financial software. Enterprise customers receive completely customized integration solutions." },
      { q: "Is there a setup or implementation fee?", a: "Implementation services are available as an add-on for Essential and Professional plans. Enterprise plans include white-glove implementation as part of the package. Implementation costs vary based on the complexity of your retail operation and integration needs." },
      { q: "Is there a contract or minimum commitment?", a: "Monthly plans can be canceled at any time. Annual plans provide a significant discount (approx. 17%) and are paid upfront for a 12-month period. Enterprise plans typically have a minimum 12-month commitment with custom terms." },
    ];


  return (
    <div className="min-h-screen flex flex-col bg-background transition-colors duration-300">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-gradient-to-b from-muted dark:from-muted via-background dark:via-background to-background dark:to-background relative overflow-hidden transition-colors">
           {/* Subtle animated background shapes */}
           <motion.div
             className="absolute -top-20 -left-20 w-96 h-96 bg-retail-purple/5 dark:bg-retail-purple/10 rounded-full filter blur-3xl opacity-50 animate-blob"
             initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1.5, delay: 0.1 }}
           ></motion.div>
           <motion.div
             className="absolute -bottom-20 -right-20 w-96 h-96 bg-retail-blue/5 dark:bg-retail-blue/10 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000"
              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1.5, delay: 0.3 }}
           ></motion.div>

          <div className="container-custom relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-foreground">
                Simple, Transparent <span className="text-retail-purple">Pricing</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10">
                Choose the plan that fits your business needs. Unlock the power of multi-agent AI to optimize your retail operations.
              </p>

              {/* Billing Toggle */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center mb-16"
              >
                <span className={`text-base transition-colors duration-300 ${billingPeriod === 'monthly' ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>
                  Monthly
                </span>
                <button
                  aria-label={`Switch to ${billingPeriod === 'monthly' ? 'Yearly' : 'Monthly'} billing`}
                  onClick={toggleBillingPeriod}
                  className="mx-4 relative flex h-8 w-16 items-center rounded-full p-1 cursor-pointer bg-muted dark:bg-muted border border-border dark:border-border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  {/* Background Fill Animation */}
                  <motion.div
                    className="absolute inset-0 h-full w-1/2 rounded-full bg-primary/20 dark:bg-primary/30 z-0"
                    layout
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    initial={false}
                    animate={{ x: billingPeriod === 'yearly' ? '100%' : '0%' }}
                  />
                  {/* Handle Animation */}
                  <motion.div
                    className="absolute top-1 left-1 h-6 w-6 rounded-full bg-background dark:bg-card shadow-md z-10 border border-border dark:border-border"
                    layout
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    initial={false}
                    animate={{ left: billingPeriod === 'yearly' ? 'calc(100% - 1.75rem)' : '0rem' }}
                  />
                </button>
                <span className={`text-base transition-colors duration-300 ${billingPeriod === 'yearly' ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>
                  Yearly <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 ml-2">Save ~17%</Badge>
                </span>
              </motion.div>
            </motion.div>

              {/* Pricing Cards */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
              >
                {plans.map((plan, index) => (
                  <motion.div
                    key={plan.name}
                    variants={fadeIn}
                    whileHover="hover"
                    className={`relative h-full ${plan.popular ? 'lg:-mt-4' : ''}`}
                  >
                    <motion.div
                      variants={cardHover}
                      className={`bg-card dark:bg-card rounded-2xl h-full overflow-hidden shadow-xl border ${plan.borderColor} transition-colors flex flex-col ${
                        plan.popular ? 'ring-4 ring-offset-2 ring-offset-background dark:ring-offset-background ring-retail-purple' : 'border-border dark:border-border'
                      }`}
                    >
                      {plan.popular && (
                        <div className="bg-gradient-to-r from-retail-purple to-retail-light-purple text-white text-xs uppercase font-bold tracking-wider py-1.5 px-4 absolute top-0 right-6 rounded-b-lg shadow-md">
                          Most Popular
                        </div>
                      )}
                      <div className="p-8 flex-grow">
                        <h3 className={`text-2xl font-bold mb-3 text-foreground ${plan.popular ? 'mt-4' : ''}`}>{plan.name}</h3>
                        <p className="text-muted-foreground text-sm mb-6 min-h-[3rem]">
                          {plan.description}
                        </p>
                        <div className="mb-8">
                          {plan.monthlyPrice !== null ? (
                            <div className="flex items-baseline">
                              <span className="text-4xl lg:text-5xl font-extrabold text-foreground">
                                ₹{(() => {
                                  if (billingPeriod === 'monthly') {
                                    return plan.monthlyPrice?.toLocaleString('en-IN');
                                  } else if (plan.yearlyPrice) {
                                    return Math.round(plan.yearlyPrice / 12).toLocaleString('en-IN');
                                  }
                                  return '';
                                })()}
                              </span>
                              <span className="text-muted-foreground ml-1.5">/month</span>
                            </div>
                          ) : (
                            <div className="text-3xl font-bold text-foreground">Custom Pricing</div>
                          )}
                          {plan.yearlyPrice !== null && billingPeriod === 'yearly' && (
                            <p className="text-sm text-muted-foreground mt-1">
                              Billed annually (₹{plan.yearlyPrice.toLocaleString('en-IN')})
                            </p>
                          )}
                           {plan.monthlyPrice === null && (
                             <p className="text-sm text-muted-foreground mt-1">
                               Tailored to your specific needs
                             </p>
                           )}
                        </div>
                        <Link
                          to={plan.name === "Enterprise" ? "/contact" : `/pricing/${plan.name.toLowerCase()}`}
                          className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 w-full text-base shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${plan.buttonClass}`}
                        >
                          {plan.cta}
                        </Link>
                      </div>
                      <div className="border-t border-border dark:border-border p-8 bg-muted/30 dark:bg-muted/30">
                        <h4 className="font-semibold text-sm text-muted-foreground mb-5 uppercase tracking-wider">What's Included:</h4>
                        <ul className="space-y-4">
                          {plan.features.map((feature) => (
                            <li key={feature.name} className="flex items-start">
                              {feature.included ? (
                                <Check size={18} className="text-retail-teal mr-3 flex-shrink-0 mt-0.5" />
                              ) : (
                                <X size={18} className="text-muted-foreground/50 mr-3 flex-shrink-0 mt-0.5" />
                              )}
                              <span className={`text-sm ${feature.included ? 'text-foreground font-medium' : 'text-muted-foreground line-through'}`}>
                                {feature.name}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 lg:py-28 bg-background dark:bg-background transition-colors">
          <div className="container-custom">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Core Platform Features</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Every RetailSync plan is powered by our core multi-agent AI platform and includes these essential capabilities:
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {includedFeatures.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={fadeIn}
                  className="bg-card dark:bg-card p-6 rounded-xl shadow-lg border border-border dark:border-border flex items-start space-x-4 transition-colors hover:border-retail-purple/30 dark:hover:border-retail-purple/30"
                >
                  <div className={`h-12 w-12 bg-${feature.color}/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1`}>
                    <feature.icon className={`text-${feature.color} h-6 w-6`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 lg:py-28 bg-muted dark:bg-muted transition-colors">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">
                Have questions about our pricing or plans? Find answers below.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
            >
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div key={index} variants={fadeIn}>
                    <AccordionItem value={`item-${index}`} className="bg-background dark:bg-card border border-border dark:border-border rounded-lg shadow-sm transition-colors">
                      <AccordionTrigger className="p-6 text-left font-semibold text-lg hover:no-underline text-foreground">
                        <span className="flex items-center">
                           <HelpCircle size={20} className="text-retail-purple mr-3 flex-shrink-0" />
                           {faq.q}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="p-6 pt-0 text-muted-foreground text-base">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="mt-12 text-center text-muted-foreground"
            >
              <p>Still have questions? <Link to="/contact" className="text-retail-purple font-medium hover:underline">Contact our sales team</Link>.</p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-24 bg-gradient-to-r from-retail-blue to-retail-purple dark:from-retail-blue/90 dark:to-retail-purple/90 text-white transition-colors">
          <div className="container-custom text-center">
             <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.3 }}
               variants={fadeIn}
             >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your Retail Operations?</h2>
              <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto font-medium">
                Get started with RetailSync today and transform your inventory management with the power of multi-agent AI.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                 <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                   <Link to="/demo" className="btn-white text-base px-8 py-3">
                     Request a Personalized Demo
                   </Link>
                 </motion.div>
                 <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                   <Link to="/contact" className="btn-secondary-outline-white text-base px-8 py-3">
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

export default PricingPage;
