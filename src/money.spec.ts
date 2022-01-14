import { Bank } from './Bank';
import { Expression } from './Expression';
import { Money } from './Money';
import { Sum } from './Sum';

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

  it('should handle simple addition', () => {
    const five: Money = Money.dollar(5);
    const sum: Expression = five.plus(five);
    const bank: Bank = new Bank();
    const reduced: Money = bank.reduce(sum, 'USD');
    expect(reduced.equals(Money.dollar(10))).toBeTruthy();
  });

  it('should return a sum when plus is used', () => {
    const five: Money = Money.dollar(5);
    const result: Expression = five.plus(five);
    const sum = result as Sum;
    expect(sum.augend).toEqual(five);
    expect(sum.addend).toEqual(five);
  });

  it('should reduce sum', () => {
    const sum: Expression = new Sum(Money.dollar(3), Money.dollar(4));
    const bank: Bank = new Bank();
    const result: Money = bank.reduce(sum, 'USD');
    expect(result).toEqual(Money.dollar(7));
  });

  it('should reduce from a money', () => {
    const bank = new Bank();
    const result: Money = bank.reduce(Money.dollar(1), 'USD');
    expect(result).toEqual(Money.dollar(1));
  });
});
