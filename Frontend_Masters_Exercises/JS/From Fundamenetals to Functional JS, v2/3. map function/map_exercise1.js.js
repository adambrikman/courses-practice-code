// Use map on the below list & function to create a new array

const weapons = ['candlestick', 'lead pipe', 'revolver'];

const makeBroken = function(item) {
  return `broken ${item}`;
};

// Result of .map
const brokenWeapons = _.map(weapons, makeBroken);

// console.log(brokenWeapons);

