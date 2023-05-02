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
var link_1 = require("next/link");
var app_beta_1 = require("@clerk/nextjs/app-beta");
;
var Navigation = react_1.forwardRef(function (_a, ref) {
    var children = _a.children, varient = _a.varient, className = _a.className, props = __rest(_a, ["children", "varient", "className"]);
    return (React.createElement("div", __assign({ ref: ref }, props, { className: "Navigation" }),
        React.createElement("nav", null,
            React.createElement(link_1["default"], { href: "/" }, "Home"),
            React.createElement(app_beta_1.SignedIn, null,
                React.createElement(link_1["default"], { href: "/profile" }, "Profile"),
                React.createElement(app_beta_1.UserButton, null)),
            React.createElement(app_beta_1.SignedOut, null,
                React.createElement(link_1["default"], { href: "/signin" }, "Sign in"),
                React.createElement(link_1["default"], { href: "/signup" }, "Sign up")))));
});
Navigation.displayName = "Navigation";
exports["default"] = Navigation;

//# sourceMappingURL=Navigation.js.map
