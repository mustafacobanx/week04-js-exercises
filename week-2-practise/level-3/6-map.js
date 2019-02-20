// 1. Write a function (`captialise`) that capitlises the first letter of a provided string
// 2. Declare a new array (`mentorsTidy`) containing:
//    - every item from `mentors` run through the `tidyUpString` function
//    - every resulting item run through the `captialise` function

function tidyUpString(str) {
  return str
    .trim()
    .toLowerCase()
    .replace("/", "");
}

function captialise(str) {
let arr2 = str.charAt(0).toUpperCase() + str.slice(1);
return arr2 ;
  // complete this function
}

var mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
var RR = mentors.map(tidyUpString);
var mentorsTidyAndCapitalised = RR.map(captialise)

console.log(mentorsTidyAndCapitalised);

/* 
  EXPECTED RESULT
  ---------------
  ["Daniel", "Irina", "Gordon", "Ashleigh"]
*/
