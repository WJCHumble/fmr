import { CommandOptions } from "../types/command"
import { copy, copyDir, emptyDir } from "../utils/file"
import { prompt } from "enquirer"
import colors from "picocolors"
import path from "path"
import fs from "fs"

const RENAMEFILES = {
	_gitignore: ".gitignore"
}

const newMonorepo: CommandOptions = {
	name: "new",
	command: ["new [targetDir]", "create a monorepo project"],
	options: {
		"--type [language]": "[string] monorepo template type(ts or js)"
	},
	action: async (...args) => {
		const cwd = process.cwd()
		let [ targetDir, option ] = args;
		if (!targetDir) {
			const { name } = (await prompt({
				type: "input",
				name: "name",
				message: "Project name:",
				initial: "rotate-demo"
			}) as any)
			targetDir = name
		}
		// initial root dir
		const root = path.join(cwd, targetDir)
		console.log(`${colors.blue("[init]")} created monorepo project in ${root}`)

		if (!fs.existsSync(root)) {
			fs.mkdirSync(root, { recursive: true })
		} else {
			const existing = fs.readdirSync(root)
			if (existing.length) {
				const { yes } = (await prompt({
					type: 'confirm',
					name: 'yes',
					initial: 'Y',
					message:
						`Target directory ${targetDir} is not empty.\n` +
						`Remove existing files and continue?`
				}) as any)
				if (yes) {
					emptyDir(root)
				} else {
					return
				}
			}
		}
		if (option?.type && !option?.type.includes(['ts', 'js'])) {
			throw new Error(`[init] --type option value should be the 'ts' or 'js'`)
		}
		// select template
		const language = option?.type || 'js';
		const templateDir = path.join(__dirname, `template-${language}`);
		const files = fs.readdirSync(templateDir)

		const write = (file: string, content?: string) => {
			const targetPath = RENAMEFILES[file]
				? path.join(root, RENAMEFILES[file])
				: path.join(root, file)
			if (content) {
				fs.writeFileSync(targetPath, content)
			} else {
				copy(path.join(templateDir, file), targetPath)
			}
		}
		
		for (const file of files.filter((f) => f !== 'package.json')) {
			write(file)
		}
		// replace package.json file's name
		const pkg = require(path.join(templateDir, `package.json`))
		pkg.name = path.basename(root)
		write('package.json', JSON.stringify(pkg, null, 2))
		console.log(`${colors.green('[init]')} done, now run:\n`)
		if (root !== cwd) {
			console.log(`  cd ${path.relative(cwd, root)}\n`)
		}
	}
}

export default newMonorepo