import Table, { IPosition } from "./table";
import { Directions, DirectionsTypes } from "./toybot";
import { showError, simpleLog } from "./utils";
import { ConsoleMessage } from "./constants/console-message";

export interface PlaceOptions {
	position: IPosition;
	direction: DirectionsTypes;
}

export function isValidPlacement(
	placeOptions: PlaceOptions,
	table: Table
): boolean {
	const {
		position: { x, y },
		direction,
	} = placeOptions;
	const isValidPosition: boolean = table.isInBounds({ x, y });
	const isValidDirection = Object.keys(Directions).includes(direction);
	!isValidPosition && showError(ConsoleMessage.INVALID_POSITION);
	!isValidDirection && showError(ConsoleMessage.INVALID_DIRECTION);
	return isValidPosition && isValidDirection;
}

export function parsePlaceOptions(options: string): PlaceOptions | undefined {
	try {
		const parsedPlacement = options.split(",");
		const x: number = parseInt(parsedPlacement[0]);
		const y: number = parseInt(parsedPlacement[1]);
		const direction = parsedPlacement[2] as DirectionsTypes;
		return {
			position: { x, y },
			direction,
		};
	} catch (err) {
		showError(ConsoleMessage.INVALID_COMMAND);
		simpleLog(ConsoleMessage.HELP);
	}
}
