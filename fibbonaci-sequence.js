/*Write a method that returns a Fibonacci sequence from 1 to n.*/
function fibonacciSeq(n){
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

/*Write a method that returns the nth value of the Fibonacci sequence.*/
function fibonacciMap(n){
   var result = [];
   if(n<0){
     throw "Invalid parameter n ->"+n;
   }else if(n==0){
     console.log("Empty sequence");
   }else if(n==1){
     result[0] = 0;
   }else if(n==2){
     result[0] = 0;
     result[1] = 1;
   }else{
     result[0] = 0;
     result[1] = 1;
     for(var i=2;i<n;i++){
       result[i] = result[i-1] + result[i-2];
     }
   }
   return result;
}

function fibonacciNValue(n){
  var fibonacciMapValue = fibonacciMap(n);
  return fibonacciMapValue[n-1]+fibonacciMapValue[n-2];
}


/* Basic test for sequence*/
var fibonacciSeq = fibonacciSeq(10);
console.log("fibonacciSeq for n=10 -> "+fibonacciSeq);

/* Basic test for map func*/
var fibonacciMapValue = fibonacciMap(10);
console.log(fibonacciMapValue);
console.log(fibonacciMapValue[9]);

var fibonacciValue = fibonacciNValue(7);
console.log("fibonacciValue for n=7 -> "+fibonacciValue);
