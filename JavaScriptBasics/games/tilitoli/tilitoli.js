/* exported initGame */
function initGame(picURL) {
	"use strict";

	var divs,
		emptyPos = 0,
		N = 4,
		table,
		TILEWIDTH = 200,
		TILEHEIGHT = 173,
		pic = "url('" + picURL + "')";


	function getSwapTileWithEmpty(num) {
		if (typeof(num) !== "number") {
			// num == {x:,y:}
			num = toPos(num);
		}
		return function () { 
			divs[emptyPos].style.backgroundPosition = 
				divs[num].style.backgroundPosition;
				divs[emptyPos].style.backgroundImage = pic;
			divs[num].style.backgroundImage = "";

			emptyPos = num;
			setOnClicks(num);
		};

	}

	function setOnClickXY(coord) {

		var i = toPos(coord);
		divs[i].onclick = getSwapTileWithEmpty(i);

	}

	function toPos(coord) {
		return (coord.y * N + coord.x);
	}

	function toXY(num,w,h) {
		var x = num % N;
		var y = Math.floor(num / N);
		if (w && h) {
			return "-" + (x * w) + "px -" + (y * h) + "px";
		} else {
			return { 'x': x, 'y': y };
		}
	}

	function getEmptyTileNeighbours() {
		var e = toXY(emptyPos);
		var neighbours = [	{x:e.x,y:e.y - 1 },
							{x:e.x,y:e.y + 1 },
							{x:e.x - 1,y:e.y },
							{x:e.x + 1,y:e.y }];
		neighbours = neighbours.filter(
			function (v) { 
				return (v.x >= 0 && v.y >= 0 &&
					v.x < N && v.y < N);
			});

		return neighbours;
	}

	function setOnClicks() {
		var n;
		divs.forEach(function(div) { div.onclick = ""; });
		n = getEmptyTileNeighbours();
		n.forEach(function(pos) { setOnClickXY(pos); });
	}

	function getRand(a,b) {
		return Math.floor(Math.random() * (b - a + 1) + a);
	}

	function shuffle() {
		var run = true;

		table.onclick = function () { run = false; };

		function moveOne() {
			var n = getEmptyTileNeighbours(),
				r = getRand(0,n.length-1);

			getSwapTileWithEmpty(n[r])();

			if (run) {
				setTimeout(moveOne, 500);
			} else {
				table.onclick = "";
				setOnClicks();
			}
		}

		moveOne();

	}

	function init() {
		var i, style;
		for (i = 0; i < divs.length; i += 1) {
			style = divs[i].style;
			style.height = TILEHEIGHT + "px";
			style.width = TILEWIDTH + "px";
			if ( i !== 0 ) {
				style.backgroundImage = pic;
			}
			style.backgroundPosition = toXY(i, TILEWIDTH, TILEHEIGHT);
		}
		table.onclick = function () { shuffle(); };
	}

	function setupSizes() {
		var img = new Image();
		img.src = picURL;
		TILEWIDTH = Math.floor(img.width / N);
		TILEHEIGHT = Math.floor(img.height / N);
		table.style.height = (TILEHEIGHT * 4) + "px";
		table.style.width = (TILEWIDTH * 4) + "px";
		table.style.backgroundSize = (TILEWIDTH * 4) + "px " + (TILEHEIGHT * 4) + "px";
	}

	table = document.getElementById('board');
	divs = table.getElementsByTagName('div');
	divs = Array.prototype.slice.apply(divs,[0]);
	setupSizes();
	
	init();

}
