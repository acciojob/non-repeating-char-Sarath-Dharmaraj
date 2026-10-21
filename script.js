function firstNonRepeatedChar(str) {
 // Write your code here
  str = str.split('').sort().join('')
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
  return null
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
