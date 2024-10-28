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
    -=|{Break in between example & exercise.}|=-
    `
  );

  console.log(
    `
    -=|{Break in between output console logs}|=-
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

function exercise5() {}

function run() {
  // exercise1();
  // exercise2();
  // exercise3();
  // exercise4();
  exercise5();
  // exercise6;
  // exercise7;
  // exercise8;
  // exercise9;
  // exercise10;
  // exercise11;
}

run();
