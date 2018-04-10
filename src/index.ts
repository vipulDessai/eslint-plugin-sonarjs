import { Linter } from "eslint";

const sonarjsRules: [string, Linter.RuleLevel][] = [
  ["cognitive-complexity", "error"],
  ["no-all-duplicated-branches", "error"],
  ["no-duplicated-branches", "error"],
  ["no-extra-arguments", "error"],
  ["no-identical-functions", "error"],
  ["no-identical-expressions", "error"],
  ["no-redundant-boolean", "error"],
  ["no-small-switch", "error"],
  ["no-use-of-empty-return-value", "error"],
];

const sonarjsRuleModules: any = {};

const configs: { recommended: Linter.Config } = {
  recommended: { rules: {} },
};

sonarjsRules.forEach(rule => (sonarjsRuleModules[rule[0]] = require(`./rules/${rule[0]}`)));
sonarjsRules.forEach(rule => (configs.recommended.rules![`sonarjs/${rule[0]}`] = rule[1]));

export { sonarjsRuleModules as rules, configs };
