## fmr

<a href="https://www.npmjs.com/package/fmr"><img src="https://img.shields.io/npm/v/fmr"/></a>

[English](https://github.com/WJCHumble/fmr) ｜ [中文](https://github.com/WJCHumble/fmr/blob/main/README-CN.md)

A CLI that lets you experience **modern monorepo** project quickly and easily, powered by [turborepo](https://github.com/vercel/turborepo), [pnpm](https://github.com/pnpm/pnpm) and [changesets](https://github.com/changesets/changesets).

Features:

- Create a monorepo template project
- Use pnpm as a package manager
- Use turborepo to preform multiple package script tasks
## Install

Install it globally:

```bash
pnpm add fmr -g
# Or Yarn
yarn add fmr -g
# Or npm
npm i fmr -g
```
## Command

Overview:

- [`fmr new`](https://github.com/WJCHumble/fmr#fmr-new)
- [`fmr add`](https://github.com/WJCHumble/fmr#fmr-add)
- [`fmr run`](https://github.com/WJCHumble/fmr#fmr-run)
- [`fmr publish`](https://github.com/WJCHumble/fmr#fmr-publish)
- [`fmr version`](https://github.com/WJCHumble/fmr#fmr-version)

### fmr new

Usage:

```bash
fmr new <project>

Create a new monorepo project

Command options:

  --type ts       monorepo with typescript
  --type js       monorepo with javascript
```

### fmr add

Usage:

```bash
fmr add <package>

Command options:

  --scope <name>  install package in scope
  --save-dev
  -S
  --dev
  -D
```

Note that if you don't set `--scope`, the package will be installed in root.

### fmr run

Usage:

```bash
fmr run <command>
```
### fmr changeset

Usage:

```bash
fmr changeset
```

### fmr version

Usage:

```bash
fmr version
```

### fmr publish

Usage:

```bash
fmr publish
```

Note that if you want to publish to a private `registry`, you should add  `publicConfig.registry` to `packagejson` of the published package, for example:

```json
{
  ...
  "publicConfig": {
    "registry": "http://localhost:4873"
  }
}
```
