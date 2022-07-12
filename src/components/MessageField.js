import React, { useState } from "react";
import { TextField } from "@material-ui/core";

export const MessageField = ({ name, setText, text }) => {
  const [isComposed, setisComposed] = useState(false);
  return (
    <TextField
      fullWidth={true}
      onChange={(e) => {
        setText(e.target.value);
      }}
      onKeyDown={(e) => {
        if (isComposed) return;
        const text = e.target.value;
        if (text === "") return;
        if (e.key === "Enter") {
          console.log("message to firebase");
          setText("");
          e.preventDefault();
        }
      }}
      onCompositionStart={() => {
        setisComposed(true);
      }}
      onCompositionEnd={() => {
        setisComposed(false);
      }}
      value={text}
    />
  );
};

// export default MessageField;
