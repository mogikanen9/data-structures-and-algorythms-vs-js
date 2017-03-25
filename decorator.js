function HelloService(){
    this.sayHello = function(person){
      return "Hello, "+person.title+" "+person.firstName+" "+person.lastName+"!"
    }
}

function HelloServiceWithValidation(helloService){
  this.target = helloService;
  this.prototype = HelloService();

  this.sayHello = function(person){
    if(person != null && person.title!=null
      && person.firstName!=null && person.lastName!=null){
        return "Hello, "+person.title+" "+person.firstName+" "+person.lastName+"!";
      }else{
        console.log("Person is not properly initialized!");
        return "";
      }
  }
}

/* Basic test */
var helloService = new HelloServiceWithValidation(new HelloService());
var helloMsg = helloService.sayHello({title:"Sir.",firstName:"John",lastName:"Doe"});
console.log("helloMsg->"+helloMsg);
helloMsg = helloService.sayHello({title:"Sir.",firstName:"Bin"});
console.log("helloMsg2->"+helloMsg);
