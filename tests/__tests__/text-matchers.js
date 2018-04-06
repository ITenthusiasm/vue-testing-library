import cases from 'jest-in-case'
import { render } from '../../src'
import TextMatchers from './components/TextMatchers'

cases(
  'text matchers',
  opts => {
    const {getByText} = render(TextMatchers)
    expect(getByText(opts.textMatch).id).toBe('anchor')
  },
  [
    {name: 'string match', textMatch: 'About'},
    {name: 'case insensitive', textMatch: 'about'},
    {name: 'regex', textMatch: /^about$/i},
    {
      name: 'function',
      textMatch: (text, element) =>
        element.tagName === 'A' && text.includes('out'),
    },
  ],
)