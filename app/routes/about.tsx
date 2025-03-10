import { Title } from "~/components/shared/Title";
import type { Route } from "./+types/about";

// biome-ignore lint/correctness/noEmptyPattern: <explanation>
export function meta({}: Route.MetaArgs) {
	return [
		{ title: "About - ブラウザゲームセンター「ゑぅ」" },
		{ name: "description", content: "このサイトについてのページです。" },
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
