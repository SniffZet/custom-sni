(function () {
  var GAMES = [
    { name: "Neon Dash", cat: "arcade", icon: "🕹️" },
    { name: "Block Cascade", cat: "puzzle", icon: "🧩" },
    { name: "Turbo Circuit", cat: "racing", icon: "🏎️" },
    { name: "Skyline Runner", cat: "platformer", icon: "🏃" },
    { name: "Vortex Blaster", cat: "arcade", icon: "💥" },
    { name: "Gem Matcher", cat: "puzzle", icon: "💎" },
    { name: "Rally Nights", cat: "racing", icon: "🚗" },
    { name: "Cloudhopper", cat: "platformer", icon: "☁️" },
    { name: "Laser Pong", cat: "arcade", icon: "🏓" },
    { name: "Number Weave", cat: "puzzle", icon: "🔢" },
    { name: "Drift Kings", cat: "racing", icon: "🛞" },
    { name: "Cave Diver", cat: "platformer", icon: "🕳️" },
  ];

  var grid = document.getElementById("grid");
  var coinCount = document.getElementById("coinCount");
  var coins = 240;

  function renderGames(filter) {
    grid.innerHTML = "";
    GAMES.filter(function (g) { return filter === "all" || g.cat === filter; })
      .forEach(function (g) {
        var tile = document.createElement("div");
        tile.className = "tile";
        tile.innerHTML =
          '<div class="tile-art">' + g.icon +
          (Math.random() > 0.5 ? '<span class="spark">NEW</span>' : "") +
          '</div>' +
          '<div class="tile-body">' +
          '<div class="tile-name">' + g.name + '</div>' +
          '<div class="tile-meta"><span>' + g.cat.toUpperCase() + '</span><span>★ ' + (Math.random() * 1.5 + 3.5).toFixed(1) + '</span></div>' +
          '</div>';
        tile.addEventListener("click", function () {
          coins += 5;
          coinCount.textContent = coins;
          tile.style.borderColor = "#ffd54d";
          setTimeout(function () { tile.style.borderColor = ""; }, 300);
        });
        grid.appendChild(tile);
      });
  }

  document.querySelectorAll(".cat").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".cat").forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      renderGames(btn.dataset.cat);
    });
  });

  renderGames("all");
})();
