import path from "path";
import Page from "../src/Page";
import SubmissionBlock from "../src/SubmissionBlock";
import Link from "../src/components/Link";
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
        <div class="px-6 py-4 space-y-4">
          <h1 class="text-3xl font-bold">{question}</h1>
          <p>
            <Link to="/">Back to all submissions</Link>
          </p>
          {submissions}
        </div>
      </Page>,
      { overwrite: true }
    );
  }
};

export const buildIndex = (outDir: string, links: string[]) => {
  const outputFilePath = path.join(outDir, "index.html");
  const contents = links.map((link) => <Link to={`${link}.html`}>{link}</Link>);
  writeFile(
    outputFilePath,
    <Page title="Contents" description="">
      <div class="px-6 py-4 space-y-4">
        <h1 class="text-3xl font-bold">My LeetCode Submissions</h1>
        <p>
          I've completed {contents.length} LeetCode questions. Click on any of
          them to view my corresponding submission.
        </p>
        <ul class="list-disc ml-6">
          {contents.map((content) => (
            <li>{content}</li>
          ))}
        </ul>
      </div>
    </Page>,
    { overwrite: true }
  );
};
