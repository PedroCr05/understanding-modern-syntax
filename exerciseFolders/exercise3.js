function exercise3() {
  console.log(
    `
      ===========================================
      ========[New Render for Exercise 3]========
      ===========================================
      `
  );

  const person = {
    name: "Alex",
    role: "Software Engineer",
  };

  // Object destructuring:
  const { name, role } = person;

  console.log(name); // 'Alex'
  console.log(role); // 'Software Engineer'

  // Equivalent in traditional dot notation:
  console.log(person.name); // 'Alex'
  console.log(person.role); // 'Software Engineer'

  // ----------------------------------------------------------------

  console.log(
    `
      -=|{Break in between example & exercise.}|=-
      `
  );

  // Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

  const favoriteCarInfo = {
    make: `Audi`,
    model: `q5`,
    year: 2009,
    isHybrid: true,
  };

  const { make, model, year, isHybrid } = favoriteCarInfo;

  console.log(`Calling objects from favoriteCarInfo: ${favoriteCarInfo.make}`);
  console.log(`Calling objects from favoriteCarInfo: ${favoriteCarInfo.model}`);
  console.log(`Calling objects from favoriteCarInfo: ${favoriteCarInfo.year}`);
  console.log(
    `Calling objects from favoriteCarInfo: ${favoriteCarInfo.isHybrid}`
  );

  console.log(
    `
      -=|{Break in between output console logs}|=-
      `
  );

  console.log(
    `Calling the objects but by the deconstructed variables: ${make}`
  );
  console.log(
    `Calling the objects but by the deconstructed variables: ${model}`
  );
  console.log(
    `Calling the objects but by the deconstructed variables: ${year}`
  );
  console.log(
    `Calling the objects but by the deconstructed variables: ${isHybrid}`
  );
}

export default exercise3();
