p=c(0, 1, 0, 0, 0)
world=c("g", "r", "r", "g", "g")
measurements = c("r", "g")
pHit = 0.6
pMiss = 0.2

sense <- function(p, Z){
    q=c()
	n=length(p)
    for (i in 1:n){
        q[i] = p[i] * ifelse(Z == world[i], pHit, pMiss)
	}
    s = sum(q)
	q / s
}

move <- function(p, U){
    n = length(p)
    q = c(p[(n-U+1):n] , p[1:n-U])
    q
}

getLocation <- function(p) {
	which(p == max(p))
}

moveAlong <- function(measurements, p) {
	m = length(measurements)
	for (i in 1:m) {
		p = sense(p, measurements[i])
		p = move(p, 1)
		print(p)
		print (getLocation(p))
	}

}
