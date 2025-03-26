import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: start;
    background-color: dimgray;
    margin-bottom: 0;

    @media (max-width: 640px) {
        padding: 16px;
    }
`;

const HeaderContainer = styled.div<{ $color?: string }>`
    display: flex;
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
    flex-direction: row;
    align-items: center; // 中央揃え
    justify-content: space-between; // タイトルとボタンを左右に分ける
    position: relative;

    background-color: ${({ $color }) => $color || "transparent"};

    @media (max-width: 640px) {
        flex-direction: row; // スマホでも横並び
    }
`;

const HeaderTitle = styled.h1`
    font-size: 24px;
    color: white;
`;

const HeaderNav = styled.nav<{ $isOpen: boolean }>`
    display: flex;
    margin-top: 0;
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
	border: 1px solid dimgray;

    &:hover {
        background-color: #e0e0e0;
    }

    @media (max-width: 640px) {
        width: auto;
    }
`;

const HamburgerButton = styled.button`
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 24px;

    @media (max-width: 640px) {
        display: block; // スマホ表示時に表示
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
					<HeaderTitle>WELLWICH</HeaderTitle>
				</HeaderLink>
				<HamburgerButton onClick={toggleMenu}>
					{isOpen ? "✖" : "☰"}
				</HamburgerButton>
			</HeaderContainer>
			<HeaderContainer $color="#f0f0f0">
				<HeaderNav $isOpen={isOpen}>
					<HeaderNavLink href="/">Home</HeaderNavLink>
					<HeaderNavLink href="/games">Games</HeaderNavLink>
					<HeaderNavLink href="/about">About</HeaderNavLink>
					<HeaderNavLink href="/contact">Contact</HeaderNavLink>
					<HeaderNavLink href="/privacy">Privacy</HeaderNavLink>
				</HeaderNav>
			</HeaderContainer>
		</StyledHeader>
	);
}
