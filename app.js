// Tiny behaviour layer: tabs, fake sign-in toggle, resume bar.
// Replace the sign-in toggle with your real auth (Google sign-in) later.

(function () {
  var body = document.body;

  // --- Guest / signed-in state (demo only, stored in the browser) ---
  var signedIn = false;
  try { signedIn = localStorage.getItem('iitbro_demo_signed_in') === '1'; } catch (e) {}
  body.classList.toggle('guest', !signedIn);

  document.querySelectorAll('[data-signin]').forEach(function (el) {
    el.addEventListener('click', function (ev) {
      ev.preventDefault();
      try { localStorage.setItem('iitbro_demo_signed_in', '1'); } catch (e) {}
      body.classList.remove('guest');
    });
  });
  document.querySelectorAll('[data-signout]').forEach(function (el) {
    el.addEventListener('click', function (ev) {
      ev.preventDefault();
      try { localStorage.removeItem('iitbro_demo_signed_in'); } catch (e) {}
      body.classList.add('guest');
    });
  });

  // --- Tabs on the session page ---
  var tabs = document.querySelectorAll('.tab');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) { t.classList.remove('on'); });
      document.querySelectorAll('.tab-body').forEach(function (b) { b.classList.remove('on'); });
      tab.classList.add('on');
      var target = document.getElementById(tab.dataset.target);
      if (target) target.classList.add('on');
    });
  });

  // --- Course filter chips on the home page ---
  var chips = document.querySelectorAll('[data-filter]');
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      chips.forEach(function (c) { c.classList.remove('on'); });
      chip.classList.add('on');
      var f = chip.dataset.filter;
      document.querySelectorAll('.course').forEach(function (c) {
        c.style.display = (f === 'all' || c.dataset.topic === f) ? '' : 'none';
      });
    });
  });

  // --- Topic request form (demo: just acknowledges) ---
  var form = document.getElementById('request-form');
  if (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var input = form.querySelector('input');
      if (input.value.trim()) {
        form.querySelector('button').textContent = 'Thanks!';
        input.value = '';
      }
    });
  }

  // --- Copy link to this minute (uses ?t=seconds; wire to the real player time later) ---
  var copyBtn = document.querySelector('[data-copy-link]');
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      var url = location.origin + location.pathname + '?t=0';
      if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(function () {
          copyBtn.textContent = 'Link copied';
        }, function () {});
      }
    });
  }
})();
