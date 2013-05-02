/* exported initGame */ 

function SUDOKU () {
    var BOARDSIZE = 3,
		MAXNUM = BOARDSIZE * BOARDSIZE,
		MINNUM = 1,
        divs = [],
		sudoku = [];

function initGame(N) {
	"use strict";

    function pushArrToCell(arr,r,c) {
        var i;
        for (i = 0; i < arr.length; i += 1) {
            divs[r][c][i].innerHTML = arr[i];
        }
    }
	
	function getInt(s) {
		var n = parseInt(s,10);
		if (!isNaN(n) && (n > 0) && (n < 10)) {
			n = 0;
		}
		return n;
	}

	function getPos(row, col) {
		var r, c, divNum;
		r = Math.floor(row / BOARDSIZE);
		c = Math.floor(col / BOARDSIZE);
		divNum = (row % BOARDSIZE) * BOARDSIZE + col % BOARDSIZE;
		return { r:r, c:c, divNum:divNum };
	}

	// TODO
	function goodNumber(n, row, col, r_, c_, divNum) {
		var arr = sudoku[r_][c_],
			i = arr.indexOf(n),
			p,r,c,nn;
		//check in cell
		if (i !== divNum ) return false;
		//check column
		for (r = 0; r < MAXNUM - 1; r++) {
			if (r !== row) {
				p = getPos(r, col);
				nn = sudoku[p.r][p.c][p.divNum];
				if (nn && nn === n) return false;
			}
		}
		//check row
		for (c = 0; c < MAXNUM - 1; c++) {
			if (c !== col) {
				p = getPos(row, c);
				nn = sudoku[p.r][p.c][p.divNum];
				if (nn && nn === n) return false;
			}
		}

		return true;
	}
    
    function fillOne(N, row, col) {
		var r,c,divNum, num, div, pos;

		pos = getPos(row, col);
		r = pos.r;
		c = pos.c;
		divNum = pos.divNum;
		
		num = sudoku[r][c][divNum];
		div = divs[r][c][divNum];
		if (num) {
			num += 1;
		} else {
			num = MINNUM;
		}
		sudoku[r][c][divNum] = num;
		div.innerHTML = num;
		while ( num <= MAXNUM && !goodNumber(num, row, col, r, c, divNum)) {
			num += 1;
			div.innerHTML = num;
			sudoku[r][c][divNum] = num;
		}
		if (num > MAXNUM) {
			num = 0;
			if ( col > 0 ) {
				col -= 1;
			} else {
				row -= 1;
				col = MAXNUM - 1;
			}
		} else {
			if ( col < MAXNUM - 1 ) {
				col += 1;
			} else {
				col = 0;
				row += 1;
			}
		}

		div.innerHTML = num;
		sudoku[r][c][divNum] = num;

		if (row >= 0 && row < MAXNUM) {
			setTimeout(function () { fillOne(N, row, col); }, 0);
		}
    }

	function fill() {
		var i, arr = new Array(MAXNUM);
        //shuffle begin
		for (i = 0; i < MAXNUM; i += 1) {
			arr[i]=Math.floor((Math.random() * 1000)) * 10 + (i + 1);
		}
		arr.sort(function(a,b){return a-b});
        //shuffle end
        
		sudoku[0][0]=arr.map(function (e) { return e % 10; });
		pushArrToCell(sudoku[0][0],0,0);
        fillOne(N, 0, 3);
	}
   
    function init() {
        var r,c,celldivs,cell, table;

        table = document.getElementById('board');
        for (r = 0; r < BOARDSIZE; r += 1) {
			sudoku[r] = [];
			divs[r] = [];
            for (c = 0; c < BOARDSIZE; c += 1) {
				sudoku[r][c] = new Array(MAXNUM);
                cell = table.rows[r].cells[c];
                celldivs = cell.getElementsByTagName('div');
                divs[r][c] = Array.prototype.slice.apply(celldivs,[0]);
            }
        }
    }
    
    init();
	fill();

}

initGame(9);

}