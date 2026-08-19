(function () {
  var urlInput = document.getElementById("urlInput");
  var fetchBtn = document.getElementById("fetchBtn");
  var results = document.getElementById("results");
  var qualityList = document.getElementById("qualityList");
  var fetchCard = document.getElementById("fetchCard");
  var gate = document.getElementById("gate");
  var codeInput = document.getElementById("codeInput");
  var codeBtn = document.getElementById("codeBtn");

  fetchBtn.addEventListener("click", function () {
    if (!urlInput.value.trim()) {
      urlInput.focus();
      return;
    }
    fetchBtn.disabled = true;
    fetchBtn.textContent = "Looking…";
    setTimeout(function () {
      fetchBtn.disabled = false;
      fetchBtn.textContent = "Fetch";
      results.classList.remove("hidden");
    }, 900);
  });

  qualityList.addEventListener("click", function (e) {
    var btn = e.target.closest(".q-opt");
    if (!btn) return;
    qualityList.querySelectorAll(".q-opt").forEach(function (b) { b.classList.remove("picked"); });
    btn.classList.add("picked");
    setTimeout(function () {
      fetchCard.classList.add("hidden");
      gate.classList.remove("hidden");
    }, 350);
  });

  codeBtn.addEventListener("click", function () {
    var val = codeInput.value.trim();
    if (!val) {
      codeInput.focus();
      return;
    }
    codeBtn.disabled = true;
    codeBtn.textContent = "Checking…";
    setTimeout(function () {
      codeBtn.disabled = false;
      codeBtn.textContent = "Unlock";
      codeInput.style.borderColor = "#ff5c7a";
      codeInput.placeholder = "Invalid or expired code";
      codeInput.value = "";
    }, 900);
  });
})();
