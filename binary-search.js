/* Assumption - array is already sorted */
function binarySearch(numbers,element){
  if(numbers.length==0){
    return false;
  }else if(numbers.length==1){
    return numbers[0] === element;
  }else{
    var medIndex = Math.round(numbers.length/2);
    var medValue = numbers[medIndex];
    if(element === medValue){
      return true;
    }else{
      if(element < medValue){
        return binarySearch(numbers.slice(0,medIndex),element);
      }else{
        return binarySearch(numbers.slice(medIndex),element);
      }
    }
  }
}

/* Basic test */
var numbers = [1,3,5,7,9];

for(var i=0;i<=10;i++){
  var exists = binarySearch(numbers,i);
  console.log(i+" exists in "+numbers+" -> "+exists);
}
