/*Write a method that returns a Fibonacci sequence from 1 to n.*/
function fibonacciNDummy(n){
  var result;
  if(n<0){
    throw "Invalid parameter n ->"+n;
  }else if(n==0){
    console.log("Empty sequence");
  }else if(n==1){
    result = [0];
  }else if(n==2){
    result = [0,1];
  }else{
    result = [0,1];
    for(var i=2;i<n;i++){
      result.push(result[i-1] + result[i-2]);
    }
  }
  return result;
}

/* Basic test*/
var fibonacciSeq = fibonacciNDummy(10);
console.log(fibonacciSeq);
