//Question no 43:Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() 
//with a copy of the array of magicians’ names. Because the original array will be unchanged, return the 
//new array and store it in a separate array. Call show_magicians() with each array to show that you have
// one array of the original names and one array with the Great added to each magician’s name.


let magician:string[]=['herry','charlie','jhon','henry'];

function copyarray(arr:string[]){
return[...arr];
}

function make_great(magicianarray:string[]){
for(let i=0; i<magicianarray.length; i++){
    magicianarray[i]="The great " +magicianarray[i]
}
}

function show_magicians(magicians:string[]){
magician.forEach(element =>{
    console.log(element);
})
}


let copymagician=copyarray(magician);
console.log(copymagician);
console.log("This is  my copy array");
make_great(magician);
console.log("This is my modified array");
show_magicians(copymagician);
