import { CommandOptions } from "../types/command"
import { exec } from "shelljs"
import { isRootExecute } from "../utils"
import colors from "picocolors"

const publish: CommandOptions = {
	name: "publish",
	command: ["publish", ""],
	options: {},
	action: (...args) => {
		isRootExecute()
		const command = `pnpm changeset publish`
		console.log(`${colors.blue("[fmr publish]")} ${command}`)
		exec(command)
	}
}

export default publish