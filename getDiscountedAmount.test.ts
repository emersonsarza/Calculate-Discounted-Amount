const calculateDiscountedAmount = require("./getDiscountedAmount");

test("[2, 2, 2, 1, 1] =  51.20", () => {
  expect(calculateDiscountedAmount([2, 2, 2, 1, 1])).toBe("51.20");
});

test("[1, 0, 0, 0, 0] =   8.00", () => {
  expect(calculateDiscountedAmount([1, 0, 0, 0, 0])).toBe("8.00");
});

test("[1, 1, 0, 0, 0] =  15.20", () => {
  expect(calculateDiscountedAmount([1, 1, 0, 0, 0])).toBe("15.20");
});

test("[1, 1, 1, 0, 0] =  21.60", () => {
  expect(calculateDiscountedAmount([1, 1, 1, 0, 0])).toBe("21.60");
});

test("[1, 1, 1, 1, 0] =  25.60", () => {
  expect(calculateDiscountedAmount([1, 1, 1, 1, 0])).toBe("25.60");
});

test("[1, 1, 1, 1, 1] =  30.00", () => {
  expect(calculateDiscountedAmount([1, 1, 1, 1, 1])).toBe("30.00");
});

test("[2, 0, 0, 0, 0] =  16.00", () => {
  expect(calculateDiscountedAmount([2, 0, 0, 0, 0])).toBe("16.00");
});

test("[2, 1, 0, 0, 0] =  23.20", () => {
  expect(calculateDiscountedAmount([2, 1, 0, 0, 0])).toBe("23.20");
});

test("[2, 1, 1, 0, 0] =  29.60", () => {
  expect(calculateDiscountedAmount([2, 1, 1, 0, 0])).toBe("29.60");
});

test("[2, 1, 1, 1, 0] =  33.60", () => {
  expect(calculateDiscountedAmount([2, 1, 1, 1, 0])).toBe("33.60");
});

test("[2, 1, 1, 1, 1] =  38.00", () => {
  expect(calculateDiscountedAmount([2, 1, 1, 1, 1])).toBe("38.00");
});

test("[2, 2, 1, 1, 1] =  45.20", () => {
  expect(calculateDiscountedAmount([2, 2, 1, 1, 1])).toBe("45.20");
});

test("[4, 4, 4, 2, 2] = 102.40", () => {
  expect(calculateDiscountedAmount([4, 4, 4, 2, 2])).toBe("102.40");
});
