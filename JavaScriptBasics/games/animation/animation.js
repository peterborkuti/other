function initGame(params) {
    "use strict";
	/* const does not work in strict mode with chrome (const not in ECMAScript) */
	var sparams = params && params.sprite || {},
		ROWNUM = sparams.rowNum || 5,
		COLNUM = sparams.colNum || 6,
		TILEWIDTH,
		TILEHEIGHT,
		SPRITEURL = sparams.url || 'animation_sheet.png',
		SPRITEDIVID = sparams.divId || 'sprite',
		VELOCITY = params && params.velocity || 2,
		SPRITEVELO = 1 << VELOCITY,
		div = document.getElementById(SPRITEDIVID),
		divStyle = div.style;

	function initSprite() {
		var img = new Image();
		img.src = SPRITEURL;
		TILEWIDTH = Math.floor(img.width / COLNUM);
		TILEHEIGHT = Math.floor(img.height / ROWNUM);
		divStyle.width = (TILEWIDTH)+"px";
		divStyle.height = (TILEHEIGHT)+"px";
		divStyle.backgroundImage = "url(" + SPRITEURL + ")";
		divStyle.backgroundPosition = "0px 0px";
		divStyle.row = 0;
		divStyle.col = 0;
	}

	function anim() {
		divStyle.col += 1;
		if (divStyle.col >= COLNUM) {
			divStyle.col = 0;
			divStyle.row += 1;
		}
		if (divStyle.row >= ROWNUM) {
			divStyle.row = 0;
		}
		divStyle.backgroundPosition = "-" + (TILEWIDTH*divStyle.col) + "px -" + (TILEHEIGHT*divStyle.row) + "px";

		setTimeout(anim, 50);
	}

    initSprite();
	anim();

}
