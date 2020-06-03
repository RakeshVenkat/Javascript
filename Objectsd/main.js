const arr = [1,2,3]
Array.prototype.dance = function () {console.log('ooo la la')}
console.log(arr.dance())

const body = document.body
console.log(body.__proto__) // HTMLBodyElement {…}

const li = document.createElement('li')
console.log(li.__proto__) // HTMLLIElement 

const a = Object.create({a: '1'})
console.log(a.__proto__) // {a: "1"}

String.prototype.grumpus = () => {alert('Go away!!')}
's'.grumpus()

String.prototype.yell = function () {
    console.log(this.toUpperCase())
}
console.log('yaya'.yell())

Array.prototype.pop = function() {
    return 'I will never pop!!'
}

arr1 = [1,2,3,4]
arr1.pop()
console.log(arr1)

// The __proto__ is the reference to its parent prototype


///////// OOP

class Color {
    constructor(r, g, b, name){
        this.r = r
        this.b= b
        this.g = g
        this.name = name
    }
    rgb() {
        return `${this.r} ${this.g} ${this.b}` 
    }
}

