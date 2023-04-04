const chat = document.getElementById('chat');
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const messageInput = document.getElementById('message');

const socket = io();

socket.on('chat message', (msg) => {
  const div = document.createElement('div');
  div.textContent = msg;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = nameInput.value;
  const message = messageInput.value;
  nameInput.value = '';
  messageInput.value = '';
  socket.emit('chat message', `${name}: ${message}`);
});
