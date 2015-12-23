# Rollup Typescript Test

This module is a test module for the rollup typescript plugin in preparation for Angular 2.  This repo contains a few classes and interfaces to test dependency resolution and typescript.

The `app` folder includes `answer.ts` and `main.ts`

The `test_modules` folder includes 3 test modules: `heroes`, `batman`, `wonderwoman`.  The `heroes` and `wonderwoman` modules are pure typescript, whereas the `batman` module has a `.d.ts` file instead.

`answer.ts` is for testing a typescript module that isn't external, to ensure that using a `./` path reference will work and will print out `42`.

`main.ts` includes references to `Answer`, `Batman` and `WonderWoman`.

## Prerequisites

You will need:

* [Node with NPM](https://docs.npmjs.com/getting-started/installing-node)
* Typescript: `npm install -g typescript`
* Rollup: `npm install -g rollup`

## Running the test

Run the following to test

```
npm install
rollup -c
node bundle/output.js
```

You should see:

```
The Answer is 42
Wonder woman's Secret Identity is: 'Diana Prince'
Batman's Secret Identity is: 'Bruce Wayne'
```
