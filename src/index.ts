import cac from "cac"
import pkg from "../package.json"
import newMonorepo from "./core/new"
import add from "./core/add"
import { useCommand } from "./utils/command"

const cli = cac("rotate")

useCommand(cli, newMonorepo)
useCommand(cli, add)

cli.help()
cli.version(pkg.version)
cli.parse()