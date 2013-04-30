/* exported initGame */ 

function SUDOKU () {
    var BOARDSIZE = 3,
        divs = [];

function factor(n) {
    if (n>1) {
        return n * factor(n-1);
    } else {
        return 1;
    }
}


function Permutator() {
	"use strict";

	function min(arr, i) {
		var mi = i, m = arr[i], atLeast = arr[i-1];
		for ( i = mi + 1; i < arr.length; i += 1){
			if ( arr[i] < m && arr[i] > atLeast) {
				m = arr[i];
				mi = i;
			}
		}
		return mi;
	}

	this.initArr = function (N) {
		var i,
			arr = [];
		for (i = 0; i < N; i += 1) {
			arr.push(i+1);
		}

		return arr;
	}

	this.nextPerm = function (arr, N) {
		var v,
			mi,
			i,
			subarr;

		if (!Array.isArray(arr) || arr.length !== N || !arr[0]) {
			arr = this.initArr(N);
			return arr;
		}

		i = arr.length-2;
		while ( i >= 0 && arr[i] >= arr[i + 1] ) { i -= 1; };
		if (i >= 0) {
			mi = min(arr,i + 1);

			v = arr[mi];
			arr[mi] = arr[i];
			arr[i] = v;

			if (i < arr.length - 2) {
				subarr = arr.splice(i + 1);
				subarr.sort(function (a, b) { return (a - b); });
				arr = arr.concat(subarr);
			}
		}

		return arr;
	}

}

function initGame(N) {
	"use strict";
    var perm = new Permutator(),
    	end = factor(N);

    function pushPermutationToCell(arr,divsnum) {
        var i;
        for (i = 0; i < arr.length; i += 1) {
            divs[divsnum][i].innerHTML = arr[i];
        }
    }
    
    function permutateOne(N, arr, step, cellNum) {
        arr = perm.nextPerm(arr, N);
        pushPermutationToCell(arr, cellNum);
        cellNum += 1;
        cellNum %= N;
        //console.log(arr.length + " : " + arr);
        step += 1;
        if (step < end) {
            setTimeout(function () { permutateOne(N, arr, step, cellNum); }, 100);
        }
    }

	function permutation() {
        permutateOne(N, [], 0, 0);
	}
   
    function init() {
        var r,c,celldivs,cell, table;
        table = document.getElementById('board');
        for (r = 0; r < BOARDSIZE; r += 1) {
            for (c = 0; c < BOARDSIZE; c += 1) {
                cell = table.rows[r].cells[c];
                celldivs = cell.getElementsByTagName('div');
                divs.push(Array.prototype.slice.apply(celldivs,[0]));
            }
        }
    }
    
    init();
	permutation();

}

initGame(9);

}