"use client";

import { useState } from "react";

export default function PathPalController() {
  const [status, setStatus] = useState("Ready");

  // Base URL of ESP32 Web Server
  const ESP32_URL = "http://192.168.4.1";

  // Function to send HTTP requests to ESP32
  const sendCommand = async (command) => {
    try {
      const response = await fetch(`${ESP32_URL}/${command}`);
      const text = await response.text();
      setStatus(text); // Update status on UI
    } catch {
      setStatus("Failed to connect. Ensure you're on ESP32 Wi-Fi.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-white p-6">
      <h1 className="text-3xl font-bold mb-4">PathPal Trolley Control</h1>
      
      <div className="grid grid-cols-3 gap-4">
        <button className="btn" onClick={() => sendCommand("moveForward")}>⬆ Forward</button>
        <button className="btn" onClick={() => sendCommand("turnLeft")}>⬅ Left</button>
        <button className="btn" onClick={() => sendCommand("turnRight")}>➡ Right</button>
        <button className="btn" onClick={() => sendCommand("moveBackward")}>⬇ Backward</button>
        <button className="btn stop" onClick={() => sendCommand("stop")}>⏹ Stop</button>
      </div>

      <p className="mt-6 text-lg">Status: {status}</p>

      <style jsx>{`
        .btn {
          background: #1e293b;
          padding: 15px 30px;
          font-size: 18px;
          border-radius: 8px;
          cursor: pointer;
          transition: 0.3s;
        }
        .btn:hover { background: #334155; }
        .stop { background: #dc2626; }
      `}</style>
    </div>
  );
}
