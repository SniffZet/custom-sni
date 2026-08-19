(function () {
  var srcTabs = document.querySelectorAll(".src-tab");
  var linkPanel = document.getElementById("linkPanel");
  var filePanel = document.getElementById("filePanel");
  var linkInput = document.getElementById("linkInput");
  var importBtn = document.getElementById("importBtn");
  var dropzone = document.getElementById("dropzone");
  var fileInput = document.getElementById("fileInput");
  var editor = document.getElementById("editor");
  var exportBtn = document.getElementById("exportBtn");
  var exportProgress = document.getElementById("exportProgress");
  var exportFill = document.getElementById("exportFill");
  var exportLabel = document.getElementById("exportLabel");

  srcTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      srcTabs.forEach(function (t) { t.classList.remove("active"); });
      tab.classList.add("active");
      var isLink = tab.dataset.src === "link";
      linkPanel.classList.toggle("hidden", !isLink);
      filePanel.classList.toggle("hidden", isLink);
    });
  });

  function reveal() {
    editor.classList.remove("hidden");
    editor.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  importBtn.addEventListener("click", function () {
    if (!linkInput.value.trim()) { linkInput.focus(); return; }
    importBtn.disabled = true;
    importBtn.textContent = "Importing…";
    setTimeout(function () {
      importBtn.disabled = false;
      importBtn.textContent = "Import";
      reveal();
    }, 900);
  });

  dropzone.addEventListener("click", function () { fileInput.click(); });
  fileInput.addEventListener("change", function () {
    if (fileInput.files[0]) reveal();
  });
  ["dragover", "dragenter"].forEach(function (evt) {
    dropzone.addEventListener(evt, function (e) { e.preventDefault(); dropzone.style.borderColor = "#ffb020"; });
  });
  ["dragleave", "drop"].forEach(function (evt) {
    dropzone.addEventListener(evt, function (e) { e.preventDefault(); dropzone.style.borderColor = ""; });
  });
  dropzone.addEventListener("drop", function () { reveal(); });

  // draggable trim handles
  function makeDraggable(handle, isLeft) {
    handle.addEventListener("mousedown", function (e) {
      e.preventDefault();
      function onMove(ev) {
        var track = handle.parentElement.getBoundingClientRect();
        var pct = Math.min(Math.max((ev.clientX - track.left) / track.width, 0), 1);
        handle.style.left = (pct * 100) + "%";
      }
      function onUp() {
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onUp);
      }
      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onUp);
    });
  }
  makeDraggable(document.getElementById("handleLeft"), true);
  makeDraggable(document.getElementById("handleRight"), false);

  exportBtn.addEventListener("click", function () {
    exportBtn.disabled = true;
    exportProgress.classList.remove("hidden");
    exportLabel.textContent = "Rendering…";
    var pct = 0;
    var timer = setInterval(function () {
      pct += Math.random() * 15 + 5;
      if (pct >= 100) {
        pct = 100;
        clearInterval(timer);
        exportLabel.textContent = "Done — clip ready to download";
        exportBtn.disabled = false;
      }
      exportFill.style.width = pct + "%";
    }, 300);
  });
})();
