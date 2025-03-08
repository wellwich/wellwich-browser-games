import styled from "styled-components";

const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	background-color: #f0f0f0;
`;

const HeaderTitle = styled.h1`
	font-size: 1.5rem;
`;

const HeaderNav = styled.nav`
	display: flex;
	gap: 1rem;
`;

const HeaderLink = styled.a`
	text-decoration: none;
	color: inherit;
`;

export function Header() {
	return (
		<HeaderContainer>
			<HeaderTitle>
				<HeaderLink href="/">wellwich</HeaderLink>
			</HeaderTitle>
			<HeaderNav>
				<HeaderLink href="/games">ゲーム</HeaderLink>
			</HeaderNav>
		</HeaderContainer>
	);
}
