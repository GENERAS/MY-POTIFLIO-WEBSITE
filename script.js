/*function toggleChat() {
    const box = document.getElementById('chatBox');
    box.style.display = box.style.display === 'block' ? 'none' : 'block';
    function toggleChat() {
      const box = document.getElementById('chatBox');
      const chatBody = document.getElementById("chat-body");
    
      if (box.style.display === 'block') {
        box.style.display = 'none';
      } else {
        box.style.display = 'block';
        if (chatBody.innerHTML.trim() === "") {
          chatBody.innerHTML += `<div class="chat-bubble bot">👋 Hello! I'm BTC Bot. Ask me anything about the site like "services", "projects", or "how to make money".</div>`;
        }
      }
    }
    
  }*/
  
  function toggleFlip() {
    document.querySelector('.avatar-container').classList.toggle('flipped');
  }
  
  // Show back-to-top button on scroll
  document.getElementById("chat-input").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const userMsg = this.value.trim();
      if (userMsg === "") return;
  
      const botReply = generateBotReply(userMsg);
  
      const chatBody = document.getElementById("chat-body");
      chatBody.innerHTML += `
  <div class="chat-bubble user">${userMsg}</div>
  <div class="chat-bubble bot">${botReply}</div>
`;

      chatBody.scrollTop = chatBody.scrollHeight;
    }
  });
  
  /*function generateBotReply(message) {
    const msg = message.toLowerCase();
    if (msg.includes("crypto")) return "Start with Binance and learn from BTC GUY!";
    if (msg.includes("hire")) return "Click the 'Hire Me' button to get in touch.";
    if (msg.includes("money")) return "Make money by building skills and using your phone!";
    if (msg.includes("developer")) return "I use HTML, CSS, JS, Vue.js, and React!";
    return "BTC GUY is listening... 🧠 Tell me more!";
  }
  document.getElementById("chat-input").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const userMsg = this.value.trim();
      if (userMsg === "") return;
  
      document.getElementById('send-sound').play(); // 🎵 Sound when sending
  
      const botReply = generateBotReply(userMsg);
  
      const chatBody = document.getElementById("chat-body");
      chatBody.innerHTML += `
        <div class="chat-bubble user">${userMsg}</div>
        <div class="chat-bubble bot">${botReply}</div>
      `;
      this.value = "";
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  });
  */
  const chatInput = document.getElementById('chat-input');
  const chatBody = document.getElementById('chat-body');

  chatInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      const userMessage = chatInput.value.trim();
      if (userMessage === '') return;

      // Display user message
      chatBody.innerHTML += `<div class="chat-bubble user">${userMessage}</div>`;
      chatInput.value = '';

      // Typing animation (realism)
      const typingBubble = document.createElement('div');
      typingBubble.className = 'chat-bubble bot typing';
      typingBubble.textContent = 'BTC Bot is typing...';
      chatBody.appendChild(typingBubble);
      chatBody.scrollTop = chatBody.scrollHeight;

      // Simulate bot reply
      setTimeout(() => {
        const botReply = getBotResponse(userMessage);
        typingBubble.remove(); // remove typing text
        chatBody.innerHTML += `<div class="chat-bubble bot">${botReply}</div>`;
        chatBody.scrollTop = chatBody.scrollHeight;
      }, 1000); // 1 second delay for effect
    }
  });

  function getBotResponse(input) {
    input = input.toLowerCase();

    // Smart matching
    if (input.includes("hello") || input.includes("hi")) {
      return "👋 Hello there! I'm BTC AI Bot. How can I assist you today?";
    } else if (input.includes("services")) {
      return "💼 We offer Web Development, Crypto Trading Help, and Digital Hustle Tips.";
    } else if (input.includes("contact")) {
      return "📬 You can reach us via the 'Contact' section in the menu.";
    } else if (input.includes("projects") || input.includes("portfolio")) {
      return "🚀 Projects are listed on the 'Projects' page. Stay tuned for new ones!";
    } else if (input.includes("crypto") || input.includes("bitcoin")) {
      return "🪙 Crypto is the future! Start with Binance and learn from BTC GUY.";
    } else if (input.includes("how to make money")) {
      return "💡 Start by learning digital skills, freelancing, or crypto trading!";
    } else if (input.includes("help")) {
      return "🤖 Sure! Try asking: 'What services do you provide?', 'Where can I see projects?', 'How to start trading?'";
    } else if (input.includes("hire")) {
      return "📩 Just click the 'Hire Me' button or use the contact form!";
    } else if (input.includes("developer") || input.includes("skills")) {
      return "💻 I use HTML, CSS, JavaScript, Vue.js, React, and Node.js!";
    } else {
      return "🤔 I'm still learning. Try asking about 'services', 'projects', 'crypto', or 'how to make money'.";
    }
  }

