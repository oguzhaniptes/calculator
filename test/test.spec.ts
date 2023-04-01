import { Calculator } from "../src/calculator";

describe("Calculator real life tests", () => {
  let myNewCalculator = new Calculator();
  const value1 = Math.floor(Math.random() * 100);
  const value2 = Math.floor(Math.random() * 100);
  console.log(value1, value2);

  it("calculator addition function test", async () => {
    let result = myNewCalculator.addition(value1, value2);
    console.log("addition: " + result);
  });
  it("calculator subtraction function test", async () => {
    let result = myNewCalculator.subtraction(value1, value2);
    console.log("subtraction: " + result);
  });
  it("calculator multiplication function test", async () => {
    let result = myNewCalculator.multiplication(value1, value2);
    console.log("multiplication: " + result);
  });
  it("calculator division function test", async () => {
    let result = myNewCalculator.division(value1, value2);
    console.log("division: " + result);
  });
  it("calculator squareRoot function test", async () => {
    let result = myNewCalculator.squareRoot(value1);
    console.log("squareRoot: " + result);
  });
  it("calculator squared function test", async () => {
    let result = myNewCalculator.squared(value1);
    console.log("squared: " + result);
  });
  it("calculator pow function test", async () => {
    let result = myNewCalculator.pow(value1, value2);
    console.log("pow: " + result);
  });
});
