export function spyConsole(): any {
	const spy: any = {
		console: {},
	};

	beforeAll(() => {
		spy.console.error = jest
			.spyOn(console, "error")
			.mockImplementation(() => ({}));
		spy.console.info = jest
			.spyOn(console, "info")
			.mockImplementation(() => ({}));
		spy.console.log = jest
			.spyOn(console, "log")
			.mockImplementation(() => ({}));
	});

	afterAll(() => {
		spy.console.mockRestore();
	});

	return spy;
}
