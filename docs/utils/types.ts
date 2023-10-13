export type Submission = {
  languageName: string;
  code: string;
};

export type SubmissionsData = {
  [question: string]: Submission[];
};
