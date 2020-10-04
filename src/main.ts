import { createInterface, ReadLineOptions } from "readline";
import Simulator from "./simulator";
import Table from "./table";
import { Directions } from "./toybot";
import { showError, showTitleAndBanner, simpleLog } from "./utils";
import { ConsoleMessage } from "./constants/console-message";

const table = new Table();
const simulator = new Simulator(table);

const readOptions: ReadLineOptions = {
	input: process.stdin,
	output: process.stdout,
	terminal: false,
};

enum ValidCommands {
	"LEFT",
	"RIGHT",
	"MOVE",
	"REPORT",
	"PLACE",
}

const readLine = createInterface(readOptions);

showTitleAndBanner();
simpleLog(ConsoleMessage.START_BANNER);
simpleLog(ConsoleMessage.PROMPT);
readLine.prompt(true);

readLine.on("line", (line: string) => {
	const rawCommand = line.trim().toUpperCase().split(" ");
	const command = rawCommand[0];
	let exitApplication = false;
	const isValidCommand = Object.keys(ValidCommands).includes(command);
	if (isValidCommand) {
		if (rawCommand.length > 1 && command === "PLACE") {
			const parsedPlacement = rawCommand[1].split(",");
			const x: number = parseInt(parsedPlacement[0]);
			const y: number = parseInt(parsedPlacement[1]);
			const direction: any = parsedPlacement[2];
			const isValidPosition: boolean = table.isInBounds({ x, y });
			const isValidDirection = Object.values(Directions).includes(
				direction
			);
			if (isValidPosition && isValidDirection) {
				simulator.run(command, {
					position: { x, y },
					direction: direction,
				});
			} else {
				!isValidPosition && showError(ConsoleMessage.INVALID_POSITION);
				!isValidDirection &&
					showError(ConsoleMessage.INVALID_DIRECTION);
			}
		} else {
			simulator.run(command);
		}
	} else {
		if (command === "HELP") {
			simpleLog(ConsoleMessage.HELP);
		} else if (command === "EXIT") {
			exitApplication = true;
		} else {
			showError(ConsoleMessage.INVALID_COMMAND);
			simpleLog(ConsoleMessage.HELP);
		}
	}
	readLine.prompt(true);
	if (exitApplication) {
		simpleLog(ConsoleMessage.STOP_BANNER);
		readLine.close();
	}
});
