(function () {
  "use strict";

  function slugify(value) {
    return String(value || "")
      .trim()
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function parseTags(raw) {
    if (!raw) return [];
    return raw
      .split(",")
      .map(function (t) {
        return t.trim();
      })
      .filter(Boolean);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var wrapper = document.getElementById("pub-filter-wrapper");
    var toggleBtn = document.getElementById("pub-filter-toggle");
    var filterBar = document.getElementById("pub-filter-bar");
    var statusEl = document.getElementById("pub-filter-status");
    var pubContainer = document.querySelector(".publications");
    if (!filterBar || !pubContainer) return;

    var items = Array.from(pubContainer.querySelectorAll("ol.bibliography > li"));
    if (!items.length) return;

    var records = items.map(function (li) {
      var row = li.querySelector("[data-tags]");
      var tags = row ? parseTags(row.getAttribute("data-tags") || "") : [];
      return { li: li, tags: tags };
    });

    var tagCounts = new Map();
    records.forEach(function (rec) {
      rec.tags.forEach(function (tag) {
        tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
      });
    });

    if (!tagCounts.size) {
      if (wrapper) wrapper.hidden = true;
      return;
    }

    var sortedTags = Array.from(tagCounts.entries()).sort(function (a, b) {
      return b[1] - a[1] || a[0].localeCompare(b[0]);
    });

    var activeTag = "";

    function matchParam(candidates, paramValue) {
      if (!paramValue) return "";
      var target = paramValue.trim().toLowerCase();
      var targetSlug = slugify(paramValue);
      for (var i = 0; i < candidates.length; i++) {
        var name = candidates[i][0];
        if (name.toLowerCase() === target || slugify(name) === targetSlug) {
          return name;
        }
      }
      return "";
    }

    var params = new URLSearchParams(window.location.search);
    activeTag = matchParam(sortedTags, params.get("tag"));

    function setMenuOpen(open) {
      filterBar.hidden = !open;
      if (toggleBtn) {
        toggleBtn.setAttribute("aria-expanded", open ? "true" : "false");
      }
    }

    if (toggleBtn) {
      toggleBtn.addEventListener("click", function () {
        setMenuOpen(filterBar.hidden);
      });
    }

    document.addEventListener("click", function (event) {
      if (!filterBar.hidden && wrapper && !wrapper.contains(event.target)) {
        setMenuOpen(false);
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !filterBar.hidden) {
        setMenuOpen(false);
        if (toggleBtn) toggleBtn.focus();
      }
    });

    var chips = document.createElement("div");
    chips.className = "pub-filter-chips";

    sortedTags.forEach(function (pair) {
      var name = pair[0];
      var count = pair[1];
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "pub-filter-chip";
      btn.setAttribute("data-filter-value", name);
      btn.setAttribute("aria-pressed", "false");

      var textSpan = document.createElement("span");
      textSpan.textContent = name;
      var countSpan = document.createElement("span");
      countSpan.className = "pub-filter-count";
      countSpan.textContent = String(count);

      btn.appendChild(textSpan);
      btn.appendChild(countSpan);
      btn.addEventListener("click", function () {
        activeTag = activeTag === name ? "" : name;
        applyFilters(true);
        setMenuOpen(false);
      });
      chips.appendChild(btn);
    });

    filterBar.innerHTML = "";
    filterBar.appendChild(chips);

    pubContainer.querySelectorAll(".pub-tag-pill[data-pub-tag]").forEach(function (pill) {
      pill.addEventListener("click", function () {
        var tagName = (pill.getAttribute("data-pub-tag") || "").trim();
        if (!tagName) return;
        activeTag = activeTag === tagName ? "" : tagName;
        applyFilters(true);
        setMenuOpen(false);
      });
    });

    function syncYearVisibility() {
      var lists = pubContainer.querySelectorAll("ol.bibliography");
      lists.forEach(function (ol) {
        var listItems = Array.from(ol.children).filter(function (el) {
          return el.tagName === "LI";
        });
        var visibleInList = listItems.filter(function (li) {
          return !li.classList.contains("pub-filter-hidden") && !li.classList.contains("unloaded");
        }).length;
        var hideYear = visibleInList === 0;
        ol.classList.toggle("pub-year-hidden", hideYear);
        var prev = ol.previousElementSibling;
        if (prev && prev.tagName === "H2" && prev.classList.contains("bibliography")) {
          prev.classList.toggle("pub-year-hidden", hideYear);
        }
      });
    }

    function updateUrl() {
      if (!window.history || !window.history.replaceState) return;
      var url = new URL(window.location.href);
      if (activeTag) {
        url.searchParams.set("tag", slugify(activeTag));
      } else {
        url.searchParams.delete("tag");
      }
      window.history.replaceState(null, "", url.pathname + url.search + url.hash);
    }

    function updateStatus(visibleCount) {
      if (!statusEl) return;
      if (!activeTag) {
        statusEl.hidden = true;
        statusEl.innerHTML = "";
        return;
      }
      statusEl.hidden = false;
      statusEl.innerHTML = "";

      var summary = document.createElement("span");
      summary.textContent = activeTag + " (" + visibleCount + " of " + records.length + ")";

      var clearBtn = document.createElement("button");
      clearBtn.type = "button";
      clearBtn.className = "pub-filter-clear";
      clearBtn.setAttribute("aria-label", "Clear topic filter");
      clearBtn.textContent = "Clear";
      clearBtn.addEventListener("click", function () {
        activeTag = "";
        applyFilters(true);
        setMenuOpen(false);
      });

      statusEl.appendChild(summary);
      statusEl.appendChild(clearBtn);
    }

    function applyFilters(syncUrl) {
      var visibleCount = 0;
      records.forEach(function (rec) {
        var hidden = Boolean(activeTag) && rec.tags.indexOf(activeTag) === -1;
        rec.li.classList.toggle("pub-filter-hidden", hidden);
        if (!hidden && !rec.li.classList.contains("unloaded")) {
          visibleCount += 1;
        }
      });

      filterBar.querySelectorAll(".pub-filter-chip").forEach(function (chip) {
        var val = chip.getAttribute("data-filter-value");
        var isActive = activeTag === val;
        chip.classList.toggle("is-active", isActive);
        chip.setAttribute("aria-pressed", isActive ? "true" : "false");
      });

      pubContainer.querySelectorAll(".pub-tag-pill[data-pub-tag]").forEach(function (pill) {
        var isActive = activeTag === pill.getAttribute("data-pub-tag");
        pill.classList.toggle("is-active", isActive);
        pill.setAttribute("aria-pressed", isActive ? "true" : "false");
      });

      syncYearVisibility();
      updateStatus(visibleCount);
      if (syncUrl) updateUrl();
    }

    var bibSearch = document.getElementById("bibsearch");
    if (bibSearch) {
      bibSearch.addEventListener("input", function () {
        window.requestAnimationFrame(function () {
          syncYearVisibility();
        });
      });
    }

    setMenuOpen(false);
    applyFilters(false);
  });
})();
