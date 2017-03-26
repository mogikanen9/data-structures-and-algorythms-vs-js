/*
Write an algorithm that prints all numbers between 1 and n, replacing multiples
of 3 with the String Fizz, multiples of 5 with Buzz, and multiples of 15 with
FizzBuzz.
*/
function fizzBuzz(numberTo){

  var result = new Array();

  for(var i=1;i<numberTo;i++){
    if(i%15==0){
      result.push("FizzBuzz");
    }else if (i%5==0){
      result.push("Buzz");
    }else if (i%3==0){
      result.push("Fizz");
    }else{
      result.push(i);
    }
  }
return result;
}

/*Basic test*/
var fizzBuzzed = fizzBuzz(50);
console.log(fizzBuzzed);
