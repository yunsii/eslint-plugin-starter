import type { MessageIds, RuleOptions } from './type'
import { createRule } from '@/helpers/rules'

let warnedForMissingVersion = false

// ref: https://github.com/microsoft/TypeScript/issues/47663#issuecomment-1519138189
const rule: ReturnType<typeof createRule<RuleOptions, MessageIds>> = createRule<RuleOptions, MessageIds>({
  name: 'hello',
  meta: {
    type: 'problem',
    docs: {
      description: 'Hello world',
    },
    messages: {
      hello: 'Hello world',
    },
    schema: [],
  },
  defaultOptions: [],
  create() {
    if (!warnedForMissingVersion) {
      console.warn('Warning: eslint-plugin-starter created')
      warnedForMissingVersion = true
    }
    return {
      Program: () => {},
    }
  },
})

export default rule
