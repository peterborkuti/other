
	function makeAlerts() {
		function getAlert(divNum) {
			return function () { alert(divNum) };
		}
		var divs = document.getElementsByTagName('div');
		for (var i=0; i<divs.length; i++) {
			divs[i].onclick = getAlert(i);
		}
	}

