document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a");
  links.forEach(link => {
    const url = link.getAttribute("href");
    // 外部リンクは新しいタブで開く
    if (url && url.startsWith("http")) {
      link.target = "_blank";
			link.rel = "noopener noreferrer";
      return; // 外部リンクはフェードアウトしない
    }
    // 内部リンクだけフェードアウト
    link.addEventListener("click", e => {
      if (!url || url.startsWith("#")) return;
      e.preventDefault();
      document.body.classList.add("fade-out");
      setTimeout(() => {window.location = url;}, 500);
    });
  });
});
window.addEventListener("pageshow", function(event) {
  if (event.persisted) {
    // 戻る時（bfcache復帰）は fadeIn を無効化
    document.body.style.animation = "none";
    document.body.style.opacity = "1";
  }
});
