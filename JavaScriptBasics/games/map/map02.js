function initGame() {
    "use strict";
	/* const does not work in strict mode with chrome (const not in ECMAScript) */
	var 	ROWNUM = 3,
			COLNUM = 6,
			TILENUM = 8,
			TILEWIDTH = 150,
			TILEHEIGHT = 150,
			WAITTIME = 50; //msec
			
    var divs,
		map = document.getElementById('map'),
		mapStyle = map.style,
		viewport = document.getElementById('viewport'),
		scrollDir = 1,
		scrollVel = 2, //velocity: 0,1,2, etc for bit shifting
		tileStyleMatrix = [];

	function getRand(a,b) {
		return Math.floor(Math.random()*(b-a+1)+a);
	}

 
	function initDoc() {
		mapStyle.width = (COLNUM*TILEWIDTH)+"px";
		mapStyle.height = (ROWNUM*TILEHEIGHT)+"px";
		map.xPos = 0;
		mapStyle.left = map.xPos + "px";
		viewport.style.width = ((COLNUM-1)*TILEWIDTH)+"px";
		viewport.style.height = ((ROWNUM-1)*TILEHEIGHT)+"px";
		//viewport.style.top = Math.floor(TILEHEIGHT/2) + "px";
		//viewport.style.left = Math.floor(TILEWIDTH/2) + "px";
	}

 	function init() {
		var c, r, div, row, style;

		initDoc();

		for (r = 0; r < ROWNUM; r += 1) {
			tileStyleMatrix[r] = [];
            for (c = 0; c < COLNUM; c += 1) {
                div = document.createElement('div');
                style = div.style;
                style.backgroundImage = "url(tiles.png)";
                style.backgroundPosition = (getRand(0,TILENUM-1)*TILEWIDTH)+"px 0px";
                style.top = (r*TILEHEIGHT)+"px";
                style.left = (c*TILEWIDTH)+"px";
				style.position = "absolute";
				style.height = (TILEHEIGHT)+"px";
                style.width = (TILEWIDTH)+"px";
                map.appendChild(div);
				tileStyleMatrix[r][c] = style;
            }
		}
		
	}
	
	function scrollTilesRight() {
		var r, c, C;
		C = tileStyleMatrix[0].length-1;
		
		for (r = 0; r < tileStyleMatrix.length; r += 1) {
			for ( c = C ; c > 0; c -= 1) {
				tileStyleMatrix[r][c].backgroundPosition = tileStyleMatrix[r][c-1].backgroundPosition;
			}
		}
	}
	
	function addTilesLeft() {
		var r;
		for (r = 0; r < tileStyleMatrix.length; r += 1) {
			tileStyleMatrix[r][0].backgroundPosition = (getRand(0,TILENUM-1)*TILEWIDTH)+"px 0px";;
		}	
	}

	function scrollMapRight(){
		if (map.xPos >= TILEWIDTH) {
			scrollTilesRight();
			addTilesLeft();
			map.xPos = 1 << scrollVel;
			setTimeout(scrollMapRight,WAITTIME/2);
		} else {
			map.xPos += 1 << scrollVel;
			setTimeout(scrollMapRight,WAITTIME);
		}
		
		mapStyle.left = map.xPos + "px";
		
		
	}
	
	function scroll(){
		if (map.xPos >= TILEWIDTH) scrollDir = -1;
		if (map.xPos <=0 ) scrollDir = 1;
		map.xPos += scrollDir << scrollVel;
		mapStyle.left = map.xPos + "px";
		
		setTimeout(scroll,100);
	}
    
    init();
	scrollMapRight();

}
