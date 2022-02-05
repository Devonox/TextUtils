import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };
  const handleLowClick = () => {
    setText(text.toLowerCase());
  };

  const HandleOnChange = (event) => {
    setText(event.target.value);
  };
  const vowelWords = () => {
    let vowels = "aeiou";
    let count = 0;
    for (let i = 0; i < text.length; i++) {
      if (vowels.includes(text[i])) {
        count++;
      }
    }
    return count;
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "#ed9511" : "black" }}
      >
        <h1 style={{ color: props.mode }}>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={HandleOnChange}
            value={text}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "rgb(1 7 26)",
              color: props.mode === "dark" ? "#ff692f" : "black",
              fontSize: "20px",
            }}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-2 my-1"
          onClick={handleUpClick}
        >
          Convert To UppperCase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2 my-1"
          onClick={handleLowClick}
        >
          Convert To LowerCase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2 my-1"
          onClick={() => {
            setText(text.split(" ").join(""));
          }}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "#ed9511" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").filter((element)=>{return element.length}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:""}</p>
        <p>
          <b> Vowel chars:</b> {vowelWords()}
        </p>
      </div>
    </>
  );
}
