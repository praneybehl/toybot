export enum ConsoleMessage {
	TITLE = "🤖 ToyBot Simulator",
	BANNER = "Toy Robot Simulator V1- interactive command-line application for coding challenge",
	ERROR = "ERROR: ",
	START_BANNER = "      Starting ToyBot Simulator V1!      ",
	STOP_BANNER = "      ToyBot Simulator Complete      ",
	INVALID_POSITION = "Invalid position coordinates value, please check and retry",
	INVALID_DIRECTION = "Invalid facing direction value, please check and retry with one of: NORTH | SOUTH | EAST | WEST",
	INVALID_COMMAND = "Invalid command, please check and type a valid command.",
	PROMPT = "Enter command",
	HELP = `
Commands List:
PLACE 1,2,EAST 	---> Places the robot on x:1, y: 2 facing EAST to the Table
MOVE 			---> Move the robot 1 step in the direction it's facing
RIGHT 			---> Turn the robot right
LEFT 			---> Turn the robot left
REPORT 			---> Report robot's position and facing direction on the table
EXIT 			---> Exit Application
	`,
	OUTPUT_SCORE = "Output: ",
}
