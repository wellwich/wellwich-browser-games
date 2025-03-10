import { Title } from "~/components/shared/Title";
import type { Route } from "./+types/home";

// biome-ignore lint/correctness/noEmptyPattern: <explanation>
export function meta({}: Route.MetaArgs) {
	return [
		{ title: "ブラウザゲームセンター「ゑぅ」" },
		{
			name: "description",
			content: "ブラウザゲームが遊べるゲームサイトです。",
		},
	];
}

export default function Home() {
	return (
		<>
			<Title>Home</Title>
			<p>Welcome to the home page!</p>
			<a href="/games">
				<p>Go to game page</p>
			</a>
		</>
	);
}
