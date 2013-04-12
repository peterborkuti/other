function initGame() {
    "use strict";

    var divs,
		ROWNUM = 7,
		COLNUM = 9,
		TILENUM = 8,
		TILEWIDTH = 150,
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
		var c, r, i, t, e, div, row, table, style;

		table = document.getElementById('map');
		
		for (r = 0; r < ROWNUM; r += 1) {
            for (c = 0; c < COLNUM; c += 1) {
                div = document.createElement('div');
                style = div.style;
                style.backgroundImage = "url(tiles.png)";
                t = getRand(0,TILENUM-1);
                style.backgroundPosition = (t*TILEWIDTH)+"px 0px";
                div.tilenum = t;
                style.top = (r*TILEWIDTH)+"px";
                style.left = (c*TILEWIDTH)+"px";
                table.appendChild(div);
            }
		}

        /*
		divs = document.getElementsByTagName('div');
		divs = Array.prototype.slice.apply(divs,[0]);		

		divs.forEach(
			function (div) {
				var style = div.style, t;
				style.backgroundImage = "url(tiles.png)";
				t = getRand(0,TILENUM-1);
				style.backgroundPosition = (t*TILEWIDTH)+"px 0px";
				div.tilenum = t;
			}
		)
        */
	}
    
    init();

}
