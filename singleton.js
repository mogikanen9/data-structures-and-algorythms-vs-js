var SingletonClass = (function(){
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

/* Basic test */
var instanceA = SingletonClass.getInstance();
var instanceB = SingletonClass.getInstance();
var theSame = instanceA === instanceB;
console.log(theSame);
