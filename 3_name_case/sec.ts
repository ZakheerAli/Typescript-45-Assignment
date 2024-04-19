//Name Cases: Store a person’s name in a variable, 
//and then print that person’s name in lowercase, uppercase, and titlecase.
let personName:string = "zakheer ali";
console.log("Uppercase:",personName.toUpperCase());
console.log("lowercase:",personName.toLowerCase());
console.log("titlecase:",personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());