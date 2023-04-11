var names = [];
names.push("Sakib");
/** Readonly */
var other_names = [];
// other_names.push("12"); //?Error: Argument of type 'string' is not assignable to parameter of type 'number'.
var ages = [];
ages.push(21);
ages.push("21");
//ages.push(true); //?Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
console.log(ages);
