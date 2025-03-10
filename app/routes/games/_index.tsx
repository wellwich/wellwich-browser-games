import { GameList } from "~/components/Game/GameList";
import { Title } from "~/components/shared/Title";
import type { Route } from "./+types/_index";

// biome-ignore lint/correctness/noEmptyPattern: <explanation>
export function meta({}: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export default function Index() {
	return (
		<>
			<Title>ゲーム一覧</Title>
			<GameList />
		</>
	);
}
