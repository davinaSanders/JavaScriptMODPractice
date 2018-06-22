document.addEventListener('DOMContentLoaded', () => {


const form = document.querySelector('#form');


//event handler
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
    keep = "";
    alert("Please choose only one option");
  };

  const resultString = `${event.target.name.value} ${event.target.species.value}
  ${event.target.continent.value}
  ${keep}
  ${kill}`;


createParagraph(resultString, formResult);

form.reset();
}


//event
form.addEventListener('submit', handleFormSubmit);

// helper function
const createParagraph = function(content, container){
  const paragraph = document.createElement('p');
  paragraph.textContent = content;
  container.appendChild(paragraph);
};

  });
