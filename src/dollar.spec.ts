import Dollar from './Dollar';

describe('Dollar', () => {
  describe('when five dollars are multiplied by two', () => {
    it('then returns 10 dollars', () => {
      const five: Dollar = new Dollar(5);
      expect(five.times(2).equals(new Dollar(10))).toBeTruthy();
    });
  });

  describe('when five dollars are multiplied by three', () => {
    it('then returns 15 dollars', () => {
      const five: Dollar = new Dollar(5);
      expect(five.times(3).equals(new Dollar(15))).toBeTruthy();
    });
  });

  describe('when dollars of the same value are compared', () => {
    it('then returns true', () => {
      expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
      expect(new Dollar(5).equals(new Dollar(10))).toBeFalsy();
    });
  });
});
