document.getElementById("loadMoreBtn").addEventListener("click", function () {
  // Lấy tất cả các thẻ với class 'hidden'
  const hiddenCards = document.querySelectorAll(".hidden");

  // Hiển thị các thẻ đó
  hiddenCards.forEach((card) => {
    card.classList.remove("hidden");
  });

  // Ẩn nút "Xem thêm" nếu không còn thẻ ẩn
  if (document.querySelectorAll(".hidden").length === 0) {
    document.getElementById("loadMoreBtn").style.display = "none";
  }
});
