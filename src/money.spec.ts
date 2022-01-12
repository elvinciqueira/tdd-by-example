import Dollar from './Dollar';
import Euro from './Euro';

describe('Money', () => {
  describe('Dollar', () => {
    describe('with times() called', () => {
      it('then handles multiplication', () => {
        const five: Dollar = new Dollar(5);
        expect(five.times(3).equals(new Dollar(15))).toBeTruthy();
        expect(five.times(2).equals(new Dollar(10))).toBeTruthy();
      });
    });
  });

  describe('Euros', () => {
    describe('with times() called', () => {
      it('then handles multiplication', () => {
        const five: Euro = new Euro(5);
        expect(five.times(3).equals(new Euro(15))).toBeTruthy();
        expect(five.times(2).equals(new Euro(10))).toBeTruthy();
      });
    });
  });

  describe('with equals() called', () => {
    it('then handles money equality', () => {
      expect(new Euro(5).equals(new Euro(5))).toBeTruthy();
      expect(new Euro(5).equals(new Euro(10))).toBeFalsy();
      expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
      expect(new Dollar(5).equals(new Dollar(10))).toBeFalsy();
      expect(new Dollar(5).equals(new Euro(5))).toBeFalsy();
    });
  });
});
