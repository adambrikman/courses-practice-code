/*
# Async FP
## Instructions
1. Run the exercise solution file (HTML) in the browser and observe how the countdown timer operates in the console: the timer prints the starting countdown value ("0:05") immediately, then counts down once per second to "0:00", then prints "Complete!".

2. Now, run the original exercise file (HTML) in the browser and compare the difference in (broken) behavior.

3. Attach `formatCountdown(..)` to the `countdown` observable (using an FP list operation!), and fill in the implementation (`// TODO` comment) so that the countdown timer prints as specified above.
*/

"use strict";

const countdownLength = 5;

var timer = rxjs.interval(1000).pipe(
	rxjs.operators.take(countdownLength),
);
var countdown =
	rxjs.merge(rxjs.of(-1),timer)
   // map formatCountdown to countdown var via pipe
	.pipe(
		rxjs.operators.map(formatCountdown)
	);

countdown.subscribe(
	console.log.bind(console),
	null,
	console.log.bind(console,"Complete!")
);


// *************************************

function formatCountdown(counter) {
  /* Reduce length(5s) by counter (starts at -1) 
  minus an extra 1 (to adjust for off by one error).*/
	return formatTime(countdownLength - counter - 1)
}

function formatTime(time) {
	var minutes = Math.floor(time / 60);
	var seconds = time % 60;
	if (seconds < 10) seconds = `0${seconds}`;
	return `${minutes}:${seconds}`;
}
