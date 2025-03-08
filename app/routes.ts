import {
	type RouteConfig,
	index,
	layout,
	route,
} from "@react-router/dev/routes";

export default [
	layout("./routes/shared/layout.tsx", [
		index("./routes/home.tsx"),
		route("about", "./routes/about.tsx"),
		route("games/:name", "./routes/games/game.tsx"),
		route("games", "./routes/games/_index.tsx"),
	]),
] satisfies RouteConfig;
