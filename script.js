const quotes = [
    "You have the intelligence of a rock.",
    "Your brain is the reason evolution took so long.",
    "You're the reason they put directions on shampoo.",
    "Your secrets are always safe with me. I never even listen when you tell me them.",
    "I would agree with you, but then we’d both be wrong.",
    "You're like a cloud. When you disappear, it's a beautiful day.",
    "If ignorance is bliss, you must be the happiest person on the planet.",
    "I’m not insulting you, I’m describing you.",
    "Mirrors can’t talk, and luckily for you, they can’t laugh either.",
    "You bring everyone so much joy when you leave the room.",
    "You have delusions of adequacy.",
    "You're proof that even nature makes mistakes sometimes.",
    "You are as useless as the 'g' in lasagna.",
    "The bar for you is so low that it's a trip hazard.",
    "Your face makes onions cry.",
    "I'd explain it to you, but I left my crayons at home.",
    "You must have been born on a highway because that’s where most accidents happen.",
    "I’d like to see things from your point of view, but I can’t get my head that far up my rear end.",
    "If I had a dollar for every brain you don’t have, I’d have one dollar.",
    "Some drink from the fountain of knowledge; you only gargled."
];

document.getElementById('newQuoteBtn').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteDisplay').textContent = quotes[randomIndex];
});
