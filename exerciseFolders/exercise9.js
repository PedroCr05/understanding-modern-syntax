function exercise9() {
  console.log(
    `
    ===========================================
    ========[New Render for Exercise 9]========
    ===========================================
    `
  );

  //   const age = 22;
  //   let access;

  //   if (age > 21) {
  //     access = "Yes";
  //   } else {
  //     access = "No";
  //   }

  //   console.log(access); // 'Yes'

  const age = 22;
  let access = age > 21 ? "Yes" : "No";

  console.log(access); // 'Yes'

  console.log(
    `
    -=|{Break in between example & exercise.}|=-
    `
  );

  // Convert the following `if...else` statement in to a ternary:

  //   let pizza = "tasty";

  //   if (pizza === "tasty") {
  //     console.log("yum");
  //   } else {
  //     console.log("yuck");
  //   }

  //   const pizza = `tasty`
  const pizza = `disgusting`;

  let jack = pizza === `tasty` ? "yum" : "yuck";
  console.log(jack);
}

export default exercise9();
