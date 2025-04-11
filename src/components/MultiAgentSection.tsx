
import React, { useState } from 'react';
import { Store, Warehouse, Truck, Users, BarChart3, ArrowDownRight, ArrowUpRight } from 'lucide-react';

interface Agent {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  description: string;
}

const agents: Agent[] = [
  {
    id: 'store',
    name: 'Store Agent',
    icon: <Store size={24} />,
    color: 'bg-retail-light-blue',
    description: 'Monitors POS data and store inventory, detects sales patterns, and communicates needs to warehouse agents.'
  },
  {
    id: 'warehouse',
    name: 'Warehouse Agent',
    icon: <Warehouse size={24} />,
    color: 'bg-retail-purple',
    description: 'Tracks distribution center inventory, coordinates with stores, and optimizes warehouse operations.'
  },
  {
    id: 'supplier',
    name: 'Supplier Agent',
    icon: <Truck size={24} />,
    color: 'bg-retail-teal',
    description: 'Communicates with supplier systems, monitors lead times, and negotiates optimal order quantities.'
  },
  {
    id: 'customer',
    name: 'Customer Agent',
    icon: <Users size={24} />,
    color: 'bg-retail-light-purple',
    description: 'Analyzes customer behavior, predicts future demand, and identifies cross-selling opportunities.'
  }
];

const MultiAgentSection = () => {
  const [selectedAgent, setSelectedAgent] = useState(agents[0]);

  return (
    <section className="section-padding bg-background transition-colors duration-300 relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Multi-Agent AI Architecture</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our revolutionary platform creates a collaborative ecosystem where specialized AI agents work together to optimize your entire retail supply chain.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
          <div className="lg:col-span-2 space-y-4">
            {agents.map((agent) => (
              <div
                key={agent.id}
                onClick={() => setSelectedAgent(agent)}
                className={`bg-card dark:bg-card rounded-xl p-5 cursor-pointer transition-all duration-300 ${selectedAgent.id === agent.id ? 'shadow-lg ring-2 ring-retail-purple' : 'hover:shadow-md'} transition-colors`}
              >
                <div className="flex items-center">
                  <div className={`${agent.color} text-white p-3 rounded-lg mr-4`}>
                    {agent.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">{agent.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-1">{agent.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <div className="relative">
              <div className="bg-card dark:bg-card rounded-2xl shadow-lg p-6 md:p-8 transition-colors">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <div className={`${selectedAgent.color} text-white p-3 inline-flex rounded-lg mb-3`}>
                      {selectedAgent.icon}
                    </div>
                    <h3 className="font-bold text-xl">{selectedAgent.name} Dashboard</h3>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-muted dark:bg-muted rounded-lg p-4 transition-colors">
                    <div className="text-sm text-muted-foreground mb-1">Decision Accuracy</div>
                    <div className="text-xl font-bold text-primary">96.7%</div>
                    <div className="text-xs text-accent flex items-center">
                      <ArrowUpRight size={12} className="mr-1" />
                      12.4% improvement
                    </div>
                  </div>
                  <div className="bg-muted dark:bg-muted rounded-lg p-4 transition-colors">
                    <div className="text-sm text-muted-foreground mb-1">Response Time</div>
                    <div className="text-xl font-bold text-primary">0.8s</div>
                    <div className="text-xs text-accent flex items-center">
                      <ArrowDownRight size={12} className="mr-1" />
                      42.5% faster
                    </div>
                  </div>
                </div>

                <div className="bg-muted dark:bg-muted rounded-lg p-4 mb-6 text-sm transition-colors">
                  <div className="font-medium mb-2 text-foreground">Agent Description</div>
                  <p className="text-muted-foreground">{selectedAgent.description}</p>
                </div>

                <div className="bg-muted dark:bg-muted rounded-lg p-4 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <div className="font-medium text-sm text-foreground">Activity Feed</div>
                    <div className="text-xs text-accent">Live updates</div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-xs">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-muted-foreground">2m ago:</span>
                      <span className="ml-2 text-foreground">Detected unusual sales pattern for Product SKU-29581</span>
                    </div>
                    <div className="flex items-center text-xs">
                      <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                      <span className="text-muted-foreground">15m ago:</span>
                      <span className="ml-2 text-foreground">Coordinated with Warehouse Agent to rebalance inventory</span>
                    </div>
                    <div className="flex items-center text-xs">
                      <div className="w-2 h-2 rounded-full bg-secondary mr-2"></div>
                      <span className="text-muted-foreground">32m ago:</span>
                      <span className="ml-2 text-foreground">Updated demand forecast based on social media trend analysis</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -z-10 top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2">
                <BarChart3 size={180} className="text-retail-gray/30" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-3 text-foreground">How Our Agents Collaborate</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-10">
            RetailSync's agents communicate in real-time, sharing insights and coordinating decisions across your entire retail ecosystem.
          </p>
          
          <div className="relative max-w-4xl mx-auto bg-card dark:bg-card p-8 rounded-2xl shadow-lg transition-colors">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {agents.map((agent, index) => (
                <div key={agent.id} className="relative">
                  <div className={`hexagon ${agent.color} text-white p-6 flex flex-col items-center justify-center mx-auto max-w-[150px] aspect-square`}>
                    {agent.icon}
                    <span className="font-medium mt-2 text-sm">{agent.name}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[75%] h-[75%] border-2 border-dashed border-retail-light-purple/30 rounded-full">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] border-2 border-dashed border-retail-blue/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiAgentSection;
