import styled from "styled-components";
import { Title } from "~/components/shared/Title";
import type { Route } from "./+types/privacy";

// biome-ignore lint/correctness/noEmptyPattern: <explanation>
export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Privacy - WELLWICH" },
		{ name: "description", content: "このサイトについてのページです。" },
	];
}

const Container = styled.div`
    padding: 20px;
`;

const Section = styled.section`
    margin-bottom: 20px;
`;

const Heading2 = styled.h2`
    font-size: 24px;
    margin-bottom: 10px;
`;

const Heading3 = styled.h3`
    font-size: 16px;
    margin-bottom: 10px;
`;

const Paragraph = styled.p`
    margin-bottom: 10px;
`;

const List = styled.ul`
    margin-bottom: 10px;
    padding-left: 20px;
`;

const ListItem = styled.li`
    margin-bottom: 5px;
`;

const Link = styled.a`
    color: blue;
    text-decoration: underline;
`;

export default function About({ loaderData }: Route.ComponentProps) {
	return (
		<>
			<Title>Privacy Policy</Title>
			<Container>
				<Section>
					<Heading2>1. 収集する情報</Heading2>

					<Heading3>1.1 Google Analytics によるデータ収集</Heading3>
					<Paragraph>
						本サイトでは、Google
						LLC（以下、「Google」といいます。）が提供するアクセス解析ツール「Google
						Analytics」を利用しています。Google Analytics
						は、ユーザーのサイト訪問履歴や行動データを収集するために、Cookie
						を使用します。これにより、本サイトはユーザーの利用状況を分析し、サービスの改善を行うことができます。
					</Paragraph>
					<List>
						<ListItem>IPアドレス</ListItem>
						<ListItem>閲覧したページ</ListItem>
						<ListItem>クリックしたリンク</ListItem>
						<ListItem>滞在時間</ListItem>
						<ListItem>使用デバイス・ブラウザ情報</ListItem>
					</List>
					<Paragraph>
						詳細については{" "}
						<Link
							href="https://policies.google.com/privacy"
							target="_blank"
							rel="noreferrer"
						>
							Google のプライバシーポリシー
						</Link>{" "}
						をご確認ください。
					</Paragraph>

					<Heading3>1.2 Google AdSense による広告配信</Heading3>
					<Paragraph>
						本サイトでは、Google の広告配信サービス「Google
						AdSense」を利用しています。Google AdSense
						は、ユーザーの興味に基づいた広告を表示するために、Cookie
						やウェブビーコンを使用してデータを収集します。
					</Paragraph>
					<Paragraph>
						Google
						およびそのパートナーは、以下の情報を取得する可能性があります。
					</Paragraph>
					<List>
						<ListItem>閲覧履歴</ListItem>
						<ListItem>興味・関心に基づく広告の表示</ListItem>
						<ListItem>ユーザーのデバイス情報</ListItem>
					</List>
					<Paragraph>
						詳細については{" "}
						<Link
							href="https://policies.google.com/technologies/ads"
							target="_blank"
							rel="noreferrer"
						>
							Google の広告に関するポリシー
						</Link>{" "}
						をご参照ください。
					</Paragraph>
				</Section>

				<Section>
					<Heading2>2. 収集した情報の利用目的</Heading2>
					<List>
						<ListItem>サイトの利便性向上および改善</ListItem>
						<ListItem>ユーザーの興味に基づいたコンテンツ・広告の提供</ListItem>
						<ListItem>不正行為の防止およびセキュリティ向上</ListItem>
						<ListItem>アクセス解析による統計データの取得</ListItem>
					</List>
				</Section>

				<Section>
					<Heading2>3. Cookie の使用について</Heading2>
					<Paragraph>
						本サイトでは、Google Analytics や Google AdSense
						を含む第三者のサービスが Cookie
						を使用してデータを収集します。ユーザーはブラウザの設定を変更することで
						Cookie
						の使用を拒否することができます。ただし、これにより一部の機能が正常に動作しない可能性があります。
					</Paragraph>
					<Paragraph>
						Cookie の管理方法については{" "}
						<Link
							href="https://policies.google.com/technologies/cookies"
							target="_blank"
							rel="noreferrer"
						>
							Google の Cookie に関するポリシー
						</Link>{" "}
						をご確認ください。
					</Paragraph>
				</Section>

				<Section>
					<Heading2>4. 個人情報の第三者提供</Heading2>
					<Paragraph>
						本サイトは、以下の場合を除き、ユーザーの個人情報を第三者に提供することはありません。
					</Paragraph>
					<List>
						<ListItem>法令に基づく場合</ListItem>
						<ListItem>ユーザーの同意がある場合</ListItem>
						<ListItem>
							サイト運営上必要な範囲で業務委託先に提供する場合（例:
							サーバーホスティング事業者）
						</ListItem>
					</List>
				</Section>

				<Section>
					<Heading2>5. プライバシーポリシーの変更</Heading2>
					<Paragraph>
						本ポリシーは、適宜見直しを行い、必要に応じて変更することがあります。変更後のプライバシーポリシーは本サイト上に掲載された時点で有効となります。
					</Paragraph>
				</Section>

				<Section>
					<Heading2>6. お問い合わせ</Heading2>
					<Paragraph>
						本ポリシーに関するお問い合わせは、以下の連絡先までお願いいたします。
					</Paragraph>
					<Paragraph>
						<strong>運営者:</strong> [wellwich]
					</Paragraph>
					<Paragraph>
						<strong>お問い合わせ先:</strong>
						[X: @wellwich]
					</Paragraph>
				</Section>
			</Container>
		</>
	);
}
