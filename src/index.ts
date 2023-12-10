// Import stylesheets
// import './dist/style.css';


const form: HTMLFormElement = document.querySelector('#defineform')!;
const searchedWord: HTMLHeadingElement = document.querySelector('#searched-word')!;

searchedWord.innerHTML = `Word: apple <br>
Definition: that red fruit wit da worm in it`;



// form.onsubmit = () => {
//   const formData = new FormData(form);

//   console.log(formData);
//   const text = formData.get('defineword') as string;
//   console.log(text);
//   searchedWord.innerHTML = `${text}`;
//   return false; // prevent reload
// };