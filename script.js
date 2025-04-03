const form = document.querySelector(".form");
const btnSubmit = document.querySelector(".formSubmit");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = {};
  const formData = new FormData(form, btnSubmit);
  for (const [key, value] of formData) {
    data[key] = value;
  }
  console.log(data);
});
