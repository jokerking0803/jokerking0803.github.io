function toggleMode() {
  var element = document.body;
  element.classList.toggle("day-mode");
  element.classList.toggle("night-mode");

  var modeToggle = document.getElementById("mode-toggle");
  var elementToAdjust = document.querySelector("nav");
  elementToAdjust.classList.toggle("night-mode");

  if (element.classList.contains("night-mode")) {
    modeToggle.src = "/img/dark_mode_icon.png"; // 夜間模式按鈕圖片
    modeToggle.alt = "切換到日間模式";
  } else {
    modeToggle.src = "/img/light_mode_icon.png"; // 日間模式按鈕圖片
    modeToggle.alt = "切換到夜間模式";
  }
}

