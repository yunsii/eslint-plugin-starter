import path from 'node:path'
import type { ESLint, Rule } from 'eslint'
import allRules from './configs/all'

const ruleImportModules = import.meta.glob<Rule.RuleModule>('./rules/*/index.ts')

async function reactX() {
  const ruleModules = await Promise.all(Object.values(ruleImportModules).map((item) => item()))

  const rules = Object.keys(ruleImportModules).reduce<Record<string, Rule.RuleModule>>((previous, current, index) => {
    return {
      ...previous,
      [path.basename(path.dirname(current))]: ruleModules[index],
    }
  }, {})

  return {
    configs: {
      all: {
        plugins: ['starter'],
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
        rules: allRules,
      },
    },
    rules,
  } satisfies ESLint.Plugin
}

export default reactX
