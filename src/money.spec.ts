import { Money } from './Money';

describe('Money', () => {
  describe('when dollars', () => {
    describe('with times() called', () => {
      it('then handles multiplication', () => {
        const five: Money = Money.dollars(5);
        expect(five.times(3).equals(Money.dollars(15))).toBeTruthy();
        expect(five.times(2).equals(Money.dollars(10))).toBeTruthy();
      });
    });
  });

  describe('when euros', () => {
    describe('with times() called', () => {
      it('then handles multiplication', () => {
        const five: Money = Money.euro(5);
        expect(five.times(3).equals(Money.euro(15))).toBeTruthy();
        expect(five.times(2).equals(Money.euro(10))).toBeTruthy();
      });
    });
  });

  describe('with equals() called', () => {
    it('then handles money equality', () => {
      expect(Money.euro(5).equals(Money.euro(5))).toBeTruthy();
      expect(Money.euro(5).equals(Money.euro(10))).toBeFalsy();
      expect(Money.dollars(5).equals(Money.dollars(5))).toBeTruthy();
      expect(Money.dollars(5).equals(Money.dollars(10))).toBeFalsy();
      expect(Money.dollars(5).equals(Money.euro(5))).toBeFalsy();
    });
  });
});
