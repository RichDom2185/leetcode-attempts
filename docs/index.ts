import { existsSync, mkdirSync } from "fs";
import path from "path";

const ROOTDIR = path.dirname(process.cwd());
const OUTDIR = path.join(ROOTDIR, "_docs");

const setup = () => {
  if (!existsSync(OUTDIR)) {
    mkdirSync(OUTDIR);
  }
};

setup();

console.log("Building to:", OUTDIR);
// TODO: Implement
