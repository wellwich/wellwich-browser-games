import styled from "styled-components";
import { Title } from "~/components/shared/Title";
import type { Route } from "./+types/home";

// biome-ignore lint/correctness/noEmptyPattern: <explanation>
export function meta({}: Route.MetaArgs) {
	return [
		{ title: "WELLWICH" },
		{
			name: "description",
			content: "ゲームを公開しています",
		},
	];
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
`;

const Description = styled.p`
    font-size: 18px;
    color: #333;
    margin: 16px 0;
    text-align: center;
`;

const LinkButton = styled.a`
    display: inline-block;
    padding: 12px 24px;
    margin-top: 16px;
    background-color: dimgray;
    color: white;
    text-decoration: none;
    transition: background-color 0.3s;

    &:hover {
        background-color: #333;
    }
`;

export default function Home() {
	return (
		<Container>
			<Title>WELLWICH</Title>
			<Description>ゲームを公開しています</Description>
			<LinkButton href="/games">ゲームページへ</LinkButton>
		</Container>
	);
}
