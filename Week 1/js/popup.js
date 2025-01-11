 // Hàm mở popup với lựa chọn trang login hoặc signup
 function openPopup(type) {
    // Hiển thị popup
    document.getElementById("popup-container").classList.add("show");

    // Tạo iframe từ JavaScript
    var iframe = document.createElement("iframe");
    iframe.id = "popup-iframe";
    iframe.style.border = "none";
    iframe.style.position = "absolute";
    iframe.style.top = "50%";
    iframe.style.left = "50%";
    iframe.style.transform = "translate(-50%, -50%)";
    iframe.style.width = "100%";
    iframe.style.height = "500px";

    // Gán src tùy thuộc vào loại popup (login/signup)
    if (type === "login") {
      iframe.src = "login.html"; // Đường dẫn đến trang login.html
    } else if (type === "signup") {
      iframe.src = "signup.html"; // Đường dẫn đến trang signup.html
    }

    // Thêm iframe vào popup-content
    document.querySelector(".popup-content").appendChild(iframe);
  }

  // Hàm đóng popup
  function closePopup() {
    // Ẩn popup
    document.getElementById("popup-container").classList.remove("show");

    // Xóa iframe khỏi popup khi đóng
    document.getElementById("popup-iframe").remove();
  }