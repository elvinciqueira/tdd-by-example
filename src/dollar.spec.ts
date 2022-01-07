import Dollar from './Dollar';

describe('Dollar', () => {
  describe('when five dollars are multiplied by two', () => {
    it('then returns ten dollars', () => {
      const five: Dollar = new Dollar(5);
      let product: Dollar = five.times(2);
      expect(product.amount).toEqual(10);
      product = five.times(3);
      expect(product.amount).toEqual(15);
    });
  });

  describe('when dollars of the same value are compared', () => {
    it('returns true', () => {
      expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
      expect(new Dollar(5).equals(new Dollar(10))).toBeFalsy();
    });
  });
});
