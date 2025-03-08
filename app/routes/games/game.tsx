import { data, isRouteErrorResponse } from "react-router";
import { Game } from "~/components/Game/Game";
import { GameTitle, type GameTitleType } from "~/game-info";
import type { Route } from "./+types/game";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
	const { name } = params;

	let gameName: GameTitleType;

	const gameTitles = Object.keys(GameTitle);

	if (gameTitles.includes(name)) {
		gameName = name as GameTitleType;
	} else {
		throw data("Game not found", { status: 404 });
	}
	return { gameName };
}

export function meta({ params }: Route.MetaArgs) {
	const { name } = params;
	let gameName: GameTitleType;
	const gameTitles = Object.keys(GameTitle);
	if (gameTitles.includes(name)) {
		gameName = name as GameTitleType;
	} else {
		throw data("Game not found", { status: 404 });
	}
	return [
		{
			title: `
			${GameTitle[gameName]} |
			wellwich
			`,
		},
		{ name: "description", content: GameTitle[gameName] },
	];
}

export default function Component({ loaderData }: Route.ComponentProps) {
	return (
		<>
			<Game gameName={loaderData.gameName} />
		</>
	);
}