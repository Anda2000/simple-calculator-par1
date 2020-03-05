let myTest = require("../src/simpleCalc");
let add = myTest.add;
let multiply = myTest.multiply;

//Add

describe("add", function () {
  it("should add two numbers", function () {
    expect(add(1, 2)).toEqual(3);
  });
  it("should add two negative numbers", function () {
    expect(add(-1, -1)).toEqual(-2);
  });

  it("should be able to add more numbers", function () {
    expect(add(1, 2, 3, 4, 5)).toEqual(15);
  });
});

// multiply

describe("multiply", function () {
  it("should multiply two integers", function () {
    expect(multiply(1, 3)).toEqual(3);
  });
  it("should multiply negative integers", function () {
    expect(multiply(-1, 3)).toEqual(-3);
  });

  it("should multiply more integers", function () {
    expect(multiply(1, 2, 3, 4, 5)).toEqual(120);
  });
});
