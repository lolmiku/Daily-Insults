const quotes = [
    "Success is hard work, not talent.",
    "The best way to predict the future is to invent it.",
    "Do what you can, with what you have, where you are.",
    "The only way to do great work is to love what you do.",
    "Life is what happens when you're busy making other plans.",
    "Get your facts first, then you can distort them as you please.",
    "The purpose of our lives is to be happy.",
    "Life is short, and it is up to you to make it sweet.",
    "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    "To be the best, you must be able to handle the worst.",
    "Life is either a daring adventure or nothing at all.",
    "The only impossible journey is the one you never begin.",
    "Happiness is not something ready made. It comes from your own actions.",
    "You must be the change you wish to see in the world.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Act as if what you do makes a difference. It does.",
    "Success usually comes to those who are too busy to be looking for it.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "The best revenge is massive success.",
    "You only live once, but if you do it right, once is enough.",
    "The only way to achieve the impossible is to believe it is possible.",
    "It does not matter how slowly you go as long as you do not stop.",
    "The best way to find yourself is to lose yourself in the service of others.",
    "If you want to lift yourself up, lift up someone else.",
    "We may encounter many defeats but we must not be defeated.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Believe you can and you're halfway there.",
    "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact.",
    "You do not find the happy life. You make it.",
    "Do not wait to strike till the iron is hot, but make it hot by striking.",
    "Everything you've ever wanted is on the other side of fear.",
    "Opportunities don't happen, you create them.",
    "The way to get started is to quit talking and begin doing.",
    "Don't watch the clock; do what it does. Keep going.",
    "You are never too old to set another goal or to dream a new dream.",
    "Your time is limited, don't waste it living someone else's life."
];

document.getElementById('newQuoteBtn').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteDisplay').textContent = quotes[randomIndex];
});
