import React, { useState } from "react";

const UserInput = () => {
  const [inputText, setInputText] = useState(""); // For text input
  const [speechText, setSpeechText] = useState(""); // For speech input
  const [listening, setListening] = useState(false); // To track speech recognition state

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = SpeechRecognition ? new SpeechRecognition() : null;

  const handleTextChange = (e) => setInputText(e.target.value);

  const startListening = () => {
    if (!recognition) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    setListening(true);
    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSpeechText(transcript);
      setListening(false);
    };

    recognition.onerror = () => {
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };
  };

  return (
    <div className="flex flex-col items-center h-screen bg-gradient-to-br from-blue-300 to-purple-200 text-gray-800 p-6">
      <div className="bg-white bg-opacity-80 p-8 rounded-xl shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">
          Provide Your Input
        </h2>
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2 text-gray-700">
            Text Input:
          </label>
          <input
            type="text"
            value={inputText}
            onChange={handleTextChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Type something here..."
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2 text-gray-700">
            Speech Input:
          </label>
          <button
            onClick={startListening}
            className={`w-full px-4 py-2 rounded-lg text-white font-medium ${
              listening
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-primary hover:bg-purple-700"
            }`}
            disabled={listening}
          >
            {listening ? "Listening..." : "Start Speaking"}
          </button>
          {speechText && (
            <p className="mt-4 text-gray-700">
              <strong>Recognized Speech:</strong> {speechText}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserInput;
