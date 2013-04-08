
	function initGame() {
		var s,i,divs,
			emptyPos=0,
			N=4;
		function getSwapTileWithEmpty(divNum) {
			return function () { swapTileWithEmpty(divNum) };
		}
		function setOnClickXY(x,y){
			if ((x>=0) && (x<N) && (y>=0) && (y<N)) {
				var i = y*N+x;
				divs[i].onclick=getSwapTileWithEmpty(i);
			}
		}
		
		function swapTileWithEmpty(num) {
			var imgUrl = divs[num].style.backgroundImage;
			divs[emptyPos].style.backgroundImage = imgUrl;
			divs[num].style.backgroundImage = "url(bee-00.png)";
			emptyPos = num;
			setOnClicks(num);
		}
			
		function setOnClicks(num) {
			var i,x,y,x0,x1,y0,y1;
			for (i=0; i<divs.length; i++) {
				divs[i].onclick="";
			}
			x = num % N;
			y = (num / N) >> 0;
			x0 = x-1; x1 = x+1;
			y0 = y-1; y1 = y+1;
			setOnClickXY(x0,y);
			setOnClickXY(x1,y);
			setOnClickXY(x,y0);
			setOnClickXY(x,y1);
		}
		
		
		divs = document.getElementsByTagName('div');
		for (i=0; i<divs.length; i++) {
			s = "0".concat(i).slice(-2);
			divs[i].num = i;
			divs[i].style.backgroundImage="url(bee-"+s+".png)";
		}
		setOnClicks(emptyPos);
	}

