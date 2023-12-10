// Import stylesheets
// import './dist/style.css';


const form: HTMLFormElement = document.querySelector('#defineform')!;
const outputContainer: HTMLDivElement = document.querySelector('#output-container')!;

outputContainer.innerHTML = `<h2>Enter a word above to learn more about it</h2>`;

form.onsubmit = async (event) => {
  event.preventDefault(); // prevent reload

  const formData = new FormData(form);
  const text = formData.get('defineword') as string;

  outputContainer.innerHTML = `<h1>${text}</h1>`; // display the word

  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`)

    const data = await response.json();

    // searchedWord.innerHTML = `${text}`; // display the word

    outputContainer.innerHTML = `<p>${data.definitions}</p>`;
  } catch(error) {
    console.error('Error fetching data:', error);
    outputContainer.innerHTML = `Can't find info on that word`;
  }

};