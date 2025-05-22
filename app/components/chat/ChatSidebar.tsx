import { useState } from "react";

interface ChatHistoryItem {
  id: string;
  title: string;
  date: string;
  preview: string;
  type?: string;
}

interface ChatSidebarProps {
  chatHistory: ChatHistoryItem[];
  currentChatId: string | null;
  onSelectChat: (id: string) => void;
  onNewChat: () => void;
}

export function ChatSidebar({ 
  chatHistory, 
  currentChatId, 
  onSelectChat,
  onNewChat
}: ChatSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter chat history based on search query
  const filteredHistory = searchQuery 
    ? chatHistory.filter(chat => 
        chat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        chat.preview.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : chatHistory;
  
  return (
    <div className="h-full flex flex-col bg-white border-r border-gray-200">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-bold text-brand-primary-800">Chat History</h2>
        <p className="text-sm text-gray-600 mt-1">Your previous conversations</p>
      </div>
      
      {/* New chat button */}
      <div className="p-4">
        <button
          onClick={onNewChat}
          className="w-full py-2 px-4 bg-brand-primary-600 hover:bg-brand-primary-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <i className="fas fa-plus"></i>
          <span>New Chat</span>
        </button>
      </div>
      
      {/* Search */}
      <div className="px-4 pb-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search conversations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 pl-8 rounded-lg border border-gray-300 placeholder-gray-400 text-gray-800 focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500"
          />
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">
            <i className="fas fa-search"></i>
          </div>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <i className="fas fa-times"></i>
            </button>
          )}
        </div>
      </div>
      
      {/* Chat history */}
      <div className="flex-1 overflow-y-auto">
        {filteredHistory.length > 0 ? (
          <div className="divide-y divide-gray-200">
            {filteredHistory.map(chat => (
              <button
                key={chat.id}
                onClick={() => onSelectChat(chat.id)}
                className={`w-full text-left p-4 hover:bg-gray-50 transition-colors ${
                  currentChatId === chat.id ? 'bg-brand-primary-50' : ''
                }`}
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-gray-900 truncate max-w-[80%]">{chat.title}</h3>
                  <span className="text-xs text-gray-500">{chat.date}</span>
                </div>
                <div className="flex items-center mt-1">
                  {chat.type && (
                    <span className={`text-xs px-2 py-0.5 rounded-full mr-2 ${
                      chat.type === 'general' ? 'bg-brand-primary-100 text-brand-primary-800' :
                      chat.type === 'career' ? 'bg-brand-secondary-100 text-brand-secondary-800' :
                      chat.type === 'resume' ? 'bg-brand-accent-100 text-brand-accent-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {chat.type.charAt(0).toUpperCase() + chat.type.slice(1)}
                    </span>
                  )}
                  <p className="text-sm text-gray-600 truncate">{chat.preview}</p>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="p-4 text-center text-gray-500">
            {searchQuery ? "No conversations found" : "No conversation history"}
          </div>
        )}
      </div>
      
      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            <span className="font-medium">SkillSync</span> AI Assistant
          </div>
          <button className="text-gray-500 hover:text-gray-700">
            <i className="fas fa-cog"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

