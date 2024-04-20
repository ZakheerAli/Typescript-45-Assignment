//Question no 21: They think of something you could store in a TypeScript Object.
// Write a program that creates Objects containing these items.

//Data type of person object.
interface person{
    fullName:string,
    age:number,
    student:boolean,
    qualification:string,
}
//creating person object.
let person:person={
    fullName:"Zakheer Ali",
    age:18,
    student:true,
    qualification:"Intermediate",
}
console.log(person);

//data type of car object.
interface car{
    name:string,
    color:string,
    modal:string,
}

//creating car object.
let car:car={
    name:"toyota",
    color:"white",
    modal:"revo rocco",
}
console.log(car);