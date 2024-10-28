function copyAndPasteMe() {
  console.log(
    `
    ===========================================
    ========[New Render for Exercise X]========
    ===========================================
    `
  );

  // ----------------------------------------------------------------

  console.log(
    `
    -=|{Break in between out console logs}|=-
    `
  );
}

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

  // Use `.map()` to iterate over the following array:
  const nums = [13, 87, 2, 89, 12, 4, 90, 63];
  // Create a new array where each value is multiplied by 2 and log the new array.

  const numsMultiplied = nums.map((receivingNumber) => {
    return receivingNumber * 2;
  });

  console.log(numsMultiplied);
}

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
    -=|{Break in between out console logs}|=-
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

  // Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

  const favoriteCar = {
    make: `Audi`,
    model: `q5`,
    year: 2009,
    isHybrid: true,
  };

  const { make, model, year, isHybrid } = favoriteCar;

  console.log();
  console.log();
  console.log();
  console.log();

  console.log();

  console.log();
  console.log();
  console.log();
  console.log();
}

function run() {
  // exercise1;
  // exercise2;
  exercise3();
  // exercise4;
  // exercise5;
  // exercise6;
  // exercise7;
  // exercise8;
  // exercise9;
  // exercise10;
  // exercise11;
}

run();
