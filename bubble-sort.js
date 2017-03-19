/* Simple implementation to sort numbers*/
function bubbleSort(array){
  var numbersSwithched = 0;
  do{
    numbersSwithched = 0;
    for(var i=0;i<array.length-1;i++){
      if(array[i]>array[i+1]){
        var tmp = array[i];
        array[i] = array[i+1];
        array[i+1] = tmp;
        numbersSwithched = 1;
      }
    }
  }while(numbersSwithched>0);
  return array;
}

/* Basic test */
var intArray = [2.6,4,19,2,0.4,6,0,1];
var sortedArray = bubbleSort(intArray);
console.log(sortedArray);
