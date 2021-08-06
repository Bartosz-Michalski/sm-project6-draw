const btnAddAdvice = document.querySelector(".add");
const btnClearAdviceList = document.querySelector(".clear");
const btnShowAdvice = document.querySelector(".showAdvice");
const btnShowAdviceList = document.querySelector(".showOptions");

const input = document.querySelector("input");
const h1 = document.querySelector("h1");

const adviceList = [];

const addAdvice = (e) => {
  e.preventDefault();

  const newAdvice = input.value;

  for (advice of adviceList) {
    if (newAdvice === advice) {
      alert("Podana rada już istnieje na liście!");
      return;
    }
  }

  adviceList.push(newAdvice);
  input.value = "";
  alert(`Dodano do listy rad: ${newAdvice}`);
  console.log(adviceList);
};

const clearAdviceList = (e) => {
  e.preventDefault();

  adviceList.length = 0;
  h1.textContent = "";
  input.value = "";
  console.log(adviceList);
};

const showAdvice = (e) => {
  e.preventDefault();

  if (adviceList.length) {
    let adviceIndex = Math.floor(Math.random() * adviceList.length);

    console.log(adviceIndex);
    h1.textContent = `${adviceList[adviceIndex]}`;
  } else {
    alert("Nie dodano żadnej rady do listy!");
  }
};

const showAdviceList = (e) => {
  e.preventDefault();

  if (adviceList.length) {
    alert(`Możliwe rady do wylosowania to: ${adviceList.join("; ")}`);
  } else {
    alert(`Lista możliwych rady do wylosowania jest pusta`);
  }
};

btnAddAdvice.addEventListener("click", addAdvice);
btnClearAdviceList.addEventListener("click", clearAdviceList);
btnShowAdvice.addEventListener("click", showAdvice);
btnShowAdviceList.addEventListener("click", showAdviceList);
