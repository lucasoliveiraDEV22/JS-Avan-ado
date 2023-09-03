/*let variable = "Hei"
const object = {name: "João"}
object.name = "Lucas"
const myObject = [5,6,7]
myObject[0] = 9

console.log (myObject)*/

function sum (firstNumber, secondNumber) {
    return firstNumber + secondNumber
}

function multi (firstNumber, secondNumber) {
    return firstNumber*secondNumber
}


const person = {
    name: "Lucas",
    age: 25,
    talk: function () {
        console.log ("Olá");
    },
};

// module.exports = {sum, multi, person}

this.person = person
this.sum = sum
