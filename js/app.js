document.addEventListener('DOMContentLoaded', () => {


const form = document.querySelector('#form');

const handleFormSubmit = function (event) {
  event.preventDefault();
const formResult = document.querySelector('#form-result');
  let keep = "";
  if (event.target.keep.checked) {
    keep = event.target.keep.value
  };
  let kill = "";
  if (event.target.kill.checked) {
    kill = event.target.kill.value
  };
  if (this.keep.checked && this.kill.checked){
    kill = "";
    keep = "Please choose only one"
  };

formResult.textContent = `${event.target.name.value} ${event.target.species.value}
${event.target.continent.value}
${keep}
${kill}`;

}

form.addEventListener('submit', handleFormSubmit);


  });
