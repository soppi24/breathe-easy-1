import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-300 via-purple-100 to-blue-200 text-gray-800">
      <div className="bg-white bg-opacity-80 p-10 rounded-2xl shadow-xl max-w-lg w-full">
        <h1 className="text-4xl font-bold text-primary mb-6 text-center">
          Stress & Time Management App
        </h1>
        <button
          className="w-full bg-primary text-white py-3 px-6 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          onClick={() => navigate("/user-input")}
        >
          Get Started
        </button>
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-700">Features:</h3>
          <ul className="list-disc list-inside mt-4 text-gray-600">
            <li>✔ Accept user input (voice, text)</li>
            <li>✔ Upload your schedule</li>
            <li>✔ Answer a series of questions</li>
            <li>✔ Receive an optimized schedule</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
