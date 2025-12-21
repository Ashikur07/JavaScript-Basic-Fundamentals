// details about closure
function a(){
    var x = 10;
    return function b(){
        console.log(x);
    }
}
a()();

var y = a();
