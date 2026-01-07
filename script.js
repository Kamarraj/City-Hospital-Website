function toggleChat() {
  const box = document.getElementById("ai-chat-box");
  box.style.display = box.style.display === "flex" ? "none" : "flex";
}

function sendMessage() {
  let input = document.getElementById("user-input");
  let text = input.value.trim().toLowerCase();
  let chat = document.getElementById("ai-messages");

  if (text === "") return;

  chat.innerHTML += `<p><b>You:</b> ${input.value}</p>`;

  let reply = "";

  if (text.includes("hello") || text.includes("hi")) {
    reply = "Hello! I am City Hospital AI. How can I help you today?";
  }
  else if (text.includes("appointment")) {
    reply = "You can book an appointment online using the 'Make Appointment' button. Departments include Cardiology, Orthopedics, Pediatrics and more.";
  }
  else if (text.includes("doctor")) {
    reply = "Our hospital has experienced doctors in Cardiology, Orthopedics, Gynecology, Pediatrics and General Medicine.";
  }
  else if (text.includes("cardiology")) {
    reply = "Cardiology Department treats heart-related problems. Timings: 10 AM – 5 PM.";
  }
  else if (text.includes("fees")) {
    reply = "Consultation fees start from ₹500 and may vary by department.";
  }
  else if (text.includes("timing") || text.includes("time")) {
    reply = "Hospital timing is 9 AM – 8 PM. Emergency services are available 24/7.";
  }
  else if (text.includes("emergency")) {
    reply = "Emergency services are available 24/7. Please visit the hospital immediately if urgent.";
  }
  else if (text.includes("address") || text.includes("location")) {
    reply = "City Hospital, Main Road, Near City Mall, Your City.";
  }
  else {
    reply = "I can help with appointments, doctors, departments, fees, timings and emergency information.";
  }

  chat.innerHTML += `<p><b>AI:</b> ${reply}</p>`;
  chat.scrollTop = chat.scrollHeight;
  input.value = "";
}
