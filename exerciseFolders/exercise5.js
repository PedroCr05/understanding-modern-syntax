function exercise5() {
  console.log(
    `
      ===========================================
      ========[New Render for Exercise 5]========
      ===========================================
      `
  );

  // ----------------------------------------------------------------

  // const originalObject = {
  //   foo: "Hello",
  //   bar: 100,
  // };

  // const clonedObject = { ...originalObject };
  // console.log("Clone: ", clonedObject); // { foo: 'Hello', bar: 100 }

  // const originalObject = {
  //   foo: "Hello",
  //   bar: 100,
  // };

  // const clonedObject = originalObject;
  // clonedObject.foo = "Goodbye";

  // console.log(originalObject); // { foo: 'Goodbye', bar: 100 }

  const originalObject = {
    foo: "Hello",
    bar: 100,
  };

  // Copy the properties of originalObject:
  const clonedObject = { ...originalObject };

  // Update the properties of clonedObject:
  clonedObject.foo = "Goodbye";
  clonedObject.bar = 0;

  console.log("Original: ", originalObject); // { foo: 'Hello', bar: 100 }
  console.log("Clone: ", clonedObject); // { foo: 'Goodbye', bar: 0 }

  console.log(
    `
      -=|{Break in between example & exercise.}|=-
      `
  );

  const friendPCSpecs = {
    ram: `32gb DDR4`,
    cpu: `Ryzen 7 5800X`,
    gpu: `Nvidia RTX 3080`,
    system: `Windows 11`,
  };

  const mySpecs = { ...friendPCSpecs };

  mySpecs.ram = `16GB RGB DDR5 6400MT/s`;
  mySpecs.cpu = `AMD Ryzen 5 7600X`;
  mySpecs.system = `Windows 10`;

  console.log(`My buddy's computer specs`, friendPCSpecs);

  console.log(
    `
      -=|{---}|=-
      `
  );

  console.log(`My personal specs`, mySpecs);
}

export default exercise5();
