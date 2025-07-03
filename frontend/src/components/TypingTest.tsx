'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Theme } from '@/data/themes';

interface TypingTestProps {
  theme: Theme;
  onComplete: (results: {
    wpm: number;
    accuracy: number;
    time: number;
    errors: number;
  }) => void;
  onCancel: () => void;
}

export default function TypingTest({ theme, onComplete, onCancel }: TypingTestProps) {
  const [currentText, setCurrentText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState<number | null>(null);
  const [isComplete, setIsComplete] = useState(false);
  const [errors, setErrors] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [timeElapsed, setTimeElapsed] = useState(0);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Select random text from theme
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * theme.texts.length);
    setCurrentText(theme.texts[randomIndex]);
  }, [theme]);

  // Start timer when user starts typing
  useEffect(() => {
    if (userInput.length === 1 && !startTime) {
      setStartTime(Date.now());
      intervalRef.current = setInterval(() => {
        setTimeElapsed(prev => prev + 0.1);
      }, 100);
    }
  }, [userInput, startTime]);

  // Calculate WPM and accuracy
  useEffect(() => {
    if (startTime && timeElapsed > 0) {
      const wordsTyped = userInput.trim().split(/\s+/).length;
      const minutes = timeElapsed / 60;
      const currentWpm = Math.round(wordsTyped / minutes);
      setWpm(currentWpm);

      const totalCharacters = currentText.length;
      const errorCount = errors.length;
      const correctCharacters = totalCharacters - errorCount;
      const currentAccuracy = Math.round((correctCharacters / totalCharacters) * 100);
      setAccuracy(Math.max(0, currentAccuracy));
    }
  }, [userInput, timeElapsed, errors, currentText, startTime]);

  // Check for completion
  useEffect(() => {
    // Only complete if currentText is non-empty and user has typed the full text
    if (!isComplete && currentText.length > 0 && userInput.length === currentText.length && userInput === currentText) {
      setIsComplete(true);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      
      const finalTime = timeElapsed;
      const finalWpm = wpm;
      const finalAccuracy = accuracy;
      const finalErrors = errors.length;

      setTimeout(() => {
        onComplete({
          wpm: finalWpm,
          accuracy: finalAccuracy,
          time: finalTime,
          errors: finalErrors
        });
      }, 1000);
    }
  }, [userInput, currentText, isComplete, timeElapsed, wpm, accuracy, errors, onComplete]);

  // Handle input changes
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (isComplete) return;

    const value = e.target.value;
    setUserInput(value);

    // Check for errors
    const newErrors: number[] = [];
    for (let i = 0; i < value.length; i++) {
      if (value[i] !== currentText[i]) {
        newErrors.push(i);
      }
    }
    setErrors(newErrors);
  }, [currentText, isComplete]);

  // Handle keydown for special keys
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onCancel();
    }
  }, [onCancel]);

  // Focus input on mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const renderText = () => {
    const characters = currentText.split('');
    const userCharacters = userInput.split('');

    return characters.map((char, index) => {
      let className = 'text-gray-400';
      
      if (index < userCharacters.length) {
        if (userCharacters[index] === char) {
          className = 'text-green-400';
        } else {
          className = 'text-red-400 bg-red-900 bg-opacity-50';
        }
      } else if (index === userCharacters.length) {
        className = 'text-white bg-blue-600 bg-opacity-50';
      }

      return (
        <span key={index} className={className}>
          {char}
        </span>
      );
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">{theme.name}</h2>
        <p className="text-gray-400">{theme.description}</p>
      </div>

      {/* Stats Bar */}
      <div className="flex justify-between items-center mb-6 p-4 bg-gray-800 rounded-lg">
        <div className="flex space-x-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{wpm}</div>
            <div className="text-sm text-gray-400">WPM</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{accuracy}%</div>
            <div className="text-sm text-gray-400">Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">{timeElapsed.toFixed(1)}s</div>
            <div className="text-sm text-gray-400">Time</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-400">{errors.length}</div>
            <div className="text-sm text-gray-400">Errors</div>
          </div>
        </div>
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
        >
          Cancel
        </button>
      </div>

      {/* Typing Area */}
      <div className="bg-gray-800 rounded-lg p-8 mb-6">
        <div className="text-xl leading-relaxed mb-6 font-mono">
          {renderText()}
        </div>
        
        <input
          ref={inputRef}
          type="text"
          value={userInput}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          disabled={isComplete}
          className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white text-lg font-mono focus:outline-none focus:border-purple-500 disabled:opacity-50"
          placeholder="Start typing here..."
        />
      </div>

      {/* Instructions */}
      <div className="text-center text-gray-400 text-sm">
        <p>Press ESC to cancel • Type the text above as quickly and accurately as possible</p>
      </div>

      {/* Completion Message */}
      {isComplete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-green-400 mb-4">Test Complete!</h3>
            <p className="text-gray-300">Calculating your results...</p>
          </div>
        </div>
      )}
    </div>
  );
} 