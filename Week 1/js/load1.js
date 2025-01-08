function loadHTML(file, elementId) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => (document.getElementById(elementId).innerHTML = data));
}

// Gọi file header.html và footer.html
loadHTML("header1.html", "header-container");
loadHTML("footer.html", "footer-container");
