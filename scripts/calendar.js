var myCal = document.getElementById("adventCal");
var currentDate = new Date();

function Door(calendar, day) {

	this.width = ((calendar.width - 0.1 * calendar.width) / 4) * 0.95;
	this.height = ((calendar.height - 0.1 * calendar.height) / 6) * 0.95;
	this.adventMessage = 'Day ' + day + ' of Advent\n\n' + '"' + messages[day - 1][0] + '"\n\n\t' + 'by ' + messages[day - 1][1] + '\n\n';
	this.x = ( 0.04 * calendar.width + ((day- 1) % 4) * (1.1 * this.width) );
	this.y = - ( 0.96 * calendar.height - Math.floor((day - 1) / 4) * (1.1 * this.height) );

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

// Funzione per mostrare il popup
function showPopup(message) {
    popup.textContent = message; // Imposta il messaggio nel popup
    popup.classList.add("show"); // Mostra il popup
}

// Funzione per nascondere il popup
popupClose.onclick = function() {
    popup.classList.remove("show"); // Nasconde il popup
};
popup.onclick = function(event) {
    if (event.target === popup) {
        popup.classList.remove("show"); // Nasconde il popup se clicchi fuori dal contenuto
    }
};