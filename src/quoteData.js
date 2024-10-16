export const quoteData = [
    { id: 1, text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { id: 2, text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { id: 3, text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
    { id: 4, text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { id: 5, text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    { id: 6, text: "I attribute my success to this: I never gave or took any excuse.", author: "Florence Nightingale" },
    { id: 7, text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
    { id: 8, text: "Get busy living or get busy dying.", author: "Stephen King" },
    { id: 9, text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { id: 10, text: "Many of life’s failures are people who did not realize how close they were to success when they gave up.", author: "Thomas A. Edison" },
    { id: 11, text: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein" },
    { id: 12, text: "Never let the fear of striking out keep you from playing the game.", author: "Babe Ruth" },
    { id: 13, text: "Money and success don’t change people; they merely amplify what is already there.", author: "Will Smith" },
    { id: 14, text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { id: 15, text: "Not how long, but how well you have lived is the main thing.", author: "Seneca" },
    { id: 16, text: "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.", author: "Henry Ford" },
    { id: 17, text: "In order to write about life first you must live it.", author: "Ernest Hemingway" },
    { id: 18, text: "The big lesson in life, baby, is never be scared of anyone or anything.", author: "Frank Sinatra" },
    { id: 19, text: "Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth.", author: "Mark Twain" },
    { id: 20, text: "Curiosity about life in all of its aspects, I think, is still the secret of great creative people.", author: "Leo Burnett" },
    { id: 21, text: "Life is not a problem to be solved, but a reality to be experienced.", author: "Soren Kierkegaard" },
    { id: 22, text: "The unexamined life is not worth living.", author: "Socrates" },
    { id: 23, text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
    { id: 24, text: "Do all the good you can, for all the people you can, in all the ways you can, as long as you can.", author: "Hillary Clinton" },
    { id: 25, text: "Don’t settle for what life gives you; make life better and build something.", author: "Ashton Kutcher" },
    { id: 26, text: "Everything negative – pressure, challenges – is all an opportunity for me to rise.", author: "Kobe Bryant" },
    { id: 27, text: "I like criticism. It makes you strong.", author: "LeBron James" },
    { id: 28, text: "You never really learn much from hearing yourself speak.", author: "George Clooney" },
    { id: 29, text: "Life imposes things on you that you can’t control, but you still have the choice of how you’re going to live through this.", author: "Celine Dion" },
    { id: 30, text: "When we do the best we can, we never know what miracle is wrought in our life or the life of another.", author: "Helen Keller" },
    { id: 31, text: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
    { id: 32, text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", author: "Buddha" },
    { id: 33, text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
    { id: 34, text: "It is better to be hated for what you are than to be loved for what you are not.", author: "Andre Gide" },
    { id: 35, text: "A man who dares to waste one hour of time has not discovered the value of life.", author: "Charles Darwin" },
    { id: 36, text: "There are no mistakes, only opportunities.", author: "Tina Fey" },
    { id: 37, text: "Life is short, and it’s up to you to make it sweet.", author: "Sarah Louise Delany" },
    { id: 38, text: "Live in the sunshine, swim the sea, drink the wild air.", author: "Ralph Waldo Emerson" },
    { id: 39, text: "Life is made of ever so many partings welded together.", author: "Charles Dickens" },
    { id: 40, text: "Good friends, good books, and a sleepy conscience: this is the ideal life.", author: "Mark Twain" },
];


export const fetchQuoteData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(quoteData);
        }, 1000);
    });
};
