const form = document.querySelector(".form");
const btnSubmit = document.querySelector(".formSubmit");

const email = document.querySelector("#email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = {};
  const formData = new FormData(form, btnSubmit);
  for (const [key, value] of formData) {
    data[key] = value;
  }
});

email.addEventListener("input", (e) => {
  e.preventDefault();
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
    email.reportValidity();
  } else {
    email.setCustomValidity("");
  }
});
