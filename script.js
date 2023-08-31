const socket = new WebSocket('ws://localhost:3000');

socket.addEventListener('open', (event) => {
  console.log('Connected to WebSocket');
});

socket.addEventListener('message', (event) => {
  const message = JSON.parse(event.data);
  displayMessage(message);
});

function displayMessage(message) {
  const chatContainer = document.getElementById('chat-container');
  const messageElement = document.createElement('div');
  messageElement.innerText = `${message.username}: ${message.text}`;
  chatContainer.appendChild(messageElement);
}

document.getElementById('send-button').addEventListener('click', () => {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value;
  const username = 'You'; // You can implement user authentication for actual usernames
  const data = { username, text: message };
  socket.send(JSON.stringify(data));
  messageInput.value = '';
});
