import styled from "styled-components";
import { Title } from "~/components/shared/Title";
import type { Route } from "./+types/home";

// biome-ignore lint/correctness/noEmptyPattern: <explanation>
export function meta({}: Route.MetaArgs) {
	return [
		{ title: "ブラウザゲームセンター「ゑぅ」" },
		{
			name: "description",
			content: "ブラウザゲームが遊べるゲームサイトです。",
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
    background-color: #0070f3;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #005bb5;
    }
`;

export default function Home() {
	return (
		<Container>
			<Title>ブラウザゲームセンター「ゑぅ」</Title>
			<Description>
				「ゑぅ」へようこそ！ここでは様々なブラウザゲームを無料で楽しむことができます。
				<br />
				お気に入りのゲームを見つけて、楽しい時間を過ごしてください。
			</Description>
			<LinkButton href="/games">ゲームページへ</LinkButton>
		</Container>
	);
}
