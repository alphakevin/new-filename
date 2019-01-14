# new-filename

Generating a new filename like 'basename (1).ext' without conflicting with existing ones.

## Install

```bash
npm install new-filename
# or
yarn add new-filename
```

## Usage

```typescript
/**
 * Generating a new filename to avoid names in the list by adding sequenced number
 * @param list - Filenames already in use
 * @param name - New filenames about to use
 * @returns Generated new filename
 */
getNewFilename(list: string[]]), name: string): string
```

### Example

```javascript
import getNewFilename from 'new-filename';

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
