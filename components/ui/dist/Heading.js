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
var Heading = react_1.forwardRef(function (_a, ref) {
    var children = _a.children, varient = _a.varient, className = _a.className, props = __rest(_a, ["children", "varient", "className"]);
    var getHeadingVarient = function (varient) {
        switch (varient) {
            case "h1": return React.createElement("h1", null, children);
            case "h2": return React.createElement("h2", null, children);
            case "h3": return React.createElement("h3", null, children);
            case "h4": return React.createElement("h4", null, children);
            case "h5": return React.createElement("h5", null, children);
            case "h6": return React.createElement("h6", null, children);
            default: return React.createElement(React.Fragment, null, children);
        }
    };
    return (React.createElement("div", __assign({ ref: ref }, props, { className: "Heading" }), getHeadingVarient(varient)));
});
Heading.displayName = "Heading";
exports["default"] = Heading;

//# sourceMappingURL=Heading.js.map
