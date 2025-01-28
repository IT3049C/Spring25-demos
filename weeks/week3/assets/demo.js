const button = document.getElementById(`clickBtn`);
const nameInput = document.querySelector(`#name-input`);
const h1Element = document.querySelector(`h1`);

button.innerText = "Click this Button";

button.addEventListener(`click`, function () {
  const inputValue = nameInput.value;
  console.log(`I was clicked by ${inputValue}`)
  h1Element.innerText = `Welcome ${inputValue}`

})