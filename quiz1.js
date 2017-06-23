Write a recursive function which receives an array and returns the sum of the elements of the array.
function Suma(arr, s=0){
  if(arr.length > 0) return Suma(arr,s+=arr.shift())
  return s;
} Suma([5]);

Given two temperatures, return true if one is less than 0 and the other is greater than 100.
function icyHot(temp1, temp2){
  if((temp1 < 0) && (temp2 > 100)) return true;
  if((temp2 < 0) && (temp1 > 100)) return true;
  return false;
}
a.	icyHot(120, -1) → true
b.	icyHot(-1, 120) → true
c.	icyHot(2, 120) → false

Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.
function makes10(x,y){
  if((x===10)||(y===10)||(x+y===10)) return true;
  return false;
}
a.	makes10(9, 10) → true
b.	makes10(9, 9) → false
c.	makes10(1, 9) → true

Given a string, take the first 2 chars and return the string with the 2 chars added at both the front and back, so "kitten" yields"kikittenki". If the string length is less than 2, use whatever chars are there.
function front22(str){
  var part = str.substring(0, 2);
  if(str.length <= 1) return false;
  return part.concat(str, part);
}
a.	front22("kitten") → "kikittenki"
b.	front22("Ha") → "HaHaHa"
c.	front22("abc") → "ababcab"
