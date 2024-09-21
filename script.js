// Write a Function called countChar that takes two parameters: a string and to count.The Function should return The number of times the specified charactor to the string.

const countChar = (word,char) => {
  word= word.toLowerCase();
  char= char.toLowerCase();

  totalCounter = word.split("").reduce((accum,curChar) => {
    if (curChar === char) {
      accum++
    }
    return accum;
  },0)
  console.log(totalCounter);

}
console.log(countChar("Mississippi","I")); // Outout: 4

