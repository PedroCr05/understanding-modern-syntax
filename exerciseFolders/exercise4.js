function exercise4() {
  console.log(
    `
      ===========================================
      ========[New Render for Exercise 4]========
      ===========================================
      `
  );

  // const originalArray = [1, 2, 3];
  // const duplicateArray = [...originalArray];

  // console.log(duplicateArray); // [1, 2, 3]

  const originalArray = [1, 2, 3];
  const referenceArray = originalArray; // referenceArray is now a reference to originalArray

  referenceArray.push(4); // Modifying referenceArray also modifies originalArray
  console.log(originalArray); // [1, 2, 3, 4]

  console.log(
    `
      -=|{Break in between example1 & example2.}|=-
      `
  );

  const fruits = ["apple", "orange", "banana"];
  const vegetables = ["broccoli", "carrot", "spinach"];

  const fruitsAndVegetables = [...fruits, ...vegetables];

  console.log(fruitsAndVegetables); // ['apple', 'orange', 'banana', 'broccoli', 'carrot', 'spinach']

  // ----------------------------------------------------------------

  console.log(
    `
      -=|{Break in between example & exercise.}|=-
      `
  );

  // Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.
  const contentPlatforms2020 = [` Twitch`, ` Discord`, ` Youtube`, ` Mixer`];
  console.log(`Main array with no changes: ${contentPlatforms2020}`);

  console.log(
    `
      -=|{---}|=-
      `
  );

  const contentPlatforms2024 = [...contentPlatforms2020];
  console.log(
    `Using spread to duplicate and rename our array: ${contentPlatforms2024}`
  );

  console.log(
    `
      -=|{---}|=-
      `
  );

  contentPlatforms2024.pop();
  console.log(
    `Now removing Mixer with ".pop(4)" from our away within our duplicated array: ${contentPlatforms2024}`
  );

  console.log(
    `
      -=|{---}|=-
      `
  );

  contentPlatforms2024.push(` Tiktok`);
  console.log(
    `This time using ".push() to add onto our updated information: ${contentPlatforms2024}`
  );

  console.log(
    `
      -=|{---}|=-
      `
  );

  contentPlatforms2024.reverse();
  console.log(
    `Just using ".reverse()" to make tiktok the first option while twitch is the last one ${contentPlatforms2024}`
  );

  console.log(
    `
      -=|{Break in between output console logs}|=-
      `
  );

  const beforeAndAfter = [...contentPlatforms2020, ...contentPlatforms2024];

  console.log(
    `Now comparing both years (first four: 2020 | second four: 2024): ${beforeAndAfter}`
  );
}

export default exercise4();
