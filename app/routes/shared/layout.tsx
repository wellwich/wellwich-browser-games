import { Outlet } from "react-router";
import styled from "styled-components";
import { Header } from "~/components/shared/Header";
import type { Route } from "./+types/layout";

const Container = styled.div`
	max-width: 960px;
	margin: 0 auto;
`;

export async function clientLoader({ params }: Route.ClientLoaderArgs) {}

export default function DefaultLayout() {
	return (
		<div>
			<Header />
			<main>
				<Container>
					<Outlet />
				</Container>
			</main>
		</div>
	);
}
