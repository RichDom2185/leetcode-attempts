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

export const buildIndex = (outDir: string, links: string[]) => {
  const outputFilePath = path.join(outDir, "index.html");
  const contents = links.map((link) => <a href={`${link}.html`}>{link}</a>);
  writeFile(
    outputFilePath,
    <Page title="Contents" description="">
      <ul>
        {contents.map((content) => (
          <li>{content}</li>
        ))}
      </ul>
    </Page>,
    { overwrite: true }
  );
};
