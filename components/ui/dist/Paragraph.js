"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var react_1 = require("react");
;
var getParagraphVarient = function (varient) {
    var className = "Paragraph";
    switch (varient) {
        case "small": className += " small";
        case "large": className += " large";
        //default : 
    }
    return className;
};
var Paragraph = react_1.forwardRef(function (_a, ref) {
    var children = _a.children, varient = _a.varient, className = _a.className, props = __rest(_a, ["children", "varient", "className"]);
    return (React.createElement("p", __assign({ ref: ref }, props, { className: getParagraphVarient(varient) }), children));
});
Paragraph.displayName = "Paragraph";
exports["default"] = Paragraph;

//# sourceMappingURL=Paragraph.js.map
