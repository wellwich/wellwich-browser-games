export type GameInfoType = {
	id: number;
	name: GameTitleType;
	releaseDate: string;
	genre: GameGenreType;
	engine: "Akashic Engine" | "Phaser";
	pcOnly: boolean;
	infoUrl?: string;
};

export const GameGenre = {
	math: "計算",
	shooting: "シューティング",
	puzzle: "パズル",
} as const;

export type GameGenreType = keyof typeof GameGenre;

export const GameTitle = {
	"three-judge": "3倍",
	"calc-only-add": "1桁足し算",
	invaders: "インベーダー",
	"color-tiles": "カラータイル",
} as const;

export type GameTitleType = keyof typeof GameTitle;

export const gameInfo = [
	{
		id: 1,
		name: "three-judge",
		releaseDate: "2025-02-27",
		genre: "math",
		engine: "Akashic Engine",
		pcOnly: false,
		infoUrl: "https://namagame.coe.nicovideo.jp/games/lg10985",
	},
	{
		id: 2,
		name: "calc-only-add",
		releaseDate: "2025-02-27",
		genre: "math",
		engine: "Akashic Engine",
		pcOnly: false,
		infoUrl: "https://namagame.coe.nicovideo.jp/games/lg10964",
	},
	{
		id: 3,
		name: "invaders",
		releaseDate: "2025-02-27",
		genre: "shooting",
		engine: "Phaser",
		pcOnly: true,
	},
	{
		id: 4,
		name: "color-tiles",
		releaseDate: "2025-02-27",
		genre: "puzzle",
		engine: "Phaser",
		pcOnly: false,
	},
] satisfies GameInfoType[];
