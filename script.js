// намираме бутона и полето за съобщение
const btn = document.querySelector("#support-btn");
const message = document.querySelector("#message");

// създаваме променлива, за да знаем дали вече е натиснат
let supported = false;

btn.addEventListener("click", () => {
  supported = !supported;

  if (supported) {
    document.body.style.background = "linear-gradient(180deg, #a8ff98, #ffffff)";
    message.textContent = "🌍 Благодарим ти, че подкрепи планетата!";
    btn.textContent = "💚 Подкрепено!";
    btn.style.backgroundColor = "#3c8c5d";
  } else {
    document.body.style.background = "linear-gradient(180deg, #e3fdfd, #ffffff)";
    message.textContent = "";
    btn.textContent = "Подкрепи планетата";
    btn.style.backgroundColor = "#2c6e49";
  }
});
