const form = document.querySelector("form");
const container = document.querySelector(".container");
const success = document.querySelector(".success");

const handleSubmit = (event) => {
  event.preventDefault(); 
  container.classList.add("hide"); 
  success.classList.remove("hide");
};

form.addEventListener("submit", handleSubmit);
