import React from "react";
import { Link } from "react-router-dom";
import "./QRPage.css";

const QRPage = () => {
  return (
    <div className="qr-container">
      <h2>Click below to reveal your surprise! 💌</h2>
      <Link to="/message">
        <button>Go to Surprise</button>
      </Link>
    </div>
  );
};

export default QRPage;
