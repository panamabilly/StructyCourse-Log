const isPrime = (n) => {
	// The number 1 can not be prime therefore return false
	if (n < 2) {
		return false;
	}
	for (let i = 2; i < n; i++) {
		if (n % i === 0) {
			return false; // loop through all numbers between 2 and n checking to see if i can divide into n, If it can then return false because number is not prime
		}
	}
	return true; // since we checked all the cases in the for loop above return true because if not false the number is prime.
};

console.log(isPrime(7));

module.exports = {
	isPrime,
};
 