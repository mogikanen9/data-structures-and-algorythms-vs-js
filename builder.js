function Pet(name,type,owner){
  this.name = name;
  this.type = type;
  this.owner = owner;
  this.print = function(){
    return "name->"+this.name+", type->"+this.type+", owner->"+this.owner;
  }
}

function PetBuilder(){
  this.type;
  this.name;
  this.owner;

  this.build = function(){
    return new Pet(this.name,this.type,this.owner);
  }


  this.withName = function(name){
    this.name = name;
    return this;
  }

  this.withType = function(type){
    this.type = type;
    return this;
  }
  this.withOwner = function(owner){
    this.owner = owner;
    return this;
  }
}

/* Basic test */
var myPetBuilder = new PetBuilder();
var myCat = myPetBuilder.withName("Murzik").withType("Cat").withOwner("Vasya").build();
var myDog = myPetBuilder.withName("Polkan").withType("Dog").withOwner("Misha").build();
console.log("myCat: "+myCat.print());
console.log("myDog: "+myDog.print());
