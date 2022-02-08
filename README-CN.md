## fmr

<a href="https://www.npmjs.com/package/fmr"><img src="https://img.shields.io/npm/v/fmr"/></a>

一个可以让你快速体验**现代 Monorepo**工程的脚手架（CLI），基于 [turborepo](https://github.com/vercel/turborepo)、[pnpm](https://github.com/pnpm/pnpm) 和 [changesets](https://github.com/changesets/changesets)。

功能：

- 创建一个 Monorepo 模版项目
- 使用 PNPM 安装指定范围包的依赖
- 使用 turborepo 执行多包脚本（Script）任务

## Install

全局安装:

```bash
pnpm add fmr -g
# Or Yarn
yarn add fmr -g
# Or npm
npm i fmr -g
```

## Command

支持的命令:

- [`fmr new`](https://github.com/WJCHumble/fmr#fmr-new)
- [`fmr add`](https://github.com/WJCHumble/fmr#fmr-add)
- [`fmr run`](https://github.com/WJCHumble/fmr#fmr-run)
- [`fmr publish`](https://github.com/WJCHumble/fmr#fmr-publish)
- [`fmr version`](https://github.com/WJCHumble/fmr#fmr-version)

### fmr new

使用:

```bash
fmr new <project>

Create a new monorepo project

Command options:

  --type ts       使用 typescript 开发的 monorepo
  --type js       使用 javascript 开发的 monorepo
```

### fmr add

使用:

```bash
fmr add <package>

Command options:

  --scope <name>  安装依赖在指定的 package 中
  --save-dev
  -S
  --dev
  -D
```

>注意，如果你没有设置 `--scope`，默认情况下依赖会被安装到 root 中。

### fmr run

使用:

```bash
fmr run <command>
```

### fmr publish

使用:

```bash
fmr publish
```

### fmr version

使用:

```bash
fmr version
```
