BP = {};
function startBall(id,w,h,x,y) {
	var ball = document.getElementById(id);
	var court = ball.parentNode;
	ball.style.width=w+"px";
	ball.style.height=h+"px";
	ball.style.left=x+"px";
	ball.style.top=y+"px";
	
	var courtWidth = parseInt(court.style.width,10);
	var courtHeight = parseInt(court.style.height,10);
	var ballWidth = w;
	var ballHeight = h;
	var dx=1;
	var dy=5;
	var maxdx = courtWidth-ballWidth-dx;
	var maxdy = courtHeight-ballHeight-dy;
	function moveHoriz() {
		var left = parseInt(ball.style.left,10)+dx;
		ball.style.left= left + "px";
	
		if (left <= dx) {
			dx = Math.abs(dx);
		};
		if (left >= maxdx) {
			dx=-Math.abs(dx);
		};
	}
	
	function moveVert() {
		var top = parseInt(ball.style.top,10)+dy;
		ball.style.top= top + "px";
	
		if (top <= dy) {
			dy = Math.abs(dy);
		};
		if (top >= maxdy) {
			dy=-Math.abs(dy);
		};
	}

	setInterval(moveVert,10);

}

function initCourt(id,w,h) {
	var court = document.getElementById(id);
	court.style.width=w+"px";
	court.style.height=h+"px";
}
