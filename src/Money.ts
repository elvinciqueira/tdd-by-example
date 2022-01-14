import { Bank } from './Bank';
import { Expression } from './Expression';
import { Sum } from './Sum';

export class Money implements Expression {
  private readonly _amount: number;

  public get amount(): number {
    return this._amount;
  }

  private readonly _currency: string;

  constructor(amount: number, currency: string) {
    this._amount = amount;
    this._currency = currency;
  }

  static dollar(amount: number): Money {
    return new Money(amount, 'USD');
  }

  static euro(amount: number): Money {
    return new Money(amount, 'EUR');
  }

  reduce(bank: Bank, to: string): Money {
    const rate = bank.rate(this._currency, to);
    return new Money(this.amount / rate, to);
  }

  equals(other: Money): boolean {
    if (this._currency !== other._currency) return false;

    return this.amount === other.amount;
  }

  times(multiplier: number): Expression {
    return new Money(this.amount * multiplier, this._currency);
  }

  plus(addend: Expression): Expression {
    return new Sum(this, addend);
  }

  currency(): string {
    return this._currency;
  }
}
