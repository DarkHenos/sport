const quotes = [
    { quote: "Le succès c'est tomber 7 fois, se relever 8 fois", author: "Proverbe japonais" },
    { quote: "L'échec est un succès en construction", author: "Anonyme" },
    { quote: "Le seul endroit où le succès vient avant le travail, c'est dans le dictionnaire", author: "Vidal Sassoon" },
    { quote: "La motivation vous sert de départ. L'habitude vous fait continuer.", author: "Jim Ryun" },
    { quote: "La réussite c'est d'aller d'échec en échec sans perdre son enthousiasme", author: "Winston Churchill" }
];

// Fonction pour afficher une citation aléatoire
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    const motivationQuote = document.getElementById("motivation-quote");
    const motivationAuthor = document.getElementById("motivation-author");
    motivationQuote.textContent = randomQuote.quote;
    motivationAuthor.textContent = randomQuote.author;
}

// Appel de la fonction pour afficher une citation aléatoire
displayRandomQuote();
