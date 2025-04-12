import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Carousel, CarouselItem } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Scalability",
    description: "Easily scale your system by adding or removing agents without disrupting the overall architecture.",
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="18" stroke="#6366F1" strokeWidth="4" />
        <path d="M20 10v20M10 20h20" stroke="#6366F1" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Resilience",
    description: "Faults in one agent do not bring down the entire system, ensuring high availability and reliability.",
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
        <rect x="8" y="8" width="24" height="24" rx="6" stroke="#10B981" strokeWidth="4"/>
        <path d="M20 14v12M14 20h12" stroke="#10B981" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Flexibility",
    description: "Agents can be specialized for different tasks, allowing for rapid adaptation to new requirements.",
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
        <polygon points="20,6 34,34 6,34" stroke="#F59E42" strokeWidth="4" fill="none"/>
        <circle cx="20" cy="20" r="4" fill="#F59E42"/>
      </svg>
    ),
  },
];

const applications = [
  {
    title: "Retail Automation",
    description: "Multi-agent systems coordinate inventory, pricing, and supply chain agents for seamless retail operations.",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <rect x="8" y="24" width="48" height="28" rx="6" fill="#6366F1" />
        <rect x="14" y="32" width="12" height="12" rx="2" fill="#fff" />
        <rect x="38" y="32" width="12" height="12" rx="2" fill="#fff" />
        <rect x="8" y="18" width="48" height="10" rx="5" fill="#A5B4FC" />
        <rect x="24" y="44" width="16" height="8" rx="2" fill="#fff" />
      </svg>
    ),
  },
  {
    title: "Smart Grids",
    description: "Agents manage distributed energy resources, optimize loads, and ensure grid stability in real time.",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <rect x="12" y="44" width="40" height="8" rx="2" fill="#10B981" />
        <rect x="20" y="32" width="24" height="8" rx="2" fill="#6EE7B7" />
        <rect x="28" y="20" width="8" height="8" rx="2" fill="#A7F3D0" />
        <circle cx="32" cy="16" r="4" fill="#10B981" />
        <line x1="32" y1="20" x2="32" y2="44" stroke="#10B981" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: "Autonomous Vehicles",
    description: "Vehicle agents communicate and collaborate to optimize traffic flow and safety.",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <rect x="12" y="36" width="40" height="12" rx="6" fill="#F59E42" />
        <rect x="20" y="28" width="24" height="10" rx="5" fill="#FED7AA" />
        <circle cx="20" cy="52" r="4" fill="#F59E42" />
        <circle cx="44" cy="52" r="4" fill="#F59E42" />
        <rect x="28" y="24" width="8" height="4" rx="2" fill="#FDBA74" />
      </svg>
    ),
  },
  {
    title: "Personal Assistants",
    description: "Multiple specialized agents handle scheduling, communication, and information retrieval.",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <ellipse cx="32" cy="40" rx="16" ry="12" fill="#6366F1" />
        <ellipse cx="32" cy="28" rx="10" ry="8" fill="#A5B4FC" />
        <rect x="24" y="44" width="16" height="4" rx="2" fill="#fff" />
        <circle cx="32" cy="28" r="3" fill="#6366F1" />
        <rect x="28" y="18" width="8" height="4" rx="2" fill="#A5B4FC" />
      </svg>
    ),
  },
];

const howItWorks = [
  {
    question: "What is Multi-Agent Architecture?",
    answer: "Multi-agent architecture is a system design where multiple autonomous agents interact, collaborate, and negotiate to achieve complex goals. Each agent operates independently but can communicate and coordinate with others.",
  },
  {
    question: "How do agents communicate?",
    answer: "Agents use defined protocols and messaging systems to share information, delegate tasks, and synchronize actions, enabling dynamic and adaptive system behavior.",
  },
  {
    question: "What makes it different from monolithic systems?",
    answer: "Unlike monolithic systems, multi-agent architectures are decentralized, modular, and inherently resilient, making them ideal for complex, evolving environments.",
  },
];

const gradientBg = "bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-400";

const MultiAgentLandingPage = () => {
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
            <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center drop-shadow-lg">
              Multi-Agent Architecture
            </h1>
            <p className="mt-6 text-lg md:text-2xl text-white/90 max-w-2xl text-center font-medium">
              The next evolution in intelligent, adaptive, and scalable systems. Unlock the power of collaboration between autonomous agents to solve complex, real-world challenges.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Badge className="bg-white/20 text-white text-base px-4 py-2 rounded-full shadow-lg">Decentralized</Badge>
              <Badge className="bg-white/20 text-white text-base px-4 py-2 rounded-full shadow-lg">Collaborative</Badge>
              <Badge className="bg-white/20 text-white text-base px-4 py-2 rounded-full shadow-lg">Resilient</Badge>
              <Badge className="bg-white/20 text-white text-base px-4 py-2 rounded-full shadow-lg">Scalable</Badge>
            </div>
          </motion.div>
          {/* Animated SVG background */}
          <svg className="absolute left-1/2 top-0 -translate-x-1/2 opacity-30 z-0" width="1200" height="400" viewBox="0 0 1200 400" fill="none">
            <ellipse cx="600" cy="200" rx="500" ry="120" fill="url(#paint0_radial)" />
            <defs>
              <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(600 200) scale(500 120)" gradientUnits="userSpaceOnUse">
                <stop stopColor="#fff" stopOpacity="0.5"/>
                <stop offset="1" stopColor="#fff" stopOpacity="0"/>
              </radialGradient>
            </defs>
          </svg>
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
            What is Multi-Agent Architecture?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-center text-muted-foreground max-w-2xl"
          >
            Multi-agent architecture is a paradigm where independent, intelligent agents interact and collaborate to achieve shared or individual goals. This approach enables systems to be more adaptive, robust, and capable of handling complex, distributed tasks.
          </motion.p>
        </section>

        {/* Benefits Section */}
        <section className="w-full max-w-6xl px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <Card className="flex flex-col items-center p-8 bg-white/90 dark:bg-zinc-900/80 shadow-xl rounded-2xl border-0 hover:scale-105 transition-transform duration-300">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-base text-center text-muted-foreground">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </section>

        {/* How It Works Accordion */}
        <section className="w-full max-w-3xl px-4 py-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-center mb-6"
          >
            How It Works
          </motion.h3>
          <Accordion type="single" collapsible className="rounded-lg shadow-lg bg-white/80 dark:bg-zinc-900/80">
            {howItWorks.map((item, idx) => (
              <AccordionItem key={item.question} value={`item-${idx}`}>
                <AccordionTrigger className="text-lg font-medium">{item.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Real-World Applications Carousel */}
        <section className="w-full max-w-5xl px-4 py-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-center mb-8"
          >
            Real-World Applications
          </motion.h3>
          <Carousel className="w-full">
            {applications.map((app, idx) => (
              <CarouselItem key={app.title} className="flex flex-col items-center p-8">
                <div className="w-24 h-24 mb-4 rounded-full shadow-lg flex items-center justify-center bg-muted">{app.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{app.title}</h4>
                <p className="text-base text-center text-muted-foreground">{app.description}</p>
              </CarouselItem>
            ))}
          </Carousel>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MultiAgentLandingPage;