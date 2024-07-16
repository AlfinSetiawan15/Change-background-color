const btnCta = document.getElementById("btn-cta");

btnCta.addEventListener("click", function () {
  const red = Math.floor(Math.random() * 255 + 1);
  const green = Math.floor(Math.random() * 255 + 1);
  const blue = Math.floor(Math.random() * 255) + 1;

  const changeBackgroundColor = `rgb(${red}, ${green}, ${blue})`;
  document.body.style.backgroundColor = changeBackgroundColor;
});
