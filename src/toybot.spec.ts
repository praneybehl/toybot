import Toybot, { IToyBot, Directions } from "./toybot";

describe("Toybot", () => {
	describe("#new", () => {
		it("should be initialized with the given params", () => {
			const options: IToyBot = {
				position: { x: 3, y: 3 },
				direction: Directions.SOUTH,
			};
			const toybot: Toybot = new Toybot(options);

			expect(toybot.report()).toBe("3, 3, 2");
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
			const toybot2: Toybot = new Toybot(options);
			expect(toybot2.direction).toBe(Directions.NORTH);

			expect(toybot2.turnRight()).toBe(Directions.EAST);
			expect(toybot2.direction).toBe(Directions.EAST);

			expect(toybot2.turnRight()).toBe(Directions.SOUTH);
			expect(toybot2.turnRight()).toBe(Directions.WEST);
			expect(toybot2.turnRight()).toBe(Directions.NORTH);
		});
	});
});
