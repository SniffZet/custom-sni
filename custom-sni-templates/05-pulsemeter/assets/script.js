(function () {
  var goBtn = document.getElementById("goBtn");
  var speedNum = document.getElementById("speedNum");
  var arc = document.getElementById("gaugeArc");
  var pingVal = document.getElementById("pingVal");
  var downVal = document.getElementById("downVal");
  var upVal = document.getElementById("upVal");
  var ipVal = document.getElementById("ipVal");

  var ARC_LEN = 314;

  function setGauge(mbps, maxMbps) {
    var pct = Math.min(mbps / maxMbps, 1);
    arc.style.strokeDashoffset = String(ARC_LEN * (1 - pct));
    speedNum.textContent = mbps.toFixed(1);
  }

  function animateTo(target, maxMbps, duration, cb) {
    var start = performance.now();
    function frame(now) {
      var t = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - t, 3);
      setGauge(target * eased, maxMbps);
      if (t < 1) requestAnimationFrame(frame);
      else if (cb) cb();
    }
    requestAnimationFrame(frame);
  }

  ipVal.textContent = [1, 2, 3, 4].map(function () {
    return Math.floor(Math.random() * 254) + 1;
  }).join(".");

  goBtn.addEventListener("click", function () {
    goBtn.disabled = true;
    goBtn.textContent = "Testing…";
    pingVal.textContent = "—";
    downVal.textContent = "—";
    upVal.textContent = "—";
    setGauge(0, 300);

    setTimeout(function () {
      pingVal.textContent = (8 + Math.random() * 14).toFixed(0) + " ms";
    }, 400);

    var downTarget = 60 + Math.random() * 220;
    animateTo(downTarget, 300, 2200, function () {
      downVal.textContent = downTarget.toFixed(1) + " Mbps";

      var upTarget = 15 + Math.random() * 60;
      animateTo(upTarget, 300, 1600, function () {
        upVal.textContent = upTarget.toFixed(1) + " Mbps";
        goBtn.disabled = false;
        goBtn.textContent = "Test again";
      });
    });
  });
})();
