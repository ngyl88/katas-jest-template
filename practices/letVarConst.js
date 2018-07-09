// LESSON : use let in for loop, such that counter does not exists outside of 'for' loop.

// TO ILLUSTRATE VAR
// for (var i = 0; i < 2; i++) {
//     console.log(i)
// }
// console.log('after var:', i)       // i = 2 (using var i);

// TO ILLUSTRATE LET
for (let i = 0; i < 2; i++) {
    console.log(i)
}
// console.log('after let:', i)    // i is not defined (using let i)

// TO ILLUSTRATE CONST
// for (const i = 0; i < 2; i++) { //assignment to constant variable
//     console.log(i)
// }
// console.log('after const', i)

// var , let
// let a = 1;
// function hello(a) {
//     a = 10;
//     console.log(a); //10
// }
// hello(a);
// console.log(a); //1