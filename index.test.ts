import { expect } from 'chai';
import getNewFilename from './index';

describe('New filename tests', () => {

  it('should return original filename when not match the list (same ext)', () => {
    const newName = getNewFilename([
      'file1.txt',
      'file2.txt',
    ], 'file3.txt');
    expect(newName).to.equal('file3.txt');
  });

  it('should return original filename when match basename in the list (different ext)', () => {
    const newName = getNewFilename([
      'file1.txt',
      'file1.js',
      'file1.php',
      'file1.md',
    ], 'file1.java');
    expect(newName).to.equal('file1.java');
  });

  it('should return new filename when given filename with no ext', () => {
    const newName = getNewFilename([
      'dist',
      'src',
      'foo.bar',
    ], 'dist');
    expect(newName).to.equal('dist (2)');
  });

  it('should return new filename when given filename no basename', () => {
    const newName = getNewFilename([
      '.babelrc',
      '.gitignore',
      'package.json',
    ], '.gitignore');
    expect(newName).to.equal('.gitignore (2)');
  });

  it('should return new filename when in the list (no numbers, same ext)', () => {
    const newName = getNewFilename([
      'file1.txt',
      'file2.txt',
    ], 'file1.txt');
    expect(newName).to.equal('file1 (2).txt');
  });

  it('should return new filename when in the list (have numbers, same ext)', () => {
    const newName = getNewFilename([
      'file1.txt',
      'file1 (2).txt',
      'file1 (3).txt',
      'file2.txt',
    ], 'file1.txt');
    expect(newName).to.equal('file1 (4).txt');
  });

  it('should return new filename when in the list (have numbers, same ext), given numbered)', () => {
    const newName = getNewFilename([
      'file1.txt',
      'file1 (2).txt',
      'file1 (3).txt',
      'file2.txt',
    ], 'file1 (2).txt');
    expect(newName).to.equal('file1 (4).txt');
  });

});
