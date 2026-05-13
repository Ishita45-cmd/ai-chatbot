 // LOAD CHAT HISTORY
window.onload = function(){

  let savedChats = localStorage.getItem("chatHistory");

  if(savedChats){
    document.getElementById("chatBox").innerHTML = savedChats;
  }

}

// CLOCK
function updateClock(){

  let now = new Date();

  let time = now.toLocaleTimeString();

  document.getElementById("clock").innerText = time;
}

setInterval(updateClock,1000);

updateClock();


// DARK MODE
function toggleTheme(){

  document.body.classList.toggle("dark-mode");

}


// SEND MESSAGE
function sendMessage() {

  let input = document.getElementById("userInput");

  let message = input.value.trim();

  if (message === "") {
    return;
  }

  let chatBox = document.getElementById("chatBox");

  // USER MESSAGE
  let userDiv = document.createElement("div");

  userDiv.classList.add("user-message");

  userDiv.innerText = message;

  chatBox.appendChild(userDiv);

  // BOT TYPING
  let typingDiv = document.createElement("div");

  typingDiv.classList.add("bot-message");

  typingDiv.innerText = "Typing...";

  chatBox.appendChild(typingDiv);

  chatBox.scrollTop = chatBox.scrollHeight;

  message = message.toLowerCase();

  let reply = "";

  // SMART RESPONSES

  if (message.includes("hello") || message.includes("hi")) {
    reply = "Hello! Nice to meet you.";
  }

  else if (message.includes("your name")) {
    reply = "I am IB AI Assistant.";
  }

  else if (message.includes("how are you")) {
    reply = "I am functioning perfectly!";
  }

  else if (message.includes("ai")) {
    reply = "Artificial Intelligence enables machines to simulate human intelligence.";
  }

  else if (message.includes("html")) {
    reply = "HTML is used to structure webpages.";
  }

  else if (message.includes("css")) {
    reply = "CSS styles and designs webpages beautifully.";
  }

  else if (message.includes("javascript")) {
    reply = "JavaScript adds interactivity and dynamic behavior to websites.";
  }

  else if (message.includes("python")) {
    reply = "Python is widely used in AI and Machine Learning.";
  }

  else if (message.includes("machine learning")) {
    reply = "Machine Learning helps systems learn patterns from data.";
  }

  else if (message.includes("career")) {
    reply = "Building projects and consistency are key to growing in tech.";
  }

  else if (message.includes("project")) {
    reply = "Projects help developers gain practical coding experience.";
  }

  else if (message.includes("joke")) {
    reply = "Why do programmers prefer dark mode? Because light attracts bugs!";
  }

  else if (message.includes("motivate")) {
    reply = "Small progress every day creates big success.";
  }

  else if (message.includes("bye")) {
    reply = "Goodbye! Have a wonderful day.";
  }

  else if (message.includes("thank")) {
    reply = "You're welcome!";
  }

  else {
    reply = "That's interesting! I am continuously learning new things.";
  }

  // SHOW RESPONSE
  setTimeout(() => {

    typingDiv.innerText = reply;

    // SAVE CHAT HISTORY
    localStorage.setItem(
      "chatHistory",
      chatBox.innerHTML
    );

    chatBox.scrollTop = chatBox.scrollHeight;

  }, 1000);

  input.value = "";
}


// ENTER KEY SUPPORT
document.getElementById("userInput")
.addEventListener("keypress", function(event){

  if(event.key === "Enter"){
    sendMessage();
  }

});