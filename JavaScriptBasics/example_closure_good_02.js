function makeAlerts() {
    "use strict";

    var divs, i;

    function getAlert(divNum) {
        return function () { alert(divNum); };
    }

    divs = document.getElementsByTagName('div');
    for (i = 0; i < divs.length; i += 1) {
        divs[i].onclick = getAlert(i);
    }
}
