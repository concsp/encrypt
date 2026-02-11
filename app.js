// /app/app.js
(function () {
  if (localStorage.getItem("quiz_authed") !== "1") {
    location.href = "../index.html";
  }
})();

function logout() {
  localStorage.removeItem("quiz_authed");
  location.href = "../index.html";
}
