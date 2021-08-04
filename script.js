const textBox = document.querySelector(".wrapper textarea");
const checkBtn = document.getElementById("check-btn");
const vowelCount = document.querySelector("#vowel-count");
vowelCount.innerHTML = 0;

checkBtn.addEventListener("click", () => {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let letter of textBox.value.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  vowelCount.innerHTML = count;
});
