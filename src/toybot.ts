import { IPosition } from "./table";

export enum Directions {
	"NORTH",
	"EAST",
	"SOUTH",
	"WEST",
}

export interface IToyBot {
	position: IPosition;
	direction: Directions;
	isPlaced?: boolean;
}

export default class Toybot {
	public direction: Directions;
	private position: IPosition;
	private isPlaced: boolean;

	constructor(params: IToyBot) {
		this.position = params.position;
		this.direction = params.direction;
		this.isPlaced = params.isPlaced || false;
	}

	public place(options: IToyBot): void {
		const { position, direction } = options;
		const { x, y } = position;
		if (!this.isPlaced) {
			this.isPlaced = true;
		}
		this.position = { x, y };
		this.direction = direction;
	}

	public turnLeft(): Directions {
		const newDirection: Directions =
			this.direction === Directions.NORTH
				? Directions.WEST
				: this.direction - 1;
		return (this.direction = newDirection);
	}

	public turnRight(): Directions {
		const newDirection: Directions =
			this.direction === Directions.WEST
				? Directions.NORTH
				: this.direction + 1;
		return (this.direction = newDirection);
	}

	public move(): boolean {
		switch (this.direction) {
			case Directions.NORTH:
				--this.position.y;
				break;
			case Directions.EAST:
				++this.position.x;
				break;
			case Directions.SOUTH:
				++this.position.y;
				break;
			case Directions.WEST:
				--this.position.x;
				break;
			default:
		}
		return true;
	}

	public report(): string {
		return `${this.position.x}, ${this.position.y}, ${this.direction}`;
	}
}
