import { Title } from "~/components/shared/Title";
import type { Route } from "./+types/about";

// biome-ignore lint/correctness/noEmptyPattern: <explanation>
export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Contact | WELLWICH" },
		{ name: "description", content: "お問い合わせページです。" },
	];
}

export default function About({ loaderData }: Route.ComponentProps) {
	return (
		<>
			<Title>Contact</Title>
			<p>
				<strong>お問い合わせ先:</strong>
				[X: @wellwich]
			</p>
		</>
	);
}
