/**
 * @Tuples
 * @description //?A tuple is a typed array with a pre-defined length and types for each index.
 * ?Tuples are great because they allow each element in the array to be a known type of value.
 */
var tuple_1 = ["sakib", 212, true];
console.log({ tuple_1: tuple_1 });
//? READONLY
var tuple_2 = ["sakib", 212, true];
console.log({ tuple_2: tuple_2 });
//? Named tuple
var tuple_3 = [3, 'sakib'];
var a = tuple_3[0], b = tuple_3[1];
console.log({ a: a, b: b });
