let b=100;
var x= 20;

{
    // this is block that combined multiple state in one group
    let x =30;
    var a =10;
    // let b=20;  // shadowning
    var b =50;   // this is not possible
    const c=30;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(x);
}

// console.log(a);  // access variable a
// console.log(b);   // cannot access because block scope

console.log(b);