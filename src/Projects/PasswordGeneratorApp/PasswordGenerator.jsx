import React, { useState, useEffect } from "react";
import "./PasswordGenerator.scss";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [strength, setStrength] = useState("medium");
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    let charset = "";
    let newPassword = "";

    if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    // Ensure at least one character type is selected
    if (charset === "") {
      setIncludeLowercase(true);
      charset = "abcdefghijklmnopqrstuvwxyz";
    }

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }

    setPassword(newPassword);
    calculateStrength(newPassword);
  };

  const calculateStrength = (pass) => {
    let score = 0;

    // Length check
    if (pass.length >= 8) score += 1;
    if (pass.length >= 12) score += 1;

    // Character variety check
    if (/[A-Z]/.test(pass)) score += 1;
    if (/[a-z]/.test(pass)) score += 1;
    if (/[0-9]/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass)) score += 1;

    // Set strength based on score
    if (score <= 2) setStrength("weak");
    else if (score <= 4) setStrength("medium");
    else setStrength("strong");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Generate password on initial load and when options change
  useEffect(() => {
    generatePassword();
  }, [
    length,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
  ]);

  return (
    <div className="password-generator">
      <h1 className="title">Password Generator</h1>
      {/* password display */}
      <div className="password-display">
        <input type="text" value={password} readOnly />
        <button className="copy-button" onClick={copyToClipboard}>
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      {/* strength meter */}
      <div className="strength-meter">
        <span>Strength:</span>
        <div className={`strength-indicator ${strength}`}>
          <div className="strength-bar"></div>
          <div className="strength-bar"></div>
          <div className="strength-bar"></div>
        </div>
        <span className="strength-text">
          {strength.charAt(0).toUpperCase() + strength.slice(1)}
        </span>
      </div>
      {/* options */}
      <div className="options">
        <div className="length-option">
          <div className="option-header">
            <label htmlFor="length">Password Length</label>
            <span>{length}</span>
          </div>
          <input
            id="length"
            type="range"
            min="4"
            max="30"
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
              e.target.style.setProperty(
                "--progress-value",
                `${((e.target.value - 4) / (30 - 4)) * 100}%`
              );
            }}
            style={{
              "--progress-value": `${((length - 4) / (30 - 4)) * 100}%`,
            }}
          />
        </div>

        <div className="checkbox-options">
          <div className="checkbox-option">
            <input
              id="uppercase"
              type="checkbox"
              checked={includeUppercase}
              onChange={() => setIncludeUppercase(!includeUppercase)}
            />
            <label htmlFor="uppercase">Include Uppercase Letters</label>
          </div>
          <div className="checkbox-option">
            <input
              id="lowercase"
              type="checkbox"
              checked={includeLowercase}
              onChange={() => setIncludeLowercase(!includeLowercase)}
            />
            <label htmlFor="lowercase">Include Lowercase Letters</label>
          </div>

          <div className="checkbox-option">
            <input
              id="numbers"
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
            />
            <label htmlFor="numbers">Include Numbers</label>
          </div>

          <div className="checkbox-option">
            <input
              id="symbols"
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
            />
            <label htmlFor="symbols">Include Symbols</label>
          </div>
        </div>
      </div>
      {/* generate button */}
      <button className="generate-button" onClick={generatePassword}>
        Generate New Password
      </button>{" "}
    </div>
  );
};

export default PasswordGenerator;
