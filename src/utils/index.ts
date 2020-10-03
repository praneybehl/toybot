import { red, green, cyan, blue, yellow, bgBlue, bold } from "kleur";
import * as figlet from "figlet";

import { ConsoleMessage } from "../constants/console-message";

const newLine = "\n";

export const showTitleAndBanner = (): void => {
	console.log(
		cyan(
			figlet.textSync(ConsoleMessage.TITLE, { horizontalLayout: "full" })
		)
	);
	console.info(cyan(ConsoleMessage.BANNER));
};

export const showOutput = (data: string): void => {
	console.info(cyan(`${ConsoleMessage.OUTPUT_SCORE} ${data}`));
};
