import Dollar from './Dollar';

describe('Dollar', () => {
  describe('when five dollars are multiplied by two', () => {
    it('then returns ten dollars', () => {
      const five = new Dollar(5);
      five.times(2);
      expect(five.amount).toBe(10);
    });
  });
});
