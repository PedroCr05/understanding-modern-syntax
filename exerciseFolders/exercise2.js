function exercise2() {
  console.log(
    `
      ===========================================
      ========[New Render for Exercise 2]========
      ===========================================
      `
  );

  const petExample = [`Rover`, `Snuffles`, `Toto`, `Spot`];

  const [firstPetNameExample, secondPetNameExample] = petExample;

  console.log(firstPetNameExample); // 'Rover'
  console.log(secondPetNameExample); // 'Snuffles'

  console.log(petExample[0]); // Will be the same as firstPetNameExample | `Rover`
  console.log(petExample[1]); // Same line from 43. Will be the name that holds from secondPetNameExample | `Snuffles`

  // ----------------------------------------------------------------

  console.log(
    `
      -=|{Break in between example & exercise.}|=-
      `
  );

  // Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

  const pizzaToppingOptions = [
    `Pineapple`,
    `Olives`,
    `Anchovies`,
    `Bacon`,
    `Pepperoni`,
  ];

  const [
    hawaiianStyle, // This matches the first string within the array of pizzaToppingOptions
    capricciosaStyle, // Same thing just the next following and so on for the rest of these.
    napoletanaStyle,
    canadianBaconStyle,
    pepperoniStyle,
  ] = pizzaToppingOptions;

  console.log(
    `Calling within our string array called pizzaToppingOptions: ${hawaiianStyle}`
  );
  console.log(
    `Calling within our string array called pizzaToppingOptions: ${capricciosaStyle}`
  );
  console.log(
    `Calling within our string array called pizzaToppingOptions: ${napoletanaStyle}`
  );
  console.log(
    `Calling within our string array called pizzaToppingOptions: ${canadianBaconStyle}`
  );
  console.log(
    `Calling within our string array called pizzaToppingOptions: ${pepperoniStyle}`
  );

  console.log(
    `
      -=|{Break in between output console logs}|=-
      `
  );

  console.log(
    `Calling from the same Array, but our deconstruction variables: ${pizzaToppingOptions[0]}`
  );
  console.log(
    `Calling from the same Array, but our deconstruction variables: ${pizzaToppingOptions[1]}`
  );
  console.log(
    `Calling from the same Array, but our deconstruction variables: ${pizzaToppingOptions[2]}`
  );
  console.log(
    `Calling from the same Array, but our deconstruction variables: ${pizzaToppingOptions[3]}`
  );
  console.log(
    `Calling from the same Array, but our deconstruction variables: ${pizzaToppingOptions[4]}`
  );
}

export default exercise2();
