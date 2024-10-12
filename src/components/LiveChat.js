import { useEffect, useState } from "react";
import LiveMessage from "./LiveMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/liveChatSlice";
import { generate, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveText, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const liveMessage = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generate(),
          message: makeRandomMessage(20),
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const handleSubmit = () => {
    dispatch(
      addMessage({
        name: "Ajay",
        message: liveText,
      })
    );
    setLiveMessage('');
  };
  return (
    <>
      <div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {liveMessage.map((message, id) => (
          <LiveMessage key={id} name={message.name} message={message.message} />
        ))}
      </div>
      <form
        className="w-full p-2 ml-10"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          className="p-2 w-64 border border-gray-200 rounded-md"
          type="text"
          value={liveText}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 h bg-gray-100 rounded-lg">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
