import Dollar from './Dollar';
import Euro from './Euro';

describe('Money', () => {
  describe('dollars', () => {
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

  describe('euros', () => {
    describe('when five euros are multiplied by two', () => {
      it('then returns 10 euros', () => {
        const five: Euro = new Euro(5);
        expect(five.times(2).equals(new Euro(10))).toBeTruthy();
      });
    });

    describe('when five euros are multiplied by three', () => {
      it('then returns 15 euros', () => {
        const five: Euro = new Euro(5);
        expect(five.times(3).equals(new Euro(15))).toBeTruthy();
      });
    });
  });
});
