export interface Theme {
  id: string;
  name: string;
  category: 'movies' | 'books' | 'games' | 'quotes' | 'sci-fi' | 'fantasy';
  description: string;
  color: string;
  texts: string[];
}

export const themes: Theme[] = [
  {
    id: 'lotr',
    name: 'Lord of the Rings',
    category: 'fantasy',
    description: 'Epic fantasy adventures in Middle-earth',
    color: 'from-amber-600 to-yellow-500',
    texts: [
      'One ring to rule them all, one ring to find them, one ring to bring them all and in the darkness bind them.',
      'All we have to decide is what to do with the time that is given us.',
      'I am no man.',
      'My precious...',
      'You shall not pass!',
      'The road goes ever on and on, down from the door where it began.',
      'Even the smallest person can change the course of the future.',
      'A wizard is never late, nor is he early, he arrives precisely when he means to.',
      'The world is indeed full of peril, and in it there are many dark places.',
      'It is not despair, for despair is only for those who see the end beyond all doubt.'
    ]
  },
  {
    id: 'star-wars',
    name: 'Star Wars',
    category: 'sci-fi',
    description: 'A long time ago in a galaxy far, far away...',
    color: 'from-blue-600 to-cyan-500',
    texts: [
      'May the Force be with you.',
      'I am your father.',
      'Do or do not, there is no try.',
      'The Force will be with you, always.',
      'Help me, Obi-Wan Kenobi, you are my only hope.',
      'These are not the droids you are looking for.',
      'I have a bad feeling about this.',
      'It is a period of civil war.',
      'The dark side of the Force is a pathway to many abilities some consider to be unnatural.',
      'Fear is the path to the dark side.'
    ]
  },
  {
    id: 'harry-potter',
    name: 'Harry Potter',
    category: 'fantasy',
    description: 'Magic, friendship, and the power of love',
    color: 'from-purple-600 to-indigo-500',
    texts: [
      'It does not do to dwell on dreams and forget to live.',
      'Happiness can be found even in the darkest of times, if one only remembers to turn on the light.',
      'It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.',
      'The ones that love us never really leave us.',
      'Words are, in my not so humble opinion, our most inexhaustible source of magic.',
      'I solemnly swear that I am up to no good.',
      'Mischief managed.',
      'It is our choices that show what we truly are, far more than our abilities.',
      'The boy who lived.',
      'Wit beyond measure is man\'s greatest treasure.'
    ]
  },
  {
    id: 'marvel',
    name: 'Marvel Cinematic Universe',
    category: 'movies',
    description: 'Superheroes, infinity stones, and epic battles',
    color: 'from-red-600 to-orange-500',
    texts: [
      'I am Iron Man.',
      'I can do this all day.',
      'With great power comes great responsibility.',
      'I am Groot.',
      'Avengers, assemble!',
      'I love you three thousand.',
      'I am inevitable.',
      'And I am Iron Man.',
      'That is my secret, Captain. I am always angry.',
      'We are Groot.'
    ]
  },
  {
    id: 'game-of-thrones',
    name: 'Game of Thrones',
    category: 'fantasy',
    description: 'Winter is coming and the game of thrones',
    color: 'from-gray-700 to-slate-600',
    texts: [
      'Winter is coming.',
      'When you play the game of thrones, you win or you die.',
      'A Lannister always pays his debts.',
      'The night is dark and full of terrors.',
      'Valar morghulis.',
      'Valar dohaeris.',
      'You know nothing, Jon Snow.',
      'The lone wolf dies, but the pack survives.',
      'Power is power.',
      'Chaos is a ladder.'
    ]
  },
  {
    id: 'classic-literature',
    name: 'Classic Literature',
    category: 'books',
    description: 'Timeless quotes from great authors',
    color: 'from-emerald-600 to-teal-500',
    texts: [
      'It was the best of times, it was the worst of times.',
      'To be or not to be, that is the question.',
      'All happy families are alike; each unhappy family is unhappy in its own way.',
      'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.',
      'Call me Ishmael.',
      'The only way to do great work is to love what you do.',
      'Be the change you wish to see in the world.',
      'The journey of a thousand miles begins with one step.',
      'Life is what happens when you are busy making other plans.',
      'The unexamined life is not worth living.'
    ]
  },
  {
    id: 'video-games',
    name: 'Video Games',
    category: 'games',
    description: 'Iconic quotes from beloved games',
    color: 'from-green-600 to-lime-500',
    texts: [
      'It is dangerous to go alone! Take this.',
      'The cake is a lie.',
      'Would you kindly?',
      'War, war never changes.',
      'Stay awhile and listen.',
      'All your base are belong to us.',
      'Finish him!',
      'You died.',
      'The princess is in another castle.',
      'Press F to pay respects.'
    ]
  },
  {
    id: 'philosophy',
    name: 'Philosophy',
    category: 'quotes',
    description: 'Deep thoughts from great thinkers',
    color: 'from-indigo-600 to-purple-500',
    texts: [
      'I think, therefore I am.',
      'The only true wisdom is in knowing you know nothing.',
      'Happiness is not something ready made. It comes from your own actions.',
      'The mind is everything. What you think you become.',
      'Beauty is in the eye of the beholder.',
      'The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.',
      'Man is born free, and everywhere he is in chains.',
      'The unexamined life is not worth living.',
      'We are what we repeatedly do. Excellence, then, is not an act, but a habit.',
      'The greatest glory in living lies not in never falling, but in rising every time we fall.'
    ]
  },
  {
    id: 'sci-fi-classics',
    name: 'Sci-Fi Classics',
    category: 'sci-fi',
    description: 'Futuristic visions and space adventures',
    color: 'from-cyan-600 to-blue-500',
    texts: [
      'Space, the final frontier.',
      'Beam me up, Scotty.',
      'The truth is out there.',
      'In space, no one can hear you scream.',
      'I will be back.',
      'Life finds a way.',
      'Houston, we have a problem.',
      'To infinity and beyond!',
      'The force is strong with this one.',
      'Resistance is futile.'
    ]
  },
  {
    id: 'motivational',
    name: 'Motivational',
    category: 'quotes',
    description: 'Inspirational words to lift your spirits',
    color: 'from-pink-600 to-rose-500',
    texts: [
      'The future belongs to those who believe in the beauty of their dreams.',
      'Success is not final, failure is not fatal: it is the courage to continue that counts.',
      'The only limit to our realization of tomorrow will be our doubts of today.',
      'Believe you can and you are halfway there.',
      'It always seems impossible until it is done.',
      'The way to get started is to quit talking and begin doing.',
      'What you get by achieving your goals is not as important as what you become by achieving your goals.',
      'The only person you are destined to become is the person you decide to be.',
      'Do not watch the clock; do what it does. Keep going.',
      'The best way to predict the future is to create it.'
    ]
  }
]; 