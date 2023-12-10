// Import stylesheets
import './style.css';


const form: HTMLFormElement = document.querySelector('#defineform');
const output: HTMLDivElement = document.querySelector('#output');


form.onsubmit = () => {
  const formData = new FormData(form);

  console.log(formData);
  const text = formData.get('defineword') as string;
  console.log(text);
  // return false; // prevent reload
  try{
    const response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/${word}')
    const data = await response.json();

    output.innerHTML = '<p>Definition: ${data.definition} </p>';
  } catch(error){
    console.error('Error fetching data:', error);
    output.innerHTML = 'Word not found'
  }
};



