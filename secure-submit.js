document.getElementById('orderForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const data = new FormData(this);
  const message = `
Заявка на мокасини:
👤 Імʼя: ${data.get('name')}
📞 Телефон: ${data.get('phone')}
🏙 Місто: ${data.get('city')}
🏤 НП: №${data.get('np')}
👟 Розмір: ${data.get('size')}
  `;

  fetch("https://api.telegram.org/bot7611404050:AAFmSUncDOgcLMnkj-CntQZUu4xdwdhxNNs/sendMessage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: "688606915",
      text: message,
    }),
  })
    .then((res) => {
      if (res.ok) {
        alert("✅ Заявка надіслана!");
        document.getElementById('orderForm').reset();
      } else {
        alert("❌ Помилка відправки.");
      }
    })
    .catch(() => {
      alert("❌ Проблема з мережею.");
    });
});
