import { CommandOptions } from "../types/command"
import { exec } from "shelljs"
import { isRootExecute } from "../utils"
import colors from "picocolors"

const version: CommandOptions = {
	name: "version",
	command: ["version", ""],
	options: {},
	action: (...args) => {
		isRootExecute()
		const command = `pnpm changeset version`
		console.log(`${colors.blue("[fmr version]")} ${command}`)
		exec(command)
	}
}

export default version