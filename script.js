//complete this code
class Animal {
	constructor(species){
		this.species=species;
	}
	get getSpecies(){
		return this.species;
	}
 makeSound(){
     console.log("The " + this.species + " make a sound");
 }	
}
var animal =new Animal("dog");
 console.log(animal.makeSound())
 
 class Dog extends Animal {
     purr(){
         console.log("purr")
     }
 }
var dod =new Dog();

 console.log(dod.purr());
 class Cat extends Animal {
      bark(){
         console.log("woof")
     }
 }

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
