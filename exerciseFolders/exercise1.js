function exercise1() {
  console.log(
    `
      ===========================================
      ========[New Render for Exercise 1]========
      ===========================================
      `
  );

  const example1 = ["vanilla", "chocolate", "strawberry"];

  const example2 = example1.map((currentElement) => {
    return currentElement + " ice cream"; // ['vanilla ice cream', 'chocolate ice cream', 'strawberry ice cream']
  });

  console.log(example2);

  // ----------------------------------------------------------------

  console.log(
    `
      -=|{Break in between example & exercise.}|=-
      `
  );

  // Use `.map()` to iterate over the following array:
  const nums = [13, 87, 2, 89, 12, 4, 90, 63];
  // Create a new array where each value is multiplied by 2 and log the new array.

  const numsMultiplied = nums.map((receivingNumber) => {
    return receivingNumber * 2;
  });

  console.log(numsMultiplied);
}

export default exercise1();
