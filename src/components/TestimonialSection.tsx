
import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "RetailSync has completely transformed our inventory management. We've reduced stockouts by 62% and improved our gross margins significantly.",
    author: "Michael Johnson",
    title: "VP of Operations, National Retail Chain",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "The multi-agent system is genuinely revolutionary. It's like having an AI team working 24/7 to optimize our entire supply chain.",
    author: "Rebecca Chen",
    title: "Supply Chain Director, Fashion Retailer",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "As a store manager, I can finally focus on customer experience instead of constantly checking inventory. The system alerts me before issues arise.",
    author: "Thomas Rodriguez",
    title: "Store Manager, Electronics Retailer",
    image: "https://randomuser.me/api/portraits/men/67.jpg"
  }
];

const TestimonialSection = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-retail-blue to-retail-purple dark:from-retail-blue/80 dark:to-retail-purple/80 text-white dark:text-foreground transition-colors">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Leading Retailers</h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Hear from the businesses that have transformed their inventory management with RetailSync.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card dark:bg-card/80 backdrop-blur-sm rounded-xl p-6 card-hover transition-colors">
              <Quote size={36} className="text-muted-foreground mb-4" />
              <p className="mb-6 text-lg text-foreground">{testimonial.quote}</p>
              <div className="flex items-center">
                <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-3 text-foreground">Results That Speak for Themselves</h3>
            <p className="opacity-90 max-w-2xl mx-auto text-muted-foreground">
              Our clients consistently see significant improvements across key metrics after implementing RetailSync.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { metric: "2.8x", description: "Inventory Turnover Improvement" },
              { metric: "52%", description: "Reduction in Stockouts" },
              { metric: "38%", description: "Decrease in Holding Costs" },
              { metric: "9.4%", description: "Increase in Gross Margin" }
            ].map((stat, index) => (
              <div key={index} className="bg-card dark:bg-card/80 backdrop-blur-sm rounded-xl p-6 transition-colors">
                <div className="text-3xl md:text-4xl font-bold mb-2 text-foreground">{stat.metric}</div>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
