function parseFilename(name) {
  const match = /(.+)?(\.\w+)/.exec(name);
  if (!match) {
    return {
      base: name,
      ext: '',  
    };
  }
  const base = match[1] || '';
  const ext = match[2];
  return {
    base: base,
    ext: ext,
  };
}

function getNextNumberName(name) {
  const match = /^(.+) \((\d+)\)$/.exec(name);
  if (match) {
    const base = match[1];
    const index = parseInt(match[2]);
    return `${base} (${index + 1})`;
  } else {
    return `${name} (2)`;
  }
}

/**
 * Generating a new filename to avoid names in the list by adding sequenced number
 * @param {string[]} list - Filenames already in use
 * @param {string} name - New filenames about to use
 * @returns {string} - Generated new filename
 */
function getNewFilename(list, name) {
  if (list.indexOf(name) === -1) {
    return name;
  }
  const parsed = parseFilename(name);
  const base = parsed.base;
  const ext = parsed.ext;
  if (!base) {
    const newName = getNextNumberName(ext);
    return getNewFilename(list, newName);
  } else {
    const basename = getNextNumberName(base);
    return getNewFilename(list, `${basename}${ext}`);
  }
}

module.exports = getNewFilename;
