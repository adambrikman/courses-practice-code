var numbers = {
	// Define generator function
	*[Symbol.iterator]({
		// Destructure parameters
		start = 0,
		end = 100,
		incr = 1
	} = {}) {
		// Iterate through values to print
		for(let i = start; i <= end; i += incr) {
			yield i;
		}
	}
};

// should print 0..100 by 1s
for (let num of numbers) {
	console.log(num);
}

// should print 6..30 by 4s
console.log(`My lucky numbers are: ${[...numbers[Symbol.iterator]
		// Use named arguments to pass in values
		({
			start: 6, 
			end: 30, 
			incr: 4
		})
	]}`
);

// Hint:
//     [...numbers[Symbol.iterator]( ?? )]
