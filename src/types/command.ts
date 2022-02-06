
export interface CommandOptions {
	name?: string,
	command: string[],
	options?: Record<string, string>,
	option?: string[],
	allowUnknownOptions?: boolean,
	action: (...args: any[]) => void
}