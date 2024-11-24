var myCal = document.getElementById("adventCal");
var currentDate = new Date();

function Door(calendar, day) {

	this.width = ((calendar.width - 0.1 * calendar.width) / 4) * 0.95;
	this.height = ((calendar.height - 0.1 * calendar.height) / 6) * 0.95;
	this.x = ( 0.04 * calendar.width + ((day- 1) % 4) * (1.1 * this.width) );
	this.y = - ( 0.96 * calendar.height - Math.floor((day - 1) / 4) * (1.1 * this.height) );
    // Obtain the daily message and save the correct HTML string given its format
	let message = messages[day - 1];

	if (message.type === "text") {
		this.adventMessage =`<h1>Day ${day} of Advent</h1> <p>"${message.content}"<br><br>${message.reference}</p>`;
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

    // Use innerHTML add a personalized HTML element
    popupMessage.innerHTML = message;

    popup.classList.add("show"); // Shows the popup adding the `show` class
}

document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
	/*const popupContent =popup.querySelector(".popup-content");
    const closeButton = popupContent.querySelector(".close");

    // Function to hide the popup when you click on the close button
    closeButton.onclick = function () {
        popup.classList.remove("show");
    };*/

    // Function to hide the popup when you click outside the content
    popup.onclick = function (event) {
        if (event.target === popup) { // If ypu click on the overlay
            popup.classList.remove("show");
        }
    };
});
