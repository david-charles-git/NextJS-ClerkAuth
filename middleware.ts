import { withClerkMiddleware, getAuth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const publicPaths : string[] = ['/', '/signin*', '/signup*', '/api*', "/testing*"];
const adminRestrictedPaths : string[] = ['/admin*'];
const memberRestrictedPaths : string[] = ['/restricted*'];

const isPublic : (path : string) => string | undefined = (path) => {
	const isPublic : string | undefined = publicPaths.find((x) => { return path.match(new RegExp(`^${x}$`.replace('*$', '($|/)'))); });

	return isPublic;
};

const isAdminRestricted : (path : string) =>  string | undefined = (path) => {
	const isRoleRestricted : string | undefined = adminRestrictedPaths.find((x) => { return path.match(new RegExp(`^${x}$`.replace('*$', '($|/)'))); });

	return isRoleRestricted;
}

const isMemberRestricted : (path : string) =>  string | undefined = (path) => {
	const isRoleRestricted : string | undefined = memberRestrictedPaths.find((x) => { return path.match(new RegExp(`^${x}$`.replace('*$', '($|/)'))); });

	return isRoleRestricted;
}

const middleWare = withClerkMiddleware((request: NextRequest) => {
    if (isPublic(request.nextUrl.pathname)) { return NextResponse.next(); }

	const { userId, orgRole } = getAuth(request);

	if (!userId) {    
		var signInUrl : URL = new URL('/signin', request.url);
		//signInUrl.searchParams.set('redirect_url', request.url);

		return NextResponse.redirect(signInUrl);
	}

	if (isAdminRestricted(request.nextUrl.pathname) && orgRole !== "admin") {
		var profileUrl : URL = new URL('/profile/', request.url);
			profileUrl.searchParams.set("roleRestricted", "admin");

		return NextResponse.redirect(profileUrl);
	}

	if (isMemberRestricted(request.nextUrl.pathname) && !orgRole) {
		var profileUrl : URL = new URL('/profile/', request.url);
			profileUrl.searchParams.set("roleRestricted", "member");

		return NextResponse.redirect(profileUrl);
	}

	return NextResponse.next();
});

export default middleWare;
export const config = { matcher:  '/((?!_next/image|_next/static|favicon.ico).*)'};