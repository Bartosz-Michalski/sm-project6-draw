const btn = document.querySelector("button");
const section = document.querySelector("section");

const chars = "ABCDEFGHIJK0123456789";
const charsNumber = 10;
const codesNumber = 1000;

const codesGenerator = () => {
  for (let i = 0; i < codesNumber; i++) {
    let code = "";

    for (let i = 0; i < charsNumber; i++) {
      const indexChars = Math.floor(Math.random() * chars.length);

      code += chars[indexChars];
    }

    const div = document.createElement("div");
    div.textContent = code;
    section.appendChild(div);
  }
};

btn.addEventListener("click", codesGenerator);
