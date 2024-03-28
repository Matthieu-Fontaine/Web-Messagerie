import React from 'react';

interface Message {
  id: number;
  content: string;
  sender: string;
}

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Messages</h1>
      <ul>
        {messages.map(message => (
          <li key={message.id} className="mb-2">
            <span className="font-bold">{message.sender}:</span> {message.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;
