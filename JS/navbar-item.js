		// Créer une requête HTTP pour charger le fichier "navbar.html"
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "navbar.html", true);
		xhr.onload = function() {
			// Vérifier que la requête a réussi
			if (xhr.status === 200) {
				// Ajouter le contenu de "navbar.html" à la div "navbar"
				document.getElementById("navbar").innerHTML = xhr.responseText;
			}
		};
		xhr.send();