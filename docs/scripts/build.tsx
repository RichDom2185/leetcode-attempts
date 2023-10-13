import path from "path";
import Page from "../src/Page";
import SubmissionBlock from "../src/SubmissionBlock";
import { writeFile } from "../utils/files";
import { SubmissionsData } from "../utils/types";

export const buildSubmissions = (outDir: string, data: SubmissionsData) => {
  for (const [question, submission] of Object.entries(data)) {
    const outputFilePath = path.join(outDir, `${question}.html`);
    const submissions = submission.map((props) => (
      <SubmissionBlock {...props} />
    ));
    writeFile(
      outputFilePath,
      <Page title={question} description="">
        {submissions}
      </Page>,
      { overwrite: true }
    );
  }
};
