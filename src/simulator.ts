import Toybot, { Directions } from "./toybot";
import Table, { IPosition } from "./table";
import { showOutput } from "./utils";

export default class Command {
	private toybot: Toybot | undefined = undefined;
	private table: Table;

	constructor(table: Table) {
		this.table = table;
	}

	public run(
		command: string,
		options?: { position: IPosition; direction: Directions }
	): void {
		if (this.toybot) {
			switch (command) {
				case "LEFT":
					this.toybot && this.toybot.turnLeft();
					break;
				case "RIGHT":
					this.toybot && this.toybot.turnRight();
					break;
				case "MOVE":
					this.toybot && this.toybot.move();
					break;
				case "REPORT":
					this.toybot && showOutput(this.toybot.report());
					break;
				default:
			}
		}

		if (command === "PLACE" && options) {
			if (this.table.isInBounds(options.position)) {
				if (!this.toybot) {
					this.toybot = new Toybot({ ...options, isPlaced: true });
				} else {
					this.toybot.place(options);
				}
			}
		}
	}
}
