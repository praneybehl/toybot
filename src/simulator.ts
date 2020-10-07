import Toybot, { Directions } from "./toybot";
import Table from "./table";
import { showError, showOutput, simpleLog } from "./utils";
import { ConsoleMessage } from "./constants/console-message";
import { isValidPlacement, PlaceOptions } from "./parser";

export default class Simulator {
	private toybot?: Toybot;
	private table: Table;

	constructor(table: Table) {
		this.table = table;
	}

	public run(command: string, options?: PlaceOptions): void {
		switch (command) {
			case "LEFT":
				this.toybot?.turnLeft();
				break;
			case "RIGHT":
				this.toybot?.turnRight();
				break;
			case "MOVE":
				this.toybot?.move(this.table.width, this.table.height);
				break;
			case "REPORT":
				this.toybot && showOutput(this.toybot.report());
				break;
			case "PLACE":
				if (options && isValidPlacement(options, this.table)) {
					if (!this.toybot) {
						this.toybot = new Toybot({
							...options,
							isPlaced: true,
						});
					} else {
						this.toybot.place(options);
					}
				}
				break;
			case "HELP":
				simpleLog(ConsoleMessage.HELP);
				break;
			default:
				showError(ConsoleMessage.INVALID_COMMAND);
				simpleLog(ConsoleMessage.HELP);
				break;
		}
	}
}
