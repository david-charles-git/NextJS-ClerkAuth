import { withClerkMiddleware, getAuth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Set the paths that don't require the user to be signed in
const publicPaths : Array<string> = ['/', '/signin*', '/signup*', '/public*'];

const isPublic : (path : string) => string | undefined = (path) => {
	const isPublic : string | undefined = publicPaths.find(x => path.match(new RegExp(`^${x}$`.replace('*$', '($|/)'))));

	return isPublic;
};

const middleWare = withClerkMiddleware((request: NextRequest) => {
    if (isPublic(request.nextUrl.pathname)) { return NextResponse.next(); }

	const { userId } = getAuth(request);

	if (!userId) {    
		const signInUrl : URL = new URL('/signin/', request.url);
		//signInUrl.searchParams.set('redirect_url', request.url);

		return NextResponse.redirect(signInUrl);
	}

	return NextResponse.next();
});

export default middleWare;
export const config = { matcher:  '/((?!_next/image|_next/static|favicon.ico).*)'};