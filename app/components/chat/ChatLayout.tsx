import { type ReactNode } from "react";
import { ChatSidebar } from "./ChatSidebar";

interface ChatLayoutProps {
  children: ReactNode;
  chatHistory: any[];
  currentChatId: string | null;
  onSelectChat: (id: string) => void;
  onNewChat: () => void;
}

export function ChatLayout({ 
  children, 
  chatHistory, 
  currentChatId, 
  onSelectChat, 
  onNewChat 
}: ChatLayoutProps) {
  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="w-64 h-full">
        <ChatSidebar 
          chatHistory={chatHistory}
          currentChatId={currentChatId}
          onSelectChat={onSelectChat}
          onNewChat={onNewChat}
        />
      </div>
      
      {/* Main content area */}
      <div className="flex-1 overflow-hidden">
        {children}
      </div>
    </div>
  );
}
