interface Message {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: string;
}

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";
  const isSystem = message.role === "system";
  
  // Format timestamp
  const formattedTime = new Date(message.timestamp).toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit' 
  });
  
  if (isSystem) {
    return (
      <div className="flex justify-center">
        <div className="inline-block px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm max-w-md">
          {message.content}
        </div>
      </div>
    );
  }
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="flex-shrink-0 mr-3">
          <div className="w-10 h-10 rounded-full bg-brand-primary-100 flex items-center justify-center">
            <img src="/images/ai-avatar.jpg" alt="AI" className="w-6 h-6" />
          </div>
        </div>
      )}
      
      <div className="max-w-3xl">
        <div 
          className={`p-4 rounded-2xl ${
            isUser 
              ? 'bg-brand-primary-600 text-white ml-12' 
              : 'bg-white text-gray-800'
          }`}
          style={{
            boxShadow: isUser 
              ? "4px 4px 10px rgba(0, 114, 255, 0.2), -4px -4px 10px rgba(255, 255, 255, 0.1)" 
              : "4px 4px 10px #e6e6e6, -4px -4px 10px #ffffff"
          }}
        >
          {message.content}
        </div>
        
        <div className={`mt-1 text-xs text-gray-500 ${isUser ? 'text-right' : 'text-left'}`}>
          {formattedTime}
        </div>
      </div>
      
      {isUser && (
        <div className="flex-shrink-0 ml-3">
          <div className="w-10 h-10 rounded-full bg-brand-primary-50 flex items-center justify-center">
            <i className="fas fa-user text-brand-primary-600"></i>
          </div>
        </div>
      )}
    </div>
  );
}
