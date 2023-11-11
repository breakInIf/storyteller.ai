import { useState, useEffect } from "react";
import { ClimbingBoxLoader } from "react-spinners"

export function StoryLoading(){

    return (
        <p className="w-full text-center">Writing...</p>
    )
}

export const Typewriter = ({ text, delay, infinite }) => {

    //source: https://blog.logrocket.com/3-ways-implement-typing-animation-react/
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      let timeout;
  
      if (currentIndex <= text.length) {
        timeout = setTimeout(() => {
          setCurrentText(prevText => prevText + text[currentIndex]);
          setCurrentIndex(prevIndex => prevIndex + 1);
        }, delay);
  
      } else if (infinite) { // ADD THIS CHECK
        setCurrentIndex(0);
        setCurrentText('');
      }
  
      return () => clearTimeout(timeout);
    }, [currentIndex, delay, infinite, text]);
  
    return <span>{currentText}</span>;
  };

export function ButtonLoading(){

    const override = {
        margin: "0",
        padding: "0",
        height: "3rem",
        width: "3rem",
        marginLeft: "1rem"
      };

    return (
        <ClimbingBoxLoader
        color={"#000000"}
        cssOverride={override}
        loading={true}
        size={5}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    )
}