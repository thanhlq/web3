# @thanhlq

Note: this project is a little messy, I'm working on it...


## Reference

This project inspired by the following libraries

- [Viem](https://github.com/wevm/viem)
- [ethers.js](https://github.com/ethers-io/ethers.js)

Tested with:
- **Node.js v22.17.0**
- **pnpm v9.15.0**
- **vitest v2.1.8**

---------------------------------------------

## Table of Contents

- [@thanhlq](#thanhlq)
  - [Reference](#reference)
  - [Table of Contents](#table-of-contents)
  - [What's Included](#whats-included)
  - [Available Scripts](#available-scripts)
  - [Test Structure](#test-structure)
  - [👤 Author](#-author)
  - [🦄 Show your support](#-show-your-support)
  - [📝 License](#-license)
  - [Appendix](#appendix)
    - [Publish the packages](#publish-the-packages)

## What's Included

Todo

## Available Scripts

- `pnpm install`: install the dependencies needed for each package.
- `pnpm build`: transpile the local TypeScript packages to JavaScript.
- `pnpm build:watch`: transpile the local TypeScript packages to JavaScript, and watch for changes.
- `pnpm check:exports`: check that the `exports` field in the `package.json` files of each exported package is correctly set, using [`@arethetypeswrong/cli`](https://www.npmjs.com/package/@arethetypeswrong/cli).
- `pnpm lint:ci`: check that the code follows the `biome` guidelines.
- `pnpm lint`: check that the code follows the `biome` guidelines, and override it to follow them if possible.
- `pnpm test:unit`: run unit tests.
- `pnpm test:integration`: run integration tests.
- `pnpm test`: run all tests.

## Test Structure

We follow an opinionated convention for storing an running tests.
All tests should be written in the `__tests__` directory of a local package.
Moreover, unit tests should be placed in the `__tests__/unit` folder; similarly, integration tests should be placed in the `__tests__/integration` folder.
This allows for easily running groups of tests (for instance, you might want to run unit tests locally, while deferring integration tests - that will probably need access to external services like Docker containers - to the CI only).


## 👤 Author

Hi, I'm **thanhlq**, you can follow me on:

- Github: [@thanhlq](https://github.com/thanhlq)

## 🦄 Show your support

Give a ⭐️ if this project helped or inspired you!

## 📝 License

Built with ❤️ by [Thanh LE](https://github.com/thanhlq).<br />
This project is [MIT](https://github.com/thanhlq/web3/blob/main/LICENSE) licensed.

## Appendix

### Publish the packages

```bash
npx changeset
npx changeset publish
```