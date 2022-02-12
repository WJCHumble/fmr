import { CommandOptions } from "../types/command"
import { exec } from "shelljs"
import { isRootExecute } from "../utils"
import colors from "picocolors"

const changeset: CommandOptions = {
	name: "changeset",
	command: ["changeset", ""],
	options: {},
	action: (...args) => {
		isRootExecute()
		const command = `pnpm changeset`
		console.log(`${colors.blue("[fmr changeset]")} ${command}`)
		exec(command)
	}
}

export default changeset