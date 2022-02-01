import cac from "cac"
import pkg from "../package.json"
import init from "./core/init"
import { useCommand } from "./utils/command"

const cli = cac()

useCommand(cli, init)

cli.help()
cli.version(pkg.version);
cli.parse()