import { Money } from './Money';

describe('Money', () => {
  it('should handle money multiplication', () => {
    const five: Money = Money.dollar(5);
    expect(five.times(3).equals(Money.dollar(15))).toBeTruthy();
    expect(five.times(2).equals(Money.dollar(10))).toBeTruthy();
  });

  it('should handle money equality', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
    expect(Money.dollar(5).equals(Money.dollar(10))).toBeFalsy();
    expect(Money.dollar(5).equals(Money.euro(5))).toBeFalsy();
  });

  it('should handle currencies', () => {
    expect(Money.dollar(5).currency()).toBe('USD');
    expect(Money.euro(5).currency()).toBe('EUR');
  });
});
