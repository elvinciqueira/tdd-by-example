import Dollar from './Dollar';

describe('Dollar', () => {
  describe('when five dollars are multiplied by two', () => {
    it('then returns ten dollars', () => {
      const five: Dollar = new Dollar(5);
      expect(five.times(2).equals(new Dollar(10))).toBeTruthy();
      expect(five.times(3).equals(new Dollar(15))).toBeTruthy();
    });
  });

  describe('when dollars of the same value are compared', () => {
    it('returns true', () => {
      expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
      expect(new Dollar(5).equals(new Dollar(10))).toBeFalsy();
    });
  });
});
