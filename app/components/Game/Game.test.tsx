import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Game } from "./Game";

describe("Game コンポーネント", () => {
	it("ゲームタイトルを表示する", () => {
		render(<Game gameName="invaders" />);
		const gameTitle = screen.getByText(/Default Game Title/i);
		expect(gameTitle).toBeInTheDocument();
	});

	it("画像が読み込まれたときにスタートボタンを表示する", () => {
		render(<Game gameName="invaders" />);
		const startButton = screen.queryByText(/スタート/i);
		expect(startButton).not.toBeInTheDocument();

		const thumbnail = screen.getByAltText("thumbnail");
		fireEvent.load(thumbnail);

		const startButtonAfterLoad = screen.getByText(/スタート/i);
		expect(startButtonAfterLoad).toBeInTheDocument();
	});

	it("スタートボタンクリックでゲームを開始する", () => {
		render(<Game gameName="invaders" />);
		const thumbnail = screen.getByAltText("thumbnail");
		fireEvent.load(thumbnail);

		const startButton = screen.getByText(/スタート/i);
		fireEvent.click(startButton);

		const iframe = screen.getByTitle("invaders");
		expect(iframe).toBeInTheDocument();
	});

	it("ズームボタンクリックでiframeのサイズを切り替える", () => {
		render(<Game gameName="invaders" />);
		const thumbnail = screen.getByAltText("thumbnail");
		fireEvent.load(thumbnail);

		const startButton = screen.getByText(/スタート/i);
		fireEvent.click(startButton);

		const zoomButton = screen.getByTitle(/拡大/i);
		fireEvent.click(zoomButton);

		const container = screen.getByRole("application");
		expect(container).toHaveStyle("position: fixed");
	});

	it("リロードボタンクリックでiframeをリロードする", () => {
		render(<Game gameName="invaders" />);
		const thumbnail = screen.getByAltText("thumbnail");
		fireEvent.load(thumbnail);

		const startButton = screen.getByText(/スタート/i);
		fireEvent.click(startButton);

		const iframeBeforeReload = screen.getByTitle("invaders");
		const reloadButton = screen.getByTitle(/リロード/i);
		fireEvent.click(reloadButton);

		const iframeAfterReload = screen.getByTitle("invaders");
		expect(iframeBeforeReload).not.toBe(iframeAfterReload);
	});
});
