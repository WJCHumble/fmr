import { CommandOptions } from "../types/command"
import { exec } from "shelljs"
import { isRootExecute } from "../utils"
import decamelizeKeys from "decamelize-keys"
import colors from "picocolors"

const run: CommandOptions = {
	name: "run",
	command: ["run [type]", ""],
	// refer: https://turborepo.org/docs/reference/command-line-reference#option-syntax
	allowUnknownOptions: true,
	action: (...args) => {
		isRootExecute()
		const type = args[0]
		const options = args[1]
		let optionStr = Object.keys(options).map((name) => {
			if (name === "--") return ""
			
			const temp = {}
			temp[name] = options[name]
			const decamelName = decamelizeKeys(temp, "-")
			if (options[name] === false) {
				return `--no-${Object.keys(decamelName)}`
			}
			if (options[name] === true) {
				return `--${Object.keys(decamelName)}`
			}
			const objEntries = Object.entries(decamelName)[0]
			return `--${objEntries[0]}="${objEntries[1]}"`
		}).join(" ")

		const command = `turbo run ${type}${optionStr}`
		console.log(`${colors.blue("[fmr run]")} ${command}`)

		exec(command)
	}
}

export default run