var SingleTonClass = (function(){
  var instance;

 return {
   getInstance: function(){
     if(instance == null){
       instance = new Object("I am the instance");
     }
     return instance;
   }

 }

})();

var instanceA = SingleTonClass.getInstance();
var instanceB = SingleTonClass.getInstance();
var theSame = instanceA === instanceB;
console.log(theSame);
