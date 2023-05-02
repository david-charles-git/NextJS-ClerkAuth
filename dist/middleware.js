"use strict";
exports.__esModule = true;
var server_1 = require("@clerk/nextjs/server");
var server_2 = require("next/server");
{
    NextRequest;
}
from;
'next/server';
var publicPaths = ['/', '/signin*', '/signup*', '/api*', "/testing*"];
var adminRestrictedPaths = ['/admin*'];
var memberRestrictedPaths = ['/restricted*'];
var isPublic = function (path) {
    var isPublic = publicPaths.find(function (x) { return path.match(new RegExp(("^" + x + "$").replace('*$', '($|/)'))); });
    return isPublic;
};
var isAdminRestricted = function (path) {
    var isRoleRestricted = adminRestrictedPaths.find(function (x) { return path.match(new RegExp(("^" + x + "$").replace('*$', '($|/)'))); });
    return isRoleRestricted;
};
var isMemberRestricted = function (path) {
    var isRoleRestricted = memberRestrictedPaths.find(function (x) { return path.match(new RegExp(("^" + x + "$").replace('*$', '($|/)'))); });
    return isRoleRestricted;
};
var middleWare = server_1.withClerkMiddleware(function (request) {
    if (isPublic(request.nextUrl.pathname)) {
        return server_2.NextResponse.next();
    }
    var _a = server_1.getAuth(request), userId = _a.userId, orgRole = _a.orgRole;
    if (!userId) {
        var signInUrl = new URL('/signin', request.url);
        //signInUrl.searchParams.set('redirect_url', request.url);
        return server_2.NextResponse.redirect(signInUrl);
    }
    if (isAdminRestricted(request.nextUrl.pathname) && orgRole !== "admin") {
        var profileUrl = new URL('/profile/', request.url);
        profileUrl.searchParams.set("roleRestricted", "admin");
        return server_2.NextResponse.redirect(profileUrl);
    }
    if (isMemberRestricted(request.nextUrl.pathname) && !orgRole) {
        var profileUrl = new URL('/profile/', request.url);
        profileUrl.searchParams.set("roleRestricted", "member");
        return server_2.NextResponse.redirect(profileUrl);
    }
    return server_2.NextResponse.next();
});
exports["default"] = middleWare;
exports.config = { matcher: '/((?!_next/image|_next/static|favicon.ico).*)' };

//# sourceMappingURL=middleware.js.map
