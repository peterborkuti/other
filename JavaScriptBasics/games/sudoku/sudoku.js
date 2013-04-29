/* exported initGame */ 

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
function initGame() {
	"use strict";


	function factor(n) {
		if (n>1) {
			return n * factor(n-1);
		} else {
			return 1;
		}
	}

	function permutation(N) {
		var i,
			perm = new Permutator(),
			a,
			end = factor(N);

		for ( i = 0; i < end; i += 1) {
			a = perm.nextPerm(a,N);
			if (a.length < N) console.log("Error");
			console.log(a.length + " : " + a);
		}
	}

	//table = document.getElementById('board');
	//divs = table.getElementsByTagName('div');
	//divs = Array.prototype.slice.apply(divs,[0]);
	permutation(5);

}
