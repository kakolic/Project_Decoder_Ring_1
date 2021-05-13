// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6


const polybiusModule = (function () {
  // you can add any code you want within this function scope
  let polybiasSquare = {11: 'a', 21: 'b', 31: 'c', 41: 'd', 51: 'e', 12: 'f', 22: 'g', 32: 'h', 42: '(i/j)', 52: 'k',
    13: 'l', 23: 'm', 33: 'n', 43: 'o', 53: 'p', 14: 'q', 24: 'r', 34: 's', 44: 't', 54: 'u', 15: 'v',
    25: 'w', 35: 'x', 45: 'y', 55: 'z'
  };

function polybius(input, encode = true) {
  // your solution code here    
  input = input.toLowerCase();
  let result = '';
  if (typeof input !== "string") return false;  
  if (encode) {
    for (values in input) {
      let letter = input[values];
      if (letter === ' ') {
        result += letter
        continue
      }
      if (letter === 'i' || letter === 'j') {
        result += 42
        continue
      }
      for (value in polybiasSquare) {
        if (letter === polybiasSquare[value]) {
          result += value
        }
      }
    }
  } else {
      for (numbers in input) {
      let join = input.split(' ');
      for (element in join) {
        if (join[element].length % 2 != 0) {
          return false;
        }
      }
      let newinput= `${input[0]}${input[1]}`;
      if (input[0] === ' ') {
        result += input[0];
        input = input.slice(1);
        continue;
      }
      for (num in polybiasSquare) {
        if (newinput === num) {
          result += polybiasSquare[num]
        }
      }
      input = input.slice(2);
    }
}
  return result;
}

  return {
    polybius,
  };
})();


module.exports = { polybius: polybiusModule.polybius };