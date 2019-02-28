/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  Window/Global Object Binding: When declared in global scope it will refer to the window object.
*   
* 2.  Implicit Binding: Paren function is bound
*
* 3.  New Binding: new refers to the object
*
* 4.  Explicit Binding: You manually have to bind things
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
 // const foodOrder = {
    //     name: 'Jake',
    //     food:  'Baked Potato',
    //     cook: function() {
    //         //with window binding, food cannot be found
    //         console.log(`${name} did you order ${food}`)
    //     }
    // }
    // foodOrder.cook();

// Principle 2

// code example for Implicit Binding
// const foodOrder = {
//     name: 'Jake',
//     food:  'Baked Potato',
//     cook: function() {
//         //with window binding, food cannot be found
//         console.log(`${this.name} did you order ${this.food}`)
//     }
// }
// foodOrder.cook();

// Principle 3
// // code example for New Binding
// function CordialPerson(name) {
//     console.log(this.greeter);
//     this.greeter = name;
//     console.log(this.greeter);
//     // this.greeter = greeter;
//     // this.greeting = "Hello";
//     this.speak = function() {
//         console.log(`${this.greeting}, ${this.greeter}`)
//     }
// }
// const cordialPerson = {
//     greeter: "Newman",
//     greeting = "Hello",
//     speak = function()
//     {
//        console.log(`${this.greeting}, ${this.greeter}`) 
//     }
// }

// const jerry = new CordialPerson('Newman');
// const newman = new CordialPerson('Jerry');

// newman.speak();
// jerry.speak();
// Principle 4

// code example for Explicit Binding

// const person = {
//     name: 'Jake'
// }
// const skills = ['HTML','CSS','JS'];

//     function intro(skills)
//     {
//         console.log(`Hello! My name is ${this.name}, and I have skills in: ${skills}`);
//     }
//     intro.call(person, skills);