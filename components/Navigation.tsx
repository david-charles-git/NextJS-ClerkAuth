import { HTMLAttributes, forwardRef } from "react";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs/app-beta";

type NavigationVarient = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
interface NavigationProps extends HTMLAttributes<HTMLDivElement> {
    varient? : NavigationVarient
};


const Navigation = forwardRef<HTMLDivElement, NavigationProps>(({ children, varient, className, ...props}, ref) => {
    return (
        <div ref={ ref } { ...props } className="Navigation">
            <nav>
                <Link href={ "/" }>Home</Link>

                <SignedIn>
                    <Link href={ "/profile" }>Profile</Link>

                    <UserButton></UserButton>
                </SignedIn>

                <SignedOut>
                    <Link href={ "/signin" }>Sign in</Link>

                    <Link href={ "/signup" }>Sign up</Link>
                </SignedOut>
            </nav>
        </div>
    )
});
Navigation.displayName = "Navigation";

export default Navigation;