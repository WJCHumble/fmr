## fmr

<a href="https://www.npmjs.com/package/fmr"><img src="https://img.shields.io/npm/v/fmr"/></a>

A CLI that lets you experience **modern monorepo** project quickly and easily, powered by [turborepo](https://github.com/vercel/turborepo), [pnpm](https://github.com/pnpm/pnpm) and [changesets](https://github.com/changesets/changesets).

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

>Note that if you don't set `--scope`, the package will be installed in root.

### fmr run

Usage:

```bash
fmr run <command>
```

### fmr publish

Usage:

```bash
fmr publish
```

### fmr version

Usage:

```bash
fmr version
```
