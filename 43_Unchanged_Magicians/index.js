//Question no 43:Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() 
//with a copy of the array of magicians’ names. Because the original array will be unchanged, return the 
//new array and store it in a separate array. Call show_magicians() with each array to show that you have
// one array of the original names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magician = ['herry', 'charlie', 'jhon', 'henry'];
function copyarray(arr) {
    return __spreadArray([], arr, true);
}
function make_great(magicianarray) {
    for (var i = 0; i < magicianarray.length; i++) {
        magicianarray[i] = "The great " + magicianarray[i];
    }
}
function show_magicians(magicians) {
    magician.forEach(function (element) {
        console.log(element);
    });
}
var copymagician = copyarray(magician);
console.log(copymagician);
console.log("This is  my copy array");
make_great(magician);
console.log("This is my modified array");
show_magicians(copymagician);
