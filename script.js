// Lightweight typing effect (replaces the typed.js library).
(function () {
  var words = ["Travelling", "Shopping", "Movies", "Adventure"];
  var typeSpeed = 150, backSpeed = 200, holdDelay = 700;
  var el = document.getElementById("element");
  if (!el) return;

  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    el.textContent = words.join(", ");
    return;
  }

  var w = 0, i = 0, deleting = false;
  function tick() {
    var word = words[w];
    i += deleting ? -1 : 1;
    el.textContent = word.slice(0, i);
    var delay = deleting ? backSpeed : typeSpeed;
    if (!deleting && i === word.length) { deleting = true; delay = holdDelay; }
    else if (deleting && i === 0) { deleting = false; w = (w + 1) % words.length; delay = typeSpeed; }
    setTimeout(tick, delay);
  }
  tick();
})();
