import { CommandOptions } from "../types/command"
import { cd, exec } from "shelljs"
import fs from "fs"
import path from "path"

const add: CommandOptions = {
	name: "add",
	command: ["add [...pkg]", "install packages locally"],
	options: {
		"--scope [pkg]": "install package's name",
		"-S, --save-dev": "",
		"-D, --dev": "",
	},
	action: (...args) => {
		const cwd = process.cwd()
		const installPkgs = args[0]
		if (!installPkgs?.length) {
			throw new Error("[rotate add] you must add install npm package's name")
		}
		let {
			S,
			saveDev,
			D,
			dev,
			scope
		} = args[1];
		const pnpmWorkspaceFile = path.join(cwd, 'pnpm-workspace.yaml')
		if (!pnpmWorkspaceFile && scope) {
			cd(`packages/${scope}`)
		}
		let pnpmInstallOption = ""
		if (S || saveDev) {
			pnpmInstallOption = '-S'
		} 
		if (D || dev) {
			pnpmInstallOption = '-D'
		}

		exec(`pnpm add ${installPkgs.join(" ")} ${pnpmInstallOption}`)
		cd(`../../`)
	}
}

export default add