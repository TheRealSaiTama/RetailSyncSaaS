import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ChatMessage, generateChatResponse } from '../lib/gemini';

interface ChatContextProps {
  messages: ChatMessage[];
  addMessage: (content: string) => void;
  isLoading: boolean;
  clearChat: () => void;
  isChatOpen: boolean; // Add state for chat visibility
  toggleChat: () => void; // Add function to toggle visibility
}

const ChatContext = createContext<ChatContextProps | undefined>(undefined);

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};

interface ChatProviderProps {
  children: ReactNode;
}

// Initial welcome message from the chatbot
const WELCOME_MESSAGE: ChatMessage = {
  role: 'model',
  content: "Hello! I'm RetailSync's virtual assistant. How can I help you with your retail inventory management needs today?"
};

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false); // Initialize chat as closed

  // Load messages from localStorage on component mount
  useEffect(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    if (savedMessages) {
      try {
        const parsedMessages = JSON.parse(savedMessages);
        if (Array.isArray(parsedMessages) && parsedMessages.length) {
          setMessages(parsedMessages);
        }
      } catch (e) {
        console.error('Error parsing saved chat messages:', e);
      }
    }
  }, []);

  // Save messages to localStorage when they change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('chatMessages', JSON.stringify(messages));
    }
  }, [messages]);

  const addMessage = async (content: string) => {
    // Add user message
    const userMessage: ChatMessage = { role: 'user', content };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    
    // Set loading state
    setIsLoading(true);
    
    try {
      // Get AI response
      const response = await generateChatResponse([...messages, userMessage]);
      
      // Add AI response to messages
      const aiMessage: ChatMessage = { role: 'model', content: response };
      setMessages(prevMessages => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error('Error in chat:', error);
      // Add error message
      const errorMessage: ChatMessage = { 
        role: 'model', 
        content: "I'm sorry, I encountered an error. Please try again or contact our support team directly."
      };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([WELCOME_MESSAGE]);
    localStorage.removeItem('chatMessages');
  };

  const toggleChat = () => {
    setIsChatOpen(prev => !prev);
  };

  return (
    <ChatContext.Provider value={{ messages, addMessage, isLoading, clearChat, isChatOpen, toggleChat }}>
      {children}
    </ChatContext.Provider>
  );
};