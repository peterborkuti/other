/* exported initGame */ 

function SUDOKU () {
    var BOARDSIZE = 3,
		MAXNUM = BOARDSIZE * BOARDSIZE,
		MINNUM = 1,
        DELETE_PROBABILITY = 0.5,
        FILL_WAITING = 0, // millisecs between fill-steps. 0 - fastest filling
		CSSRULESET_BADNUMBER = "badNumber",
		CSSRULESET_GOODNUMBER = "goodNumber";

function Board() {
	var board = new Array();
	board.getElement = function (coord) {
		return board[coord.r][coord.c][coord.divNum];
	}
	board.setElement = function (coord,e) {
		board[coord.r][coord.c][coord.divNum] = e;
		return board;
	}
	board.setElementHTML = function (coord,s) {
		board[coord.r][coord.c][coord.divNum].innerHTML = s;
		return board;
	}

	board.setElementHTMLClassName = function (coord,s) {
		board[coord.r][coord.c][coord.divNum].className = s;
		return board;
	}

	board.isNumberInRowOrCol = function(coord, inRow) {
		var i = 0, coords = inRow ? coord.getCoordsInRow() : coord.getCoordsInCol()
			num = board.getElement(coord);
		while ( i < coords.length && board.getElement(coords[i]) !== num) {
			i += 1;
		}

		return (i < coords.length);
	}

	board.isNumberInCell = function(coord) {
		var arr = board[coord.r][coord.c],
			num = board.getElement(coord),
			i;

		arr[coord.divNum] = undefined;
		i = arr.indexOf(num);
		arr[coord.divNum] = num;

		return (i !== -1);
	}

	board.badNumber = function(coord) {
		var a = board.isNumberInCell(coord),
			b = board.isNumberInRowOrCol(coord,true),
			c = board.isNumberInRowOrCol(coord,false);
			return a || b || c;
	}

	return board;
}

function Coord (boardSize, maxNum) {
	this.row = 0;
	this.col = 0;

	this.r = 0;
	this.c = 0;
	this.divNum = 0;
	
	this.BOARDSIZE = boardSize;
	this.MAXNUM = maxNum;
	
	this.setRowCol = function(row,col) {
		this.row = row;
		this.col = col;
		this.r = Math.floor(this.row / this.BOARDSIZE);
		this.c = Math.floor(this.col / this.BOARDSIZE);
		this.divNum = (this.row % this.BOARDSIZE) * this.BOARDSIZE + this.col % this.BOARDSIZE;
		return this;
	}

	this.setRCDivNum = function (r,c,divNum) {
		this.r = r;
		this.c = c;
		this.divNum = divNum;

		this.row = r * this.BOARDSIZE;
		this.col = c * this.BOARDSIZE;
		this.row += Math.floor(divNum / this.BOARDSIZE);
		this.col += Math.floor(divNum % this.BOARDSIZE);
		return this;
	}

	this.newCoord = function (back) {
        if (back) {
			if ( this.col > 0 ) {
				this.col -= 1;
			} else {
				this.row -= 1;
				this.col = this.MAXNUM - 1;
			}        
        } else {
			if ( this.col < this.MAXNUM - 1 ) {
				this.col += 1;
			} else {
				this.col = 0;
				this.row += 1;
			}
        }
		this.setRowCol(this.row, this.col);
        return this;
    }

	this.getCoord = function (row, col) {
		var c = new Coord(this.BOARDSIZE, this.MAXNUM);
		return c.setRowCol(row,col);
	}
	
	this.getCoordsInRow = function () {
		var i, row = [];
		for (i = 0; i < this.MAXNUM; i += 1) {
			if (this.col !== i) {
				row.push(this.getCoord(this.row, i));
			}
		}
		return row;
	}

	this.getCoordsInCol = function () {
		var i, col = [];
		for (i = 0; i < this.MAXNUM; i += 1) {
			if (this.row !== i) {
				col.push(this.getCoord(i, this.col));
			}
		}
		return col;
	}

}

function game() {
	"use strict";

	var divs = new Board,
		sudoku = new Board,
        dontModify = new Board,
		coord = new Coord(BOARDSIZE, MAXNUM);
	
	function setNumWithStyle(coord,num) {
		var div = divs.getElement(coord);
		sudoku.setElement(coord,num);
		divs.setElementHTML(coord,(num == 0)?'':num);
		if (num === '' || num === 0) {
			divs.setElementHTMLClassName(coord,CSSRULESET_BADNUMBER);
		} else {
			if (sudoku.badNumber(coord)) {
				divs.setElementHTMLClassName(coord,CSSRULESET_BADNUMBER);
			} else {
				divs.setElementHTMLClassName(coord,CSSRULESET_GOODNUMBER);
			}
		}
		return div;
	}


	function setNum(num) {
		if (!dontModify.getElement(coord)) {
			sudoku.setElement(coord,num);
			divs.setElementHTML(coord,num);
		}
	}

    function pushArrToCell(arr,r,c) {
        var i;
        for (i = 0; i < arr.length; i += 1) {
            divs[r][c][i].innerHTML = arr[i];
        }
    }


	function getNumSetter(coord) {
		return function () {
			var n = parseInt(this.innerHTML,10);
			if (isNaN(n) || (n < 1) || (n > MAXNUM)) {
				n = 0;
			}
			if (n < MAXNUM) {
				n += 1;
			} else {
				n = 1;
			}
			setNumWithStyle(coord,n);
		}
	}

	function startGame() {
		var i,r,c,div,coord = new Coord(BOARDSIZE,MAXNUM);
		for (r = 0; r < MAXNUM; r += 1) {
			for (c = 0; c < MAXNUM; c += 1) {
					if (Math.random() < DELETE_PROBABILITY) {
						coord.setRowCol(r,c);
						setNumWithStyle(coord,0).onclick = getNumSetter(coord.getCoord(r,c));
					}
			}
		}
	}
    
    function setNextStep(coord,backStep) {
		if (coord.row >= 0 && coord.row < MAXNUM) {
			setTimeout(function () { fillOne(coord,backStep); }, FILL_WAITING);
		} else {
            if (coord.row >= MAXNUM) {
                startGame();
            } else {
                alert("Unfortunately I could not fill the table. Refresh the browser");
            }
		}
    }

	function getNextNum() {
		var num = sudoku.getElement(coord);
		if (num && num > 0 && num <= MAXNUM ) {
                num += 1;
		} else {
			num = MINNUM;
		}
		return num;
	}
    
    function fillOne(coord,backStep) {
		var num;

        if (dontModify.getElement(coord)) {
            coord.newCoord(backStep);
            setNextStep(coord,backStep);
            return;
        }

		backStep = false;
		num = getNextNum();
		setNum(num);

		while ( num <= MAXNUM && sudoku.badNumber(coord)) {
			num += 1;
			setNum(num);
		}

		if (num > MAXNUM) {
			backStep = true;
			setNum(0);
		}

        coord.newCoord(backStep);

        setNextStep(coord,backStep);
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
            //values are not important, only these must are true
            dontModify[i][i] = getRandomPermutation();
        }
		coord.setRowCol(0,3);
        fillOne(coord,false);
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

game();

}