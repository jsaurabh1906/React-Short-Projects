import { QRCodeCanvas } from "qrcode.react";
import React, { useState } from "react";

const QRCodeGenerator = () => {
  const [text, setText] = useState("");
  const [qrCode, setQRCode] = useState(null);
  const [error, setError] = useState(null);

  const generateQRCode = () => {
    if (!text || text.trim() === "") {
      setError("Please enter some text or URL");
      return;
    }

    setQRCode(text);
    setText("");
    setError(null);
  };

  return (
    <div className="w-full  flex flex-col items-center justify-center bg-sky-50 p-4">
      <h1 className="text-2xl w-full text-center font-bold bg-sky-700 text-white mb-6 py-2 rounded-2xl">
        QR Code Generator
      </h1>
      <input
        type="text"
        placeholder="Enter text or URL"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-1/2 px-4 py-2 text-md text-sky-800 rounded-md border-2 border-sky-300 focus:outline-none focus:border-sky-500 placeholder:text-sky-200"
      />
      {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
      <button
        onClick={generateQRCode}
        className="mt-4 px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600 transition-colors duration-300"
      >
        Generate QR Code
      </button>
      <div className="mt-6">
        {qrCode && (
          <QRCodeCanvas value={qrCode} size={200} className="mx-auto" />
        )}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
