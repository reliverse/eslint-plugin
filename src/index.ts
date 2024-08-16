import { rules } from "./rules";

const { name, version } =
  // `import`ing here would bypass the TSConfig's `"rootDir": "src"`
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("../package.json") as typeof import("../package.json");

const plugin = {
  configs: {
    get recommendedTypeChecked() {
      return recommendedTypeChecked;
    },
  },
  meta: { name, version },
  rules,
};

const recommendedTypeChecked = {
  plugins: {
    "reliverse-eslint-plugin": plugin,
  },
  rules,
};

export = plugin;
