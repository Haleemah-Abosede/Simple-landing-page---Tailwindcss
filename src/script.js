const languages = [
  "Hello",
  "Hola",
  "Ciao",
  "مرحبا",
  "안녕하세요",
  "नमस्ते",
  "Merhaba",
];
let index = 0;

function changeHelloText() {
  const text = languages[index];
  const helloTextElement = document.getElementById("hello-text");
  helloTextElement.innerHTML = "";

  for (let i = 0; i < text.length; i++) {
    const span = document.createElement("span");
    span.textContent = text[i];
    helloTextElement.appendChild(span);
  }

  index = (index + 1) % languages.length;
}

setInterval(changeHelloText, 3000); // Change hello text every 3 seconds
