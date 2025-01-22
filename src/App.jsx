import { useState } from 'react'
import SplitText from './components/SplitText'
import { motion } from 'framer-motion'
import BlurText from './components/BlurText'
import Button from './components/Button'
import './App.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Loader from './components/ui/Loader'
import ChatScreen from './components/ChatScreen'

function App() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0)
  const [isTextAnimationComplete, setIsTextAnimationComplete] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const [loading, setLoading] = useState(false);
  const [quotes, setQuotes] = useState([]);

  const handleAnimationComplete = () => {
    console.log('Animation complete');
    setIsTextAnimationComplete(true);
    setTimeout(() => {
      setShowButton(true);
    }, 500);
  };

  const handleButtonClick = async () => {
    setLoading(true);
    try {
      const response = await axios.post('https://jaun-gpt-backend.onrender.com/api/generate-quotes');
      console.log('API Response:', response.data.quotations);
      setQuotes(response.data.quotations);
      navigate('/chat-screen', { state: { quotations: response.data.quotations } });
    } catch (error) {
      console.error('Error generating quotes:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
       <div className="content flex flex-col items-center justify-center">
        <div className="logo">
          <SplitText
            text="JaunGPT"
            className="text-6xl font-semibold text-center"
            delay={150}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
            fontFamily="'Vujahday Script', cursive"
          />
        </div>
        <div className="button-wrapper" style={{ height: '80px' }}>
          {showButton && (
            <Button onClick={handleButtonClick} loading={loading} />
          )}
        </div>
        <div className="about">
          <motion.div
            initial={{ opacity: 0, transform: 'translateY(20px)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-sm"
          >
             <BlurText
              text="Your companion, a chatbot inspired by the wit and wisdom of Jaun Elia."
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-xl"
              fontSize="1.5rem"
              fontWeight="bold"
              WebkitTextStroke="1px currentColor"
              fontFamily="'Sorts Mill Goudy', serif"
            />
          </motion.div>
        </div>
      </div>
      
    </div>
  )
}

export default App