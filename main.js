////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////Timer///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Récupérer la valeur de "timerDuration" dans le localStorage
const timerDuration = localStorage.getItem("timerDuration");

// Si la valeur de "timerDuration" est présente dans le localStorage, l'utiliser comme durée du minuteur
if (timerDuration) {
  document.getElementById("timer").textContent = formatTime(timerDuration);
}

let intervalId; // Variable pour stocker l'ID de l'intervalle du minuteur

// Fonction pour formater le temps en minutes et secondes
function formatTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Fonction pour démarrer le minuteur
function startTimer() {
  const timerElement = document.getElementById("timer");
  const timerDuration = parseInt(localStorage.getItem("timerDuration"), 10);
  let timeRemaining = timerDuration;

  intervalId = setInterval(() => {
    timeRemaining--;
    timerElement.textContent = formatTime(timeRemaining);

    // Si le temps restant est égal à 0, arrêter le minuteur et ajouter +1 au compteur si nécessaire
    if (timeRemaining === 0) {
      clearInterval(intervalId);
      const addOneOnTimerEnd = document.getElementById("addOneOnTimerEnd").checked;
      if (addOneOnTimerEnd) {
        incrementCounter();
      }
      timerElement.textContent = "00:00";
      if ("vibrate" in navigator) {
        navigator.vibrate(1000);
      }
      const timerDuration = localStorage.getItem("timerDuration");
      if (timerDuration) {
        timerElement.textContent = formatTime(timerDuration);
      }
    }
  }, 1000);
}

// Fonction pour mettre en pause le minuteur
function stopTimer() {
  clearInterval(intervalId);
}

// Fonction pour réinitialiser le minuteur
function resetTimer() {
  const timerElement = document.getElementById("timer");
  const timerDuration = parseInt(localStorage.getItem("timerDuration"), 10);
  const addOneOnReset = localStorage.getItem("addOneOnReset") === "true";
  timerElement.textContent = formatTime(timerDuration);
  if (addOneOnReset) {
    incrementCounter();
  }
}


// Ajouter les écouteurs d'événements aux boutons du minuteur
document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("stopBtn").addEventListener("click", stopTimer);
document.getElementById("resetBtn").addEventListener("click", resetTimer);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////Counter/////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Fonction pour incrémenter le compteur de série
function incrementCounter() {
  const counterElement = document.getElementById("counter");
  let counterValue = parseInt(counterElement.textContent, 10);
  counterValue++;
  counterElement.textContent = counterValue;
}

// Fonction pour décrémenter le compteur de série
function decrementCounter() {
  const counterElement = document.getElementById("counter");
  let counterValue = parseInt(counterElement.textContent, 10);
  if (counterValue > 0) {
    counterValue--;
  }
  counterElement.textContent = counterValue;
}

// Ajouter les écouteurs d'événements aux boutons d'incrémentation et de décrémentation
document.getElementById("incrementBtn").addEventListener("click", incrementCounter);
document.getElementById("decrementBtn").addEventListener("click", decrementCounter);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////Modal///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Fonction pour afficher la modal
function showModal() {
  var settingsModal = document.getElementById('settingsModal');
  settingsModal.style.display = 'block';
}

// Fonction pour fermer la modal
function closeModal() {
  var settingsModal = document.getElementById('settingsModal');
  settingsModal.style.display = 'none';
}

// Fonction pour enregistrer les données dans le stockage local et mettre à jour la durée de la minuterie
function saveSettings() {
  var timerDuration = document.getElementById('timerDuration').value;
  var addOneOnTimerEnd = document.getElementById('addOneOnTimerEnd').checked;
  var addOneOnReset = document.getElementById('addOneOnReset').checked;

  // Enregistrement des données dans le stockage local
  localStorage.setItem('timerDuration', timerDuration);
  localStorage.setItem('addOneOnTimerEnd', addOneOnTimerEnd);
  localStorage.setItem('addOneOnReset', addOneOnReset);

  // Mettre à jour la durée du minuteur directement dans l'élément HTML
  document.getElementById("timer").textContent = formatTime(timerDuration);

  // Fermer la modal
  closeModal();
}

document.addEventListener('DOMContentLoaded', function() {
  // Récupérer les éléments du DOM
  var settingsModal = document.getElementById('settingsModal');
  var closeBtn = document.getElementById('closeBtn');
  var saveSettingsBtn = document.getElementById('saveSettingsBtn');

  // Ouvrir la modal au clic sur l'icône de la roue crantée
  document.getElementById('menuBtn').addEventListener('click', showModal);

  // Fermer la modal au clic sur la croix
  closeBtn.addEventListener('click', closeModal);

  // Fermer la modal au clic en dehors de la modal
  window.addEventListener('click', function(event) {
    if (event.target === settingsModal) {
      closeModal();
    }
  });

  // Enregistrer les données dans le stockage local au clic sur le bouton "Enregistrer"
  saveSettingsBtn.addEventListener('click', saveSettings);
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////Autre///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Empêcher le zoom de la page
document.addEventListener('touchmove', function(event) {
  if (event.scale !== 1) {
      event.preventDefault();
  }
}, { passive: false });

document.addEventListener('gesturestart', function(event) {
  event.preventDefault();
});

// Désactiver le zoom sur double tap sur iOS
var lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
  var now = (new Date()).getTime();
  if (now - lastTouchEnd <= 300) {
      event.preventDefault();
  }
  lastTouchEnd = now;
}, false);

