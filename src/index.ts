import cac from "cac"
import pkg from "../package.json"
import newMonorepo from "./core/new"
import { useCommand } from "./utils/command"

const cli = cac("rotate")

useCommand(cli, newMonorepo)

cli.help()
cli.version(pkg.version)
cli.parse()