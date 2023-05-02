"use strict";
exports.__esModule = true;
var react_1 = require("react");
var app_beta_1 = require("@clerk/nextjs/app-beta");
require("@/styles/globals.scss");
var google_1 = require("next/font/google");
var Navigation_1 = require("@/components/Navigation");
;
var inter = google_1.Inter({ subsets: ['latin'] });
var RootLayout = function (_a) {
    var children = _a.children;
    return (react_1["default"].createElement("html", { lang: "en" },
        react_1["default"].createElement("body", { className: inter.className },
            react_1["default"].createElement(app_beta_1.ClerkProvider, null,
                react_1["default"].createElement(Navigation_1["default"], null),
                children))));
};
exports["default"] = RootLayout;

//# sourceMappingURL=layout.js.map
