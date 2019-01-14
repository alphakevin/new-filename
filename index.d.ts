/**
 * Generating a new filename to avoid names in the list by adding sequenced number
 * @param list - Filenames already in use
 * @param name - New filenames about to use
 * @returns Generated new filename
 */
declare function getNewFilename(list: string[], name: string): string;
export default getNewFilename;
export { getNewFilename };
