import { useState, useEffect } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router";
import { ChatInterface } from "../components/chat/ChatInterface";
import { ChatLayout } from "../components/chat/ChatLayout";
import { chatData } from "../data/chatData";

export function meta({ params }: { params: { chatType: string } }) {
  const chatType = params.chatType;
  const chatInfo = getChatInfo(chatType);
  
  return [
    { title: `${chatInfo.title} - SkillSync` },
    { name: "description", content: chatInfo.description },
  ];
}

function getChatInfo(chatType: string) {
  const chatTypes: Record<string, { title: string; description: string }> = {
    general: {
      title: "General AI Assistant",
      description: "Get answers to general questions about careers, skills, and professional development."
    },
    career: {
      title: "Career Guidance Chat",
      description: "Receive personalized career advice and explore potential career paths based on your skills and interests."
    },
    skills: {
      title: "Skill Assessment Chat",
      description: "Evaluate your current skills and identify areas for improvement to reach your career goals."
    }
  };
  
  return chatTypes[chatType] || chatTypes.general;
}

export default function ChatPage() {
  const { chatType } = useParams<{ chatType: string }>();
  const [searchParams] = useSearchParams();
  const chatIdFromUrl = searchParams.get('chatId');
  const navigate = useNavigate();
  
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
  
  // Get chat data for the current type
  const validChatType = chatType && ['general', 'career', 'skills'].includes(chatType) 
    ? chatType 
    : 'general';
    
  const chatInfo = getChatInfo(validChatType);
  
  // Redirect if chat type is invalid
  useEffect(() => {
    if (chatType && !['general', 'career', 'skills'].includes(chatType)) {
      navigate('/chat', { replace: true });
    }
  }, [chatType, navigate]);
  
  // Get chat history for this chat type
  const typeChatHistory = chatData[validChatType as keyof typeof chatData] || [];
  
  // State for current chat ID
  const [currentChatId, setCurrentChatId] = useState<string | null>(chatIdFromUrl);
  
  // Set current chat to the first one if not set
  useEffect(() => {
    if (typeChatHistory.length > 0 && !currentChatId) {
      setCurrentChatId(typeChatHistory[0].id);
    }
  }, [typeChatHistory, currentChatId]);
  
  // Update URL when chat ID changes
  useEffect(() => {
    if (currentChatId) {
      navigate(`/chat/${validChatType}?chatId=${currentChatId}`, { replace: true });
    }
  }, [currentChatId, validChatType, navigate]);
  
  // Get current chat data
  const currentChat = typeChatHistory.find(chat => chat.id === currentChatId) || null;
  
  return (
    <ChatLayout 
      chatHistory={allChatHistory}
      currentChatId={currentChatId}
      onSelectChat={(id) => {
        // Find the chat to determine its type
        const chat = allChatHistory.find(c => c.id === id);
        if (chat && chat.type) {
          // Navigate to the specific chat type and ID
          navigate(`/chat/${chat.type}?chatId=${id}`);
        }
      }}
      onNewChat={() => {
        // Navigate to the chat selection page
        navigate('/chat');
      }}
    >
      {currentChat ? (
        <ChatInterface 
          chatType={validChatType}
          chatInfo={chatInfo}
          messages={currentChat.messages}
        />
      ) : (
        <div className="h-full flex items-center justify-center">
          <p className="text-gray-500 text-sm">Select a chat from the sidebar or start a new conversation</p>
        </div>
      )}
    </ChatLayout>
  );
}
