import Toybot, { IToyBot } from "./toybot";
import Table from "./table";
import { showError, showOutput, simpleLog } from "./utils";
import { ConsoleMessage } from "./constants/console-message";

export default class Command {
	private toybot?: Toybot;
	private table: Table;

	constructor(table: Table) {
		this.table = table;
	}

	public run(command: string, options?: IToyBot): boolean {
		if (this.toybot) {
			switch (command) {
				case "LEFT":
					this.toybot && this.toybot.turnLeft();
					break;
				case "RIGHT":
					this.toybot && this.toybot.turnRight();
					break;
				case "MOVE":
					this.toybot &&
						this.toybot.move(
							this.table.width - 1,
							this.table.height - 1
						);
					break;
				case "REPORT":
					this.toybot && showOutput(this.toybot.report());
					break;
				case "EXIT":
					return false;
				default:
					showError(ConsoleMessage.INVALID_COMMAND);
					simpleLog(ConsoleMessage.HELP);
					break;
			}
		}

		if (command === "PLACE" && options) {
			if (this.table.isInBounds(options.position)) {
				if (this.toybot) {
					this.toybot.place(options);
				} else {
					this.toybot = new Toybot({ ...options, isPlaced: true });
				}
			}
		}
		return true;
	}
}
