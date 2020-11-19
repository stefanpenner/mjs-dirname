# mjs-dirname ![CI](https://github.com/stefanpenner/mjs-dirname/workflows/CI/badge.svg)

Less verbose way to get a files `__dirname` and `__filename` in mjs files. Alternatively, one could use thrown exceptions in the helper methods to avoid providing import.meta.url as an argument, but I would prefer to avoid that. The result is as follows:

## Usage

```sh
yarn add mjs-dirname
```

```js
import { dirname, filename } from 'mjs-dirname';

const __dirname = dirname(import.meta.url);
const __filename = filename(import.meta.url);
```
