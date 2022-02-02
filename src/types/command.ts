
export interface CommandOptions {
	name?: string,
	command: string[],
	options?: Record<string, string>,
	option?: string[],
	action: (...args: any[]) => void
}