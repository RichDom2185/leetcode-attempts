import { FC } from "hono/jsx";
import { Submission } from "../utils/types";

const SubmissionBlock: FC<Submission> = ({ languageName, code }) => {
  return (
    <pre class={`language-${languageName} border rounded border-gray-500 p-2`}>
      {code}
    </pre>
  );
};

export default SubmissionBlock;
