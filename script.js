function firstNonRepeatedChar(str) {
 // Write your code here
  let char = str[0]
  let count = 0
  for(let i of str){
    if (i === char) count++
    else{
      if(count === 1) return char
      char = i
      count = 1
    }
  }
  return count === 1 ? char : null
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
