import { createInterface, ReadLineOptions } from "readline";
import Simulator from "./simulator";
import Table from "./table";
import { showTitleAndBanner, simpleLog } from "./utils";
import { ConsoleMessage } from "./constants/console-message";
import { parsePlaceOptions } from "./parser";

const table = new Table();
const simulator = new Simulator(table);

const readOptions: ReadLineOptions = {
	input: process.stdin,
	output: process.stdout,
	terminal: false,
};

const readLine = createInterface(readOptions);

showTitleAndBanner();
simpleLog(ConsoleMessage.START_BANNER);
simpleLog(ConsoleMessage.PROMPT);
readLine.prompt(true);

readLine.on("line", (line: string) => {
	const rawCommand = line.trim().toUpperCase().split(" ");
	const command = rawCommand[0];
	if (command === "EXIT") {
		simpleLog(ConsoleMessage.STOP_BANNER);
		readLine.close();
	} else if (command === "PLACE") {
		const placeOptions = parsePlaceOptions(rawCommand[1]);
		placeOptions && simulator.run(command, placeOptions);
		readLine.prompt(true);
	} else {
		simulator.run(command);
		readLine.prompt(true);
	}
});
