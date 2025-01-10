document.addEventListener("DOMContentLoaded", function () {
  const sidebarItems = document.querySelectorAll(".list-group-item[data-file]");
  const dynamicContent = document.getElementById("dynamic-content");

  // Hàm để tải nội dung từ file
  function loadContent(file) {
    fetch(file)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load ${file}`);
        }
        return response.text();
      })
      .then((html) => {
        // Gắn nội dung tải được vào #dynamic-content
        dynamicContent.innerHTML = html;
      })
      .catch((err) => {
        dynamicContent.innerHTML = `<p class="text-danger">Không thể tải nội dung: ${err.message}</p>`;
      });
  }

  // Đặt mặc định: gọi `personal-info.html` khi tải trang
  loadContent("account/personal-info.html");

  // Thêm class active mặc định cho mục đầu tiên
  sidebarItems[0].classList.add("active");

  // Xử lý khi nhấn vào các mục trong sidebar
  sidebarItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Xóa class active cho tất cả các mục
      sidebarItems.forEach((i) => i.classList.remove("active"));
      this.classList.add("active");

      // Lấy file cần load từ data-file
      const file = this.getAttribute("data-file");
      loadContent(file);
    });
  });
});
