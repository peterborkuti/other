var divs = document.getElementsByTagName('div');
for (var i=0; i<divs.length; i++) {
	divs[i].onclick = alert(i);
}