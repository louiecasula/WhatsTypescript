// Import stylesheets
import './style.css';


const form = document.querySelector('#defineform') as HTMLFormElement;
const searchedWord = document.querySelector('#searched-word') as HTMLHeadingElement;


form.onsubmit = () => {
  const formData = new FormData(form);

  console.log(formData);
  const text = formData.get('defineword') as string;
  console.log(text);
  searchedWord.innerHTML = `${text}`;
  return false; // prevent reload
};