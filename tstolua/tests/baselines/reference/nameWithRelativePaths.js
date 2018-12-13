//// [tests/cases/conformance/externalModules/nameWithRelativePaths.ts] ////

//// [foo_0.ts]
export var foo = 42;

//// [foo_1.ts]
export function f(){
	return 42;
}

//// [foo_2.ts]
export module M2 {
	export var x = true;
}

//// [foo_3.ts]
import foo0 = require('../foo_0');
import foo1 = require('./test/foo_1');
import foo2 = require('./.././test/foo_2');

if(foo2.M2.x){
	var x = foo0.foo + foo1.f();
}


//// [foo_0.js]
exports.foo = 42;
//// [foo_1.js]
function f() {
    return 42;
}
exports.f = f;
//// [foo_2.js]
var M2;
(function (M2) {
    M2.x = true;
})(M2 = exports.M2 || (exports.M2 = {}));
//// [foo_3.js]
var foo0 = require('../foo_0');
var foo1 = require('./test/foo_1');
var foo2 = require('./.././test/foo_2');
if (foo2.M2.x) {
    var x = foo0.foo + foo1.f();
}
