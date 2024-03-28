import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<{ id: number; content: string; sender: string; }[]>([]);

  const sendMessage = (message: string) => {
    const newMessage = {
      id: messages.length + 1,
      content: message,
      sender: 'Moi',
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="max-w-lg flex flex-col h-screen p-4">
      <div className="bg-gray-200 p-4 rounded-lg flex-grow overflow-auto mb-4">
        <MessageList messages={messages} />
      </div>
      <div className="bg-gray-200 p-4 rounded-lg">
        <MessageForm onSendMessage={sendMessage} />
      </div>
    </div>
  );
};

export default ChatPage;
