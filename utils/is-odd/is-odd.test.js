import { isOdd } from './is-odd';

describe('Is odd function', () => {
  test('positive case', () => {
    const result = isOdd(5);

    expect(result).toBeTruthy()
  })

  test('positive case', () => {
    const result = isOdd(4);

    expect(result).toBeFalsy()
  })
})