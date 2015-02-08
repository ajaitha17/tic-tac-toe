var prevImage = "blue.jpg";
var nextImage = "red.jpg";
var count = 0;
var queue = [];

function change(id) {
	if(document.getElementById(id).src.match("off_white.jpg")) {
		document.getElementById(id).src=nextImage;
		if(nextImage == "red.jpg") {
			nextImage = "blue.jpg";
			prevImage = "red.jpg";
		}
		else {
			nextImage = "red.jpg";
			prevImage = "blue.jpg";
		}
		document.getElementById("current").src = nextImage;
		queue.push(id);
		count++;
	}
	else {
		return;
	}
	if(count>6) {
		var image = document.getElementById(queue.shift());
		image.src = "off_white.jpg";
	}
	ifVictory();
}

function reset() {
	document.getElementById('11').src = "off_white.jpg";
	document.getElementById('12').src = "off_white.jpg";
	document.getElementById('13').src = "off_white.jpg";
	document.getElementById('21').src = "off_white.jpg";
	document.getElementById('22').src = "off_white.jpg";
	document.getElementById('23').src = "off_white.jpg";
	document.getElementById('31').src = "off_white.jpg";
	document.getElementById('32').src = "off_white.jpg";
	document.getElementById('33').src = "off_white.jpg";
	document.getElementById('current').src = "red.jpg";
	nextImage = "red.jpg";
	prevImage = "blue.jpg";
	count = 0;
	queue = [];
	// queue.push("11");
	// queue.push("13");
	// queue.push("12");
	// queue.shift();
	// alert(queue.size());
}

function ifVictory() {
	if(document.getElementById("11").src.match(prevImage) && document.getElementById("22").src.match(prevImage) && document.getElementById("33").src.match(prevImage)) {
		alert(prevImage + " wins!");
	}

	if(document.getElementById("31").src.match(prevImage) && document.getElementById("22").src.match(prevImage) && document.getElementById("13").src.match(prevImage)) {
		alert(prevImage + " wins!");
	}

	if(document.getElementById("11").src.match(prevImage) && document.getElementById("12").src.match(prevImage) && document.getElementById("13").src.match(prevImage)) {
		alert(prevImage + " wins!");
	}

	if(document.getElementById("21").src.match(prevImage) && document.getElementById("22").src.match(prevImage) && document.getElementById("23").src.match(prevImage)) {
		alert(prevImage + " wins!");
	}

	if(document.getElementById("31").src.match(prevImage) && document.getElementById("32").src.match(prevImage) && document.getElementById("33").src.match(prevImage)) {
		alert(prevImage + " wins!");
	}

	if(document.getElementById("11").src.match(prevImage) && document.getElementById("21").src.match(prevImage) && document.getElementById("31").src.match(prevImage)) {
		alert(prevImage + " wins!");
	}

	if(document.getElementById("12").src.match(prevImage) && document.getElementById("22").src.match(prevImage) && document.getElementById("32").src.match(prevImage)) {
		alert(prevImage + " wins!");
	}

	if(document.getElementById("13").src.match(prevImage) && document.getElementById("23").src.match(prevImage) && document.getElementById("33").src.match(prevImage)) {
		alert(prevImage + " wins!");
	}

}
