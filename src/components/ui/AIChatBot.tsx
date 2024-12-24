'use client';

import { useState, useEffect, useRef } from 'react';
import { ChatBubbleLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const responses = {
  greetings: [
    "Hello! How can I help you with sustainable fashion today?",
    "Hi there! Got questions about eco-friendly clothing?",
    "Welcome! I'm here to help you make sustainable fashion choices!"
  ],
  recycling_info: {
    how_to: "To recycle textiles: 1) Clean the items 2) Sort by material type 3) Find local recycling centers or donation points 4) Consider upcycling for creative reuse!",
    benefits: "Textile recycling reduces landfill waste, saves water and energy, reduces CO2 emissions, and creates job opportunities in the recycling industry.",
    materials: "Most textiles can be recycled, including: cotton, wool, polyester, nylon, and blended fabrics. Even damaged items can be recycled into new materials!"
  },
  sustainable_fashion: {
    tips: "Choose quality over quantity, buy second-hand, support sustainable brands, care for your clothes properly, and repair instead of replace when possible.",
    fast_fashion: "Fast fashion has a huge environmental impact. It leads to excessive waste, high water consumption, and poor working conditions.",
    alternatives: "Try thrift shopping, clothes swapping, renting for special occasions, or investing in timeless pieces from sustainable brands."
  },
  default: "I'm not sure about that, but I'd be happy to tell you about sustainable fashion, textile recycling, or how you can make a difference!"
};

const quickReplies = [
  "How do I recycle clothes?",
  "What materials can be recycled?",
  "Benefits of textile recycling",
  "Sustainable fashion tips",
  "Fast fashion impact",
  "Shopping alternatives"
];

export default function AIChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: "Hello! How can I help you with sustainable fashion today? Feel free to ask a question or choose from the suggestions below.", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (message: string) => {
    const lowerMessage = message.toLowerCase();

    // Check for greetings
    if (lowerMessage.match(/^(hi|hello|hey|greetings)/)) {
      return responses.greetings[Math.floor(Math.random() * responses.greetings.length)];
    }

    // Check for recycling questions
    if (lowerMessage.includes('how') && lowerMessage.includes('recycle')) {
      return responses.recycling_info.how_to;
    }
    if (lowerMessage.includes('benefits') && lowerMessage.includes('recycling')) {
      return responses.recycling_info.benefits;
    }
    if (lowerMessage.includes('materials') || lowerMessage.includes('what can')) {
      return responses.recycling_info.materials;
    }

    // Check for sustainable fashion questions
    if (lowerMessage.includes('sustainable') || lowerMessage.includes('eco friendly')) {
      return responses.sustainable_fashion.tips;
    }
    if (lowerMessage.includes('fast fashion')) {
      return responses.sustainable_fashion.fast_fashion;
    }
    if (lowerMessage.includes('alternative') || lowerMessage.includes('instead')) {
      return responses.sustainable_fashion.alternatives;
    }

    // Default response
    return responses.default;
  };

  const handleSend = (text: string) => {
    // Add user message
    setMessages(prev => [...prev, { text, isUser: true }]);
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      const response = generateResponse(text);
      setMessages(prev => [...prev, { text: response, isUser: false }]);
      setIsTyping(false);
    }, 1000);

    setInputValue('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`${
          isOpen ? 'hidden' : 'flex'
        } items-center justify-center p-2 bg-teal-700 text-white rounded-full hover:bg-teal-800 transition-colors shadow-lg`}
      >
        <Image 
          src="/images/eco-bot-avatar.svg" 
          alt="EchoBot" 
          width={40} 
          height={40}
          className="w-10 h-10"
        />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-96 max-h-[600px] flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-teal-700 text-white rounded-t-lg">
            <div className="flex items-center space-x-3">
              <Image 
                src="/images/eco-bot-avatar.svg" 
                alt="EchoBot" 
                width={32} 
                height={32}
                className="w-8 h-8"
              />
              <div>
                <h3 className="font-semibold">EchoBot</h3>
                <p className="text-xs text-teal-100">Sustainable Fashion Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-teal-100 hover:text-white transition-colors"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start items-start space-x-2'}`}
              >
                {!message.isUser && (
                  <Image 
                    src="/images/eco-bot-avatar.svg" 
                    alt="EchoBot" 
                    width={24} 
                    height={24}
                    className="w-6 h-6 mt-1"
                  />
                )}
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.isUser
                      ? 'bg-teal-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start items-start space-x-2">
                <Image 
                  src="/images/eco-bot-avatar.svg" 
                  alt="EchoBot" 
                  width={24} 
                  height={24}
                  className="w-6 h-6 mt-1"
                />
                <div className="bg-gray-100 rounded-lg px-4 py-2 flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          <div className="p-4 border-t border-gray-100">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Common Questions:</h4>
            <div className="flex flex-wrap gap-2">
              {quickReplies.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleSend(question)}
                  className="text-sm px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 hover:bg-teal-100 transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && inputValue.trim()) {
                    handleSend(inputValue.trim());
                  }
                }}
                placeholder="Type your message..."
                className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                onClick={() => inputValue.trim() && handleSend(inputValue.trim())}
                className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
