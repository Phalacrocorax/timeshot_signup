# Hello World example

## Deploy your own

Deploy the example using [ZEIT Now](https://zeit.co/now):

[![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/new/project?template=https://github.com/zeit/next.js/tree/canary/examples/hello-world)

## How to use

### Using `create-next-app`

Execute [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app) with [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) or [npx](https://github.com/zkat/npx#readme) to bootstrap the example:

```bash
npx create-next-app --example hello-world hello-world-app
# or
yarn create next-app --example hello-world hello-world-app
```

### Download manually

Download the example:

```bash
curl https://codeload.github.com/zeit/next.js/tar.gz/canary | tar -xz --strip=2 next.js-canary/examples/hello-world
cd hello-world
```

Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download)):

```bash
now
```

## The idea behind the example

This example shows the most basic idea behind Next. We have 2 pages: `pages/index.js` and `pages/about.js`. The former responds to `/` requests and the latter to `/about`. Using `next/link` you can add hyperlinks between them with universal routing capabilities. The `day` directory shows that you can have subdirectories.

## Dependencies

- postcss-easy-import 3.0.0
- tailwind 1.7.5
- autoprefixer 9.8.6
- bit-bin 14.8.8

## bitdev

https://docs.bit.dev/docs/quick-start

```bash
npm install bit-bin -g
bit init

# ▶︎ bit add component
bit add ./components/signup.js --id signup-supabase
bit import bit.envs/compilers/babel --compiler
# bit import bit.envs/testers/mocha --tester
npx bit tag signup-supabase
# [errordeal] npm install --save-dev @babel/plugin-transform-react-jsx

# ▶︎ bit export component
# bit create organization: timeshotapp, create collection: ts-admin
npx bit export timeshotapp.ts-admin

# Usage
npx bit import timeshotapp.ts-admin/signup-supabase
npm i @bit/timeshotapp.ts-admin.signup-supabase
```
