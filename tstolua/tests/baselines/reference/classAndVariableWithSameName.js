//// [classAndVariableWithSameName.ts]
class C { foo: string; } // error
var C = ''; // error

module M {
    class D { // error
        bar: string;
    }

    var D = 1; // error
}

//// [classAndVariableWithSameName.js]
var C = (function () {
    function C() {
    }
    return C;
})(); // error
var C = ''; // error
var M;
(function (M) {
    var D = (function () {
        function D() {
        }
        return D;
    })();
    var D = 1; // error
})(M || (M = {}));
