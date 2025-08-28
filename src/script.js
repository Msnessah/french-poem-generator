function displayName(response) {
  new Typewriter("#name", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateName(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "97eod64d4af071fc4fb21ct3fb439676"; 
  let context ="You are an incredible name expert. Your mission is to generate a 6 names in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the names. Do not include any additional commentary. Do not apologize. Do not self-reference. Do not explain what you are doing. Just give me the names.";
  let prompt = `User instructions: Generate AI names ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


  let poemElement = document.querySelector("#name");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating name ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayName);
}
let nameFormElement = document.querySelector("#name-generator-form");
nameFormElement.addEventListener("submit", generateName);