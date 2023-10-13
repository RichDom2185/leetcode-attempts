export enum Language {
  PYTHON = ".py",
}

export enum LanguageName {
  PYTHON = "python",
}

export const LanguageToLanguageName = {
  [Language.PYTHON]: LanguageName.PYTHON,
} satisfies {
  [l in Language]: LanguageName;
};
