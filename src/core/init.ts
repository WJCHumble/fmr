import { CommandOptions } from "../types"

const init: CommandOptions = {
	name: "init",
	command: ["init", "create a monorepo project"],
	options: {
		"--type [language]": "[string] monorepo template type"
	},
	action: (...args) => {
		const option = args[0]
		if (option?.type) {

		}
	}
}

export default init