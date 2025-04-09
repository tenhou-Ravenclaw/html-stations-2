function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  const isChecked = e.target.checked;
  const textElement = document.getElementById("text");

  if (isChecked) {
    textElement.style.backgroundColor = "red"; // 好きな色に変更
  } else {
    textElement.style.backgroundColor = "transparent"; // 元に戻す
  }
}
