import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion
import "./QRPage.css";

const QRPage = () => {
  return (
    <div className="qr-container">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Click below to reveal your surprise! 💌
      </motion.h2>

      
      <div className="image-gallery">
        <motion.img
          src="src\assets\Images\5df10585-0d21-4e27-8751-250a09ab28bf.jpeg"
          alt="Us Together"
          className="qr-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
        />
        <motion.img
          src="src/assets/Images/a8ea58b1-7eed-4b52-8588-a88451df2e19.jpeg"
          alt="Another Moment"
          className="qr-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
        />

<motion.img
          src="src/assets/Images/b3ecdd42-d776-4f26-9b23-1a9eacfc52a1.jpeg"
          alt="Another Moment"
          className="qr-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
        />



<motion.img
          src="src/assets/Images/IMG_0865.jpeg"
          alt="Another Moment"
          className="qr-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
        />

<motion.img
          src="src/assets/Images/IMG_0867.jpeg"
          alt="Another Moment"
          className="qr-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
        />

<motion.img
          src="src/assets/Images/IMG_0868.jpeg"
          alt="Another Moment"
          className="qr-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
        />

<motion.img
          src="src/assets/Images/IMG_0869.jpeg"
          alt="Another Moment"
          className="qr-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
        />
      </div>

      
      <div className="video-gallery">
        <motion.video
          className="qr-video"
          controls
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <source src="src/assets/Videos/IMG_8183.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>

      
      </div>

      
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <Link to="/message">
          <button>Go to Surprise</button>
        </Link>
      </motion.div>
    </div>
  );
};

export default QRPage;
