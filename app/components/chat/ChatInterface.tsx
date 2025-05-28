import { useState, useRef, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";

interface Message {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: string;
}

interface ChatInterfaceProps {
  chatType: string;
  chatInfo: {
    title: string;
    description: string;
  };
  messages: Message[];
}

export function ChatInterface({ chatType, chatInfo, messages: initialMessages }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  
  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  
  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date().toISOString()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      const responses = {
        general: `I'm your general AI assistant. I can help you with various career-related questions. Here are some ways I can assist:

• Career planning and guidance
• Professional development advice
• Industry insights and trends
• Interview preparation tips
• Networking strategies

What would you like to know about today?`,
        career: `Based on your background and interests, I'd recommend exploring these career paths:

**Data Science:**
• High demand in current market
• Combines analytical and technical skills
• Average salary: $95,000 - $165,000
• Growth rate: 22% (much faster than average)

**UX Design:**
• Creative problem-solving focus
• User-centered approach
• Average salary: $75,000 - $125,000
• Growing field with remote opportunities

**Key next steps:**
• Build a portfolio showcasing relevant projects
• Consider relevant certifications
• Network with professionals in these fields`,
        skills: `From our assessment, here's your skill analysis:

**Your Strengths:**
• Problem-solving and analytical thinking
• Communication and presentation skills
• Adaptability and learning agility

**Areas for Development:**
• Technical skills in data analysis
• Project management methodologies
• Digital marketing knowledge

**Recommended Actions:**
• Take online courses in Python/SQL for data analysis
• Get certified in Agile/Scrum project management
• Practice with real-world projects to build portfolio`
      };
      
      const assistantMessage: Message = {
        id: Date.now().toString(),
        role: "assistant",
        content: responses[chatType as keyof typeof responses] || responses.general,
        timestamp: new Date().toISOString()
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };
  
  // Handle textarea height adjustment
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    
    // Reset height to auto to properly calculate the new height
    e.target.style.height = "auto";
    // Set the height based on the scroll height (content height)
    e.target.style.height = `${e.target.scrollHeight}px`;
  };
  
  return (
    <div className="h-full flex flex-col bg-gray-50">
      {/* Chat header */}
      <div className="p-3 border-b border-gray-200 bg-white shadow-sm">
        <h2 className="text-lg font-bold text-brand-primary-800">{chatInfo.title}</h2>
        <p className="text-xs text-gray-600">{chatInfo.description}</p>
      </div>
      
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 space-y-4">
        {messages.map(message => (
          <ChatMessage 
            key={message.id}
            message={message}
          />
        ))}
        
        {/* Typing indicator */}
        {isTyping && (
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-brand-primary-100 flex items-center justify-center mr-2">
              <img src="/images/ai-avatar.png" alt="AI" className="w-5 h-5" />
            </div>
            <div className="p-3 rounded-2xl bg-white max-w-3xl" style={{
              boxShadow: "4px 4px 10px #e6e6e6, -4px -4px 10px #ffffff"
            }}>
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-brand-primary-400 animate-bounce" style={{ animationDelay: "0ms" }}></div>
                <div className="w-2 h-2 rounded-full bg-brand-primary-400 animate-bounce" style={{ animationDelay: "150ms" }}></div>
                <div className="w-2 h-2 rounded-full bg-brand-primary-400 animate-bounce" style={{ animationDelay: "300ms" }}></div>
              </div>
            </div>
          </div>
        )}
        
        {/* Invisible element for auto-scrolling */}
        <div ref={messagesEndRef}></div>
      </div>
      
      {/* Input area */}
      <div className="p-3 border-t border-gray-200 bg-white">
        <form onSubmit={handleSubmit} className="flex items-end">
          <div className="flex-1 relative rounded-2xl overflow-hidden" style={{
            boxShadow: "inset 3px 3px 7px #e6e6e6, inset -3px -3px 7px #ffffff"
          }}>
            <textarea
              ref={inputRef}
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="w-full p-3 pr-10 bg-transparent border-none focus:ring-0 resize-none placeholder-gray-400 text-gray-800 text-sm"
              style={{ minHeight: "44px", maxHeight: "120px" }}
              rows={1}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
            />
            <div className="absolute right-2 bottom-2 text-gray-400">
              <button
                type="button"
                className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
                title="Upload file"
              >
                <i className="fas fa-paperclip text-xs"></i>
              </button>
            </div>
          </div>
          <button
            type="submit"
            className={`ml-2 p-2.5 rounded-full ${
              input.trim() && !isTyping 
                ? 'bg-brand-primary-600 hover:bg-brand-primary-700' 
                : 'bg-gray-300 cursor-not-allowed'
            } text-white transition-colors`}
            style={{
              boxShadow: "4px 4px 8px #e6e6e6, -4px -4px 8px #ffffff"
            }}
            disabled={!input.trim() || isTyping}
          >
            <i className="fas fa-paper-plane text-xs"></i>
          </button>
        </form>
        <div className="mt-1 text-xs text-gray-500 flex items-center">
          <i className="fas fa-info-circle mr-1"></i>
          <span>Press Enter to send, Shift+Enter for a new line</span>
        </div>
      </div>
    </div>
  );
}
