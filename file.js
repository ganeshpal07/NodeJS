 const fs = require("fs");

// fs.writeFileSync("./test.txt", "hello world");


// it will create a new file named test.txt.. this is synchronous.
// or use: fs.writeFile("./test.txt", "hello world"); this is asynchronous


// Reading a file.

// const data = fs.readFileSync("./contact.txt", "utf-8");
// console.log(data);

/*  it is synchronous
    returns the result
    throws the error
    utf-8: encodiing type
 */

    
// fs.readFile("./contact.txt", "utf-8", (err, result) => {
//     if (err) {
//         console.log("Error", err);
//     } else {
//         console.log(result);
//     }
// });

/*
this is asynchronous.
void type: does not return anything.
expects an callback function : (err, result)
*/


// we can also Append or Add in files..

fs.appendFileSync("./contact.txt", "GlK: 201820232026" );
// this will add new ones to files....
