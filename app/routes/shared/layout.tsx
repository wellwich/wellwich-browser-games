import { Outlet } from "react-router";
import { Header } from "~/components/shared/Header";
import type { Route } from "./+types/layout";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {}

export default function DefaultLayout() {
	return (
		<div>
			<Header />
			<main>
				<Outlet />
			</main>
		</div>
	);
}
