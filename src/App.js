import { useEffect, useState } from "react";
import "./App.css";
import { getDatabase } from "firebase/database";
import { ref, push, set, onChildAdded } from "firebase/database";

function App() {
  const [name, setName] = useState("");
  const [chats, setChats] = useState([
    // { name: "user1", message: "message1" },
    // { name: "dummyUser", message: "message2" },
  ]);
  const [msg, setMsg] = useState("");
  const db = getDatabase();
  const chatListRef = ref(db, "chats");

  const updateHeight = () => {
    const el = document.getElementById("chat");
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  };

  useEffect(() => {
    onChildAdded(chatListRef, (data) => {
      setChats((chats) => [...chats, data.val()]);
      setTimeout(() => {
        updateHeight();
      }, 100);
    });
  }, []);

  const sendChat = () => {
    const chatRef = push(chatListRef);
    set(chatRef, {
      name,
      message: msg,
    });
    setMsg("");
  };
  console.log(chats);
  return (
    <div>
      {name ? null : (
        <div>
          <input
            className="userInput"
            type="text"
            placeholder="Enter your name to chat with your friends..."
            onBlur={(e) => setName(e.target.value)}
          />
        </div>
      )}
      {name ? (
        <>
          <h3>User: {name}</h3>
          <div id="chat" className="chat__container">
            {chats.map((chat, i) => (
              <div
                key={i}
                className={`container ${chat.name === name ? "me" : ""}`}
              >
                <p className="chatbox">
                  <strong>{chat.name}: </strong>
                  <span>{chat.message}</span>
                </p>
              </div>
            ))}
          </div>
          <div className="btm">
            <input
              type="text"
              placeholder="Send Message"
              value={msg}
              onInput={(e) => setMsg(e.target.value)}
            />
            <button onClick={sendChat}>Send</button>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default App;
