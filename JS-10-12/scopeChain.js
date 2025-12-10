// lexical env -> lexical env is local memory and along with lexical env of its parent

function a(){
    var b = 10;
    c();
    function c(){
        console.log(b)
    }
}

a();
