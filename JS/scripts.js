function drawTree(rows) {
 var star = '';
 for (var i = 1; i <= rows; i++) {    
    star = '';
   for (var j = 0; j < i; j++) {
       star = star + '*';
   }
  
    console.log(star);
 }
 }
 +drawTree(6);










/*
function drawTree (i){
for ( var i = 0 ; i < 10 ; i++) {
        var star = '';
        for ( var j = 0 ; j < i ; j++){
           star = star + '*';
      }
  console.log(star);
}
}
drawTree();
*/


/*
var a = prompt ('Podaj wartość a');
var h = prompt ('Podaj wartość h');
var zadanie = (a*h/2);


function getTriangleArea(a, h) {

if ( (a <= 0) || (h <= 0)) {
    console.log('dane nieprawidłowe');
} else {
  return (a*h/2);
}
}
var triangle1Area = getTriangleArea (a, h);
  console.log(triangle1Area);
*/




// nowe komantarze są w modzie
 /* var name = prompt('Enter your name');
  alert('Hello, ' + name);
 console.log('Hello, ' + name);
*/
/*
var a = prompt ('Podaj wartość a');
var  h = prompt ('Podaj wartość h');
var triangleArea = a*h/2;
console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);
alert('Hello, ' + triangleArea);
*/

/*
var a = prompt ('Podaj wartość a');
var  b = prompt ('Podaj wartość b');
var wynik = (a * a) + (2 * a * b) - (b * b);
console.log(wynik);
var value = wynik;

if ( value > 0) {
    console.log('wynik dodatni');
} else if (value < 0 ) {
    console.log('wynik ujemny');
}
if ( value == 0) {
   console.log('jest rowny 0');
}
*/


/*
var a = prompt ('Podaj wartość a');
var h = prompt ('Podaj wartość h');
var zadanie = (a*h/2);

    function getTriangleArea (a, h) {

	if ( (a <= 0) || (h <= 0) ) {
	console.log('dane nieprawidłowe');
} else {
   return zadanie;
}

var winner = checkResult (userChecked, computerChecked);



var a = prompt ('Podaj wartość a');
var h = prompt ('Podaj wartość h');

if ( (a <= 0) || (h <= 0)) {
    console.log('dane nieprawidłowe');
} 
*/