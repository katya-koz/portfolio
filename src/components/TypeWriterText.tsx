import React, { useState, useEffect, useCallback } from "react";

interface TypeWriterTextProps {
  isLastLine?: boolean;
  children: string;
  speed?: number;
  handleCompletedTyping: () => void;
}

const TypeWriterText: React.FC<TypeWriterTextProps> = ({
  isLastLine = false,
  children,
  speed = 100,
  handleCompletedTyping,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCaretVisible, setIsCaretVisible] = useState(true);
  const [isTyping, setIsTyping] = useState(true);

  const onComplete = useCallback(() => {
    if (!isLastLine) {
      setIsCaretVisible(false);
    }
    handleCompletedTyping();
  }, [isLastLine, handleCompletedTyping]);

  useEffect(() => {
    if (currentIndex < children.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + children[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeoutId);
    }

    if (isTyping) {
      onComplete();
      setIsTyping(false);
    }
  }, [currentIndex, children, speed, isTyping, onComplete]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsCaretVisible((prev) => !prev);
    }, 500);

    if (!isTyping && !isLastLine) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isTyping, isLastLine]);

  return (
    <p className="terminal-font text-5xl font-bold">
      {displayedText}
      {isCaretVisible && <span className="caret">_</span>}
    </p>
  );
};

export default TypeWriterText;
