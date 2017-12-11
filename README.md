# new-filename

Generating a new filename like 'basename (1).ext'

## Install

```bash
npm install new-filename
```

## Usage

```typescript
getNewFilename(list: array[string]), name: string): string
```

### Example

```javascript
const getNewFilename = require('new-filename');

const newName = getNewFilename([
  'untitled.txt',
  'untitled (2).txt',
  'file3.txt',
  'file4.java',
], 'untitled.txt');

console.log(newName);
// => 'untitled (3).txt'
```

## Tests

```bash
npm test
```
## Similar Packages

[unused-filename](https://github.com/sindresorhus/unused-filename) has the same feature, but it operates on the file system, `new-filename` gives you a opportunity to get unused filename independent from platform (e.g. on browser).
