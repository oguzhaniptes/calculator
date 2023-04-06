export class Calculator {

  minValue: number;
  maxValue: number;

  constructor(x:number,y:number) {
    this.minValue = x;
    this.maxValue = y;
  }

  getRandom():number{
    const randomNumber = Math.floor(Math.random() * (this.maxValue - this.minValue + 1)) + this.minValue;
    return randomNumber;
  }
  

  public addition(value1: number, value2: number): number {
    return value1 + value2;
  }

  public subtraction(value1: number, value2: number) {
    return value1 - value2;
  }

  multiplication(value1: number, value2: number): number {
    return value1 * value2;
  }

  division(value1: number, value2: number): number {
    return value1 / value2;
  }

  squareRoot(value: number): number | string {
    if (value < 0) {
      let positive = value * -1;
      return Math.sqrt(positive) + "i";
    }
    {
      return Math.sqrt(value);
    }
  }

  squared(value: number): number {
    return Math.pow(value, 2);
  }
  pow(value1: number, value2: number): number {
    return Math.pow(value1, value2);
  }
  minus(value: number): number {
    return -value;
  }
}
