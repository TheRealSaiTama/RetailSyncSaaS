
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Tags, 
  AlertCircle, 
  PieChart,
  ZapOff,
  LineChart,
  Database,
  Network,
  Cpu,
  ChevronRight,
  Boxes, // Replacement for CircleNodes
} from 'lucide-react';

const FeaturesPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background transition-colors duration-300">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-muted dark:bg-muted py-24 transition-colors">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Revolutionary <span className="text-retail-purple">Features</span> Powered by AI
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Our multi-agent AI platform creates a collaborative ecosystem between stores,
                  warehouses, suppliers, and customers to revolutionize retail inventory management.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#multi-agent" className="btn-primary">
                    Multi-Agent Architecture
                  </a>
                  <a href="#demand-forecasting" className="btn-secondary">
                    Advanced Forecasting
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-retail-purple/10 rounded-full blur-[80px] -z-10"></div>
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-retail-teal/10 rounded-full blur-[80px] -z-10"></div>
                <div className="bg-card dark:bg-card p-6 rounded-2xl shadow-xl relative z-10 border border-border dark:border-border transition-colors">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-retail-purple to-retail-blue flex items-center justify-center text-white">
                      <Brain size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-foreground">RetailSync AI</h3>
                      <p className="text-muted-foreground">Intelligent automation</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-3 bg-muted dark:bg-muted rounded-lg flex items-center space-x-3 transition-colors">
                      <Boxes size={20} className="text-retail-purple" />
                      <span className="font-medium text-foreground">Multi-Agent Collaboration</span>
                    </div>
                    <div className="p-3 bg-muted dark:bg-muted rounded-lg flex items-center space-x-3 transition-colors">
                      <Network size={20} className="text-retail-blue" />
                      <span className="font-medium text-foreground">Real-time System</span>
                    </div>
                    <div className="p-3 bg-muted dark:bg-muted rounded-lg flex items-center space-x-3 transition-colors">
                      <Cpu size={20} className="text-retail-teal" />
                      <span className="font-medium text-foreground">Autonomous Decision Making</span>
                    </div>
                    <div className="p-3 bg-muted dark:bg-muted rounded-lg flex items-center space-x-3 transition-colors">
                      <Database size={20} className="text-retail-light-blue" />
                      <span className="font-medium text-foreground">Big Data Processing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Multi-Agent Section */}
        <section id="multi-agent" className="py-20 bg-card dark:bg-card transition-colors">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Multi-Agent AI Architecture</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our revolutionary system comprises specialized AI agents that interact within a collaborative framework to optimize your retail operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Agent Card 1 */}
              <div className="bg-gradient-to-br from-retail-blue to-retail-purple p-[1px] rounded-xl overflow-hidden">
                <div className="bg-card dark:bg-card p-6 rounded-xl h-full transition-colors">
                  <div className="h-16 w-16 bg-retail-blue/10 rounded-lg flex items-center justify-center mb-6">
                    <Brain className="text-retail-blue h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Store Agent</h3>
                  <p className="text-muted-foreground mb-6">
                    Monitors real-time POS data and store inventory levels to detect emerging sales patterns and optimize product placement.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-retail-blue/10 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-retail-blue"></div>
                      </div>
                      <span className="text-foreground">Real-time sales monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-retail-blue/10 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-retail-blue"></div>
                      </div>
                      <span className="text-foreground">Product placement optimization</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-retail-blue/10 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-retail-blue"></div>
                      </div>
                      <span className="text-foreground">Anomaly detection and alerts</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Agent Card 2 */}
              <div className="bg-gradient-to-br from-retail-teal to-retail-light-blue p-[1px] rounded-xl overflow-hidden">
                <div className="bg-white p-6 rounded-xl h-full">
                  <div className="h-16 w-16 bg-retail-teal/10 rounded-lg flex items-center justify-center mb-6">
                    <Database className="text-retail-teal h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Warehouse Agent</h3>
                  <p className="text-gray-600 mb-6">
                    Tracks inventory levels across distribution centers and optimizes warehouse space and picking efficiency.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-retail-teal/10 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-retail-teal"></div>
                      </div>
                      <span>Distribution center optimization</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-retail-teal/10 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-retail-teal"></div>
                      </div>
                      <span>Space utilization analytics</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-retail-teal/10 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-retail-teal"></div>
                      </div>
                      <span>Cross-warehouse coordination</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Agent Card 3 */}
              <div className="bg-gradient-to-br from-retail-purple to-retail-light-purple p-[1px] rounded-xl overflow-hidden">
                <div className="bg-white p-6 rounded-xl h-full">
                  <div className="h-16 w-16 bg-retail-purple/10 rounded-lg flex items-center justify-center mb-6">
                    <Network className="text-retail-purple h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Supplier Agent</h3>
                  <p className="text-gray-600 mb-6">
                    Maintains communication with external supplier systems and negotiates optimal order quantities and delivery schedules.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-retail-purple/10 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-retail-purple"></div>
                      </div>
                      <span>Lead time optimization</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-retail-purple/10 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-retail-purple"></div>
                      </div>
                      <span>Supplier performance tracking</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-retail-purple/10 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-retail-purple"></div>
                      </div>
                      <span>Disruption risk monitoring</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Agent Card 4 */}
              <div className="bg-gradient-to-br from-retail-light-blue to-retail-blue p-[1px] rounded-xl overflow-hidden">
                <div className="bg-white p-6 rounded-xl h-full">
                  <div className="h-16 w-16 bg-retail-light-blue/10 rounded-lg flex items-center justify-center mb-6">
                    <BarChart3 className="text-retail-light-blue h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Customer Agent</h3>
                  <p className="text-gray-600 mb-6">
                    Analyzes customer behavior and purchasing patterns to predict future demand and identify cross-selling opportunities.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-retail-light-blue/10 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-retail-light-blue"></div>
                      </div>
                      <span>Purchasing pattern analysis</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-retail-light-blue/10 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-retail-light-blue"></div>
                      </div>
                      <span>Market trend correlation</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-retail-light-blue/10 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-retail-light-blue"></div>
                      </div>
                      <span>Cross-selling identification</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Agent Card 5 */}
              <div className="bg-gradient-to-br from-retail-light-purple to-retail-purple p-[1px] rounded-xl overflow-hidden md:col-span-2 lg:col-span-1">
                <div className="bg-white p-6 rounded-xl h-full">
                  <div className="h-16 w-16 bg-retail-light-purple/10 rounded-lg flex items-center justify-center mb-6">
                    <Cpu className="text-retail-light-purple h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Coordinator Agent</h3>
                  <p className="text-gray-600 mb-6">
                    Orchestrates communication between all other agents and resolves conflicts to optimize system-wide performance.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-retail-light-purple/10 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-retail-light-purple"></div>
                      </div>
                      <span>AI orchestration and optimization</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-retail-light-purple/10 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-retail-light-purple"></div>
                      </div>
                      <span>Business rules implementation</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-retail-light-purple/10 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-retail-light-purple"></div>
                      </div>
                      <span>Decision explanation system</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Key Features */}
        <section id="demand-forecasting" className="py-20 bg-retail-gray">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Functionalities</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our platform delivers a comprehensive suite of intelligent tools to revolutionize your retail inventory management.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-14 w-14 bg-gradient-to-r from-retail-purple to-retail-blue rounded-lg flex items-center justify-center text-white mb-6">
                  <LineChart className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Advanced Demand Forecasting</h3>
                <p className="text-gray-600 mb-6">
                  ML-powered demand prediction using historical sales data, seasonal patterns, weather forecasts, and market trends.
                </p>
                <Link to="/features/demand-forecasting" className="text-retail-purple font-medium hover:underline flex items-center">
                  Learn more about forecasting
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-14 w-14 bg-gradient-to-r from-retail-teal to-retail-light-blue rounded-lg flex items-center justify-center text-white mb-6">
                  <Database className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Intelligent Inventory Optimization</h3>
                <p className="text-gray-600 mb-6">
                  Dynamic reorder point calculations, store-specific inventory recommendations, and automated replenishment workflows.
                </p>
                <Link to="/features/inventory" className="text-retail-teal font-medium hover:underline flex items-center">
                  Learn more about inventory
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>

              {/* Feature 3 */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-14 w-14 bg-gradient-to-r from-retail-light-purple to-retail-purple rounded-lg flex items-center justify-center text-white mb-6">
                  <Tags className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Dynamic Pricing Engine</h3>
                <p className="text-gray-600 mb-6">
                  Real-time price adjustments based on inventory levels, demand patterns, product lifecycle stage, and margin requirements.
                </p>
                <Link to="/features/pricing" className="text-retail-light-purple font-medium hover:underline flex items-center">
                  Learn more about pricing
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>

              {/* Feature 4 */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-14 w-14 bg-gradient-to-r from-retail-blue to-retail-light-blue rounded-lg flex items-center justify-center text-white mb-6">
                  <Network className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Supply Chain Coordination</h3>
                <p className="text-gray-600 mb-6">
                  Automated purchase order generation, delivery schedule optimization, and supplier performance tracking.
                </p>
                <Link to="/features/supply-chain" className="text-retail-blue font-medium hover:underline flex items-center">
                  Learn more about supply chain
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>

              {/* Feature 5 */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-14 w-14 bg-gradient-to-r from-retail-light-blue to-retail-teal rounded-lg flex items-center justify-center text-white mb-6">
                  <AlertCircle className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Anomaly Detection</h3>
                <p className="text-gray-600 mb-6">
                  Identification of unusual sales patterns, theft and shrinkage detection, and early warning of potential stockouts.
                </p>
                <Link to="/features/anomaly-detection" className="text-retail-light-blue font-medium hover:underline flex items-center">
                  Learn more about anomaly detection
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>

              {/* Feature 6 */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-14 w-14 bg-gradient-to-r from-retail-purple to-retail-light-purple rounded-lg flex items-center justify-center text-white mb-6">
                  <ZapOff className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Stockout Prevention</h3>
                <p className="text-gray-600 mb-6">
                  Proactive alert system that identifies potential stockouts before they occur, with automated resolution workflows.
                </p>
                <Link to="/features/stockout-prevention" className="text-retail-purple font-medium hover:underline flex items-center">
                  Learn more about stockout prevention
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-retail-blue to-retail-purple text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-6">See RetailSync in Action</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Experience how our multi-agent AI system can transform your retail operations
            </p>
            <Link to="/demo" className="inline-block bg-white text-retail-purple hover:bg-opacity-90 px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300">
              Request a Demo
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
