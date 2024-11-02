function exercise8() {
  console.log(
    `
    ===========================================
    ========[New Render for Exercise 8]========
    ===========================================
    `
  );

  //   function addThreeNumbers(numA, numB, numC) {
  //     return numA + numB + numC;
  //   }
  //   addThreeNumbers(2);
  //   function addThreeNumbers(numA, numB = 2, numC = 1) {
  //     return numA + numB + numC;
  //   }
  addThreeNumbers(2);
  function addThreeNumbers(numA = 1, numB = 2, numC = 1) {
    return numA + numB + numC;
  }
  addThreeNumbers(2);

  console.log(
    `
    -=|{Break in between example & exercise.}|=-
    `
  );

  // Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:
  // 1. `cat`
  // 2. `white`
  // The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

  function sentenceConstructor(
    noun = "cat",
    adjective = "white",
    name = "Miyuki",
    breed = "Ragdoll",
    age = 2
  ) {
    console.log(
      `My ${noun} ${name} has a ${adjective} coat. She's a breed called ${breed} and she's only just ${age} years old!`
    );
  }

  sentenceConstructor();
}

export default exercise8();
