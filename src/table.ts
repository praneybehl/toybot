export interface IPosition {
	x: number;
	y: number;
}

export default class Table {
	constructor(public width: number = 5, public height: number = 5) {
		this.width = width;
		this.height = height;
	}

	public isInBounds(pos: IPosition): boolean {
		return (
			pos.x >= 0 &&
			pos.x <= this.width - 1 &&
			pos.y >= 0 &&
			pos.y <= this.height - 1
		);
	}
}
