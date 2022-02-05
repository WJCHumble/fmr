import { CommandOptions } from "../types/command"

const publish: CommandOptions = {
	name: "publish",
	command: ["publish", ""],
	options: {},
	action: (...args) => {
		// TODO: use changesets to publish
	}
}

export default publish