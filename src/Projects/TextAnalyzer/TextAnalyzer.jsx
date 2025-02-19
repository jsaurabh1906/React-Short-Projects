import React, { useState } from "react";

//styles
const h3Styles = "text-lg font-bold text-center text-violet-700 mb-2";
const pStyles = "text-violet-400 text-center font-bold mb-2 border-b-2 pb-2";
const spanStyles = "font-medium text-sm";
const TextAnalyzer = () => {
  const [text, setText] = useState("");

  const analyzeText = () => {
    // TODO: Implement text analysis logic
    const totalChars = text.length;

    // Count Letters (excluding spaces)
    const letters = (text.match(/[a-zA-Z]/g) || []).length;

    // Count Words
    const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

    // Count Sentences
    const sentences = text
      .split(/[.!?]+/)
      .filter((sentence) => sentence.trim().length > 0).length;

    // Count special Characters
    const specialChars = (
      text.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]+/g) || []
    ).length;

    return {
      totalChars,
      letters,
      words,
      sentences,
      specialChars,
    };
  };

  const stats = analyzeText();

  return (
    <div className="w-full flex flex-col items-center justify-center bg-violet-100 p-4">
      <h1 className="text-2xl w-full text-center font-bold bg-violet-700 text-white mb-6 py-2 rounded-2xl">
        Text Analyzer
      </h1>
      <div className="w-2/3">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-48 p-4 bg-violet-50/90 border-2 border-violet-200 rounded-2xl focus:outline-none focus:border-violet-500 placeholder:text-violet-200 transition-colors duration-300"
          placeholder="Enter your text here..."
        />
      </div>
      <div className="w-2/3 mt-4">
        {!text && (
          <p className="text-violet-400 text-center">
            Add some text to get analysis
          </p>
        )}
        <div
          className={`bg-white rounded-md shadow-lg py-4 px-6 transition-all duration-300 ${
            text ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <h2 className="text-2xl font-bold text-center text-violet-700 underline mb-4">
            Analysis
          </h2>
          <h3 className={h3Styles}>
            Total Characters
            <span className={spanStyles}>
              {" "}
              (including spaces and special characters)
            </span>
          </h3>
          <p className={pStyles}>{stats.totalChars}</p>
          <h3 className={h3Styles}>
            Letters <span className={spanStyles}>(a-z, A-Z only)</span>
          </h3>{" "}
          <p className={pStyles}> {stats.letters}</p>
          <h3 className={h3Styles}>Words </h3>{" "}
          <p className={pStyles}>{stats.words}</p>
          <h3 className={h3Styles}>
            Sentences<span className={spanStyles}> (based on .!? endings)</span>
          </h3>
          <p className={pStyles}> {stats.sentences}</p>
          <h3 className={h3Styles}>Special Characters </h3>
          <p className={pStyles}> {stats.specialChars}</p>
        </div>
      </div>
    </div>
  );
};

export default TextAnalyzer;
