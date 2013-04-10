function initGame() {
    "use strict";

    var divs,
        emptyPos = 0,
        N = 4;
	
	
     function getSwapTileWithEmpty(num) {
		if (typeof(num) !== "number") {
			// num == {x:,y:}
			num = toPos(num);
		}
        return function () { 
		    var imgUrl = divs[num].style.backgroundImage;
            divs[emptyPos].style.backgroundImage = imgUrl;
            divs[num].style.backgroundImage = "url(bee-00.png)";

            emptyPos = num;
            setOnClicks(num);
		};

    }

    function setOnClickXY(coord) {

        var i = toPos(coord);
		divs[i].onclick = getSwapTileWithEmpty(i);

    }

	function toPos(coord) {
		return (coord.y * N + coord.x)
	}

	function toXY(num) {
        var x = num % N;
        var y = Math.floor(num / N);

		return { 'x': x, 'y': y }
	}

	function getEmptyTileNeighbours() {
		var e = toXY(emptyPos);
		var neighbours = [{x:e.x,y:e.y-1 }, {x:e.x,y:e.y+1 }, {x:e.x-1,y:e.y }, {x:e.x+1,y:e.y }];
		neighbours = neighbours.filter(function (v) { return (v.x>=0 && v.y>=0 && v.x<N && v.y<N) });
		
		return neighbours;
	}

    function setOnClicks() {
        var n;
		divs.forEach(function(div) { div.onclick="" });
		n = getEmptyTileNeighbours();
		n.forEach(function(pos) { setOnClickXY(pos) });
    }
	function getRand(a,b) {
		return Math.floor(Math.random()*(b-a+1)+a);
	}
	function shuffle() {
		var i, n, r, table, run = true;

		table = document.getElementsByTagName('table');
		table[0].onclick = function () { stop() };
		
		function moveOne() {
			var n = getEmptyTileNeighbours();
			r = getRand(0,n.length-1);
			getSwapTileWithEmpty(n[r])();
			
			if (run) {
				setTimeout(moveOne, 1000);
			} else {
				table[0].onclick = "";
				setOnClicks();
			}
		}
		
		function stop() {
			run = false;
		}

		moveOne();
	
	}

 	function init() {
		var i, s, table;
		for (i = 0; i < divs.length; i += 1) {
			s = "0".concat(i).slice(-2);
			divs[i].style.backgroundImage = "url(bee-" + s + ".png)";
		}
		table = document.getElementsByTagName('table');
		table[0].onclick = function () { shuffle() };
	}
    
	divs = document.getElementsByTagName('div');
	divs = Array.prototype.slice.apply(divs,[0]);
    init();

}
