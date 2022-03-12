const maxValue = (nums) => {
	let maximum = -Infinity;
	// start iteration from Negative Infinity to ensure loop starts from the bottom
	// for .. of loop lets you iterate through all num elements of the nums array.
	// if num is greater than maxium save the number into maximum then return maximum number for array
	for (let num of nums) {
		if (num > maximum) maximum = num;
	}
	return maximum;
};
// Test for Max Value function
console.log(maxValue([1000, 1, 222222, 3, -4, -335, 6, 7]));

module.exports = {
	maxValue,
};
