//// [inheritanceStaticAccessorOverridingMethod.ts]
class a {
    static x() {
        return "20";
    }
}

class b extends a {
    static get x() {
        return "20";
    }
    static set x(aValue: string) {

    }
}

//// [inheritanceStaticAccessorOverridingMethod.js]
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var a = (function () {
    function a() {
    }
    a.x = function () {
        return "20";
    };
    return a;
})();
var b = (function (_super) {
    __extends(b, _super);
    function b() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(b, "x", {
        get: function () {
            return "20";
        },
        set: function (aValue) {
        },
        enumerable: true,
        configurable: true
    });
    return b;
})(a);
