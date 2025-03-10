import {
	type RefObject,
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";
import styled from "styled-components";
import {
	GameGenre,
	GameTitle,
	type GameTitleType,
	gameInfo,
} from "~/game-info";

const defaultWidth = 960;
const optionsHeight = 72;

const GameContainerDiv = styled.div`
    max-width: 960px;
    margin: 0 auto;
    width: 100%;
    background-color: white;
`;

const GameTitleStyled = styled.h2`
    font-size: 32px;
    margin-bottom: 16px;
`;

const IconButtonStyled = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    appearance: none;
    margin: 4px;

    img {
        width: 36px;
        height: 36px;
        padding: 8px;
        border-radius: 4px;
        background-color: gray;
    }
`;

const GameOptionsDiv = styled.div`
    display: flex;
    height: 48px;
    padding: 12px;
    background-color: #f0f0f0;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
`;

const GameThumbnailImg = styled.img<{
	$iframeSize: { width: number; height: number };
}>`
    width: 100%;
    max-height: ${(props) => props.$iframeSize.height}px;
    max-width: ${(props) => props.$iframeSize.width}px;
    object-fit: contain;
`;

const StartButton = styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 16px;
    font-size: 32px;
    background-color: #4a4a4a;
    color: white;
    font-weight: bold;
    border: none;
    cursor: pointer;
    outline: none;
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	&:hover {
		background-color: #333;
	}

	@media (max-width: 640px) {
		font-size: 24px;
	}

	@media (max-width: 480px) {
		font-size: 20px;
	}
`;

const GameIframeStyled = styled.iframe`
    border: none;
    width: 100%;
    max-width: 100%;
    background-color: white;
`;

export function GameContainer({ children }: { children: React.ReactNode }) {
	return <GameContainerDiv>{children}</GameContainerDiv>;
}

export function IconButton({
	title,
	onClick,
	iconSrc,
	altText,
}: { title: string; onClick: () => void; iconSrc: string; altText: string }) {
	return (
		<IconButtonStyled type="button" title={title} onClick={onClick}>
			<img src={iconSrc} alt={altText} />
		</IconButtonStyled>
	);
}

export function GameOptions({
	isImageLoaded,
	isEnlarged,
	toggleIframeSize,
	reloadIframe,
	toggleFullscreen,
}: {
	isImageLoaded: boolean;
	isEnlarged: boolean;
	toggleIframeSize: () => void;
	reloadIframe: () => void;
	toggleFullscreen: () => void;
}) {
	return isImageLoaded ? (
		<GameOptionsDiv>
			<IconButton
				title="リロード"
				onClick={reloadIframe}
				iconSrc="/icons/reload.svg"
				altText="リロード"
			/>
			<IconButton
				title={isEnlarged ? "縮小" : "拡大"}
				onClick={toggleIframeSize}
				iconSrc={isEnlarged ? "/icons/zoom-out.svg" : "/icons/zoom-in.svg"}
				altText={isEnlarged ? "縮小" : "拡大"}
			/>
			<IconButton
				title="フルスクリーン"
				onClick={toggleFullscreen}
				iconSrc="/icons/fullscreen.svg"
				altText="フルスクリーン"
			/>
		</GameOptionsDiv>
	) : null;
}

export function GameThumbnail({
	thumbnail,
	iframeSize,
	isStarted,
	startGame,
	isImageLoaded,
	setIsImageLoaded,
}: {
	thumbnail: string;
	iframeSize: { width: number; height: number };
	isStarted: boolean;
	startGame: () => void;
	isImageLoaded: boolean;
	setIsImageLoaded: (loaded: boolean) => void;
}) {
	return !isStarted ? (
		<>
			<GameThumbnailImg
				src={thumbnail}
				alt="thumbnail"
				$iframeSize={iframeSize}
				onLoad={() => setIsImageLoaded(true)}
			/>
			{isImageLoaded && (
				<StartButton onClick={startGame}>ゲームを開始する</StartButton>
			)}
		</>
	) : null;
}

export function GameIframe({
	iframeKey,
	iframeSize,
	gameName,
	iframeRef,
}: {
	iframeKey: number;
	iframeSize: { width: number; height: number };
	gameName: string;
	iframeRef: RefObject<HTMLIFrameElement>;
}) {
	return (
		<GameIframeStyled
			ref={iframeRef}
			key={iframeKey}
			src={`https://assets.wellwi.ch/games/${gameName}/index.html`}
			title={gameName}
			width={iframeSize.width}
			height={iframeSize.height}
			loading="lazy"
		/>
	);
}

const GameInfoContainer = styled.div`
    padding: 16px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 16px;
`;

const GameInfoTitle = styled(GameTitleStyled)`
    font-size: 24px;
    margin-bottom: 8px;
`;

const GameInfoText = styled.p`
    font-size: 16px;
    color: #4a5568;
    margin: 4px 0;
`;

export function GameInfo({ gameName }: { gameName: GameTitleType }) {
	const {
		releaseDate: gameReleaseDate,
		genre: gameGenre,
		infoUrl: gameInfoUrl,
	} = gameInfo.find((game) => game.name === gameName) || {
		releaseDate: "2025-02-27",
		genre: "math",
	};

	const genreName = GameGenre[gameGenre];
	const titleName = GameTitle[gameName];

	return (
		<GameInfoContainer>
			<GameInfoTitle>{titleName}</GameInfoTitle>
			<GameInfoText>{gameReleaseDate}</GameInfoText>
			<GameInfoText>{genreName}</GameInfoText>
			{gameInfo.find((game) => game.name === gameName)?.infoUrl && (
				<GameInfoText>
					<a href={gameInfoUrl} target="_blank" rel="noopener noreferrer">
						詳細情報
					</a>
				</GameInfoText>
			)}
		</GameInfoContainer>
	);
}

export function Game({ gameName }: { gameName: GameTitleType }) {
	const [iframeKey, setIframeKey] = useState(0);
	const [iframeSize, setIframeSize] = useState({ width: 0, height: 0 });
	const [isEnlarged, setIsEnlarged] = useState(false);
	const [isStarted, setIsStarted] = useState(false);
	const [isImageLoaded, setIsImageLoaded] = useState(false);
	const [isNarrowScreen, setIsNarrowScreen] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);
	const iframeRef = useRef<HTMLIFrameElement>(null);

	const reloadIframe = useCallback(() => {
		setIframeKey((prevKey) => prevKey + 1);
	}, []);

	const updateIframeSize = useCallback(() => {
		if (containerRef.current) {
			const width = containerRef.current.clientWidth;
			const height = (width * 9) / 16;
			if (height > window.innerHeight - optionsHeight) {
				setIframeSize({
					width,
					height: window.innerHeight - optionsHeight,
				});
				return;
			}
			setIframeSize({ width, height });
		}
	}, []);

	const toggleIframeSize = useCallback(() => {
		if (containerRef.current) {
			containerRef.current.style.position = isEnlarged ? "static" : "fixed";
			containerRef.current.style.top = isEnlarged ? "auto" : "0";
			containerRef.current.style.left = isEnlarged ? "auto" : "0";
			containerRef.current.style.height = isEnlarged ? "auto" : "100vh";
			containerRef.current.style.maxWidth = isEnlarged
				? `${defaultWidth}px`
				: "100%";
			containerRef.current.style.maxHeight = isEnlarged ? "auto" : "100vh";
			containerRef.current.style.zIndex = isEnlarged ? "auto" : "9999";
			updateIframeSize();
			setIsEnlarged(!isEnlarged);
		}
	}, [isEnlarged, updateIframeSize]);

	const toggleFullscreen = useCallback(() => {
		if (iframeRef.current) {
			if (!document.fullscreenElement) {
				iframeRef.current.requestFullscreen().catch((err) => {
					console.error(
						`Error attempting to enable full-screen mode: ${err.message} (${err.name})`,
					);
				});
			} else {
				document.exitFullscreen();
			}
		}
	}, []);

	useEffect(() => {
		if (typeof window !== "undefined") {
			updateIframeSize();
			window.addEventListener("resize", updateIframeSize);
			return () => {
				window.removeEventListener("resize", updateIframeSize);
			};
		}
	}, [updateIframeSize]);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setIsNarrowScreen(window.innerWidth < defaultWidth);
		}
	}, []);

	const startGame = useCallback(() => {
		setIsStarted(true);
	}, []);

	const thumbnail = `https://assets.wellwi.ch/games/${gameName}/img/thumb.jpg`;

	return (
		<GameContainer>
			<div
				ref={containerRef}
				role="application"
				style={{
					maxWidth: "960px",
					margin: "0 auto",
					width: "100%",
					backgroundColor: "white",
				}}
			>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						margin: "0 auto",
						position: "relative",
					}}
				>
					<GameThumbnail
						thumbnail={thumbnail}
						iframeSize={iframeSize}
						isStarted={isStarted}
						startGame={startGame}
						isImageLoaded={isImageLoaded}
						setIsImageLoaded={setIsImageLoaded}
					/>
					{isStarted && (
						<GameIframe
							iframeKey={iframeKey}
							iframeSize={iframeSize}
							gameName={gameName}
							iframeRef={iframeRef as RefObject<HTMLIFrameElement>}
						/>
					)}
				</div>
				<GameOptions
					isImageLoaded={isImageLoaded}
					isEnlarged={isEnlarged}
					toggleIframeSize={toggleIframeSize}
					reloadIframe={reloadIframe}
					toggleFullscreen={toggleFullscreen}
				/>
			</div>
			<GameInfo gameName={gameName} />
		</GameContainer>
	);
}
