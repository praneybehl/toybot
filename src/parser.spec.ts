import Table from "./table";
import { Directions } from "./toybot";
import { isValidPlacement, parsePlaceOptions } from "./parser";
import { spyConsole } from "./utils/test-helpers";
import { ConsoleMessage } from "./constants/console-message";

describe("parser", () => {
	describe("isValidPlacement", () => {
		const spy = spyConsole();
		const table = new Table();
		it("should return true for valid placement position and direction", () => {
			const placeOptions = {
				position: {
					x: 1,
					y: 2,
				},
				direction: Directions.NORTH,
			};
			const testValidity = isValidPlacement(placeOptions, table);
			expect(testValidity).toBe(true);
		});
		it("should return false for invalid placement position", () => {
			const placeOptions = {
				position: {
					x: 6,
					y: 2,
				},
				direction: Directions.NORTH,
			};
			const testValidity = isValidPlacement(placeOptions, table);
			expect(testValidity).toBe(false);
			expect(console.error).toHaveBeenCalled();
			expect(spy.console.error.mock.calls[0][0]).toContain(
				ConsoleMessage.INVALID_POSITION
			);
		});
	});

	describe("parsePlaceOptions()", () => {
		it("should return parsed placement options", () => {
			const parsedOptions = parsePlaceOptions("0,0,NORTH");
			expect(parsedOptions).toEqual({
				position: { x: 0, y: 0 },
				direction: Directions.NORTH,
			});
		});
	});
});
