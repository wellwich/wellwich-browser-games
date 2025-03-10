import { Title } from "~/components/shared/Title";
import type { Route } from "./+types/about";

// biome-ignore lint/correctness/noEmptyPattern: <explanation>
export function meta({}: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export default function About({ loaderData }: Route.ComponentProps) {
	return (
		<>
			<Title>About</Title>
			<p>Welcome to the about page!</p>
		</>
	);
}
