import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, RefreshCw, Maximize2, Minimize2 } from 'lucide-react';
import { useChat } from '../../context/ChatContext';
import ChatMessage from './ChatMessage';
import './ChatWidget.css';

const ChatWidget: React.FC = () => {
  const { messages, addMessage, isLoading, clearChat, isChatOpen, toggleChat } = useChat();
  const [inputValue, setInputValue] = useState('');
  const [isMinimized, setIsMinimized] = useState(true);
  const [hasUnread, setHasUnread] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (messages.length > 1 && !isChatOpen) {
      setHasUnread(true);
    }
  }, [messages, isChatOpen]);

  useEffect(() => {
    if (isChatOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isChatOpen, isMinimized]);

  const toggleMinimize = () => {
    setIsMinimized(prev => !prev);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && !isLoading) {
      addMessage(inputValue.trim());
      setInputValue('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleOpenChat = () => {
    if (!isChatOpen) {
      toggleChat();
    }
    setHasUnread(false);
  };

  return (
    <div className="chat-widget-container">
      <button 
        className={`chat-button ${hasUnread ? 'unread' : ''}`}
        onClick={handleOpenChat}
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
        {hasUnread && <span className="unread-indicator"></span>}
      </button>
      {isChatOpen && (
        <div className={`chat-window ${isMinimized ? 'minimized' : ''}`}>
          <div className="chat-header">
            <div className="chat-title">
              <MessageCircle size={18} />
              <span>RetailSync Assistant</span>
            </div>
            <div className="chat-actions">
              {isMinimized ? (
                <button onClick={toggleMinimize} aria-label="Maximize chat">
                  <Maximize2 size={18} />
                </button>
              ) : (
                <button onClick={toggleMinimize} aria-label="Minimize chat">
                  <Minimize2 size={18} />
                </button>
              )}
              <button onClick={clearChat} aria-label="Clear chat">
                <RefreshCw size={18} />
              </button>
              <button onClick={toggleChat} aria-label="Close chat">
                <X size={18} />
              </button>
            </div>
          </div>
          {!isMinimized && (
            <>
              <div className="chat-messages">
                {messages.map((message, index) => (
                  <ChatMessage key={index} message={message} />
                ))}
                {isLoading && <div className="chat-loading">AI is typing...</div>}
                <div ref={messagesEndRef} />
              </div>
              <form className="chat-input" onSubmit={handleSubmit}>
                <textarea
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  rows={1}
                  disabled={isLoading}
                />
                <button 
                  type="submit" 
                  disabled={!inputValue.trim() || isLoading}
                  aria-label="Send message"
                >
                  <Send size={18} />
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
