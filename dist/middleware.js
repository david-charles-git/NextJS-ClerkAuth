"use strict";
exports.__esModule = true;
var server_1 = require("@clerk/nextjs/server");
var server_2 = require("next/server");
{
    NextRequest;
}
from;
'next/server';
// Set the paths that don't require the user to be signed in
var publicPaths = ['/', '/signin*', '/signup*', '/public*'];
var isPublic = function (path) {
    var isPublic = publicPaths.find(function (x) { return path.match(new RegExp(("^" + x + "$").replace('*$', '($|/)'))); });
    return isPublic;
};
var middleWare = server_1.withClerkMiddleware(function (request) {
    if (isPublic(request.nextUrl.pathname)) {
        return server_2.NextResponse.next();
    }
    var userId = server_1.getAuth(request).userId;
    if (!userId) {
        var signInUrl = new URL('/signin/', request.url);
        //signInUrl.searchParams.set('redirect_url', request.url);
        return server_2.NextResponse.redirect(signInUrl);
    }
    return server_2.NextResponse.next();
});
exports["default"] = middleWare;
exports.config = { matcher: '/((?!_next/image|_next/static|favicon.ico).*)' };

//# sourceMappingURL=middleware.js.map
