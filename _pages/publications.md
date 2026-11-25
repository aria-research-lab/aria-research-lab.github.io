---
layout: page
permalink: /publications/
title: publications
description: Research publications from the ARIA Research Lab at NJIT spanning artificial intelligence, machine learning, probabilistic reasoning, combinatorial optimization, and computer vision. For a complete and up-to-date list of publications and preprints, visit <a href="https://scholar.google.com/citations?user=eM1co-kAAAAJ&hl=en" target="_blank">Dr. Arya's Google Scholar profile</a>. For Dr. Arya's prior publications, including work from his doctoral research, visit <a href="https://shivvrat.github.io/publications/" target="_blank">Dr. Arya's publications page</a>.
keywords: Shivvrat Arya publications, ARIA Lab publications, NJIT AI publications, neurosymbolic AI papers, probabilistic reasoning papers, neural combinatorial optimization papers
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div id="pub-filter-wrapper" class="pub-filter-wrapper">
  <div class="pub-filter-toolbar">
    <button type="button" id="pub-filter-toggle" class="pub-filter-toggle" aria-expanded="false" aria-controls="pub-filter-bar">
      <span>Filter</span>
      <span class="pub-filter-arrow" aria-hidden="true">&#9656;</span>
    </button>
    <div id="pub-filter-status" class="pub-filter-status" aria-live="polite" hidden></div>
  </div>
  <div id="pub-filter-bar" class="pub-filter-bar" aria-label="Filter publications by topic" hidden></div>
</div>

<div class="publications">

{% bibliography %}

</div>

<script src="{{ '/assets/js/pub-filters.js' | relative_url }}" defer></script>
