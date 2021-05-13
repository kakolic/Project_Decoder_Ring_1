// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  alphabets= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

  function caesar (input, shift, encode = true) {
    //returns false if these conditions are false
    if (!shift || shift === 0 || shift > 25 || shift < -25) 
    return false;
    //make input to lower case
    input = input.toLowerCase();

    let result = []
    //loop though input and find the position of each input character in the alphabet array
    for (let i = 0; i < input.length; i++) {
      let letter = input[i];
      let location = alphabets.indexOf(letter);
         //if not a letter then push to final   
      if (location < 0) {
        result.push(letter);
      }
      //to encode
      else {
        if(encode) {
          let newLocation= (location + shift)
          //NewLocation is new position on the array after shift
          if(newLocation > 25){ newLocation = newLocation - 26};
          if(newLocation < 0){ newLocation = newLocation + 26};
          //push new alphabets to result array
          result.push(alphabets[newLocation]);
        }
        //to decode
        else {
          let newLocation = (location - shift);
          //NewLocation is new position on the array after shift
          if(newLocation > 25){ newLocation = newLocation - 26};
          if(newLocation < 0){ newLocation = newLocation + 26};
        //push new alphabets to result array
          result.push(alphabets[newLocation]);
        }
      }
    }
  
  return result.join("")
  }
    
  
  return {
    caesar,
  };
})();
    
module.exports = { caesar: caesarModule.caesar };
