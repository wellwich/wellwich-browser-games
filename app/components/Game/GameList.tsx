import styled from "styled-components";
import { GameGenre, GameTitle, gameInfo } from "~/game-info";
import type { GameInfoType } from "~/game-info";

const GameGenreContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap: 16px;
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
    border-radius: 8px;
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
    margin-bottom: 16px;
`;

const GameLink = styled.a`
    text-decoration: none;
    color: inherit;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const GameThumbnail = styled.img`
    border-radius: 8px;
    margin-bottom: 16px;
    max-width: 180px;
    max-height: 180px;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const GameStyledTitle = styled.h4`
    font-size: 20px;
    margin-bottom: 8px;
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
	return (
		<GameListItemContainer>
			<GameLink href={`/games/${game.name}`}>
				<GameThumbnail
					src={`https://assets.wellwi.ch/games/${game.name}/img/icon.png`}
					alt={`${game.name} thumbnail`}
				/>
				<GameStyledTitle>{GameTitle[game.name]}</GameStyledTitle>
				<GameReleaseDate>{game.releaseDate}</GameReleaseDate>
				<GameStyledGenre>{GameGenre[game.genre]}</GameStyledGenre>
			</GameLink>
		</GameListItemContainer>
	);
}
