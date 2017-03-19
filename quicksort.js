function quicksort(array){
  if(array.length<2){
    return array;
  }else{
    var pivot = array[0];
    var lower = [];
    var higher = [];

    for(var i=1;i<array.length;i++){
      if(array[i]<pivot){
          lower.push(array[i]);
      }else{
         higher.push(array[i]);
      }
    }

    var sorted = quicksort(lower);
    sorted.push(pivot);
    sorted = sorted.concat(quicksort(higher));
    return sorted;
  }
}

/* Basic test */
var intArray = [2.6,4,19,2,0.4,6,0,1];
var sortedArray = quicksort(intArray);
console.log(sortedArray);
