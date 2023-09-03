/*const {person, sum} = require ('./newObject')


console.log (person)

console.log (sum (2,3))*/ //==> ISSO É PARA ESCOPO GLOBAL
const person = {   //==> ISSO É PARA ESCOPO LOCAL   
    name: "Lucas",
    age: 25,
    talk: function () {
        console.log (this.age);
    },
};

person.talk()

function myFunction (){
    this.console.log ('Agora eu sou o global')
}

myFunction ()