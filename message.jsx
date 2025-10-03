import React from "react";

function Message() {
  const [messages, setMessages] = React.useState([
    { sender: "system", text: 'Chat Started with ${user}'},
  ]);
  const [newMsg, setNewMsg] = React.useState("");

  const sendMessage = () => {
    if (!newMsg.trim()) return;
    setMessages([...messages, { sender: "me", text: newMsg }]);
    setNewMsg("");
  };

  return (
    <div className="chat-container">
      <h2>Messages</h2>
      <div className="chat-box">
        {messages.map((msg, i) => (
          <div key={i} className={`chat-message ${msg.sender}`}>
            <strong>{msg.sender}:</strong>
            {msg.text}
            </div>
        ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={newMsg}
            onChange={(e) => setNewMsg(e.target.value)}
            placeholder="Type a message..."
            />
            <botton onClick={sendMessage}>Send</botton>

      </div>
    </div>
  );
}

export default Message;