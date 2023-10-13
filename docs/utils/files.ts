import { existsSync, readdirSync } from "fs";

const getFilesAndFolders = (path: string) => {
  return readdirSync(path, { withFileTypes: true });
};

export const getFiles = (path: string): string[] => {
  return getFilesAndFolders(path)
    .filter((f) => f.isFile())
    .map((f) => f.name);
};

export const getFolders = (path: string): string[] => {
  return getFilesAndFolders(path)
    .filter((f) => f.isDirectory())
    .map((f) => f.name);
};

export const writeFile = async (
  path: string,
  data: any,
  options: { overwrite?: boolean } = {}
) => {
  const { overwrite = false } = options;
  if (existsSync(path) && !overwrite) {
    throw new Error(`File ${path} already exists`);
  }
  await Bun.write(path, data);
};
