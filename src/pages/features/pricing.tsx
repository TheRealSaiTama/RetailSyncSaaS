import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { Tag, TrendingDown, BarChartHorizontalBig, Zap } from 'lucide-react';
import { Badge } from "../../components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/ui/card";

const gradientBg = "bg-gradient-to-br from-purple-500 via-pink-500 to-rose-400";

const DynamicPricingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background transition-colors duration-300">
      <Navbar />
      <main className="flex-grow pt-20 w-full flex flex-col items-center justify-start text-foreground">
        {/* Hero Section */}
        <section className={`w-full py-24 px-4 md:px-0 flex flex-col items-center justify-center relative overflow-hidden ${gradientBg}`}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10 flex flex-col items-center"
          >
            <div className="p-3 bg-white/20 rounded-full mb-4 shadow-lg">
              <Tag size={32} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center drop-shadow-lg">
              Dynamic Pricing Engine
            </h1>
            <p className="mt-6 text-lg md:text-2xl text-white/90 max-w-3xl text-center font-medium">
              Maximize revenue and margins with AI-driven price adjustments based on real-time demand, inventory levels, competition, and strategic goals.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Badge className="bg-white/20 text-white text-base px-4 py-2 rounded-full shadow-lg">Real-time</Badge>
              <Badge className="bg-white/20 text-white text-base px-4 py-2 rounded-full shadow-lg">Profit-Driven</Badge>
              <Badge className="bg-white/20 text-white text-base px-4 py-2 rounded-full shadow-lg">Competitive</Badge>
              <Badge className="bg-white/20 text-white text-base px-4 py-2 rounded-full shadow-lg">Automated</Badge>
            </div>
          </motion.div>
          {/* Animated background elements */}
        </section>

        {/* Explanation Section */}
        <section className="w-full max-w-4xl px-4 py-16 flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-bold text-center mb-6"
          >
            Price Smarter, Not Harder
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-center text-muted-foreground max-w-3xl"
          >
            Manual pricing struggles to keep up. RetailSync's Pricing Agent analyzes complex variables—demand elasticity, competitor pricing, inventory age, product lifecycle stage, and margin targets—to recommend or automatically implement optimal prices in real-time.
          </motion.p>
        </section>

        {/* Key Capabilities Section */}
        <section className="w-full max-w-6xl px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Demand-Based Adjustments", description: "Increase prices during high demand, decrease for slow-moving items.", icon: Zap },
            { title: "Competitor Price Monitoring", description: "Stay competitive by reacting intelligently to market price changes.", icon: BarChartHorizontalBig },
            { title: "Lifecycle Pricing Strategy", description: "Optimize pricing from product launch through clearance automatically.", icon: TrendingDown },
          ].map((capability, idx) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <Card className="flex flex-col items-center p-8 bg-card dark:bg-card shadow-lg rounded-2xl border border-border dark:border-border hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="mb-4 p-3 rounded-full bg-purple-100 dark:bg-purple-900/50">
                  <capability.icon size={28} className="text-purple-500 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{capability.title}</h3>
                <p className="text-base text-center text-muted-foreground">{capability.description}</p>
              </Card>
            </motion.div>
          ))}
        </section>

        {/* How It Works Section (Simplified Example) */}
         <section className="w-full max-w-4xl px-4 py-16">
           <motion.h3
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="text-2xl md:text-3xl font-bold text-center mb-8"
           >
             Intelligent Pricing Decisions
           </motion.h3>
           <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.3 }}
             className="bg-muted dark:bg-muted/50 p-8 rounded-lg shadow-md border border-border dark:border-border"
           >
             {/* Placeholder for a diagram or more detailed explanation */}
             <p className="text-muted-foreground text-center">
               The Pricing Agent gathers data on sales velocity (Store Agent), inventory levels (Warehouse Agent), competitor actions, and demand forecasts. It applies configurable business rules and profit goals (set via Coordinator Agent) to determine the optimal price point for each product in real-time.
             </p>
             {/* Consider adding a simple visual or animated graphic here */}
           </motion.div>
         </section>

        {/* Benefits Section */}
        <section className="w-full bg-muted dark:bg-muted py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">Boost Your Bottom Line</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Maximize Revenue</CardTitle>
                  <CardDescription>Capture the highest possible price the market will bear at any given moment.</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Improve Profit Margins</CardTitle>
                  <CardDescription>Optimize pricing based on costs, demand elasticity, and strategic goals.</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Accelerate Inventory Turnover</CardTitle>
                  <CardDescription>Use strategic markdowns to clear slow-moving or aging stock efficiently.</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Maintain Competitive Edge</CardTitle>
                  <CardDescription>Respond dynamically to competitor pricing strategies without manual effort.</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default DynamicPricingPage;