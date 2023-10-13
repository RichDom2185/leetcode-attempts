import { existsSync, mkdirSync } from "fs";
import path from "path";
import { buildSubmissions } from "./scripts/build";
import { getFiles, getFolders } from "./utils/files";
import { Language, LanguageToLanguageName } from "./utils/languages";
import { Submission, SubmissionsData } from "./utils/types";

const ROOTDIR = path.dirname(process.cwd());
const OUTDIR = path.join(ROOTDIR, "_docs");

const setup = () => {
  if (!existsSync(OUTDIR)) {
    mkdirSync(OUTDIR);
  }
};

const getSubmissionsData = async (
  rootDir: string
): Promise<SubmissionsData> => {
  const attemptsDir = path.join(rootDir, "attempts");
  const answers: { [question: string]: Submission[] } = {};

  for (const folderName of getFolders(attemptsDir)) {
    const questionPath = path.join(attemptsDir, folderName);
    answers[folderName] = [];

    for (const fileName of getFiles(questionPath)) {
      const language = path.extname(fileName);

      switch (language) {
        case Language.PYTHON: {
          const file = Bun.file(path.join(questionPath, fileName));
          const submission: Submission = {
            languageName: LanguageToLanguageName[language],
            code: await file.text(),
          };

          answers[folderName].push(submission);
          break;
        }
        default:
          continue;
      }
    }
  }

  return answers;
};

// Main IIFE
await (async () => {
  setup();
  const submissions = await getSubmissionsData(ROOTDIR);
  buildSubmissions(OUTDIR, submissions);
})();
