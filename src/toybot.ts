import { IPosition } from "./table";
import { PlaceOptions } from "./parser";

export enum Directions {
	NORTH = "NORTH",
	EAST = "EAST",
	SOUTH = "SOUTH",
	WEST = "WEST",
}
export type DirectionsTypes = keyof typeof Directions;

export interface IToyBot {
	position: IPosition;
	direction: DirectionsTypes;
	isPlaced?: boolean;
}

const directionTurnMap = {
	NORTH: {
		left: Directions.WEST,
		right: Directions.EAST,
	},
	EAST: {
		left: Directions.NORTH,
		right: Directions.SOUTH,
	},
	SOUTH: {
		left: Directions.EAST,
		right: Directions.WEST,
	},
	WEST: {
		left: Directions.SOUTH,
		right: Directions.NORTH,
	},
};

export default class Toybot {
	public direction: DirectionsTypes;
	private position: IPosition;
	private isPlaced?: boolean;

	constructor(params: IToyBot) {
		this.position = params.position;
		this.direction = params.direction;
		this.isPlaced = params.isPlaced || false;
	}

	public place(options: PlaceOptions): void {
		const { position, direction } = options;
		const { x, y } = position;
		if (!this.isPlaced) {
			this.isPlaced = true;
		}
		this.position = { x, y };
		this.direction = direction;
	}

	public turnLeft(): Directions {
		return (this.direction = directionTurnMap[this.direction].left);
	}

	public turnRight(): Directions {
		return (this.direction = directionTurnMap[this.direction].right);
	}

	public move(maxX: number, maxY: number): void {
		switch (this.direction) {
			case Directions.NORTH:
				if (this.position.y < maxY - 1) this.position.y += 1;
				break;
			case Directions.EAST:
				if (this.position.x < maxX - 1) this.position.x += 1;
				break;
			case Directions.SOUTH:
				if (this.position.y > 0) this.position.y -= 1;
				break;
			case Directions.WEST:
				if (this.position.x > 0) this.position.x -= 1;
				break;
			default:
		}
	}

	public report(): string {
		return `${this.position.x}, ${this.position.y}, ${this.direction}`;
	}
}
