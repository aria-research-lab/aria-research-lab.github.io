---
layout: page
title: projects
permalink: /projects/
description: Research projects from the ARIA Research Lab at NJIT, including NeuPI, CaptainCook4D, neural probabilistic inference, structured AI, and human-AI interaction.
keywords: ARIA Lab projects, NJIT AI projects, Shivvrat Arya, NeuPI, CaptainCook4D, neural probabilistic inference, structured AI
nav: true
nav_order: 4
display_categories: [datasets, libraries, research]
horizontal: false
---

<div class="page-description" style="margin-bottom: 2em;">
  <!-- <h2>ARIA Lab GitHub Repositories</h2> -->
  <p>
    This page showcases the public GitHub repositories and open-source resources maintained by the ARIA Research Lab. Explore our code, datasets, and collaborative projects. For more details, visit our <a href="https://github.com/aria-research-lab" target="_blank">GitHub organization</a>.
  </p>
</div>

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
