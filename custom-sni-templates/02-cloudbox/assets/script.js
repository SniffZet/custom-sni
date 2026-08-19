(function () {
  var tabs = document.querySelectorAll(".tab");
  var submitBtn = document.getElementById("submitBtn");
  var form = document.getElementById("authForm");

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (t) { t.classList.remove("active"); });
      tab.classList.add("active");
      submitBtn.textContent = tab.dataset.tab === "signup" ? "Create account" : "Continue";
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var original = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = "Checking…";
    setTimeout(function () {
      submitBtn.textContent = original;
      submitBtn.disabled = false;
    }, 1100);
  });
})();
