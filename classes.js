class Person{
    name;
    age;
    talk(){
        console.log (`Hello, my name is ${this.name} and I'm ${this.age} years old.`)
    }
}

const newPerson = new Person()

newPerson.name = "Lucas"
newPerson.age = 26
newPerson.talk()

/*class Person{
    constructor (name,age){
        console.log (`Hello, I'm ${name} and I'm ${age} years old.`)
    this.name = name
    this.age = age
    }
    talk(){
        console.log (`Hello, my name is ${this.name} and I'm ${this.age} years old.`)
    }
}

const newPerson = new Person ("Lucas", 26)
newPerson.talk()*/
