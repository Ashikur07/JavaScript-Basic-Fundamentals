let b=100;

{
    // this is block that combined multiple state in one group
    var a =10;
    let b=20;  // shadowning
    const c=30;
    console.log(a);
    console.log(b);
    console.log(c);
}

// console.log(a);  // access variable a
// console.log(b);   // cannot access because block scope

console.log(b);