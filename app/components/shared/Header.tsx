import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: start;
    background-color: #f0f0f0;
    margin-bottom: 0;

    @media (max-width: 640px) {
        padding: 16px;
    }
`;

const HeaderContainer = styled.div`
    display: flex;
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
    flex-direction: row;
    align-items: start;

    @media (max-width: 640px) {
        flex-direction: column;
    }
`;

const HeaderTitle = styled.h1`
    font-size: 24px;
    font-weight: bold;
    color: #333;
`;

const HeaderNav = styled.nav<{ $isOpen: boolean }>`
    display: flex;
    margin-top: 8px;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 640px) {
        flex-direction: column;
        display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    }
`;

const HeaderLink = styled.a`
    text-decoration: none;
    color: inherit;
    padding: 8px;
`;

const HeaderNavLink = styled.a`
    text-align: center;
    font-size: 16px;
    text-decoration: none;
    color: inherit;
    width: 100%;
    padding: 8px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #e0e0e0;
    }
`;

const HamburgerButton = styled.button`
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 24px;
    margin-left: auto;

    @media (max-width: 640px) {
        display: block;
		position: absolute;
		top: 16px;
		right: 16px;
    }
`;

export function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 640) {
				setIsOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<StyledHeader>
			<HeaderContainer>
				<HeaderLink href="/">
					<HeaderTitle>ブラウザゲームセンター「ゑぅ」</HeaderTitle>
				</HeaderLink>
				<HamburgerButton onClick={toggleMenu}>
					{isOpen ? "✖" : "☰"}
				</HamburgerButton>
			</HeaderContainer>
			<HeaderContainer>
				<HeaderNav $isOpen={isOpen}>
					<HeaderNavLink href="/">Home</HeaderNavLink>
					<HeaderNavLink href="/games">Game</HeaderNavLink>
					<HeaderNavLink href="/about">About</HeaderNavLink>
					<HeaderNavLink href="/contact">Contact</HeaderNavLink>
				</HeaderNav>
			</HeaderContainer>
		</StyledHeader>
	);
}
