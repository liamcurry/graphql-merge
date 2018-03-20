import test from 'ava'
import {formatString} from '../dist'


test('formatString', async t => {
  const input = `type Foo {
  bar: String
}



# Foo is a thing
type Foo {

  # Baz is a string, and it
  # is optional.
  baz: String

}`
  const result = formatString(input)

  const expected = `type Foo {
  bar: String
}

# Foo is a thing
type Foo {
  # Baz is a string, and it
  # is optional.
  baz: String
}
`;
  t.is(result, expected)
})
