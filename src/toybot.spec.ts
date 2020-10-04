import Toybot, { IToyBot, Directions } from "./toybot";

describe("Toybot", () => {
	describe("#new", () => {
		it("should be initialized with the given params", () => {
			const options: IToyBot = {
				position: { x: 3, y: 3 },
				direction: Directions.SOUTH,
			};
			const toybot: Toybot = new Toybot(options);

			expect(toybot.report()).toBe("3, 3, SOUTH");
			expect(toybot.direction).toBe(Directions.SOUTH);
		});
	});

	describe("#turnLeft", () => {
		it("should turn the toybot left", () => {
			const options: IToyBot = {
				position: { x: 3, y: 3 },
				direction: Directions.NORTH,
			};
			const toybot: Toybot = new Toybot(options);
			expect(toybot.direction).toBe(Directions.NORTH);

			expect(toybot.turnLeft()).toBe(Directions.WEST);
			expect(toybot.direction).toBe(Directions.WEST);

			expect(toybot.turnLeft()).toBe(Directions.SOUTH);
			expect(toybot.direction).toBe(Directions.SOUTH);

			expect(toybot.turnLeft()).toBe(Directions.EAST);
			expect(toybot.turnLeft()).toBe(Directions.NORTH);
		});
	});

	describe("#turnRight", () => {
		it("should turn the toybot right", () => {
			const options: IToyBot = {
				position: { x: 3, y: 3 },
				direction: Directions.NORTH,
			};
			const toybot: Toybot = new Toybot(options);
			expect(toybot.direction).toBe(Directions.NORTH);

			expect(toybot.turnRight()).toBe(Directions.EAST);
			expect(toybot.direction).toBe(Directions.EAST);

			expect(toybot.turnRight()).toBe(Directions.SOUTH);
			expect(toybot.turnRight()).toBe(Directions.WEST);
			expect(toybot.turnRight()).toBe(Directions.NORTH);
		});
	});

	describe("#move", () => {
		it("should move the toybot 1 step in the facing direction", () => {
			const tableWidth = 5;
			const tableHeight = 5;
			const options: IToyBot = {
				position: { x: 0, y: 0 },
				direction: Directions.NORTH,
			};
			const toybot: Toybot = new Toybot(options);
			toybot.move(tableWidth, tableHeight);
			expect(toybot.report()).toBe("0, 1, NORTH");
			toybot.turnRight();
			toybot.move(tableWidth, tableHeight);
			expect(toybot.report()).toBe("1, 1, EAST");
		});
		it("should not fall off the table if robot when moving on the border", () => {
			const tableWidth = 5;
			const tableHeight = 5;
			const options: IToyBot = {
				position: { x: 0, y: 0 },
				direction: Directions.NORTH,
			};
			const toybot: Toybot = new Toybot(options);
			toybot.turnLeft();
			toybot.move(tableWidth, tableHeight);
			expect(toybot.report()).toBe("0, 0, WEST");
		});
	});
});
