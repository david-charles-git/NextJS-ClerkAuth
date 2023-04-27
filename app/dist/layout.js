"use strict";
exports.__esModule = true;
var react_1 = require("react");
var app_beta_1 = require("@clerk/nextjs/app-beta");
require("./globals.scss");
var google_1 = require("next/font/google");
var link_1 = require("next/link");
var inter = google_1.Inter({ subsets: ['latin'] });
exports.metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app'
};
var RootLayout = function (_a) {
    var children = _a.children;
    return (react_1["default"].createElement(app_beta_1.ClerkProvider, null,
        react_1["default"].createElement("html", { lang: "en" },
            react_1["default"].createElement("body", { className: inter.className },
                react_1["default"].createElement("div", { className: "Navigation" },
                    react_1["default"].createElement("nav", null,
                        react_1["default"].createElement(link_1["default"], { href: "/" }, "Home"),
                        react_1["default"].createElement(app_beta_1.SignedIn, null,
                            react_1["default"].createElement(link_1["default"], { href: "/profile/" }, "Profile"),
                            react_1["default"].createElement(app_beta_1.UserButton, null)),
                        react_1["default"].createElement(app_beta_1.SignedOut, null,
                            react_1["default"].createElement(link_1["default"], { href: "/signin/" }, "Sign in"),
                            react_1["default"].createElement(link_1["default"], { href: "/signup/" }, "Sign up")))),
                children))));
};
exports["default"] = RootLayout;

//# sourceMappingURL=layout.js.map
