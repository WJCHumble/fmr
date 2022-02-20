import { CommandOptions } from "../types/command"
import { cd, exec } from "shelljs"
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
		const pnpmWorkspaceFile = path.join(cwd, 'pnpm-workspace.yaml')
		const installPkgs = args[0]
		if (!installPkgs?.length) {
			// run `pnpm insall` in workspace
			if (pnpmWorkspaceFile) {
				exec(`pnpm install`)
				return
			}
			throw new Error("[fmr add] you must add install npm package's name")
		}
		let {
			S,
			saveDev,
			D,
			dev,
			scope
		} = args[1];
		let isRootInstall = true
		let filterOpt = "--filter "
		if (pnpmWorkspaceFile && scope) {
			filterOpt += scope
			isRootInstall = false
		}

		let installType = ""
		if (S || saveDev) {
			installType = '-S'
		} 
		if (D || dev) {
			installType = '-D'
		}

		exec(`pnpm add ${installPkgs.join(" ")} ${installType} ${isRootInstall ? '-w': filterOpt}`)
	}
}

export default add