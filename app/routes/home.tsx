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

const AffiliateContainer = styled.div`
    margin-top: 20px;
    text-align: center;
`;

export default function Home() {
	return (
		<Container>
			<Title>WELLWICH</Title>
			<Description>ゲームを公開しています</Description>
			<LinkButton href="/games">ゲームページへ</LinkButton>
			<AffiliateContainer>
				<a
					rel="noreferrer noopener sponsored"
					href="https://dlaf.jp/home/dlaf/=/aid/wellwich/url/https%3A%2F%2Fwww.dlsite.com%2Fhome%2F%3Futm_medium%3Daffiliate%26utm_campaign%3Dbnlink%26utm_content%3Dbn_pc_234_60_dojin_01.jpg"
					target="_blank"
				>
					<img
						src="https://www.dlsite.com/img/male/dojin/bn_pc_234_60_dojin_01.jpg"
						alt="同人誌、同人ゲーム、同人ソフトのダウンロードショップ - DLsite"
						width="234"
						height="60"
					/>
				</a>
			</AffiliateContainer>
		</Container>
	);
}
