import { currentUser } from "@clerk/nextjs/app-beta";

const EditPage = async () => {
    const user = await currentUser();

	return (
		<main id="Edit">
			<h1>Edit Page</h1>

            {
                JSON.stringify(user)
            }
		</main>
	)
};
export default EditPage;