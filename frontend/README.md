# PenguinType 🐧

A beautiful, Monkeytype-style typing speed test web application built with React and Next.js, featuring custom themes from your favorite movies, books, and more.

## ✨ Features

- **Custom Themes**: Choose from 10 different themes including:
  - 🎬 Movies (Marvel, Star Wars)
  - 📚 Books (Lord of the Rings, Harry Potter, Classic Literature)
  - 🎮 Games (Video Game Quotes)
  - 🧠 Philosophy & Motivational Quotes
  - 🚀 Sci-Fi Classics

- **Real-time Statistics**:
  - Words Per Minute (WPM)
  - Accuracy percentage
  - Time elapsed
  - Error count
  - Live performance tracking

- **Beautiful UI**:
  - Modern, dark theme design
  - Smooth animations and transitions
  - Responsive layout for all devices
  - Color-coded performance indicators

- **Interactive Experience**:
  - Real-time character highlighting
  - Error detection and visualization
  - Performance feedback and tips
  - Category filtering

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd penguin-type
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 How to Use

1. **Choose a Theme**: Browse through different categories and select a theme that interests you
2. **Start Typing**: Click "Start Typing Test" and begin typing the displayed text
3. **Track Progress**: Watch your real-time WPM, accuracy, and time statistics
4. **Complete the Test**: Finish typing the entire text to see your final results
5. **Review Results**: Analyze your performance with detailed statistics and improvement tips

## 🛠️ Built With

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React Hooks** - State management and side effects

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main page component
├── components/
│   ├── TypingTest.tsx   # Main typing test component
│   ├── ThemeSelector.tsx # Theme selection interface
│   └── Stats.tsx        # Results display component
└── data/
    └── themes.ts        # Theme data and configurations
```

## 🎨 Customization

### Adding New Themes

To add a new theme, edit `src/data/themes.ts`:

```typescript
{
  id: 'your-theme',
  name: 'Your Theme Name',
  category: 'movies' | 'books' | 'games' | 'quotes' | 'sci-fi' | 'fantasy',
  description: 'Theme description',
  color: 'from-color-600 to-color-500', // Tailwind gradient classes
  texts: [
    'Your first quote or text here.',
    'Your second quote or text here.',
    // Add more texts...
  ]
}
```

### Styling

The application uses Tailwind CSS for styling. You can customize:
- Colors in `src/app/globals.css`
- Component styles in individual component files
- Theme colors in the themes data file

## 📊 Performance Metrics

The application calculates:

- **WPM (Words Per Minute)**: Based on 5-character words
- **Accuracy**: Percentage of correctly typed characters
- **Time**: Total time taken to complete the test
- **Errors**: Number of incorrect characters typed
- **Efficiency Score**: Combined WPM and accuracy score

## 🎯 Performance Levels

- **Expert**: 80+ WPM, 95%+ accuracy
- **Advanced**: 60+ WPM, 90%+ accuracy  
- **Intermediate**: 40+ WPM, 80%+ accuracy
- **Beginner**: Below 40 WPM or 80% accuracy

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by [Monkeytype](https://monkeytype.com/)
- Icons from [Heroicons](https://heroicons.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

**Happy Typing!** 🚀
