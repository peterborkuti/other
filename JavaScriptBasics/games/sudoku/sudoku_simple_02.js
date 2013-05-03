/* exported initGame */ 

function SUDOKU () {
    var BOARDSIZE = 3,
		MAXNUM = BOARDSIZE * BOARDSIZE,
		MINNUM = 1,
        DELETE_PROBABILITY = 0.7,
        FILL_WAITING = 0, // millisecs between fill-steps. 0 - fastest filling
        divs = [],
		sudoku = [];
        dontModify = [];

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
	
	function getRowCol(r,c,i) {
		var row,col;
		row = r * BOARDSIZE;
		col = c * BOARDSIZE;
		row += Math.floor(i / BOARDSIZE);
		col += Math.floor(i % BOARDSIZE);
		return { row: row, col: col};
	}

	// TODO
	function goodNumber(n, row, col, r_, c_, divNum) {
		var arr = sudoku[r_][c_],
			i,
			p,r,c,nn;
		//check in cell
		arr[divNum] = undefined;
		i = arr.indexOf(n);
		arr[divNum] = n;
		if (i !== -1 ) return false;
		//check column
		for (r = 0; r < MAXNUM ; r++) {
			if (r !== row) {
				p = getPos(r, col);
				nn = sudoku[p.r][p.c][p.divNum];
				if (nn && nn === n) return false;
			}
		}
		//check row
		for (c = 0; c < MAXNUM ; c++) {
			if (c !== col) {
				p = getPos(row, c);
				nn = sudoku[p.r][p.c][p.divNum];
				if (nn && nn === n) return false;
			}
		}

		return true;
	}

	function getNumSetter(div,r,c,i) {
		return function () {
			var n = parseInt(div.innerHTML,10), pos;
			if (isNaN(n) || (n < 1) || (n > MAXNUM)) {
				n = 0;
			}
			if (n < MAXNUM) {
				n += 1;
			} else {
				n = 1;
			}
			div.innerHTML = n;
			sudoku[r][c][i] = n;
			pos = getRowCol(r,c,i);
			if (goodNumber(n, pos.row, pos.col, r, c, i)) {
				div.style.backgroundColor = "green";
			} else {
				div.style.backgroundColor = "red";
			}
		}
	}

	function startGame() {
		var i,r,c,div;
		for (r = 0; r < BOARDSIZE; r += 1) {
			for (c = 0; c < BOARDSIZE; c += 1) {
				for (i = 0; i < MAXNUM; i += 1) {
					if (Math.random() < DELETE_PROBABILITY) {
						div = divs[r][c][i];
						div.innerHTML = '';
						div.style.backgroundColor = "red";
						div.onclick = getNumSetter(div,r,c,i);
						sudoku[r][c][i] = 0;
					}
				}
			}
		}
	}
    
    function getNewCoord(coord, back) {
        var col = coord.col, row = coord.row;
        if (back) {
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
        return { row:row, col:col};
    }

    function setNextStep(coord, backStep) {
		if (coord.row >= 0 && coord.row < MAXNUM) {
			setTimeout(function () { fillOne(N, coord, backStep); }, FILL_WAITING);
		} else {
            if (coord.row >= MAXNUM) {
                startGame();
            } else {
                alert("Unfortunately I could not fill the table. Refresh the browser");
            }
		}
    }

    
    function fillOne(N, coord, backStep) {
		var r,c,divNum, num, div, pos;

		pos = getPos(coord.row, coord.col);
		r = pos.r;
		c = pos.c;
		divNum = pos.divNum;
        
        if (dontModify[r][c][divNum] && backStep) {
            coord = getNewCoord(coord, backStep);
            setNextStep(coord, backstep);
            return;
        }
		
		num = sudoku[r][c][divNum];
		div = divs[r][c][divNum];
		if (num && num > 0 && num <= MAXNUM ) {
			if (!dontModify[r][c][divNum] && num < MAXNUM) {
                num += 1;
            }
		} else {
			num = MINNUM;
		}
		sudoku[r][c][divNum] = num;
		div.innerHTML = num;
		while ( num <= MAXNUM && !goodNumber(num, coord.row, coord.col, r, c, divNum)) {
			num += 1;
			div.innerHTML = num;
			sudoku[r][c][divNum] = num;
		}
        backStep = num > MAXNUM;
        coord = getNewCoord(coord, backStep);

		div.innerHTML = num;
		sudoku[r][c][divNum] = num;

        setNextStep(coord, backStep);
    }

    function getRandomPermutation() {
    	var i, arr = new Array(MAXNUM);
        //shuffle begin
		for (i = 0; i < MAXNUM; i += 1) {
			arr[i]=Math.floor((Math.random() * 1000)) * 10 + (i + 1);
		}
		arr.sort(function(a,b){return a-b});
        return arr.map(function (e) { return e % 10; });
    }
    
	function fill() {
        var i;
        for (i = 0; i < BOARDSIZE; i += 1) {
            sudoku[i][i]=getRandomPermutation();
            pushArrToCell(sudoku[i][i],i,i);
            //values are not important, only there must be true
            dontModify[i][i] = getRandomPermutation();
        }
        fillOne(N, {row:0, col:3}, false);
	}
   
    function init() {
        var r,c,celldivs,cell, table;

        table = document.getElementById('board');
        for (r = 0; r < BOARDSIZE; r += 1) {
			sudoku[r] = [];
			divs[r] = [];
            dontModify[r] = [];
            for (c = 0; c < BOARDSIZE; c += 1) {
				sudoku[r][c] = new Array(MAXNUM);
                dontModify[r][c] = new Array(MAXNUM);
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