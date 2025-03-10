import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: start;
    background-color: #f0f0f0;
	margin-bottom: 0;
`;

const HeaderContainer = styled.div`
    display: flex;
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
    flex-direction: row;
    align-items: start;
`;

const HeaderTitle = styled.h1`
    font-size: 24px;
	color: #333;
`;

const HeaderNav = styled.nav`
    display: flex;
	margin-top: 8px;
`;

const HeaderLink = styled.a`
	text-decoration: none;
	color: inherit;
	padding: 8px;
`;

const HeaderNavLink = styled.a`
    font-size: 16px;
    text-decoration: none;
    color: inherit;
	padding: 8px;
	&:hover {
		background-color: #e0e0e0;
	}
`;

export function Header() {
	return (
		<StyledHeader>
			<HeaderContainer>
				<HeaderLink href="/">
					<HeaderTitle>Game</HeaderTitle>
				</HeaderLink>
			</HeaderContainer>
			<HeaderContainer>
				<HeaderNav>
					<HeaderNavLink href="/">Home</HeaderNavLink>
					<HeaderNavLink href="/games">Game</HeaderNavLink>
					<HeaderNavLink href="/about">About</HeaderNavLink>
					<HeaderNavLink href="/contact">Contact</HeaderNavLink>
				</HeaderNav>
			</HeaderContainer>
		</StyledHeader>
	);
}
