import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { PackageSearch, Boxes, Warehouse, Shuffle } from 'lucide-react';
import { Badge } from "../../components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/ui/card";

const gradientBg = "bg-gradient-to-br from-teal-500 via-emerald-500 to-green-400";

const InventoryOptimizationPage = () => {
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
              <PackageSearch size={32} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center drop-shadow-lg">
              Intelligent Inventory Optimization
            </h1>
            <p className="mt-6 text-lg md:text-2xl text-white/90 max-w-3xl text-center font-medium">
              Balance supply and demand perfectly. Our AI agents automate replenishment, optimize stock levels across locations, and minimize holding costs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Badge className="bg-white/20 text-white text-base px-4 py-2 rounded-full shadow-lg">Automated</Badge>
              <Badge className="bg-white/20 text-white text-base px-4 py-2 rounded-full shadow-lg">Cost-Efficient</Badge>
              <Badge className="bg-white/20 text-white text-base px-4 py-2 rounded-full shadow-lg">Data-Driven</Badge>
              <Badge className="bg-white/20 text-white text-base px-4 py-2 rounded-full shadow-lg">Multi-Location</Badge>
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
            The Right Product, Right Place, Right Time
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-center text-muted-foreground max-w-3xl"
          >
            RetailSync's agents collaborate to maintain optimal inventory levels. Store, Warehouse, and Supplier Agents share real-time data, allowing the system to calculate dynamic reorder points, suggest inter-store transfers, and automate purchase orders based on predicted demand and lead times.
          </motion.p>
        </section>

        {/* Key Capabilities Section */}
        <section className="w-full max-w-6xl px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Dynamic Reorder Points", description: "AI calculates optimal reorder levels based on forecast, lead time, and safety stock.", icon: Boxes },
            { title: "Automated Replenishment", description: "Generates purchase orders or transfer requests automatically when stock is low.", icon: Warehouse },
            { title: "Cross-Location Balancing", description: "Identifies opportunities to move stock between stores or warehouses to meet local demand.", icon: Shuffle },
          ].map((capability, idx) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <Card className="flex flex-col items-center p-8 bg-card dark:bg-card shadow-lg rounded-2xl border border-border dark:border-border hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="mb-4 p-3 rounded-full bg-teal-100 dark:bg-teal-900/50">
                  <capability.icon size={28} className="text-teal-500 dark:text-teal-400" />
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
             Agent Collaboration for Optimal Stock
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
               Store Agents report sales and stock levels. Warehouse Agents manage distribution center inventory. Supplier Agents provide lead times. The Coordinator Agent uses this data and demand forecasts to trigger optimal replenishment actions across the network.
             </p>
             {/* Consider adding a simple visual or animated graphic here */}
           </motion.div>
         </section>

        {/* Benefits Section */}
        <section className="w-full bg-muted dark:bg-muted py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">Unlock Inventory Efficiency</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Lower Holding Costs</CardTitle>
                  <CardDescription>Reduce capital tied up in unnecessary stock and minimize storage expenses.</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Increase Inventory Turnover</CardTitle>
                  <CardDescription>Improve cash flow by selling products faster and replenishing efficiently.</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enhance Product Availability</CardTitle>
                  <CardDescription>Meet customer demand consistently across all sales channels.</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Reduce Waste & Spoilage</CardTitle>
                  <CardDescription>Minimize losses from expired or obsolete inventory, especially for perishable goods.</CardDescription>
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

export default InventoryOptimizationPage;