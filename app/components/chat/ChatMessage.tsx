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
  
  // Format message content with proper markdown-like formatting
  const formatContent = (content: string) => {
    // Split content into lines
    const lines = content.split('\n');
    const formattedLines: JSX.Element[] = [];
    
    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      
      if (!trimmedLine) {
        formattedLines.push(<br key={index} />);
        return;
      }
      
      // Handle bullet points (• or -)
      if (trimmedLine.startsWith('•') || trimmedLine.startsWith('-')) {
        formattedLines.push(
          <div key={index} className="flex items-start mb-1">
            <span className="text-brand-primary-600 mr-2 mt-0.5">•</span>
            <span>{trimmedLine.substring(1).trim()}</span>
          </div>
        );
      }
      // Handle bold text (**text**)
      else if (trimmedLine.includes('**')) {
        const parts = trimmedLine.split('**');
        const formattedParts = parts.map((part, partIndex) => {
          if (partIndex % 2 === 1) {
            return <strong key={partIndex} className="font-semibold">{part}</strong>;
          }
          return part;
        });
        formattedLines.push(
          <div key={index} className="mb-2 font-medium text-gray-900">
            {formattedParts}
          </div>
        );
      }
      // Regular text
      else {
        formattedLines.push(
          <div key={index} className="mb-1">
            {trimmedLine}
          </div>
        );
      }
    });
    
    return formattedLines;
  };
  
  if (isSystem) {
    return (
      <div className="flex justify-center">
        <div className="inline-block px-3 py-1.5 rounded-lg bg-gray-100 text-gray-700 text-xs max-w-md">
          {message.content}
        </div>
      </div>
    );
  }
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="flex-shrink-0 mr-2">
          <div className="w-8 h-8 rounded-full bg-brand-primary-100 flex items-center justify-center">
            <img src="/images/ai-avatar.jpg" alt="AI" className="w-5 h-5" />
          </div>
        </div>
      )}
      
      <div className="max-w-2xl">
        <div 
          className={`p-3 rounded-2xl text-sm ${
            isUser 
              ? 'bg-brand-primary-600 text-white ml-8' 
              : 'bg-white text-gray-800'
          }`}
          style={{
            boxShadow: isUser 
              ? "4px 4px 10px rgba(0, 114, 255, 0.2), -4px -4px 10px rgba(255, 255, 255, 0.1)" 
              : "4px 4px 10px #e6e6e6, -4px -4px 10px #ffffff"
          }}
        >
          {isUser ? message.content : formatContent(message.content)}
        </div>
        
        <div className={`mt-1 text-xs text-gray-500 ${isUser ? 'text-right' : 'text-left'}`}>
          {formattedTime}
        </div>
      </div>
      
      {isUser && (
        <div className="flex-shrink-0 ml-2">
          <div className="w-8 h-8 rounded-full bg-brand-primary-50 flex items-center justify-center">
            <i className="fas fa-user text-brand-primary-600 text-xs"></i>
          </div>
        </div>
      )}
    </div>
  );
}
