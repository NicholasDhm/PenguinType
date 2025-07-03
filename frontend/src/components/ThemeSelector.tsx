'use client';

import { useState } from 'react';
import { Theme } from '@/data/themes';

interface ThemeSelectorProps {
  themes: Theme[];
  selectedTheme: Theme;
  onThemeSelect: (theme: Theme) => void;
}

export default function ThemeSelector({ themes, selectedTheme, onThemeSelect }: ThemeSelectorProps) {
  const categories = ['all', 'movies', 'books', 'games', 'quotes', 'sci-fi', 'fantasy'] as const;
  const [selectedCategory, setSelectedCategory] = useState<'all' | Theme['category']>('all');

  const filteredThemes = selectedCategory === 'all' 
    ? themes 
    : themes.filter(theme => theme.category === selectedCategory);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Choose Your Theme</h2>
        <p className="text-gray-400">Select from movies, books, games, and more</p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Theme Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredThemes.map((theme) => (
          <div
            key={theme.id}
            onClick={() => onThemeSelect(theme)}
            className={`relative p-6 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
              selectedTheme.id === theme.id
                ? 'ring-2 ring-purple-500 ring-offset-2 ring-offset-slate-900'
                : 'hover:ring-2 hover:ring-purple-300 hover:ring-offset-2 hover:ring-offset-slate-900'
            }`}
          >
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${theme.color} opacity-20 rounded-xl`} />
            
            {/* Content */}
            <div className="relative z-10">
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${theme.color} text-white mb-3`}>
                {theme.category}
              </div>
              <h3 className="text-xl font-bold mb-2">{theme.name}</h3>
              <p className="text-gray-300 text-sm">{theme.description}</p>
              
              {/* Sample Text Preview */}
              <div className="mt-4 p-3 bg-black bg-opacity-30 rounded-lg">
                <p className="text-xs text-gray-400 italic">
                  "{theme.texts[0].substring(0, 60)}..."
                </p>
              </div>
            </div>

            {/* Selection Indicator */}
            {selectedTheme.id === theme.id && (
              <div className="absolute top-2 right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredThemes.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-400">No themes found for this category.</p>
        </div>
      )}
    </div>
  );
} 