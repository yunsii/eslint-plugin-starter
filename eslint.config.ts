import type { UserConfigItem } from '@antfu/eslint-config'
import janna from '@jannajs/lint/eslint'
import loadStarter from 'eslint-plugin-starter'

async function loadEslintConfig(): Promise<UserConfigItem[]> {
  const starter = await loadStarter()
  return janna({}, {
    plugins: { starter },
    rules: {
      'starter/hello': 'warn',
    },
  })
}

const eslintConfig = loadEslintConfig()

export default eslintConfig
