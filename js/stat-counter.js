(function () {
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var duration = 1400;

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function animate(el, prefix, target, suffix) {
    var start = null;
    function step(timestamp) {
      if (start === null) start = timestamp;
      var progress = Math.min((timestamp - start) / duration, 1);
      var value = Math.round(easeOutCubic(progress) * target);
      el.textContent = prefix + value.toLocaleString("en-US") + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = prefix + target.toLocaleString("en-US") + suffix;
      }
    }
    requestAnimationFrame(step);
  }

  function setupCounter(el) {
    var match = el.textContent.trim().match(/^(\D*)([\d,]+)(\D*)$/);
    if (!match) return;

    var prefix = match[1];
    var target = parseInt(match[2].replace(/,/g, ""), 10);
    var suffix = match[3];

    if (isNaN(target)) return;

    if (reduceMotion) return;

    el.textContent = prefix + "0" + suffix;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animate(el, prefix, target, suffix);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".stat-number").forEach(setupCounter);
  });
})();
