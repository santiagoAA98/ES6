//podemos redeclarar variables con var
//let y const tiene un scope de tipo bloque

function fooTwo() {
    if(true) {
        var i = 1;
    }
    console.log(i); // 1
}
fooTwo();



function foo() {
    if(true) {
        let i = 1;
    }
    console.log(i); // ReferenceError: i is not defined
}

foo();

