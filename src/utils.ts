import { ESLintUtils } from "@typescript-eslint/utils";

export interface ReliverseEslintPluginRuleDocs {
  description: string;
  recommended?: boolean;
  requiresTypeChecking?: boolean;
}

export const createRule =
  ESLintUtils.RuleCreator<ReliverseEslintPluginRuleDocs>(
    (name) =>
      `https://github.com/reliverse/eslint-plugin/tree/main/docs/${name}.md`,
  );
