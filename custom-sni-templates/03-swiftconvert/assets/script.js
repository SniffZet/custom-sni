(function () {
  var dropzone = document.getElementById("dropzone");
  var fileInput = document.getElementById("fileInput");
  var convertBtn = document.getElementById("convertBtn");
  var dzTitle = dropzone.querySelector(".dz-title");
  var dzSub = dropzone.querySelector(".dz-sub");
  var progressWrap = document.getElementById("progressWrap");
  var progFill = document.getElementById("progFill");
  var progPct = document.getElementById("progPct");
  var progLabel = document.getElementById("progLabel");

  var hasFile = false;

  function setFile(name) {
    hasFile = true;
    dzTitle.textContent = name || "sample-file.bin";
    dzTitle.classList.add("has-file");
    dzSub.textContent = "Ready to convert — click to choose a different file";
    convertBtn.disabled = false;
  }

  dropzone.addEventListener("click", function () { fileInput.click(); });
  fileInput.addEventListener("change", function () {
    if (fileInput.files && fileInput.files[0]) setFile(fileInput.files[0].name);
  });

  ["dragenter", "dragover"].forEach(function (evt) {
    dropzone.addEventListener(evt, function (e) {
      e.preventDefault();
      dropzone.classList.add("drag");
    });
  });
  ["dragleave", "drop"].forEach(function (evt) {
    dropzone.addEventListener(evt, function (e) {
      e.preventDefault();
      dropzone.classList.remove("drag");
    });
  });
  dropzone.addEventListener("drop", function (e) {
    var f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
    setFile(f ? f.name : "dropped-file.bin");
  });

  convertBtn.addEventListener("click", function () {
    if (!hasFile) return;
    convertBtn.disabled = true;
    progressWrap.classList.remove("hidden");
    progLabel.textContent = "Converting…";
    var pct = 0;
    var timer = setInterval(function () {
      pct += Math.random() * 18 + 6;
      if (pct >= 100) {
        pct = 100;
        clearInterval(timer);
        progLabel.textContent = "Done — download ready";
      }
      progFill.style.width = pct + "%";
      progPct.textContent = Math.round(pct) + "%";
      if (pct >= 100) convertBtn.disabled = false;
    }, 260);
  });
})();
