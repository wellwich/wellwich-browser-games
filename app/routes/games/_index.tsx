import { GameList } from "~/components/Game/GameList";
import { Title } from "~/components/shared/Title";
import type { Route } from "./+types/_index";

// biome-ignore lint/correctness/noEmptyPattern: <explanation>
export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Games | WELLWICH" },
		{ name: "description", content: "ゲーム一覧ページです。" },
	];
}

export default function Index() {
	return (
		<>
			<Title>Games</Title>
			<GameList />
		</>
	);
}
