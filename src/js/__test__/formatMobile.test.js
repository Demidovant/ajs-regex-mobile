import formatMobile from '../formatMobile';

test('8 (927) 000-00-00', () => {
  const mobile = '8 (927) 000-00-00';
  const result = formatMobile(mobile);
  const expected = '+79270000000';
  expect(result).toEqual(expected);
});

test('+7 960 000 00 00', () => {
  const mobile = '+7 960 000 00 00';
  const result = formatMobile(mobile);
  const expected = '+79600000000';
  expect(result).toEqual(expected);
});

test('+86 000 000 0000', () => {
  const mobile = '+86 000 000 0000';
  const result = formatMobile(mobile);
  const expected = '+860000000000';
  expect(result).toEqual(expected);
});

test('+7(960) 000-00-00', () => {
  const mobile = '+7(960) 000-00-00';
  const result = formatMobile(mobile);
  const expected = '+79600000000';
  expect(result).toEqual(expected);
});

test('+7(960) 000 00 00', () => {
  const mobile = '+7(960) 000 00 00';
  const result = formatMobile(mobile);
  const expected = '+79600000000';
  expect(result).toEqual(expected);
});

test('8960 000 00 00', () => {
  const mobile = '8960 000 00 00';
  const result = formatMobile(mobile);
  const expected = '+79600000000';
  expect(result).toEqual(expected);
});
