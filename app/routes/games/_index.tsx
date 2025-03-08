import { GameList } from "~/components/Game/GameList";
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
			<GameList />
		</>
	);
}
