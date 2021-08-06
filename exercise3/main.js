const div = document.querySelector("div");
const input = document.querySelector("input");
const names = [];

const addName = (e) => {
  e.preventDefault();

  const newName = input.value;

  if (input.value.length) {
    for (const name of names) {
      if (name === newName) {
        alert("Takie imię znajduję się już na liście!");
        return;
      }
    }
    names.push(newName);
    div.textContent += newName + ", ";
    input.value = "";
  }
};

document.querySelector("button").addEventListener("click", addName);
