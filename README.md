## fmr

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

- [`fmr new`]()
- [`fmr add`]()
- [`fmr run`]()
- [`fmr publish`]()
- [`fmr version`]()

### fmr new

Usage:

```bash
fmr new <project>

Create a new monorepo project

Command options:

  --type ts       monorepo with typescript
  --type ts       monorepo with javascript
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

>Note that you don't set `--scope`, the package will be installed in root.

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