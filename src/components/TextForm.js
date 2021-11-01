import React, { useState } from "react";

export default function TextForm(props) {
  const handelUpClick = () => {
    const newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to Uppercase", "success");
  };
  const handelLoClick = () => {
    const newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to Lowercase", "success");
  };
  const handelClClick = () => {
    const newText = "";
    setText(newText);
  };
  const handelOnChange = (event) => {
    setText(event.target.value);
  };
  const [Text, setText] = useState("");
  return (
    <>
      <div className="mb-3" style={{ color: props.Mode === 'dark' ? 'white' : "black" }}>
        <h1>{props.Heading}</h1>
        <textarea
          className="form-control"
          value={Text}
          id="exampleFormControlTextarea1"
          onChange={handelOnChange}
          rows="8"
          style={{ backgroundColor: props.Mode === 'dark' ? '#121841' : "white", color: props.Mode === 'dark' ? 'white' : "black" }}
        ></textarea>
        <button className="btn btn-primary me-1" onClick={handelUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary me-1" onClick={handelLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary me-1" onClick={handelClClick}>
          Clear Text
        </button>
      </div>
      <div className="container me-3" >
        <h1 style={{ color: props.Mode === 'dark' ? 'white' : "black" }} >Your Text Summery</h1>
        <p style={{ color: props.Mode === 'dark' ? 'white' : "black" }}>
          {Text.split(" ").length} Words and {Text.length} Character
        </p>
        <p style={{ color: props.Mode === 'dark' ? 'white' : "black" }}>{0.008 * Text.split(" ").length} Minutes to read the passage</p>
        <h3 style={{ color: props.Mode === 'dark' ? 'white' : "black" }}>Priview</h3>
        <p style={{ color: props.Mode === 'dark' ? 'white' : "black" }}>{Text}</p>
      </div>
    </>
  );
}
