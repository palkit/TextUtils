import React, { useState } from "react";
export default function Textform(props) {

  const [text, setText] = useState("Enter Text Here");
  const [clicked, setClicked] = useState(false);

  const upperCase = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to UPPERCASE", "success");
  };
  const lowerCase = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to LOWERCASE", "success");
  };
  const clear = () => {
    setText("");
     props.showAlert("TEXT CLEAR", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
    props.showAlert("EXTRA SPACES REMOVED", "success");
  };

  const handleOnClick = (event) => {
    // console.log("ON CHANGE");
    setText(event.currentTarget.value);
  };
  const handleFocus = () => {
    if (!clicked) {
      setText(""); // Clear only on first click
      setClicked(true); // So next time it won't clear
    }
  };
  const wordCount = text.trim().split(/\s+/).filter((word) => word.length > 0).length;

  return (
    <div className="container">
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1 " className="mb-2 mt-2" >
          {props.textarea}
        </label>
        <textarea
          className="form-control mb-2"
          value={text}
          onChange={handleOnClick}
          onFocus={handleFocus}
          id="exampleFormControlTextarea1"
          rows="9"
          ></textarea>

        <button className="btn btn-primary mx-1 mb-2" onClick={upperCase}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary mx-1 mb-2" onClick={lowerCase}>
          Convert To LowerCase
        </button>
        <button className="btn btn-primary mx-1 mb-2" onClick={clear}>
          Clear
        </button>
        <button
          className="btn btn-primary mx-1 mb-2"
          onClick={handleExtraSpaces}
          >
          Remove ExtraSpaces
        </button>
      </div>

      <div className="container py-3 ">
        <h2>Your Text Summary</h2>
        <p>
          {
            text
            .trim()
            .split(/\s+/)
            .filter((word) => word.length > 0).length
          }{" "}
          Words {text.length} Characters
        </p>
        <p>{(0.008 * wordCount).toFixed(2)} Minutes Read</p>

        <h3> Preview</h3>
        <p>{text.trim().length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </div>
  );
}
