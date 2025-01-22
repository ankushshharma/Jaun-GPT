import React, { useEffect, useState } from 'react';
import './css/ChatScreen.css';
import Input from './ui/Input';
import Navbar from './Navbar';
import BlurText from "./BlurText";
import { useLocation } from 'react-router-dom';


const ChatScreen = () => {
  const location = useLocation();
  const quotations = location.state?.quotations || [];
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    if (quotations.length > 0) {
      const interval = setInterval(() => {
        setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotations.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [quotations]);

  return (
    <div className="chat-screen animate-fade-in">
      <Navbar />
      <div className="chat-messages animate-fade-in">
        <div className="quotations animate-fade-in">
          {quotations.length > 0 && (
            <BlurText
              text={quotations[currentQuoteIndex].quote}
              delay={150}
              animateBy="words"
              direction="top"
              className="text-xl"
              fontSize="2.5rem"
              fontWeight="bold"
              WebkitTextStroke="1px currentColor"
              fontFamily="'Sorts Mill Goudy', serif"
              color="white"
            />
          )}
        </div>
      </div>
      <div className="input-component animate-fade-in">
        <Input />
      </div>
    </div>
  );
};

export default ChatScreen;
