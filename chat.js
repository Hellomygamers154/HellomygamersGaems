const chat = document.getElementById('chat');
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = nameInput.value;
  const message = messageInput.value;
  nameInput.value = '';
  messageInput.value = '';
  addMessage(name, message);
});

function addMessage(name, message) {
  const div = document.createElement('div');
  div.textContent = `${name}: ${message}`;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}
