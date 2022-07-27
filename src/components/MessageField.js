import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { pushMessage } from "../firebase";

export const MessageField = ({ inputEl, name, setText, text }) => {
  const [isComposed, setisComposed] = useState(false);
  return (
    <TextField
      autoFocus
      fullWidth={true}
      inputRef={inputEl}
      onChange={(e) => {
        setText(e.target.value);
      }}
      onKeyDown={(e) => {
        if (isComposed) return;
        const text = e.target.value;
        if (text === "") return;
        if (e.key === "Enter") {
          pushMessage({ name: "Atsuko", text });
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
