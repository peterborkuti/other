/* exported initGame */
function initGame() {
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

	function nextPerm(a) {
		var v, mi, i = a.length-2, subarr;
		while ( i >= 0 && a[i] >= a[i+1] ) { i -= 1; };
		if (i >= 0) {
			mi = min(a,i + 1);

			v = a[mi];
			a[mi] = a[i];
			a[i] = v;

			if (i < a.length - 2) {
				subarr = a.splice(i+1);
				subarr.sort(function (a,b) { return (a - b); });
				a = a.concat(subarr);
			}
		}

		return a;
	}

	function factor(n) {
		if (n>1) {
			return n * factor(n-1);
		} else {
			return 1;
		}
	}

	function permutation(N) {
		var i, a = [], end = factor(N);
		for (i = 0; i < N; i +=1 ) {
			a[i] = i+1;
		}

		for ( i = 0; i < end; i += 1) {
			if (a.length<N) console.log("Error");
			console.log(a.length+ " : " + a);
			a = nextPerm(a);
		}
	}

	//table = document.getElementById('board');
	//divs = table.getElementsByTagName('div');
	//divs = Array.prototype.slice.apply(divs,[0]);
	permutation(9);

}
