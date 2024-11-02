import name, { age, job } from "./exportingFile.js";

function exercise7() {
  console.log(
    `
    ===========================================
    ========[New Render for Exercise 7]========
    ===========================================
    `
  );
  console.log(name, age, job);
}

export default exercise7();
