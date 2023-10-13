import { FC } from "hono/jsx";
import { Submission } from "../utils/types";

const SubmissionBlock: FC<Submission> = ({ languageName, code }) => {
  return <pre class={`language-${languageName}`}>{code}</pre>;
};

export default SubmissionBlock;
