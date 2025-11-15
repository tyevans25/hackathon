import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message
    const updatedMessages = [...messages, { sender: "user", text: input }];
    setMessages(updatedMessages);

    try {
      const res = await fetch("/api/openai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      // Add AI reply
      setMessages([
        ...updatedMessages,
        { sender: "ai", text: data.reply || "No response from AI." }
      ]);

    } catch (err) {
      console.error(err);
      setMessages([
        ...updatedMessages,
        { sender: "ai", text: "Error connecting to AI. Check backend." }
      ]);
    }

    setInput("");
  };

  return (
    <div className="chat-container">
      <h2 className="chat-title">AI Talent Concierge</h2>

      <div className="chat-window">
        {messages.map((m, i) => (
          <div key={i} className={`bubble ${m.sender}`}>
            {m.text}
          </div>
        ))}
      </div>

      <div className="chat-input-row">
        <input
          className="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tell me what you're looking for..."
        />
        <button className="chat-send" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}

export default Home;
