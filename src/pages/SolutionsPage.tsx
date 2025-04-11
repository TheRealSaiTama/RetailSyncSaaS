
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  Store, 
  Truck, 
  CreditCard, 
  Zap, 
  TrendingUp, 
  PackagePlus, 
  Clock, 
  ChevronRight
} from 'lucide-react';

const SolutionsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-retail-blue via-retail-purple to-retail-light-purple py-24">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Tailored Solutions for Every Retail Role
              </h1>
              <p className="text-lg text-white/90 mb-10">
                Our multi-agent AI platform adapts to your specific role and challenges in the retail ecosystem
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/solutions/retail-director" className="bg-white text-retail-blue hover:bg-opacity-90 px-6 py-3 rounded-lg font-medium transition-all duration-300">
                  Retail Directors
                </Link>
                <Link to="/solutions/store-manager" className="bg-white/20 text-white hover:bg-white/30 px-6 py-3 rounded-lg font-medium transition-all duration-300">
                  Store Managers
                </Link>
                <Link to="/solutions/supply-chain" className="bg-white/20 text-white hover:bg-white/30 px-6 py-3 rounded-lg font-medium transition-all duration-300">
                  Supply Chain
                </Link>
                <Link to="/solutions/financial" className="bg-white/20 text-white hover:bg-white/30 px-6 py-3 rounded-lg font-medium transition-all duration-300">
                  Financial Officers
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 bg-retail-gray">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Choose Your <span className="text-retail-purple">Solution</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-retail-blue h-2"></div>
                <div className="p-6">
                  <div className="h-16 w-16 bg-retail-blue/10 rounded-lg flex items-center justify-center mb-4">
                    <Store className="text-retail-blue h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">For Retail Operations Directors</h3>
                  <p className="text-gray-600 mb-6">
                    Standardize inventory processes across all locations, reduce holding costs, and improve coordination with our enterprise-level solution.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-retail-blue/10 flex items-center justify-center mr-3">
                        <TrendingUp size={14} className="text-retail-blue" />
                      </div>
                      <span className="text-gray-700">Chain-wide inventory optimization</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-retail-blue/10 flex items-center justify-center mr-3">
                        <TrendingUp size={14} className="text-retail-blue" />
                      </div>
                      <span className="text-gray-700">Cross-location inventory balancing</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-retail-blue/10 flex items-center justify-center mr-3">
                        <TrendingUp size={14} className="text-retail-blue" />
                      </div>
                      <span className="text-gray-700">Enterprise performance analytics</span>
                    </li>
                  </ul>
                  <Link to="/solutions/retail-director" className="flex items-center text-retail-blue font-medium hover:underline">
                    Learn more <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-retail-teal h-2"></div>
                <div className="p-6">
                  <div className="h-16 w-16 bg-retail-teal/10 rounded-lg flex items-center justify-center mb-4">
                    <Store className="text-retail-teal h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">For Store Managers</h3>
                  <p className="text-gray-600 mb-6">
                    Maintain optimal stock levels, reduce time spent on inventory management, and eliminate stockouts with our store-focused tools.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-retail-teal/10 flex items-center justify-center mr-3">
                        <Zap size={14} className="text-retail-teal" />
                      </div>
                      <span className="text-gray-700">Real-time inventory alerts</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-retail-teal/10 flex items-center justify-center mr-3">
                        <Zap size={14} className="text-retail-teal" />
                      </div>
                      <span className="text-gray-700">Smart shelf optimization</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-retail-teal/10 flex items-center justify-center mr-3">
                        <Zap size={14} className="text-retail-teal" />
                      </div>
                      <span className="text-gray-700">Staff efficiency tools</span>
                    </li>
                  </ul>
                  <Link to="/solutions/store-manager" className="flex items-center text-retail-teal font-medium hover:underline">
                    Learn more <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-retail-light-blue h-2"></div>
                <div className="p-6">
                  <div className="h-16 w-16 bg-retail-light-blue/10 rounded-lg flex items-center justify-center mb-4">
                    <Truck className="text-retail-light-blue h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">For Supply Chain Managers</h3>
                  <p className="text-gray-600 mb-6">
                    Streamline supplier coordination, optimize delivery schedules, and gain full visibility into your supply chain.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-retail-light-blue/10 flex items-center justify-center mr-3">
                        <PackagePlus size={14} className="text-retail-light-blue" />
                      </div>
                      <span className="text-gray-700">Supplier performance analytics</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-retail-light-blue/10 flex items-center justify-center mr-3">
                        <PackagePlus size={14} className="text-retail-light-blue" />
                      </div>
                      <span className="text-gray-700">Automated purchase orders</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-retail-light-blue/10 flex items-center justify-center mr-3">
                        <PackagePlus size={14} className="text-retail-light-blue" />
                      </div>
                      <span className="text-gray-700">Logistics optimization</span>
                    </li>
                  </ul>
                  <Link to="/solutions/supply-chain" className="flex items-center text-retail-light-blue font-medium hover:underline">
                    Learn more <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-retail-light-purple h-2"></div>
                <div className="p-6">
                  <div className="h-16 w-16 bg-retail-light-purple/10 rounded-lg flex items-center justify-center mb-4">
                    <CreditCard className="text-retail-light-purple h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">For Financial Officers</h3>
                  <p className="text-gray-600 mb-6">
                    Reduce inventory costs, improve cash flow, increase inventory turnover, and gain financial insights with our specialized CFO tools.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-retail-light-purple/10 flex items-center justify-center mr-3">
                        <BarChart3 size={14} className="text-retail-light-purple" />
                      </div>
                      <span className="text-gray-700">Cash flow optimization</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-retail-light-purple/10 flex items-center justify-center mr-3">
                        <BarChart3 size={14} className="text-retail-light-purple" />
                      </div>
                      <span className="text-gray-700">Inventory cost reduction</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-retail-light-purple/10 flex items-center justify-center mr-3">
                        <BarChart3 size={14} className="text-retail-light-purple" />
                      </div>
                      <span className="text-gray-700">ROI & performance metrics</span>
                    </li>
                  </ul>
                  <Link to="/solutions/financial" className="flex items-center text-retail-light-purple font-medium hover:underline">
                    Learn more <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-retail-blue to-retail-purple text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Retail Operations?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Schedule a personalized demo to see how RetailSync can optimize your inventory management
            </p>
            <Link to="/demo" className="inline-block bg-white text-retail-purple hover:bg-opacity-90 px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300">
              Request Your Demo
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SolutionsPage;
