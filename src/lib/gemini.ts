import { GoogleGenerativeAI } from '@google/generative-ai';
import { websiteContent, getContentByTopic } from './websiteContent';

const getGeminiClient = () => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    console.error('Gemini API key is missing! Please add VITE_GEMINI_API_KEY to your .env file');
    return null;
  }
  return new GoogleGenerativeAI(apiKey);
};

const generateSystemContext = (): string => {
  const { company, product, pricing, contact } = websiteContent;
  return `
You are the AI assistant for ${company.name}, ${company.description}

ABOUT THE COMPANY:
${company.description}
Mission: ${company.mission}

PRODUCT INFORMATION:
Product: ${product.name} - ${product.tagline}
${product.description}

Key Features:
${product.keyFeatures.map(feature => `- ${feature.name}: ${feature.description}`).join('\n')}

Benefits:
${product.benefits.map(benefit => `- ${benefit}`).join('\n')}

PRICING PLANS:
${pricing.plans.map(plan => `
${plan.name} - ${plan.price}
Ideal for: ${plan.idealFor}
Features: ${plan.features.map(feature => `• ${feature}`).join(', ')}
`).join('\n')}

CONTACT INFORMATION:
Sales: ${contact.sales}
Support: ${contact.support}
Request a demo: ${contact.demo}
Phone: ${contact.phone}

INSTRUCTIONS FOR ASSISTANT:
1. You are a helpful, professional, and friendly customer support representative.
2. Provide accurate information based on the company data above.
3. For questions about pricing, features, or benefits, refer to the specific sections provided.
4. If asked about technical details not covered in the context, explain that you'd be happy to connect them with a product specialist.
5. Always encourage users to request a demo or contact sales for personalized information.
6. If users express interest in purchasing, guide them to the appropriate plan based on their needs.
7. Keep responses concise, clear, and helpful.
8. Maintain a professional but friendly tone.
9. Never make up information that's not in the provided context.
`;
};

const RETAIL_SYNC_CONTEXT = generateSystemContext();

export type ChatMessage = {
  role: 'user' | 'model' | 'system';
  content: string;
};

function analyzeUserMessage(message: string): string[] {
  const topics = [];
  const lowerMessage = message.toLowerCase();
  if (/company|about|team|who|founder|mission/i.test(lowerMessage)) {
    topics.push('company');
  }
  if (/product|feature|benefit|work|how|function|capability/i.test(lowerMessage)) {
    topics.push('product');
  }
  if (/price|cost|plan|subscription|payment|trial|free/i.test(lowerMessage)) {
    topics.push('pricing');
  }
  if (/contact|email|phone|support|help|demo|sales/i.test(lowerMessage)) {
    topics.push('contact');
  }
  return topics;
}

export async function generateChatResponse(messages: ChatMessage[]): Promise<string> {
  try {
    const genAI = getGeminiClient();
    if (!genAI) {
      return "I'm sorry, I'm not available at the moment. Please try again later or contact our support team directly.";
    }
    const lastUserMessage = messages.filter(msg => msg.role === 'user').pop();
    let enhancedContext = RETAIL_SYNC_CONTEXT;
    if (lastUserMessage) {
      const topics = analyzeUserMessage(lastUserMessage.content);
      if (topics.length > 0) {
        enhancedContext += "\n\nRELEVANT INFORMATION FOR THIS QUERY:\n";
        topics.forEach(topic => {
          const content = getContentByTopic(topic);
          if (content) {
            enhancedContext += `\n${JSON.stringify(content, null, 2)}\n`;
          }
        });
      }
    }
    const hasSystemMessage = messages.some(msg => msg.role === 'system');
    const chatMessages = hasSystemMessage 
      ? [...messages] 
      : [{ role: 'system', content: enhancedContext }, ...messages];
    const geminiMessages = chatMessages.map(msg => ({
      role: msg.role === 'model' ? 'model' : msg.role === 'system' ? 'user' : 'user',
      parts: [{ text: msg.content }],
    }));
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash-latest' });
    const chat = model.startChat({
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      },
      history: geminiMessages.slice(0, -1),
    });
    const lastUserMessageContent = geminiMessages[geminiMessages.length - 1]?.parts[0]?.text || '';
    if (!lastUserMessageContent) {
        console.error("No user message content found to send.");
        return "I'm sorry, I couldn't process your request. Please try again.";
    }
    const result = await chat.sendMessage(lastUserMessageContent);
    const response = result.response.text();
    return response;
  } catch (error) {
    console.error('Error generating chat response:', error);
    return "I'm sorry, I encountered an issue while trying to respond. Please try again in a moment or contact support if the problem persists.";
  }
}
