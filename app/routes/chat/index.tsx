import { Link } from "react-router";
import { useState } from "react";
import { ChatOption } from "../../components/chat/ChatOption";
import { ChatLayout } from "../../components/chat/ChatLayout";
import { chatData } from "../../data/chatData";

export function meta() {
  return [
    { title: "Choose an AI Assistant - SkillSync" },
    { name: "description", content: "Select from our specialized AI assistants to help with your career journey." },
  ];
}

export default function ChatSelection() {
  // Filter out resume chats and combine all chat histories for the sidebar
  const allChatHistory = [
    ...Object.entries(chatData)
      .filter(([type]) => type !== 'resume') // Remove resume chats
      .flatMap(([type, chats]) => 
        chats.map(chat => ({
          ...chat,
          type
        }))
      )
  ];
  
  // Sort by date (assuming the date strings are comparable)
  allChatHistory.sort((a, b) => {
    if (a.date === "Today") return -1;
    if (b.date === "Today") return 1;
    if (a.date === "Yesterday") return -1;
    if (b.date === "Yesterday") return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  
  const [currentChatId, setCurrentChatId] = useState<string | null>(null);
  
  const chatOptions = [
    {
      id: "general",
      title: "General AI Assistant",
      description: "Get answers to general questions about careers, skills, and professional development.",
      icon: "robot",
      color: "primary"
    },
    {
      id: "career",
      title: "Career Guidance Chat",
      description: "Receive personalized career advice and explore potential career paths based on your skills and interests.",
      icon: "compass",
      color: "secondary"
    },
    {
      id: "skills",
      title: "Skill Assessment Chat",
      description: "Evaluate your current skills and identify areas for improvement to reach your career goals.",
      icon: "chart-bar",
      color: "accent"
    }
  ];

  return (
    <ChatLayout 
      chatHistory={allChatHistory}
      currentChatId={currentChatId}
      onSelectChat={(id) => {
        // Find the chat to determine its type
        const chat = allChatHistory.find(c => c.id === id);
        if (chat && chat.type) {
          // Navigate to the specific chat type and ID
          window.location.href = `/chat/${chat.type}?chatId=${id}`;
        }
      }}
      onNewChat={() => {
        // Reset current chat selection
        setCurrentChatId(null);
      }}
    >
      <div className="h-full flex flex-col">
        <div className="p-4 flex-1 overflow-y-auto">
          <h1 className="text-2xl font-bold text-brand-primary-800 mb-4 text-center">Choose an AI Assistant</h1>
          <p className="text-gray-600 text-center mb-8 text-sm">
            Select the type of assistance you need to get started with your personalized AI chat experience.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {chatOptions.map(option => (
              <ChatOption 
                key={option.id}
                id={option.id}
                title={option.title}
                description={option.description}
                icon={option.icon}
                color={option.color as "primary" | "secondary" | "accent"}
              />
            ))}
          </div>
        </div>
        
        {/* Message input area */}
        <div className="p-3 border-t border-gray-200 bg-white">
          <div className="flex items-end">
            <div className="flex-1 relative rounded-2xl overflow-hidden" style={{
              boxShadow: "inset 3px 3px 7px #e6e6e6, inset -3px -3px 7px #ffffff"
            }}>
              <textarea
                placeholder="Type a message to start a new chat..."
                className="w-full p-3 pr-10 bg-transparent border-none focus:ring-0 resize-none text-sm"
                style={{ minHeight: "44px", maxHeight: "120px" }}
                rows={1}
                disabled
              />
              <div className="absolute right-2 bottom-2 text-gray-400">
                <button
                  type="button"
                  className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
                  title="Upload file"
                  disabled
                >
                  <i className="fas fa-paperclip text-xs"></i>
                </button>
              </div>
            </div>
            <button
              className="ml-2 p-2.5 rounded-full bg-gray-300 text-white transition-colors cursor-not-allowed"
              style={{
                boxShadow: "4px 4px 8px #e6e6e6, -4px -4px 8px #ffffff"
              }}
              disabled
            >
              <i className="fas fa-paper-plane text-xs"></i>
            </button>
          </div>
          <div className="mt-1 text-xs text-gray-500 flex items-center">
            <i className="fas fa-info-circle mr-1"></i>
            <span>Select an assistant type to start chatting</span>
          </div>
        </div>
      </div>
    </ChatLayout>
  );
}
