import { CommandOptions } from "../types/command"

export const useCommand = (cac: any, commandOptions: CommandOptions) => {
	const {
		name,
		command,
		options,
		option,
		action,
		allowUnknownOptions
	} = commandOptions

	cac.name = name
	const cli = cac.command(...command)
	// resolve multiple option
	if (options) {
		Object.entries(options).forEach((option: string[]) => {
			cli.option(...option)
		})
	} 
	// resolve single option
	if (option) {
		cli.option(...option)
	}

	if (allowUnknownOptions) {
		cli.allowUnknownOptions()
	}
	cli.action(action)
}