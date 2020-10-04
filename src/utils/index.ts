import { red, cyan } from "kleur";
import * as figlet from "figlet";

import { ConsoleMessage } from "../constants/console-message";

export const showTitleAndBanner = (): void => {
	console.log(
		cyan(
			figlet.textSync(ConsoleMessage.TITLE, { horizontalLayout: "full" })
		)
	);
	console.info(cyan(ConsoleMessage.BANNER));
};

export const showError = (message: string | Error): void => {
	console.error(red(ConsoleMessage.ERROR) + message);
};

export const simpleLog = (message: string): void => {
	console.log(cyan(message));
};

export const showOutput = (data: string): void => {
	console.info(cyan(`${ConsoleMessage.OUTPUT_SCORE} ${data}`));
};
