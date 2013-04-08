function getAlert(divNum) {
	return function () { alert(divNum) };
}

function makeAlerts() {
	var divs = document.getElementsByTagName('div');
	for (var i=0; i<divs.length; i++) {
		divs[i].onclick = getAlert(i);
	}
}
