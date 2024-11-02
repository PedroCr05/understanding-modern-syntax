function exercise6() {
  console.log(
    `
      ===========================================
      ========[New Render for Exercise 6]========
      ===========================================
      `
  );

  // const fruitInventory = {
  //   apples: 2,
  //   oranges: 4,
  // };

  // const selectedFruit = "apples"; // Variable as a dynamic key
  // const selectedFruitCount = fruitInventory[selectedFruit];

  // console.log(selectedFruitCount); // 2

  const fruitType = "bananas"; // Variable as a dynamic key

  const fruitInventory = {
    [fruitType]: 5,
  };

  console.log(fruitInventory); // { bananas: 5 }

  // ----------------------------------------------------------------

  console.log(
    `
      -=|{Break in between example & exercise.}|=-
      `
  );

  // Create an object named userProfile.
  // Define a variable named propertyName and assign a string to it (like a username, age, or email).
  // Use propertyName as a dynamic key in userProfile, assigning a relevant value.

  const friendsYTProfile = {
    username: `Ivoxy`,
    videoContent: `Gaming`,
    whatGame: `Minecraft`,
    subscribers: 16352,
    totalVideos: 166,
    youtubePartner: false,
  };

  const selectOneStat = `username`;
  const ytName = friendsYTProfile[selectOneStat];

  console.log(`What is your friend's youtube? He's called ${ytName}.`);

  console.log(
    `
      -=|{---}|=-
      `
  );

  const iiTzTimmyYTProfileName = `username`;
  const hisYoutubeContentTheme = `videoContent`;
  const whatVideoGamesDoesHePlay = `whatGame`;
  const howManySubs = `subscribers`;
  const howManyVids = `totalVideos`;
  const isHePartnered = `youtubePartner`;

  const favoriteCreator = {
    [iiTzTimmyYTProfileName]: `iiTzTimmy`,
    [hisYoutubeContentTheme]: `Gaming`,
    [whatVideoGamesDoesHePlay]: `Apex Legends`,
    [howManySubs]: 1808357,
    [howManyVids]: 1225,
    [isHePartnered]: true,
  };

  console.log(favoriteCreator);

  console.log(
    `
      -=|{Break in between output console logs}|=-
      `
  );
}

export default exercise6();
