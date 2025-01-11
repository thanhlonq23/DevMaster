function loadHTML(file, elementId) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => (document.getElementById(elementId).innerHTML = data));
}

// Gọi file header.html và footer.html
loadHTML("layout/header.html", "header-container");
loadHTML("layout/footer.html", "footer-container");
