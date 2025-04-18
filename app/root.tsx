import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	isRouteErrorResponse,
} from "react-router";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  // カスタムフォントの設定
  @font-face {
	font-family: "MaruMonica";
	src: url("/fonts/x12y16pxMaruMonica.ttf") format("truetype");
  }
  
  body {
	font-family: "MaruMonica";
	-webkit-font-smoothing: none;
	-moz-osx-font-smoothing: unset;
  }
  /* ここに追加したいグローバルCSSを記述する */
`;

import type { Route } from "./+types/root";

export const links: Route.LinksFunction = () => [
	// { rel: "preconnect", href: "https://fonts.googleapis.com" },
	// {
	// 	rel: "preconnect",
	// 	href: "https://fonts.gstatic.com",
	// 	crossOrigin: "anonymous",
	// },
	// {
	// 	rel: "stylesheet",
	// 	href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
	// },
	{
		rel: "icon",
		href: "/favicon.ico",
	},
];

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ja">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<GlobalStyles />
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details =
			error.status === 404
				? "The requested page could not be found."
				: error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<main>
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre>
					<code>{stack}</code>
				</pre>
			)}
		</main>
	);
}
