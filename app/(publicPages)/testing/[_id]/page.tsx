import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import { User } from "@/lib/types/user";
import axios, { AxiosResponse } from "axios";

export async function generateStaticParams() {
    //const users : User[] = await fetch("http://localhost:3000/api/users").then((response) => { return response.json(); });
	const users : AxiosResponse<User[]> = await axios.get(`http://localhost:3000/api/users`);
	
    return users.data.map((user : User) => { return { _id : user._id }; });
};

const idPage : ({ params } : { params : { _id : string } }) => Promise<JSX.Element> =  async ({ params }) => {
	const { _id } = params; 
	const { data } : AxiosResponse<User> = await axios.get(`http://localhost:3000/api/users/${_id}`);

	return (
		<main id="idPage">
			<Heading varient="h1">id Page</Heading>

			<Paragraph>ID: { _id }</Paragraph>
			<Paragraph>NAME: { data.name }</Paragraph>
			<Paragraph>Email: { data.email }</Paragraph>
			<Paragraph>PASSWORD: { data.password }</Paragraph>
			<Paragraph>Permissions: { data.permissions }</Paragraph>
		</main>
	)
};
export default idPage;