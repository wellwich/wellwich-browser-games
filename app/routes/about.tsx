import { Title } from "~/components/shared/Title";
import type { Route } from "./+types/about";

// biome-ignore lint/correctness/noEmptyPattern: <explanation>
export function meta({}: Route.MetaArgs) {
	return [
		{ title: "About - WELLWICH" },
		{ name: "description", content: "このサイトについてのページです。" },
	];
}

export default function About({ loaderData }: Route.ComponentProps) {
	return (
		<>
			<Title>About</Title>
			<p>
				<strong>このサイトについて:</strong>
				このサイトは、WELLWICHのゲームを公開しているサイトです。
			</p>
		</>
	);
}
