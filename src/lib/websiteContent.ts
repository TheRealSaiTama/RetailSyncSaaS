/**
 * This file contains structured content from the website that can be used
 * to augment the chatbot's responses with specific knowledge about the product.
 */

export const websiteContent = {
  company: {
    name: "RetailSync",
    description: "RetailSync is a cutting-edge SaaS platform that leverages multi-agent AI technology to revolutionize retail inventory management.",
    mission: "Our mission is to create a world where inventory is perfectly optimized—the right products, right places, right time.",
    team: [
      {
        name: "Keshav Kumar Jha",
        title: "CTO & Co-Founder",
        bio: "Competitive Programmer and Full Stack Developer",
        linkedin: "https://www.linkedin.com/in/therealsaitama"
      },
      {
        name: "Yuvika Juneja",
        title: "UI/UX Designer",
        bio: "UI/UX Designer and Frontend Developer",
        linkedin: "https://www.linkedin.com/in/yuvika-juneja-3aa995334/"
      },
      {
        name: "Manav Joshi",
        title: "Chief Product Officer",
        bio: "Backend Developer",
        linkedin: "https://www.linkedin.com/in/manav-joshi-80720b304/"
      },
      {
        name: "Shivam",
        title: "Chief Data Scientist",
        bio: "Expert in predictive modeling with previous experience optimizing supply chains",
        linkedin: "https://www.linkedin.com/in/shivamprasad5953/"
      }
    ]
  },
  
  product: {
    name: "RetailSync Platform",
    tagline: "Multi-Agent AI for Retail Inventory Optimization",
    description: "A collaborative ecosystem of AI agents that work together to optimize inventory across the entire retail supply chain.",
    keyFeatures: [
      {
        name: "Multi-Agent AI System",
        description: "Our platform features AI agents representing stores, warehouses, suppliers, and customers that communicate and collaborate in real-time to solve complex inventory challenges autonomously."
      },
      {
        name: "Demand Forecasting",
        description: "Advanced machine learning algorithms analyze historical sales data, seasonality, promotions, and external factors to predict future demand with high accuracy."
      },
      {
        name: "Inventory Optimization",
        description: "Automatically determines optimal stock levels for each product at each location to balance availability and efficiency."
      },
      {
        name: "Dynamic Pricing",
        description: "Adjusts prices in real-time based on demand, competition, inventory levels, and product lifecycle to maximize profits."
      },
      {
        name: "Supply Chain Coordination",
        description: "Facilitates seamless communication between retailers, warehouses, and suppliers to ensure efficient product flow."
      }
    ],
    benefits: [
      "Reduce stockouts by up to 80%",
      "Lower excess inventory by 25-30%",
      "Increase profit margins by 15-20%",
      "Improve customer satisfaction with better product availability",
      "Save time with automated inventory management"
    ]
  },
  
  pricing: {
    plans: [
      {
        name: "Essential",
        price: "$499/month",
        features: [
          "Basic demand forecasting",
          "Inventory optimization for up to 1,000 SKUs",
          "Standard reports and analytics",
          "Email support"
        ],
        idealFor: "Small retailers with limited inventory"
      },
      {
        name: "Professional",
        price: "$1,299/month",
        features: [
          "Advanced demand forecasting",
          "Inventory optimization for up to 10,000 SKUs",
          "Dynamic pricing recommendations",
          "Supply chain coordination",
          "Priority support with 24-hour response time"
        ],
        idealFor: "Mid-sized retailers with multiple locations"
      },
      {
        name: "Enterprise",
        price: "Custom pricing",
        features: [
          "Custom AI model training",
          "Unlimited SKUs",
          "Full-suite of features with custom integrations",
          "Advanced analytics and custom reporting",
          "Dedicated account manager",
          "24/7 premium support"
        ],
        idealFor: "Large retailers with complex inventory needs"
      }
    ],
    faq: [
      {
        question: "Do you offer a free trial?",
        answer: "Yes, we offer a 14-day free trial for our Essential and Professional plans. No credit card required."
      },
      {
        question: "Can I upgrade or downgrade my plan?",
        answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle."
      },
      {
        question: "Is there a setup fee?",
        answer: "There is no setup fee for Essential and Professional plans. Enterprise plans may have a one-time implementation fee depending on the complexity of your requirements."
      }
    ]
  },
  
  contact: {
    sales: "sales@retailsync.com",
    support: "support@retailsync.com",
    demo: "https://retailsync.com/demo",
    phone: "+1 (555) 123-4567",
    address: "123 AI Innovation Center, San Francisco, CA 94105"
  }
};

// Function to get the relevant content based on a topic
export function getContentByTopic(topic: string): any {
  const lowerTopic = topic.toLowerCase();
  
  if (lowerTopic.includes('company') || lowerTopic.includes('about') || lowerTopic.includes('team')) {
    return websiteContent.company;
  }
  
  if (lowerTopic.includes('product') || lowerTopic.includes('feature') || lowerTopic.includes('benefit')) {
    return websiteContent.product;
  }
  
  if (lowerTopic.includes('price') || lowerTopic.includes('plan') || lowerTopic.includes('cost')) {
    return websiteContent.pricing;
  }
  
  if (lowerTopic.includes('contact') || lowerTopic.includes('email') || lowerTopic.includes('support')) {
    return websiteContent.contact;
  }
  
  return null;
} 