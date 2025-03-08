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
			<h1>About</h1>
			<p>Welcome to the about page!</p>
			<p>{}</p>
		</>
	);
}
