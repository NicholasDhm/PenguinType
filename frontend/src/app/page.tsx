'use client';

import { useState, useEffect } from 'react';
import TypingTest from '@/components/TypingTest';
import ThemeSelector from '@/components/ThemeSelector';
import Stats from '@/components/Stats';
import { Theme, themes } from '@/data/themes';

export default function Home() {
  const [selectedTheme, setSelectedTheme] = useState<Theme>(themes[0]);
  const [isTestActive, setIsTestActive] = useState(false);
  const [testResults, setTestResults] = useState<{
    wpm: number;
    accuracy: number;
    time: number;
    errors: number;
  } | null>(null);

  const handleTestComplete = (results: {
    wpm: number;
    accuracy: number;
    time: number;
    errors: number;
  }) => {
    setTestResults(results);
    setIsTestActive(false);
  };

  const startNewTest = () => {
    setIsTestActive(true);
    setTestResults(null);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            PenguinType
          </h1>
          <p className="text-xl text-gray-300">
            Type your favorite movies, books, and themes
          </p>
        </header>

        {!isTestActive && !testResults && (
          <div className="max-w-4xl mx-auto">
            <ThemeSelector
              themes={themes}
              selectedTheme={selectedTheme}
              onThemeSelect={setSelectedTheme}
            />
            <div className="text-center mt-8">
              <button
                onClick={startNewTest}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-200 transform hover:scale-105"
          >
                Start Typing Test
              </button>
            </div>
        </div>
        )}

        {isTestActive && (
          <TypingTest
            theme={selectedTheme}
            onComplete={handleTestComplete}
            onCancel={() => setIsTestActive(false)}
          />
        )}

        {testResults && !isTestActive && (
          <div className="max-w-4xl mx-auto">
            <Stats results={testResults} />
            <div className="text-center mt-8 space-x-4">
              <button
                onClick={startNewTest}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-200 transform hover:scale-105"
        >
                Try Again
              </button>
              <button
                onClick={() => setTestResults(null)}
                className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-200"
        >
                Choose Different Theme
              </button>
            </div>
          </div>
        )}
    </div>
    </main>
  );
}
