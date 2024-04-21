//Question no 41:Magicians: Make a array of magician’s names. Pass the array to a function called 
//show_magicians(), which prints the name of each magician in the array.
var magician = ['herry', 'charlie', 'jhon', 'henry'];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var ele = magicians_1[_i];
        console.log(ele);
    }
}
show_magicians(magician);
