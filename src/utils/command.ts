import { CommandOptions } from "../types"

export const useCommand = (cac: any, commandOptions: CommandOptions) => {
	const {
		name,
		command,
		options,
		option,
		action
	} = commandOptions

	cac.name = name
	const cli = cac
								.command(...command)
	// resolve multiple options
	if (options) {
		Object.entries(options).forEach((option: string[]) => {
			cli.option(...option)
		})
	} 
	// resolve single option
	if (option) {
		cli.option(...option)
	}
	cli.action(action)
}