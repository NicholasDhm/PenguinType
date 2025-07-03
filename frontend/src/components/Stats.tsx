'use client';

interface StatsProps {
  results: {
    wpm: number;
    accuracy: number;
    time: number;
    errors: number;
  };
}

export default function Stats({ results }: StatsProps) {
  const getWpmColor = (wpm: number) => {
    if (wpm >= 80) return 'text-green-400';
    if (wpm >= 60) return 'text-yellow-400';
    if (wpm >= 40) return 'text-orange-400';
    return 'text-red-400';
  };

  const getAccuracyColor = (accuracy: number) => {
    if (accuracy >= 95) return 'text-green-400';
    if (accuracy >= 90) return 'text-yellow-400';
    if (accuracy >= 80) return 'text-orange-400';
    return 'text-red-400';
  };

  const getPerformanceMessage = () => {
    if (results.wpm >= 80 && results.accuracy >= 95) {
      return { message: 'Excellent! You are a typing master!', color: 'text-green-400' };
    } else if (results.wpm >= 60 && results.accuracy >= 90) {
      return { message: 'Great job! Keep practicing to improve further.', color: 'text-yellow-400' };
    } else if (results.wpm >= 40 && results.accuracy >= 80) {
      return { message: 'Good effort! Practice makes perfect.', color: 'text-orange-400' };
    } else {
      return { message: 'Keep practicing! Speed and accuracy will improve with time.', color: 'text-red-400' };
    }
  };

  const performance = getPerformanceMessage();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Your Results</h2>
        <p className={`text-xl ${performance.color}`}>{performance.message}</p>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {/* WPM */}
        <div className="bg-gray-800 rounded-xl p-6 text-center">
          <div className={`text-4xl font-bold mb-2 ${getWpmColor(results.wpm)}`}>
            {results.wpm}
          </div>
          <div className="text-gray-400 text-sm">Words Per Minute</div>
          <div className="mt-2 text-xs text-gray-500">
            {results.wpm >= 80 ? 'Expert' : 
             results.wpm >= 60 ? 'Advanced' : 
             results.wpm >= 40 ? 'Intermediate' : 'Beginner'}
          </div>
        </div>

        {/* Accuracy */}
        <div className="bg-gray-800 rounded-xl p-6 text-center">
          <div className={`text-4xl font-bold mb-2 ${getAccuracyColor(results.accuracy)}`}>
            {results.accuracy}%
          </div>
          <div className="text-gray-400 text-sm">Accuracy</div>
          <div className="mt-2 text-xs text-gray-500">
            {results.accuracy >= 95 ? 'Perfect' : 
             results.accuracy >= 90 ? 'Excellent' : 
             results.accuracy >= 80 ? 'Good' : 'Needs Work'}
          </div>
        </div>

        {/* Time */}
        <div className="bg-gray-800 rounded-xl p-6 text-center">
          <div className="text-4xl font-bold mb-2 text-purple-400">
            {results.time.toFixed(1)}s
          </div>
          <div className="text-gray-400 text-sm">Time</div>
          <div className="mt-2 text-xs text-gray-500">
            {results.time < 30 ? 'Lightning Fast' : 
             results.time < 60 ? 'Fast' : 
             results.time < 120 ? 'Moderate' : 'Take Your Time'}
          </div>
        </div>

        {/* Errors */}
        <div className="bg-gray-800 rounded-xl p-6 text-center">
          <div className="text-4xl font-bold mb-2 text-red-400">
            {results.errors}
          </div>
          <div className="text-gray-400 text-sm">Errors</div>
          <div className="mt-2 text-xs text-gray-500">
            {results.errors === 0 ? 'Perfect' : 
             results.errors <= 2 ? 'Excellent' : 
             results.errors <= 5 ? 'Good' : 'Practice More'}
          </div>
        </div>
      </div>

      {/* Performance Bars */}
      <div className="bg-gray-800 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4">Performance Breakdown</h3>
        
        {/* WPM Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span>Speed (WPM)</span>
            <span>{results.wpm}/100</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <div 
              className={`h-3 rounded-full transition-all duration-1000 ${
                results.wpm >= 80 ? 'bg-green-500' : 
                results.wpm >= 60 ? 'bg-yellow-500' : 
                results.wpm >= 40 ? 'bg-orange-500' : 'bg-red-500'
              }`}
              style={{ width: `${Math.min(results.wpm, 100)}%` }}
            />
          </div>
        </div>

        {/* Accuracy Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span>Accuracy</span>
            <span>{results.accuracy}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <div 
              className={`h-3 rounded-full transition-all duration-1000 ${
                results.accuracy >= 95 ? 'bg-green-500' : 
                results.accuracy >= 90 ? 'bg-yellow-500' : 
                results.accuracy >= 80 ? 'bg-orange-500' : 'bg-red-500'
              }`}
              style={{ width: `${results.accuracy}%` }}
            />
          </div>
        </div>

        {/* Efficiency Score */}
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>Efficiency Score</span>
            <span>{Math.round((results.wpm * results.accuracy) / 100)}/100</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <div 
              className="h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000"
              style={{ width: `${Math.min((results.wpm * results.accuracy) / 100, 100)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="bg-gray-800 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4">Tips for Improvement</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
          <div>
            <h4 className="font-semibold text-green-400 mb-2">For Speed:</h4>
            <ul className="space-y-1">
              <li>• Practice touch typing regularly</li>
              <li>• Focus on common letter combinations</li>
              <li>• Use proper finger positioning</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-400 mb-2">For Accuracy:</h4>
            <ul className="space-y-1">
              <li>• Slow down to improve precision</li>
              <li>• Proofread as you type</li>
              <li>• Practice with familiar content</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 