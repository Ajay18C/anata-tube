import React from "react";

const LiveMessage = ({name, message}) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        alt="user"
        className="h-6"
        src={`${process.env.PUBLIC_URL}/user.png`}
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default LiveMessage;
