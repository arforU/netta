function showRandomMessage() {
  const messages = [
    "Siap untuk adventure baru di Brookhaven?",
    "Jangan lupa upgrade gear kamu di Arsenal!",
    "Buat dunia impianmu di Bloxburg!",
    "Teleportasi ke game paling hot hari ini!",
    "Kamu bisa jadi apapun di Roblox!"
  ];

  const random = Math.floor(Math.random() * messages.length);
  document.getElementById("message-box").innerText = messages[random];
}
