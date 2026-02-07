function omikujishow() {
  const omikuji = ["大吉", "中吉", "小吉"];

  const number = Math.floor(Math.random() * omikuji.length);
  const result = omikuji[number];

  const omikujiDiv = document.getElementById("omikuji");

    omikujiDiv.textContent = result;
    omikujiDiv.style.color = "red";
  }