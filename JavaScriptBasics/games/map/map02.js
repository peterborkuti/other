function initGame(params) {
    "use strict";
	/* const does not work in strict mode with chrome (const not in ECMAScript) */
	var 	ROWNUM = params && params.rowNum || 3,
			COLNUM = params && params.colNum || 6,
			TILENUM = params && params.tileNum || 8,
			TILEWIDTH = params && params.tileWidth || 150,
			TILEHEIGHT = params && params.tileHeight || TILEWIDTH,
			WAITTIME = params && params.waitTime || 50, //msec
			WAITTIME2 = Math.floor(WAITTIME/2),
			TILEURL = params && params.tileURL || 'tiles.png',
			MAPID = params && params.mapID || 'map',
			VIEWPORTID = params && params.viewportID || 'viewport',
			VELOCITY = params && params.velocity || 2,
			SCROLLVELO = 1 << VELOCITY,
			LEFT = params && params.left || 0,
			TOP = params && params.top || 0,
			RIGHT = LEFT + TILEWIDTH - SCROLLVELO;
			
    var divs,
		map = document.getElementById(MAPID),
		mapStyle = map.style,
		viewport = document.getElementById(VIEWPORTID),
		scrollDir = 1,
		scrollVel = VELOCITY, //velocity: 0,1,2, etc for bit shifting
		tileStyleMatrix = [];

	function getRand(a,b) {
		return Math.floor(Math.random()*(b-a+1)+a);
	}

 
	function initDoc() {
		mapStyle.width = (COLNUM*TILEWIDTH)+"px";
		mapStyle.height = (ROWNUM*TILEHEIGHT)+"px";
		map.xPos = LEFT;
		mapStyle.left = map.xPos + "px";
		mapStyle.top = TOP + "px";
		mapStyle.borderStyle = "none";
		viewport.style.width = ((COLNUM-1)*TILEWIDTH)+"px";
		viewport.style.left = mapStyle.left;
		viewport.style.top = mapStyle.top;
		viewport.style.height = mapStyle.height;
		viewport.style.borderStyle = "none solid none solid"; //top right bottom left
		viewport.style.borderRightWidth = TILEWIDTH+"px";
		viewport.style.borderLeftWidth = TILEWIDTH+"px";
		//viewport.style.top = Math.floor(TILEHEIGHT/2) + "px";
		//viewport.style.left = Math.floor(TILEWIDTH/2) + "px";
	}

 	function init() {
		var c, r, div, style;

		initDoc();

		for (r = 0; r < ROWNUM; r += 1) {
			tileStyleMatrix[r] = [];
            for (c = 0; c < COLNUM; c += 1) {
                div = document.createElement('div');
                style = div.style;
                style.backgroundImage = "url(" + TILEURL + ")";
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
		var r, c,
			maxC = tileStyleMatrix[0].length-1;
		
		for (r = 0; r < tileStyleMatrix.length; r += 1) {
			for ( c = maxC ; c > 0; c -= 1) {
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
		if (map.xPos > RIGHT) {
			scrollTilesRight();
			addTilesLeft();
			map.xPos = LEFT;
			setTimeout(scrollMapRight,WAITTIME2);
		} else {
			map.xPos += SCROLLVELO;
			setTimeout(scrollMapRight,WAITTIME);
		}
		
		mapStyle.left = map.xPos + "px";
		
		
	}
	
	function scroll(){
		if (map.xPos > TILEWIDTH) scrollDir = -1;
		if (map.xPos <=0 ) scrollDir = 1;
		map.xPos += scrollDir << scrollVel;
		mapStyle.left = map.xPos + "px";
		
		setTimeout(scroll,100);
	}
    
    init();
	scrollMapRight();

}
