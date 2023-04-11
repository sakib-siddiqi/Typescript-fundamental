/**
 * @Tuples
 * @description //?A tuple is a typed array with a pre-defined length and types for each index.
 * ?Tuples are great because they allow each element in the array to be a known type of value.
 */

let tuple_1: [string, number, boolean]=["sakib",212,true];
console.log({ tuple_1 });

//? READONLY
let tuple_2:readonly [string,number,boolean]=["sakib",212,true];
console.log({tuple_2})

//? Named tuple
let tuple_3:[x:number,y:string]=[3,'sakib'];
let [a,b]=tuple_3;
console.log({a,b})