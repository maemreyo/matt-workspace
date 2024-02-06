
/**
1. *Setting up environment for TS: https://www.typescriptlang.org/
2. Using Playground: https://www.typescriptlang.org/play
3. null vs undefined
4. *Object type and Function type
*/


// JS: Dynamic typing
// TS: Static typing
type BaseId = string;
type AdvancedId = number
const userId: BaseId | AdvancedId = '1';
// & Intersection
// | Union
const personA = {
    name: 'A',
    age: 25,
    address: '123 Main',
    goShopping: () => {}
}

// value: personA
// properties: name, age, address
// methods: goShopping

// shape
/**
 type Person = {
    name: string,
    age: number,
    address: string,
    goShopping: () => void
 }

 */
// Union type

// ternary operator: expression ?
let math = Math.random() > 0.5 ? 10 : '100';
// => Union type of `math`: string | number

let id: string | number = math
// => only string
// => only number
// 0.5.toUppperCase() // "0.5"
// "10".toUpperCase() // "10"

// id.toUpperCase()

// Narrowing
// id
// if (typeof id === 'string') {
//     // handle string
// }
// if (typeof id === 'number') {
//     // handle numbers
// }

// const math1: "Math" | 'a'

// const math1 = 'a'