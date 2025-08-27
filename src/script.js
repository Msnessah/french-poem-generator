document.getElementById('nameForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const instructions = document.getElementById('instructions').value.trim();
const resultDiv = document.getElementById('result');
//Simulating AI generated names based on user instructions
const generatedNames = generatedNamesBasedOnInstructions(instructions);
resultDiv.innerHTML = generatedNames.length ? `<strong>Generated Names:</strong> ${generatedNames.join(', ')}` : 'No names generated. Please try different instructions.';
});

function generatedNamesBasedOnInstructions(instructions) {
  //Dummy name generation logic for demonstration purposes
  const sampleNames = ['Elizabeth', 'Tina', 'Vanessa', 'Huda', 'Aisha'];

  //Filter names based on instructions (In a real scenario, this would involve AI processing)
  return sampleNames.filter(name => instructions.toLowerCase().includes(name[0].toLowerCase()));
}