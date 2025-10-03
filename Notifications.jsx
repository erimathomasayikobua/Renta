import React, { useState } from "react";

function Notifications() {
  const [messages, setMessages] = useState([]);

  const addNotification = (text) => {
    const id = Date.now();
    setMessages([...messages, { id, text }]);

    setTimeout(() => {
      setMessages((prev) => prev.filter((msg) => msg.id !== id));
    }, 3000);
  };

  return (
    <div>
      <button onClick={() => addNotification("New ride available 🚗")}>
        Show Pop-up
      </button>

      <div className="toast-container">
        {messages.map((msg) => (
          <div key={msg.id} className="toast">
            {msg.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications