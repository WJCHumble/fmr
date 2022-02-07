import cac from "cac"
import pkg from "../package.json"
import newMonorepo from "./core/new"
import add from "./core/add"
import publish from "./core/publish"
import run from "./core/run"
import version from "./core/version"
import { useCommand } from "./utils/command"

const cli = cac("rotate")

useCommand(cli, newMonorepo)
useCommand(cli, add)
useCommand(cli, publish)
useCommand(cli, run)
useCommand(cli, version)

cli.help()
cli.version(pkg.version)
cli.parse()