// Charger le fichier JSON contenant les citations
fetch('../json/quotes.json')
  .then(response => response.json())
  .then(data => {
    // Sélectionner une citation au hasard
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomQuote = data[randomIndex].quote;
    const randomAuthor = data[randomIndex].author;
    const cardHeight = data[randomIndex].height;

    // Afficher la citation et l'auteur dans la carte de motivation
    const motivationCard = document.getElementById('motivation-card');
    const motivationQuote = document.getElementById('motivation-quote');
    const motivationAuthor = document.getElementById('motivation-author');
    
    motivationQuote.innerText = randomQuote;
    motivationAuthor.innerText = randomAuthor;
    
    // Ajuster la hauteur de la carte en fonction de la hauteur de la citation
   // motivationCard.style.height = `${cardHeight}px`;//
  })
  .catch(error => console.error(error));
