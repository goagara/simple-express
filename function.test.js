const { sum } = require('./function');

test('Should return addition result', () => {
  expect(sum(1, 2)).toBe(3);
});
