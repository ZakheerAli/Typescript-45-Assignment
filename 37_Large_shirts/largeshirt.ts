//Question no 37:Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a medium 
//shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size:string,text:string="I love typescript"){
    console.log(`Creating a ${size} shirt with the message :${text} `);
}
make_shirt("large");
make_shirt("medium");
make_shirt("small","hello world");