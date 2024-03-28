// MessageForm.tsx
import React, { useState } from 'react';

interface MessageFormProps {
  onSendMessage: (message: string) => void;
}

const MessageForm: React.FC<MessageFormProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSendMessage(message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <textarea
        value={message}
        onChange={handleMessageChange}
        className="w-full p-2 rounded-lg resize-none"
        placeholder="Votre message..."
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2">
        Envoyer
      </button>
    </form>
  );
};

export default MessageForm;
