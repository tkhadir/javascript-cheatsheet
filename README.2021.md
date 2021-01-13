JavaScript Number Method Cheat Sheet
toExponential() : Returns a string representing the Number object in exponential notation
  function expo(x, f) {
      return 
      Number.parseFloat(x).toExponential(f);
  }

  console.log(expo(123456, 2)); 
  // -> 1.23e+5
toFixed() : formats a number using fixed-point notation
  function financial(x) {
      return Number.parseFloat(x).toFixed(2); 
  }

  console.log(financial(123.456)); 
  // -> 123.46
toPrecision() : returns a string representing the Number object to the specified precision
  function precise(x) {
      return
      Number.parseFloat(x).toPrecision(4); 
  }

  console.log(precise(123.456)); 
  // -> 123.5
toString() : returns a string representing the specifies Number object
  function hexColour(c) {
      if (c < 256) {
          return Math.abs(c).toString(16); 
      }
      return 0; 
  }

  console.log(hexColour(233)); 
  // -> e9
valueOf() : returns the wrapped primitive value of a number object
  const numObj = new Number(42); 
  console.log(typeof numObj); 
  // -> object

  const num = numObj.valueOf(); 
  console.log(num); 
  // -> 42

  console.log(typeof num); 
  // -> number

JavaScript Loops Cheat Sheets
For Loop
  for (var i = 0; < 10; i++) {
      console.log(i + ": " + i * 3 + "<br />"); 
  }
  // -> 0: 0<br />
  // -> 1: 3<br />
  // -> ...

  let a = [1, 2, 3]; 
  var sum = 0; 
  for (var i - 0; i <a.length; i++) {
      sum += a[i]; 
  } // pasing an array
  console.log(sum); 
  // -> 6
While Loop
  var i = 1;                  // initialize
  while (i < 100) {          // enters the cycle if statement is true
      i *= 2;                 // increment to avoid infinte loop 
      console.log(i + ", "); // output
  } 
  // 2, 
  // 4, 
  // ...
  // 128, 
Do While Loop
  var i = 1;                  // initialize
  while (i < 100) {          // enters the cycle asleast once
      i *= 2;                 // increment to avoid infinte loop 
      console.log(i + ", "); // output
  } while (1 < 100); // repeats cycle if statement is true at the end
  // 2, 
  // 4, 
  // ...
  // 128,
Break
  for (var i = 0; i < 10; i++) {
      if (i == 5 ) { break; } // stops and exits the cycle
      console.log(i + ", ");  // Lat output number is 4
  }
  // -> 0, 
  // -> 1, 
  // ...
  // -> 4, 
Continue
  for (var i = 0; i < 10; i++) {
      if (i == 5 ) { continue; } // skips the rest of the cycle
      console.log(i + ", ");  // skips 5
  }
  // -> 0, 
  // -> 1, 
  // ...
  // -> 9,
JavaScript String Methods Cheat Sheet
charAt() : Returns the character at the specified index
  const sentence = "Jeff bezos is now the second richest."; 

  const index = 4; 

  console.log(`The character at index ${index} is ${sentence.charAt(index)}`); 
  // The character at index 4 is f
concat() : Joins two or more strings, and returns a copy of the joined strings
  const str1 = "Hello"; 
  cosnt str2 = "World"; 

  console.log(str1.concat(" ", str2)); 
  // -> Hello World

  console.log(str2.concat(", ", str1)); 
  // -> World, Hello
replace() : Searches for a match between a substring (or regex) and a string and replaces the matched substring with a new substring
  const p = "Talk is cheap. Show me the work. - Someone"; 

  console.log(p.replace("work", "code")); 
  // -> Talk is cheap. Show me the code. - Someone
search() : Searches for a match between a regex and a string, and returns the position of the match
  const paragraph = "The quick brown fox jumps over the lazy dog."; 

  // any character that is not a word character or whitespace
  const regex = /[^\w\s]/g;

  console.log(paragraph.search(regex)); 
  // -> 43
slice() : Extracts a part of a string and returns a new string
  const str = "The quick brown fox jumps over the lazy dog."; 

  consolelog(str.slice(31)); 
  // -> the lazy dog

  console.log(str.slice(4, 19)); 
  // -> quick brown fox
trim() : Removes whitespace from both ends of a string
  const greeting = "  Hello world!   "; 

  console.log(greeting); 
  // -> Hello world!

  console.log(greeting.trim()); 
  // -> Hello world!
substr() : Extracts the character from a string, beginning at a specified start position, and through the specified number of character
  const str = "Mozilla"; 

  console.log(str.substr(1, 2)); 
  // -> oz

  console.log(stre.substr(2)); 
  // -> zilla
toLowerCase() : Converts a string to lowercase letters
  const sentence = "Elon became the richest last night."; 

  console.log(sentence.toLowerCase()); 
  // -> elon became the richest last night.
JavaScript Array Method Cheet sheet
concat() : Joins two or more arrays, and returns a copy of the joined array
  let array1 = ["a", "b", "c"]; 
  let array2 = ["d", "e", "f"]; 
  let array3 = array1.concat(array2); 

  console.log(array3); 
  // -> Array(6) ["a", "b", "c", "d", "e", "f" ]
indexOf() : Search the array for an element and returns its position
  let beasts = ["ant", "bison", "camel", "duck", "bison"]; 

  console.log(beasts.indexOf("bison")); 
  // -> 1

  // start from index 2
  console.log(beasts.indexOf("bison", 2)); 
  // -> 4
join() : Joins all elements of an array into a string
  let elements = ["Fire", "Air", "Water"]; 

  console.log(elements.join()); 
  // -> Fire,Air,Water

  console.log(elements.join(" ")); 
  // -> Fire Air Water
pop() : Removes the last element of an array, and returns that element
  let plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"]; 

  console.log(plants.pop()); 
  // -> tomato

  console.log(plants); 
  // -> Array(4) ["brocxoli", "cauliflower", "cabbage", "kale"]
reverse() : Reverses the order of the elements in an array
  let array1 = ["one", "two", "three"]; 
  console.log("array1:", array1); 
  // -> array1: Array(3) [ "one", "two", "three" ]

  let reversed = array1.reverse(); 
  console.log("reversed", reversed); 
  // -> reversed: Array(3) [ "three", "two", "one" ]
shift() : Removes the first element of an array, and returns that element
  let array1 = [1, 2, 3]; 

  let firstElement = array1.shift(); 

  console.log(array1); 
  // -> Array [ 2, 3 ]
sort() : Sorts the element of an array
  let months = ["March", "Jan", "Feb", "Dec"]; 
  months.sort(); 

  console.log(months); 
  // -> Array(4) [ "Dec", "Feb", "Jan", "March" ]
toString() : Converts an array to string, and returns the result
  const array1 = [1, 2, "a", "1a"]; 

  console.log(array1.toString()); 
  // -> 1,2,a,1a
JavaScript Datatypes Cheat Sheet
var age = 18; // Number

var name = "Rahul"; // string

var name = {first:"Rahul", last:"Singh"}; // object

var truth = false; // boolean

var sheets = ["HTML", "CSS", "JS"]; // array

var a; typeof a; // undefined 

var a = null; // value null
JavaScript Operators Cheat Sheet
a = b + c - d; // addition, substraction

a = b * (c / d); // multiplication, division

x = 100 % 48; // modulo. 100 / 48 remainder = 4

a++; b--; // postfix increment and decrement
Variables cheat sheet
var : The most common variable. Can be reassigned but only accessed within a function. Variables defined with var move to the top when code is executed.
const : Cannot be reassigned and not accessible before they appear within the code
let : Similar to const, however, let variable can be reassigned but not re-declared
var a;            // variable
var b = "init";   // string
var c = "Hi" + "" + "Rahul"; // "Hi Rahul"
var d = 1 + 2 + "3";   // "33"
var e = [2,3,5,8];   // array
var f = false;       // boolean
var g = /()/; // RegEx
var h = function(){};   // function object
const PI = 3.14;        // constant
var a = 1, b = 2, c = a + b;    // one line
let z = 'zzz';        // block scope local variable
Get Date Methods Cheet Sheet
getFullYear() : Returns the year of the specified date according to local time
  const moonLanding = new Date("January 08, 69 00:20:10"); 

  console.log(moonLanding.getFullYear()); 
  // -> 1969

getMonth() : Returns the month in the specified date according to local time, as a zero-based value (where zero indicates the first month of the year).
  const moonLanding = new Date("January 08, 69 00:20:10"); 

  console.log(moonLanding.getMonth()); // (January gives 0)
  // -> 6
getDate() : Returns the day of the month for the specified date according to local time
  const birthday = new Date("June 16, 2004 23:14:00"); 
  const date1 = birthday.getDate(); 

  console.log(date1); 
  // -> 19
getHours() : Returns the hour for the specified date, according to local time
  const birthday = new Date("June 16, 04 4:20"); 

  console.log(birthday.getHours()); 
  // -> 4
getMinutes() : Returns the minutes in the specified date according to local time
  const birthday = new Date("June 16, 04 04:10"); 

  console.log(birthday.getMinutes());
  // -> 20
getSeconds() Returns the seconds in the specified date according to local time
  const moonLanding = newDate("June 16, 69 00:23:11"); 

  console.log(moonLanding.getSeconds()); 
  // -> 18
