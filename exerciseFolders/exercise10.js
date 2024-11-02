function exercise10() {
  console.log(
    `
    ============================================
    ========[New Render for Exercise 10]========
    ============================================
    `
  );

  const result1 = false && "foo";
  console.log(result1); // Output: false

  const result2 = "hello" && "";
  console.log(result2); // Output: ''

  const result3 = "foo" && "bar";
  console.log(result3); // Output: 'bar'

  console.log(
    `
    -=|{Break in between example1 & example2.}|=-
    `
  );

  const result4 = "" || "foo";
  console.log(result4); // Output: 'foo'

  const result5 = 2 || 0;
  console.log(result5); // Output: 2

  const result6 = "" || 0;
  console.log(result6); // Output: 0

  const myVar = "";

  const result7 = "bar" && "foo";
  const result8 = false || 243;
  const result9 = 42 && false;
  const result10 = myVar || 3000;

  console.log(
    `
    -=|{Break in between example1 & example2.}|=-
    `
  );

  console.log("result1:", result7);
  console.log("result2:", result8);
  console.log("result3:", result9);
  console.log("result4:", result10);

  console.log(
    `
    -=|{Break in between example2 & exercise1.}|=-
    `
  );

  // 1. SET LANGUAGE
  // Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement:
  // "LANG is equal to localLangConfig or the default value of English."
  const localLangConfig = null; // Change to 'es', 'fr', etc., or keep it null
  const LANG = localLangConfig || `en`;
  // a. Create a variable called LANG
  // b. Assign LANG the value of localLangConfig or 'en' as a default

  console.log("Language setting:", LANG);

  console.log(
    `
    -=|{Break in between exercise1 & exercise2.}|=-
    `
  );
  // 2. SET WEBSITE THEME
  const userSavedTheme = null; // Change to 'dark', 'contrast', etc., or keep it null
  const USER_THEME = userSavedTheme || `light`;
  // a. Create a variable called USER_THEME
  // b. Assign USER_THEME the value of userSavedTheme or 'light' as a default

  console.log("User theme setting:", USER_THEME);
}

export default exercise10();
