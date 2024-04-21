//Question no 41:Magicians: Make a array of magician’s names. Pass the array to a function called 
//show_magicians(), which prints the name of each magician in the array.

let magician:string[]=['herry','charlie','jhon','henry'];

function show_magicians(magicians:string[]){
for(let ele of magicians){
    console.log(ele);
}
}
show_magicians(magician);