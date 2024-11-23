var myCal = document.getElementById("adventCal");
var currentDate = new Date();

function Door(calendar, day) {

	this.width = ((calendar.width - 0.1 * calendar.width) / 4) * 0.95;
	this.height = ((calendar.height - 0.1 * calendar.height) / 6) * 0.95;
	this.x = ( 0.04 * calendar.width + ((day- 1) % 4) * (1.1 * this.width) );
	this.y = - ( 0.96 * calendar.height - Math.floor((day - 1) / 4) * (1.1 * this.height) );
    // Ottieni il messaggio del giorno e salva la stringa HTML giusta per il formato
	let message = messages[day - 1];

	if (message.type === "text") {
		this.adventMessage =`<h1>Day ${day} of Advent</h1> <p>"${message.content}"<br><br> by ${message.author}</p>`;
	} else if (message.type === "image") {
		this.adventMessage = `<h1>Day ${day} of Advent</h1> <img src="${message.content}" alt="${message.description}" style="max-width:100%;"><p>${message.description}</p>`;
	}

	this.content = function() { 
		
		var node = document.createElement("li");
		document.getElementById("adventDoors").appendChild(node);
		node.id = "door" + day;
		node.style.cssText = "width: " + this.width + "px; height: " + this.height + "px; top: " + this.y + "px; left: " + this.x + "px;";

		var innerNode = document.createElement("a");
		document.getElementById("door" + day).appendChild(innerNode);
		innerNode.innerHTML = day;
		innerNode.href = "#";

		if( ( currentDate.getMonth() + 1 ) < 11 || currentDate.getDate() < day ) {
			innerNode.className = "disabled";
			innerNode.onclick = function() {
				return false;
			}
		} else {
			var adventMessage = this.adventMessage;
			innerNode.onclick = function() {
				showPopup(adventMessage);
				return false;
			}
		}	
	};

}

(function() {
	var doors = [];

	for(var i = 0; i < 24; i++) {

		doors[i] = new Door(myCal, i + 1);
		doors[i].content();

	}

	return doors;
})();

function showPopup(message) {
    const popup = document.getElementById("popup");
    const popupMessage = popup.querySelector(".popup-content");

    // Usa innerHTML per permettere immagini o HTML personalizzato
    popupMessage.innerHTML = message;

    popup.classList.add("show"); // Mostra il popup aggiungendo la classe `show`
}

document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
	/*const popupContent =popup.querySelector(".popup-content");
    const closeButton = popupContent.querySelector(".close");

    // Funzione per nascondere il popup al clic sul pulsante di chiusura
    closeButton.onclick = function () {
        popup.classList.remove("show");
    };*/

    // Funzione per chiudere il popup se si clicca all'esterno del contenuto
    popup.onclick = function (event) {
        if (event.target === popup) { // Se si clicca sull'overlay
            popup.classList.remove("show");
        }
    };
});
