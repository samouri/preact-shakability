# Preact tree shakability

Given an esm import from `preact/compat`, it would be ideal if everything unneeded could be DCEd away.

For example, given this simple input, I am seeing a much larger output than expected.

```js
import { forwardRef } from 'preact/compat';
```

In order to test this, I copy/pasted the functions used for [forwardRef](https://github.com/preactjs/preact/blob/master/compat/src/forwardRef.js) and measured the bundle size against the former.

## Results

- [current](./current/bundled.js): 15K
- [isolated](./isolated/bundled.js): 8.6K
