let num:number = 4;
num = 44;
// num = "string" // it will throw an error because we can only assign a number datatype in it ..

//write a program to add two num
function sum (a:number,b:number):number{
    return a+b;
}
console.log(sum(4,6));

// ts compilation file - if there is something error in typescript file it should not create index.js file after using it.

//for unabling this feature in we have to write in terminal this command tsc --init and go to the file and noemitonerror true kariye or tsc --noEmitOnError index.ts

