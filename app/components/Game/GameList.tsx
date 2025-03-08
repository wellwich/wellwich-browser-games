import { useState } from "react";
import styled from "styled-components";
import { GameGenre, GameTitle, gameInfo } from "~/game-info";
import type { GameInfoType } from "~/game-info";

const GameListContainer = styled.div`
    display: flex;
    max-width: 960px;
    margin: 0 auto;
    flex-wrap: wrap;
    gap: 16px;
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
    width: 192px;
    text-align: center;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }
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
    width: 180px;
    height: 180px;
`;

const GameStyledTitle = styled.h2`
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

const FilterContainer = styled.div`
    max-width: 960px;
    margin: 0 auto;
    padding: 16px;
    display: flex;
    justify-content: flex-start;
`;

const Select = styled.select`
    padding: 8px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #e2e8f0;
    background-color: white;
    color: #2d3748;
    cursor: pointer;
`;

export function GameList() {
	const [selectedGenre, setSelectedGenre] = useState<string>("");

	const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedGenre(event.target.value);
	};

	const filteredGames = selectedGenre
		? gameInfo.filter((game) => game.genre === selectedGenre)
		: gameInfo;

	return (
		<>
			<FilterContainer>
				<Select value={selectedGenre} onChange={handleGenreChange}>
					<option value="">すべてのジャンル</option>
					{Object.entries(GameGenre).map(([key, value]) => (
						<option key={key} value={key}>
							{value}
						</option>
					))}
				</Select>
			</FilterContainer>
			<GameListContainer>
				{filteredGames.map((game) => (
					<GameListItem key={game.id} game={game} />
				))}
			</GameListContainer>
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
