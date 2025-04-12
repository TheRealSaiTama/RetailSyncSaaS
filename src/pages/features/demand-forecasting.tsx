import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { LineChart, TrendingUp, CloudLightning, Database } from 'lucide-react';
import { Badge } from "../../components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/ui/card";

const gradientBg = "bg-gradient-to-br from-blue-500 via-sky-500 to-cyan-400";

const DemandForecastingPage = () => {
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
              <LineChart size={32} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center drop-shadow-lg">
              Advanced Demand Forecasting
            </h1>
            <p className="mt-6 text-lg md:text-2xl text-white/90 max-w-3xl text-center font-medium">
              Predict future sales with unparalleled accuracy using AI that analyzes historical data, seasonality, weather, events, and market trends.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Badge className="bg-white/20 text-white text-base px-4 py-2 rounded-full shadow-lg">AI-Powered</Badge>
              <Badge className="bg-white/20 text-white text-base px-4 py-2 rounded-full shadow-lg">Real-time Data</Badge>
              <Badge className="bg-white/20 text-white text-base px-4 py-2 rounded-full shadow-lg">Granular Insights</Badge>
              <Badge className="bg-white/20 text-white text-base px-4 py-2 rounded-full shadow-lg">Proactive Planning</Badge>
            </div>
          </motion.div>
          {/* Animated background elements could go here */}
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
            Stay Ahead of Customer Demand
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-center text-muted-foreground max-w-3xl"
          >
            RetailSync's multi-agent system continuously learns and adapts. Our Demand Forecasting Agent processes vast amounts of data to generate precise predictions, enabling you to optimize stock levels, reduce waste, and maximize sales opportunities.
          </motion.p>
        </section>

        {/* Key Capabilities Section */}
        <section className="w-full max-w-6xl px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Machine Learning Models", description: "Utilizes sophisticated algorithms (like ARIMA, Prophet, LSTMs) trained on your specific data.", icon: TrendingUp },
            { title: "External Data Integration", description: "Incorporates weather forecasts, local events, holidays, and economic indicators.", icon: CloudLightning },
            { title: "Real-time Adjustments", description: "Continuously refines forecasts based on incoming POS data and agent interactions.", icon: Database },
          ].map((capability, idx) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <Card className="flex flex-col items-center p-8 bg-card dark:bg-card shadow-lg rounded-2xl border border-border dark:border-border hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="mb-4 p-3 rounded-full bg-blue-100 dark:bg-blue-900/50">
                  <capability.icon size={28} className="text-blue-500 dark:text-blue-400" />
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
             How Forecasting Works in RetailSync
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
               The Customer Agent analyzes buying patterns, the Store Agent provides real-time sales data, and external factors are integrated. The Coordinator Agent synthesizes this information, allowing the Demand Forecasting Agent to generate highly accurate predictions shared across the system.
             </p>
             {/* Consider adding a simple visual or animated graphic here */}
           </motion.div>
         </section>

        {/* Benefits Section */}
        <section className="w-full bg-muted dark:bg-muted py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">Benefits of Accurate Forecasting</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Reduce Stockouts</CardTitle>
                  <CardDescription>Ensure popular items are always available, preventing lost sales and customer frustration.</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Minimize Overstock</CardTitle>
                  <CardDescription>Avoid tying up capital in excess inventory and reduce holding costs and waste.</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Optimize Staffing</CardTitle>
                  <CardDescription>Align store staffing levels with predicted customer traffic and sales volume.</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Improve Promotions</CardTitle>
                  <CardDescription>Plan marketing campaigns and promotions more effectively based on anticipated demand.</CardDescription>
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

export default DemandForecastingPage;