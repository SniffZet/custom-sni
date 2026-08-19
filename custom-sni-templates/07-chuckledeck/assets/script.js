(function () {
  var captions = [
    "When the deploy finally goes green on a Friday",
    "Me explaining to the cat why the wifi is down",
    "That one bug that only happens in production",
    "Trying to look busy during the surprise standup",
    "My brain during the meeting vs. after the meeting",
    "When someone touches your carefully labeled cables",
    "Opening 40 tabs to fix one typo",
    "The audacity of Monday, honestly",
    "Coffee: 1, Me: 0",
    "When the test suite passes on the first try",
    "Nobody: … Me at 2am: let's refactor everything",
    "That feeling when the coffee machine is empty"
  ];
  var users = ["nightowl", "pixel.jane", "coffeeFueled", "quietstorm", "byte_me", "moth.jpg", "grumpycat9", "lowbattery"];
  var gradients = [
    ["#ff9d2e", "#ff5e7e"],
    ["#5ec9ff", "#7a6bff"],
    ["#6bffb0", "#2ec4b6"],
    ["#ffd166", "#ff9d2e"],
    ["#c58bff", "#ff6ba8"],
    ["#7affc0", "#4ea8ff"]
  ];

  var feed = document.getElementById("feed");
  var loader = document.getElementById("loader");

  function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  function buildCard() {
    var g = rand(gradients);
    var card = document.createElement("div");
    card.className = "card";
    card.innerHTML =
      '<div class="card-head">👤 <b>u/' + rand(users) + '</b> · ' + (Math.floor(Math.random() * 22) + 1) + 'h ago</div>' +
      '<div class="card-media" style="background:linear-gradient(135deg,' + g[0] + ',' + g[1] + ')">' + rand(captions) + '</div>' +
      '<div class="card-actions">' +
      '<button class="upvote"><span class="up-arrow">▲</span> <span class="up-count">' + (Math.floor(Math.random() * 900) + 20) + '</span></button>' +
      '<button>💬 ' + Math.floor(Math.random() * 80) + '</button>' +
      '<button>↗ Share</button>' +
      '</div>';
    return card;
  }

  function appendBatch(n) {
    for (var i = 0; i < n; i++) feed.appendChild(buildCard());
  }

  feed.addEventListener("click", function (e) {
    var btn = e.target.closest(".upvote");
    if (!btn) return;
    var countEl = btn.querySelector(".up-count");
    var up = btn.classList.toggle("up");
    var count = parseInt(countEl.textContent, 10);
    countEl.textContent = up ? count + 1 : count - 1;
  });

  document.querySelectorAll(".tab").forEach(function (tab) {
    tab.addEventListener("click", function () {
      document.querySelectorAll(".tab").forEach(function (t) { t.classList.remove("active"); });
      tab.classList.add("active");
      feed.innerHTML = "";
      appendBatch(6);
    });
  });

  appendBatch(6);

  var loading = false;
  window.addEventListener("scroll", function () {
    if (loading) return;
    if (window.innerHeight + window.scrollY < document.body.offsetHeight - 300) return;
    loading = true;
    loader.style.visibility = "visible";
    setTimeout(function () {
      appendBatch(4);
      loading = false;
    }, 700);
  });
})();
