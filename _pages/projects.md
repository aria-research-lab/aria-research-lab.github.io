---
layout: page
title: open-source projects
permalink: /projects/
description: Open-source research projects and repositories from the ARIA Research Lab at NJIT, including NeuPI, CaptainCook4D, Learning to Condition, CoLa-VAE, and neural optimization.
keywords: ARIA Lab projects, NJIT AI projects, Shivvrat Arya, NeuPI, CaptainCook4D, Learning to Condition, CoLa-VAE, neural combinatorial optimization, structured AI
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

{% if site.data.repositories.github_repos %}

  <hr>
  <a id="github-repositories" href=".#github-repositories">
    <h2 class="category">GitHub Repositories</h2>
  </a>

  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
    {% for repo in site.data.repositories.github_repos %}
      {% include repository/repo.liquid repository=repo %}
    {% endfor %}
  </div>
{% endif %}
</div>
