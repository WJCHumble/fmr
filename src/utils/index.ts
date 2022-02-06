import path from "path"

export const isRootExecute = (cmd: string = "") => {
	const cwd = process.cwd()
	const pnpmWorkspaceFile = path.join(cwd, 'pnpm-workspace.yaml')
	if (!pnpmWorkspaceFile) {
		throw new Error(`[fmr ${cmd}] must execute in root`)
	}
}