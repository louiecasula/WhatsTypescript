// Import stylesheets
// import './dist/style.css';


const form: HTMLFormElement = document.querySelector('#defineform')!;
const outputContainer: HTMLDivElement = document.querySelector('#output-container')!;

outputContainer.innerHTML = `<h2>Enter a word above to learn more about it</h2>`;

form.onsubmit = async (event) => {
  event.preventDefault(); // prevent reload

  const formData = new FormData(form);
  const text = formData.get('defineword') as string;

  outputContainer.innerHTML = `<h1>${text}</h1>`;

  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`)

    const data: { word: string; phonetic: string; meanings: { partOfSpeech: string; definitions: { definition: string }[] }[] }[] = await response.json();

    const wordData = data[0];

    let outputHTML = `<h1>${wordData.word}</h1><h5>${wordData.phonetic}</h5>`;
    
    wordData.meanings.forEach((meaning) => {
      outputHTML += `<p><strong>${meaning.partOfSpeech}</strong></p><ol>`;

      meaning.definitions.forEach((definition) => {
        outputHTML += `<li>${definition.definition}</li>`;
      });

      outputHTML += `</ol>`;
    });

    outputContainer.innerHTML = outputHTML;

  } catch(error) {
    console.error('Error fetching data:', error);
    outputContainer.innerHTML = `<h1>${text}</h1> <p>Can't find info on ${text}</p>`;
  }

};