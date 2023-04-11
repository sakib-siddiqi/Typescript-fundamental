const names: string[] = [];
names.push("Sakib");

/** Readonly */
const other_names:readonly string[]=[];
// other_names.push("12"); //?Error: Argument of type 'string' is not assignable to parameter of type 'number'.


const ages:(string|number)[]=[];
ages.push(21);
ages.push("21");
//ages.push(true); //?Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
console.log(ages);