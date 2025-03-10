import { Title } from "~/components/shared/Title";
import type { Route } from "./+types/about";

// biome-ignore lint/correctness/noEmptyPattern: <explanation>
export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Contact | ブラウザゲームセンター「ゑぅ」" },
		{ name: "description", content: "お問い合わせページです。" },
	];
}

export default function About({ loaderData }: Route.ComponentProps) {
	return (
		<>
			<Title>Contact</Title>
			<p>Welcome to the about page!</p>
		</>
	);
}
