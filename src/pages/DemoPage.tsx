
import React, { useState } from 'react';
import { db } from '../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  Calendar, 
  Clock, 
  CheckCircle,
  Store,
  Users,
  BarChart3,
  TrendingUp,
  ShoppingCart,
  PlayCircle,
  CheckCircle2
} from 'lucide-react';

const DemoPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    storeCount: '',
    inventoryChallenges: '',
    demoDate: '',
    demoTime: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await addDoc(collection(db, "demoRequests"), {
        ...formData,
        submittedAt: new Date().toISOString()
      });
      setFormSubmitted(true);
    } catch (err: any) {
      setError("Failed to submit demo request. Please try again.");
      console.error("Firestore error:", err);
    } finally {
      setLoading(false);
    }
  };

  const timeSlots = [
    "9:00 AM - 10:00 AM EST",
    "10:00 AM - 11:00 AM EST",
    "11:00 AM - 12:00 PM EST",
    "1:00 PM - 2:00 PM EST",
    "2:00 PM - 3:00 PM EST",
    "3:00 PM - 4:00 PM EST"
  ];

  const demoFeatures = [
    {
      title: "Multi-Agent Architecture",
      description: "See how our AI agents collaborate to optimize your inventory",
      icon: Store
    },
    {
      title: "Advanced Demand Forecasting",
      description: "Experience ML-powered forecasting with 95%+ accuracy",
      icon: TrendingUp
    },
    {
      title: "Inventory Optimization",
      description: "Watch as the system balances stock across multiple locations",
      icon: ShoppingCart
    },
    {
      title: "Dynamic Pricing Engine",
      description: "Observe real-time price adjustments based on inventory levels",
      icon: BarChart3
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background transition-colors duration-300">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-retail-blue via-retail-purple to-retail-light-purple dark:from-retail-blue/80 dark:via-retail-purple/80 dark:to-retail-light-purple/80 py-20 text-white dark:text-foreground relative overflow-hidden transition-colors">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1496307653780-42ee777d4833')] bg-center bg-cover opacity-5"></div>
          
          {/* Animated Dots Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-4 h-4 rounded-full bg-white/10 animate-pulse"></div>
            <div className="absolute top-20 right-40 w-6 h-6 rounded-full bg-white/10 animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-40 left-1/4 w-5 h-5 rounded-full bg-white/10 animate-pulse" style={{animationDelay: '0.8s'}}></div>
            <div className="absolute top-1/2 right-1/5 w-3 h-3 rounded-full bg-white/10 animate-pulse" style={{animationDelay: '1.2s'}}></div>
          </div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Experience the Future of Retail Inventory Management
              </h1>
              <p className="text-xl opacity-90 mb-8 text-white/90 dark:text-muted-foreground">
                Schedule a personalized demo to see how RetailSync's multi-agent AI platform can transform your operations
              </p>
            </div>
          </div>
        </section>

        {/* Demo Content */}
        <section className="py-16 bg-card dark:bg-card transition-colors">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Demo Information */}
              <div>
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">What to Expect in Your Demo</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Our personalized demo will show you how RetailSync addresses your specific inventory challenges. You'll see our multi-agent AI system in action and understand how it can benefit your business.
                  </p>

                  <div className="space-y-6">
                    {demoFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-retail-purple to-retail-blue flex items-center justify-center text-white mr-4">
                          <feature.icon size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-muted dark:bg-muted rounded-xl p-8 transition-colors">
                  <div className="flex items-center mb-6">
                    <div className="h-12 w-12 rounded-lg bg-retail-teal/10 flex items-center justify-center mr-4">
                      <PlayCircle className="text-retail-teal h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">Watch a Quick Preview</h3>
                  </div>

                  <div className="aspect-video bg-black/10 rounded-lg flex items-center justify-center mb-6">
                    <PlayCircle className="h-16 w-16 text-white/70" />
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <p className="text-muted-foreground mb-4 md:mb-0">
                      Get a glimpse of RetailSync in action
                    </p>
                    <button className="bg-retail-teal text-white px-6 py-2 rounded-lg flex items-center">
                      <PlayCircle size={18} className="mr-2" /> Watch Demo Video
                    </button>
                  </div>
                </div>
              </div>

              {/* Demo Request Form */}
              <div>
                <div className="bg-card dark:bg-card rounded-xl shadow-xl overflow-hidden transition-colors">
                  <div className="bg-gradient-to-r from-retail-blue to-retail-purple dark:from-retail-blue/80 dark:to-retail-purple/80 p-6 text-white dark:text-foreground transition-colors">
                    <h2 className="text-2xl font-bold mb-2">Schedule Your Personalized Demo</h2>
                    <p className="opacity-90">
                      Complete the form below and our team will contact you to confirm your demo
                    </p>
                  </div>

                  {formSubmitted ? (
                    <div className="p-8 text-center">
                      <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-retail-teal/20 mb-6">
                        <CheckCircle className="h-10 w-10 text-retail-teal" />
                      </div>
                      <h3 className="text-2xl font-bold text-retail-teal mb-4">Demo Request Received!</h3>
                      <p className="text-lg text-muted-foreground mb-6">
                        Thank you for your interest in RetailSync. One of our retail specialists will contact you shortly to confirm your demo appointment.
                      </p>
                      <div className="bg-retail-gray/50 rounded-lg p-4">
                        <p className="font-medium text-foreground">
                          While you wait, check out our case studies to see how other retailers have transformed their operations with RetailSync.
                        </p>
                        <a href="#" className="inline-block mt-4 bg-retail-purple text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all">
                          View Case Studies
                        </a>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="p-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-1">First Name *</label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-border dark:border-border rounded-lg focus:ring-2 focus:ring-retail-purple focus:border-retail-purple bg-background text-foreground transition-colors"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-1">Last Name *</label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-border dark:border-border rounded-lg focus:ring-2 focus:ring-retail-purple focus:border-retail-purple bg-background text-foreground transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email *</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-border dark:border-border rounded-lg focus:ring-2 focus:ring-retail-purple focus:border-retail-purple bg-background text-foreground transition-colors"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">Phone Number *</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-border dark:border-border rounded-lg focus:ring-2 focus:ring-retail-purple focus:border-retail-purple bg-background text-foreground transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1">Company Name *</label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-border dark:border-border rounded-lg focus:ring-2 focus:ring-retail-purple focus:border-retail-purple bg-background text-foreground transition-colors"
                          />
                        </div>
                        <div>
                          <label htmlFor="jobTitle" className="block text-sm font-medium text-foreground mb-1">Job Title *</label>
                          <input
                            type="text"
                            id="jobTitle"
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-border dark:border-border rounded-lg focus:ring-2 focus:ring-retail-purple focus:border-retail-purple bg-background text-foreground transition-colors"
                          />
                        </div>
                      </div>

                      <div className="mb-6">
                        <label htmlFor="storeCount" className="block text-sm font-medium text-foreground mb-1">Number of Store Locations *</label>
                        <select
                          id="storeCount"
                          name="storeCount"
                          value={formData.storeCount}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-border dark:border-border rounded-lg focus:ring-2 focus:ring-retail-purple focus:border-retail-purple bg-background text-foreground transition-colors"
                        >
                          <option value="">Select an option</option>
                          <option value="1-5">1-5 stores</option>
                          <option value="6-25">6-25 stores</option>
                          <option value="26-100">26-100 stores</option>
                          <option value="100+">More than 100 stores</option>
                        </select>
                      </div>

                      <div className="mb-6">
                        <label htmlFor="inventoryChallenges" className="block text-sm font-medium text-foreground mb-1">
                          What inventory challenges are you looking to address? *
                        </label>
                        <textarea
                          id="inventoryChallenges"
                          name="inventoryChallenges"
                          rows={3}
                          value={formData.inventoryChallenges}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-border dark:border-border rounded-lg focus:ring-2 focus:ring-retail-purple focus:border-retail-purple bg-background text-foreground transition-colors"
                          placeholder="Please share your specific inventory management challenges"
                        />
                      </div>

                      <div className="mb-8">
                        <h3 className="font-bold text-lg mb-3 flex items-center">
                          <Calendar size={20} className="mr-2 text-retail-purple" /> 
                          Select Your Preferred Demo Date & Time
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="demoDate" className="block text-sm font-medium text-foreground mb-1">
                              Preferred Date *
                            </label>
                            <input
                              type="date"
                              id="demoDate"
                              name="demoDate"
                              value={formData.demoDate}
                              onChange={handleChange}
                              required
                              min={new Date().toISOString().split('T')[0]}
                              className="w-full px-4 py-2 border border-border dark:border-border rounded-lg focus:ring-2 focus:ring-retail-purple focus:border-retail-purple bg-background text-foreground transition-colors"
                            />
                          </div>
                          <div>
                            <label htmlFor="demoTime" className="block text-sm font-medium text-foreground mb-1">
                              Preferred Time *
                            </label>
                            <select
                              id="demoTime"
                              name="demoTime"
                              value={formData.demoTime}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-2 border border-border dark:border-border rounded-lg focus:ring-2 focus:ring-retail-purple focus:border-retail-purple bg-background text-foreground transition-colors"
                            >
                              <option value="">Select a time slot</option>
                              {timeSlots.map((timeSlot) => (
                                <option key={timeSlot} value={timeSlot}>{timeSlot}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
{error && (
  <div className="mb-4 text-red-600 text-center font-medium">{error}</div>
)}
<button
  type="submit"
  className="w-full bg-retail-purple hover:bg-opacity-90 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-all duration-300"
  disabled={loading}
>
  {loading ? (
    <span className="flex items-center justify-center">
      <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
      </svg>
      Submitting...
    </span>
  ) : (
    <>
      <Calendar size={18} className="mr-2" /> Schedule My Demo
    </>
  )}
</button>
                      
                      <p className="text-center text-muted-foreground text-sm mt-4">
                        By submitting this form, you agree to our Privacy Policy and Terms of Service.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-muted dark:bg-muted transition-colors">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card dark:bg-card p-8 rounded-xl shadow-md transition-colors">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-retail-blue/20 flex items-center justify-center mr-4">
                    <Users size={20} className="text-retail-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Sarah Johnson</h3>
                    <p className="text-muted-foreground text-sm">Retail Operations Director</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "After implementing RetailSync, we've seen a 30% reduction in inventory costs and virtually eliminated stockouts across our 50+ locations. The multi-agent approach truly understands our complex retail ecosystem."
                </p>
              </div>
      
              <div className="bg-card dark:bg-card p-8 rounded-xl shadow-md transition-colors">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-retail-purple/20 flex items-center justify-center mr-4">
                    <Store size={20} className="text-retail-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Marcus Chen</h3>
                    <p className="text-muted-foreground text-sm">Store Manager</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The RetailSync platform has transformed how I manage my store. I spend 75% less time on inventory management and have complete visibility into what's coming from our warehouse."
                </p>
              </div>
      
              <div className="bg-card dark:bg-card p-8 rounded-xl shadow-md transition-colors">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-retail-teal/20 flex items-center justify-center mr-4">
                    <BarChart3 size={20} className="text-retail-teal" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Priya Patel</h3>
                    <p className="text-muted-foreground text-sm">Financial Officer</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The financial impact has been substantial. We've increased our inventory turnover by 40% and freed up millions in working capital that was previously tied up in excess inventory."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-card dark:bg-card transition-colors">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-4 text-center">Why Choose RetailSync</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-16">
              Our platform delivers substantial benefits that transform retail operations
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-muted dark:bg-muted p-6 rounded-xl flex flex-col items-center text-center transition-colors">
                <div className="h-14 w-14 rounded-full bg-retail-blue/10 flex items-center justify-center mb-4">
                  <CheckCircle2 className="text-retail-blue h-7 w-7" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">20-30% Reduction</h3>
                <p className="text-muted-foreground">In inventory holding costs</p>
              </div>
      
              <div className="bg-muted dark:bg-muted p-6 rounded-xl flex flex-col items-center text-center transition-colors">
                <div className="h-14 w-14 rounded-full bg-retail-purple/10 flex items-center justify-center mb-4">
                  <CheckCircle2 className="text-retail-purple h-7 w-7" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">15-25% Improvement</h3>
                <p className="text-muted-foreground">In inventory turnover rate</p>
              </div>
      
              <div className="bg-muted dark:bg-muted p-6 rounded-xl flex flex-col items-center text-center transition-colors">
                <div className="h-14 w-14 rounded-full bg-retail-teal/10 flex items-center justify-center mb-4">
                  <CheckCircle2 className="text-retail-teal h-7 w-7" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">40-60% Reduction</h3>
                <p className="text-muted-foreground">In stockout incidents</p>
              </div>
      
              <div className="bg-muted dark:bg-muted p-6 rounded-xl flex flex-col items-center text-center transition-colors">
                <div className="h-14 w-14 rounded-full bg-retail-light-blue/10 flex items-center justify-center mb-4">
                  <CheckCircle2 className="text-retail-light-blue h-7 w-7" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">5-10% Increase</h3>
                <p className="text-muted-foreground">In gross margin</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DemoPage;
