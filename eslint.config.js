// @ts-check

import eslint from "@eslint/js";
// @ts-expect-error does not have types
import eslintPlugin from "eslint-plugin-eslint-plugin";
import tseslint from "typescript-eslint";

// import globals from "globals";

export default tseslint.config(
  { ignores: ["lib"] },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  eslintPlugin.configs["flat/recommended"],
  {
    languageOptions: {
      // globals: {
      //   ...globals.builtin,
      //   ...globals.browser,
      //   ...globals.es2024,
      //   ...globals.node,
      // },
      parserOptions: {
        // projectService: {
        //   allowDefaultProject: ["*.config.*"],
        //   defaultProject: "tsconfig.json",
        // },
        project: true,
        tsconfigRootDir: import.meta.dirname,
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },
  },
  {
    files: ["**/*.js"],
    ...tseslint.configs.disableTypeChecked,
  },
);
