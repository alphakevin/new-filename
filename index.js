"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parseFilename(name) {
    var match = /(.+)?(\.\w+)/.exec(name);
    if (!match) {
        return {
            base: name,
            ext: '',
        };
    }
    var base = match[1] || '';
    var ext = match[2];
    return {
        base: base,
        ext: ext,
    };
}
function getNextNumberName(name) {
    var match = /^(.+) \((\d+)\)$/.exec(name);
    if (match) {
        var base = match[1];
        var index = parseInt(match[2]);
        return base + " (" + (index + 1) + ")";
    }
    else {
        return name + " (2)";
    }
}
/**
 * Generating a new filename to avoid names in the list by adding sequenced number
 * @param list - Filenames already in use
 * @param name - New filenames about to use
 * @returns Generated new filename
 */
function getNewFilename(list, name) {
    if (list.indexOf(name) === -1) {
        return name;
    }
    var parsed = parseFilename(name);
    var base = parsed.base;
    var ext = parsed.ext;
    if (!base) {
        var newName = getNextNumberName(ext);
        return getNewFilename(list, newName);
    }
    else {
        var basename = getNextNumberName(base);
        return getNewFilename(list, "" + basename + ext);
    }
}
exports.getNewFilename = getNewFilename;
exports.default = getNewFilename;
//# sourceMappingURL=index.js.map