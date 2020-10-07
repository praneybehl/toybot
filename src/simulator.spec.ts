import { mocked } from "ts-jest/utils";
import Table from "./table";
import Simulator from "./simulator";
import Toybot from "./toybot";
import { spyConsole } from "./utils/test-helpers";
import { ConsoleMessage } from "./constants/console-message";

jest.mock("./toybot");

const mockedToybot = mocked(Toybot, true);

describe("simulator", () => {
	const spy = spyConsole();
	const table = new Table();
	const simulator = new Simulator(table);
	it("Toybot is called by the class constructor", () => {
		expect(mockedToybot).toHaveBeenCalled();
	});

	describe("run commands", () => {
		simulator.run("PLACE", {
			position: { x: 0, y: 0 },
			direction: "NORTH",
		});
		it("should create a Toybot instance", () => {
			expect(mockedToybot).toHaveBeenCalled();
			expect(mockedToybot.mock.calls[0][0]).toEqual({
				direction: "NORTH",
				isPlaced: true,
				position: { x: 0, y: 0 },
			});
		});
		it("should move the toybot 1 step", () => {
			simulator.run("MOVE");
			expect(mockedToybot.mock.instances[0].move).toHaveBeenCalled();
		});
		it("should turn the toybot left", () => {
			simulator.run("LEFT");
			expect(mockedToybot.mock.instances[0].turnLeft).toHaveBeenCalled();
		});
		it("should turn the toybot right", () => {
			simulator.run("RIGHT");
			expect(mockedToybot.mock.instances[0].turnRight).toHaveBeenCalled();
		});
		it("should report toybot position", () => {
			simulator.run("REPORT");
			expect(mockedToybot.mock.instances[0].report).toHaveBeenCalled();
			expect(console.info).toHaveBeenCalled();
		});
		it("should throw error when placing toybot outside table coordinates", () => {
			simulator.run("PLACE", {
				position: { x: 6, y: 0 },
				direction: "NORTH",
			});
			expect(console.error).toHaveBeenCalled();
			expect(spy.console.error.mock.calls[0][0]).toContain(
				ConsoleMessage.INVALID_POSITION
			);
		});
	});
});
