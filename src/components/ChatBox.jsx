import { useState } from "react";

function ChatBox() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (!message.trim()) return;

    setMessages([...messages, message]);
    setMessage("");
  };

  return (
    <>
      {/* FLOAT BUTTON */}
      <div className="chat-toggle" onClick={() => setOpen(!open)}>
        💬
      </div>

      {/* CHAT WINDOW */}
      {open && (
        <div className="chat-container">

          <div className="chat-header">
            <h4>Chat Support</h4>
            <span onClick={() => setOpen(false)}>✖</span>
          </div>

          <div className="chat-messages">
            {messages.length === 0 ? (
              <p className="empty">No messages yet</p>
            ) : (
              messages.map((msg, i) => (
                <div key={i} className="chat-bubble">
                  {msg}
                </div>
              ))
            )}
          </div>

          <div className="chat-input">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>

        </div>
      )}
    </>
  );
}

export default ChatBox;