(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var containers = document.querySelectorAll(".home-news-collapsible[data-news-initial]");
    containers.forEach(function (container) {
      var initial = parseInt(container.getAttribute("data-news-initial"), 10) || 3;
      var rows = Array.from(container.querySelectorAll(".news table tr"));
      var toggleBtn = container.querySelector(".home-news-toggle");
      if (!toggleBtn || rows.length <= initial) return;

      var expanded = false;
      function render() {
        rows.forEach(function (row, idx) {
          row.classList.toggle("news-row-hidden", !expanded && idx >= initial);
        });
        toggleBtn.setAttribute("aria-expanded", expanded ? "true" : "false");
        toggleBtn.innerHTML = (expanded ? "Show Less " : "Show More News ") + '<i class="fa-solid fa-chevron-down" aria-hidden="true"></i>';
      }

      toggleBtn.hidden = false;
      render();

      toggleBtn.addEventListener("click", function () {
        expanded = !expanded;
        render();
      });
    });
  });
})();
