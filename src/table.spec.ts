import Table from "./table";

describe("Table", () => {
	describe("has size 5x5 by default", () => {
		const table = new Table();
		it("should create a 5x5 table", () => {
			expect(table.width).toBe(5);
			expect(table.height).toBe(5);
		});
	});

	describe("is able to change size by passing params", () => {
		it("should creates an 4x4 size table", () => {
			const table = new Table(4, 4);
			expect(table.width).toBe(4);
			expect(table.height).toBe(4);
		});
	});

	describe("is able to create rectangular table", () => {
		it("should creates an 4x6 size table", () => {
			const table = new Table(4, 6);
			expect(table.width).toBe(4);
			expect(table.height).toBe(6);
		});
	});

	describe("isBorder()", () => {
		it("should be true when robot's coordinates is at border", () => {
			const table = new Table();
			expect(table.isBorder({ x: 0, y: 0 })).toBe(true);
			expect(table.isBorder({ x: 0, y: 2 })).toBe(true);
			expect(table.isBorder({ x: 2, y: 0 })).toBe(true);
			expect(table.isBorder({ x: 3, y: 4 })).toBe(true);
			expect(table.isBorder({ x: 4, y: 3 })).toBe(true);
		});

		it("should be false when robot's coordinates is not at border", () => {
			const table = new Table();
			expect(table.isBorder({ x: 1, y: 2 })).toBe(false);
			expect(table.isBorder({ x: 1, y: 1 })).toBe(false);
			expect(table.isBorder({ x: 2, y: 3 })).toBe(false);
			expect(table.isBorder({ x: 3, y: 3 })).toBe(false);
		});
	});
});
