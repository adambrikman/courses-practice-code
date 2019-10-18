// Write a function, makeChange, that returns an integer that represents the least number of coins that add up to an amount where the amount is always divisible by 5.
// coin values: 5, 10, 25

function makeChange(coins, amount) {

  coins.sort((a,b) => b-a);
  let coinTotal = 0;
  let i = 0;

  while (amount > 0) {
    if(coins[i] <= amount) {
      amount -= coins[i];
      coinTotal ++;
    } else {
      i++;
    }
  }

  return coinTotal;
}

// input amount: 40 , output # of coins: 3 (25, 10, 5)
makeChange([5,10,25], 40)

// input amount: 35, output # of coins: 2 (25, 10) 
// makeChange([5,10,25], 35)
