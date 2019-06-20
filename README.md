# @saber2pr/fp

[![npm](https://img.shields.io/npm/v/@saber2pr/fp.svg?color=%237712c9)](https://www.npmjs.com/package/@saber2pr/fp)

> functional programing in async | sync | lazy.

```bash
# from npm
npm install @saber2pr/fp

# from github
git clone https://github.com/Saber2pr/fp.git
```

# Why

If you often program with node.js, there will be some bad cases in async, like this:

```ts
const contents = await Promise.all(
  ['./1.txt', './2.txt'].map(async file_name => ({
    content1: await readFile(file_name).then(buffer => buffer.toString()),
    content2: await readFile(file_name).then(buffer => buffer.toString())
  }))
)
```

then you get a bad result, the `content.content1` and `content.content2` is a Promise

#### how to deal with it?

Now, there is a function named `async_map` to it:

```ts
const contents = async_map(['./1.txt', './2.txt'], async file_name => ({
  content1: await readFile(file_name).then(buffer => buffer.toString()),
  content2: await readFile(file_name).then(buffer => buffer.toString())
}))
```

you will get a result and the `content.content1` and `content.content2` is the correct type: string.

Beside the `async_map`, there is a lot of async functions in this package!

# API

compose

pipe

setter

intercept

async_reduce

async_reduceRight

async_compose

async_pipe

async_setter

async_forEach

async_filter

async_intercept

async_map

\*range

\*map

\*filter

\*reduce

toIt

from

---

## start

```bash
npm install
```

```bash
npm start

npm test

```

> Author: saber2pr

---

## develope and test

> you should write ts in /src

> you should make test in /src/test

> export your core in /src/index.ts!
