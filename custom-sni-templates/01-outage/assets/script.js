(function () {
  function randomHex(len) {
    var chars = "abcdef0123456789";
    var out = "";
    for (var i = 0; i < len; i++) out += chars[Math.floor(Math.random() * chars.length)];
    return out;
  }

  function randomIp() {
    var a = () => Math.floor(Math.random() * 254) + 1;
    return a() + "." + a() + "." + a() + "." + a();
  }

  var reqIdEl = document.getElementById("reqId");
  var addrEl = document.getElementById("clientAddr");
  var countdownEl = document.getElementById("countdown");
  var barFill = document.getElementById("barFill");
  var retryBtn = document.getElementById("retryBtn");

  reqIdEl.textContent = randomHex(8) + "-" + randomHex(4) + "-" + randomHex(12);

  setTimeout(function () {
    addrEl.textContent = randomIp();
  }, 350);

  var total = 30;
  var remaining = total;

  function tick() {
    remaining -= 1;
    if (remaining <= 0) remaining = total;
    countdownEl.textContent = remaining + "s";
    var pct = ((total - remaining) / total) * 100;
    barFill.style.width = pct + "%";
  }
  setInterval(tick, 1000);

  retryBtn.addEventListener("click", function () {
    retryBtn.disabled = true;
    var original = retryBtn.textContent;
    retryBtn.textContent = "Retrying…";
    setTimeout(function () {
      retryBtn.textContent = original;
      retryBtn.disabled = false;
      remaining = total;
      barFill.style.width = "0%";
    }, 1200);
  });
})();
