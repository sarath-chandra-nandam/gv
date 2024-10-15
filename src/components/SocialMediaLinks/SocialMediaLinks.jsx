import React from 'react';
import { FaFacebook,  FaLinkedin, FaInstagram, FaYoutube,FaGlobe,FaWhatsapp } from 'react-icons/fa';
import './SocialMediaLinks.css'; // Import the CSS file

const SocialMediaLinks = () => {
  return (
    <div className="container">
      <div className="box">
        <h2 className="heading">Follow Us</h2>
        <div className="socialMediaList">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="link">
            <FaGlobe  size={30} className="icon" />
            <span className="text">Official Website</span>
          </a>
          <a href="https://www.instagram.com/gv_premium_foods?igsh=MTg4aHFmOWZnOHVmOA==" target="_blank" 
          rel="noopener noreferrer" className="link">
            <FaInstagram size={30} className="icon" />
            <span className="text">Instagram</span>
          </a>
          <a href="https://youtube.com/@gvpremiumfoods?si=AFMDmWFr9jkWeHzy" target="_blank" 
          rel="noopener noreferrer" className="link">
            <FaYoutube size={30} className="icon" />
            <span className="text">Youtube</span>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61566416638705&mibextid=ZbWKwL" target="_blank" 
          rel="noopener noreferrer" className="link">
            <FaFacebook size={30} className="icon" />
            <span className="text">Facebook </span>
          </a>
          <a href="https://wa.me/7382418886" target="_blank" 
          rel="noopener noreferrer" className="link">
            <FaWhatsapp size={30} className="icon" />
            <span className="text">Whatsapp </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
