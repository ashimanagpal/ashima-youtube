import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [LiveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.message);

  useEffect(() => {
    const i = setInterval(() => {
      // always clear interval whenever you use it
      //API Polling
      console.log("API Polling");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message:
            generateRandomMessage(20) + "Lorem generate random text javascript",
        })
      );
    }, 5000);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="live-msgs">
      <div className="live-msg-head">
        <p>Live Chat</p>
      </div>
      <div className="live-msg-maincontainer">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
        ,
      </div>

      <div className="send-msg">
        <div className="live-msg-container">
          <div className="author-pic">
            <img
              alt="img"
              height="24"
              width="24"
              src="https://yt4.ggpht.com/ytc/AOPolaShSdtazpm2McEtq2zH-ZQzAJu8tsZQUWHN8A=s32-c-k-c0x00ffffff-no-rj"
            />
          </div>
          <div className="content">
            <span className="author-name">Ashima Nagpal</span>

            <form className="chat_input" onSubmit={(e) => {
              e.preventDefault();
              dispatch(
                addMessage({
                  name: "Ashima",
                  message: LiveMessage,
                })
              );
              setLiveMessage("");
            }}>
              <input
                type="text"
                placeholder="Chat..."
                value={LiveMessage}
                onChange={(e) => {
                  setLiveMessage(e.target.value);
                }}
              />
              <button>
                <FontAwesomeIcon icon={faPaperPlane} />{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
