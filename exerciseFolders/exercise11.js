function exercise11() {
  console.log(
    `
    ===========================================
    ========[New Render for Exercise 11]========
    ===========================================
    `
  );

  const adventurer = {
    name: "Alice",
  };

  console.log(adventurer.dog.name); // TypeError: Cannot read properties of undefined (reading 'name')

  console.log(
    `
    -=|{Break in between example1 & example2.}|=-
    `
  );

  const adventurer2 = {
    name: "Alice",
  };

  let dog = adventurer2.dog?.name;

  console.log(dog); // undefined

  console.log(
    `
    -=|{Break in between example2 & exercise.}|=-
    `
  );

  // Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

  const adventurer3 = {
    name: "Alice",
  };

  let cat =
    adventurer3.companion.animal.cat.name.breed.miyukiBasicInformation.back?.no;
  console.log(cat);
}

export default exercise11();
