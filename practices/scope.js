// LESSON: 
// 1. if function has argument, the changes using assignment (a=10, let a=10)
//    - changes remained in the function, global value does not change.
// 2. use let --> block scope
//    use var --> function scope (NOT use var if possible)

let a = 1;

function hello() {
  let a = 10; // this does not modify the global scope 'a'
  console.log("in hello", a);

  if (true) {
    let b = 10;
    console.log("b in hello", b);
  } else {
    console.log(a);
  }

  //console.log('b is', b); // b is 10 if b(var); error if b(let) [in line 7];
}

// function hello(a) {
//     console.log('hello with arg', a);
//     a = 10; // this does not modify the global scope 'a' (regardless of var or let in line 7)
//     console.log('before going out from hello with arg', a);
// }

console.log(a);
hello();
// hello(a);
console.log(a);
// console.log(b)  // b is not defined if var b = 10 in line 7
