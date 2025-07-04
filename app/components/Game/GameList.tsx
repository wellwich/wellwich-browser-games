import { useState } from "react";
import styled from "styled-components";
import { GameGenre, GameTitle, gameInfo } from "~/game-info";
import type { GameInfoType } from "~/game-info";

const GameGenreContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap: 8px;
    padding: 16px;
    justify-content: center;
`;

const GameListContainer = styled.div`
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    justify-content: start;
    padding: 16px;

    @media (max-width: 960px) {
        justify-content: center;
    }

    @media (max-width: 640px) {
        padding: 16px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
    }
`;

const GameListItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.2s;
    max-width: 192px;
    width: 100%;
    text-align: center;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }
`;

const GameGenreTitle = styled.h3`
    font-size: 24px;
`;

const GameLink = styled.a`
    text-decoration: none;
    color: inherit;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const GameThumbnail = styled.div`
    margin-bottom: 16px;
    max-width: 180px;
    max-height: 180px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

// cssだけでローディング スピナー　アニメーションを実装する
// 画像は擬似要素で作成する
const Placeholder = styled.img`
    visibility: hidden;
    width: 100%;
    height: 100%;
`;

const GameStyledTitle = styled.h4`
    font-size: 16px;
`;

const GameReleaseDate = styled.p`
    font-size: 14px;
    color: #4a5568;
    margin-bottom: 4px;
`;

const GameStyledGenre = styled.p`
    font-size: 14px;
    color: #718096;
`;

export function GameList() {
	const filteredGames = (genre: string) =>
		genre ? gameInfo.filter((game) => game.genre === genre) : gameInfo;

	return (
		<>
			<GameGenreContainer>
				<GameListContainer>
					{gameInfo.map((game) => (
						<GameListItem key={game.id} game={game} />
					))}
				</GameListContainer>
			</GameGenreContainer>
			{Object.entries(GameGenre).map(([key, value]) => (
				<GameGenreContainer key={key}>
					<GameGenreTitle>{value}</GameGenreTitle>
					<GameListContainer>
						{filteredGames(key).map((game) => (
							<GameListItem key={game.id} game={game} />
						))}
					</GameListContainer>
				</GameGenreContainer>
			))}
		</>
	);
}

export function GameListItem({ game }: { game: GameInfoType }) {
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<GameListItemContainer>
			<GameLink href={`/games/${game.name}`}>
				<GameThumbnail>
					{!isLoaded && (
						<Placeholder width="180" height="180" alt="Loading thumbnail" />
					)}
					<img
						src={`https://assets.wellwich.com/games/${game.name}/img/icon.png`}
						alt={`${game.name} thumbnail`}
						onLoad={() => setIsLoaded(true)} // 画像が読み込まれたら isLoaded を true に設定
						style={{ display: isLoaded ? "block" : "none" }} // 読み込み完了後に表示
					/>
				</GameThumbnail>
				<GameStyledTitle>{GameTitle[game.name]}</GameStyledTitle>
			</GameLink>
		</GameListItemContainer>
	);
}
