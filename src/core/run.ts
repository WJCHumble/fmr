import { CommandOptions } from "../types/command"

const run: CommandOptions = {
	name: "run",
	command: ["run", ""],
	options: {},
	action: (...args) => {
		// TODO: use turbo to execute
	}
}

export default run