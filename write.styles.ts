import {
  mkdirSync,
  writeFile,
} from 'fs';

export function content(filename: string, str: string) {
  const path = `${process.cwd()}/script/styles`;
  try {
    mkdirSync(path);
    writeFile(`${path}/${filename}`, str, () => { });
  } catch (error) {
    writeFile(`${path}/${filename}`, str, () => { });
  }
}
