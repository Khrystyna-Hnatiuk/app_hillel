document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("action-btn");
    button.addEventListener("click", () => {
      alert("Ви натиснули кнопку!");
    });

    const form = document.getElementById("subscription-form");
    const message = document.getElementById("form-message");

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();

      if (name === "" || email === "") {
        message.textContent = "Будь ласка, заповніть всі поля.";
        message.style.color = "red";
        return;
      }

      message.textContent = `Дякуємо, ${name}! Ви успішно підписалися.`;
      message.style.color = "green";

      setTimeout(() => {
        form.reset();
        message.textContent = "";
      }, 3000);
    });
  });