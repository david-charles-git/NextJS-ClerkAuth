import { SignIn } from '@clerk/nextjs/app-beta';

const SignInPage = async () => {
	return (
		<main id="signIn">
			<SignIn redirectUrl={ "/profile"}/>
		</main>
	)
};
export default SignInPage;