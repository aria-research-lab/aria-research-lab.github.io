---
layout: about
title: ARIA Lab
permalink: /
subtitle: Welcome to the Algorithms and Architectures for Reasoning and Intelligent Automation Lab
description: ARIA Research Lab at NJIT, directed by Dr. Shivvrat Arya, studies trustworthy, structured, and efficient AI, including neuro-symbolic reasoning, probabilistic inference, neural combinatorial optimization, structured and multimodal intelligence, and AI for scientific discovery.
keywords: ARIA Research Lab, ARIA Lab NJIT, Shivvrat Arya, Dr. Shivvrat Arya, NJIT AI lab, NJIT machine learning lab, neuro-symbolic reasoning, probabilistic inference, neural combinatorial optimization, structured multimodal intelligence, AI for scientific discovery, trustworthy AI

# profile:
#   align: right
#   image: prof_pic.jpg
#   image_circular: true # crops the image to make it circular
#   more_info: >
#     <p>GITC 4304</p>
#     <p><a href="https://cs.njit.edu/" target="_blank">Department of Computer Science</a></p>
#     <p>Ying Wu College of Computing</p>
#     <p>New Jersey Institute of Technology</p>
#     <p>Newark, NJ 07102</p>

# selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: false # controlled inline via Show More News toggle
  limit: # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

<blockquote class="block-tip" markdown="1">

📢 We are recruiting motivated Ph.D. students for {{ site.data.recruiting.start_terms_and }} to pursue research in artificial intelligence and machine learning. Research opportunities are available for undergraduate and MS students interested in sustained projects, strong technical contributions, and potential conference submissions when the results warrant it. Applicants with backgrounds in algorithms, optimization, probability, or machine learning are encouraged to apply. Explore our <a href="/hiring/">student research opportunities and application details</a>.

</blockquote>

<!-- ## Welcome to the Algorithms and Architectures for Reasoning and Intelligent Automation Lab -->

The ARIA Research Lab in the Department of Computer Science at the Ying Wu College of Computing, New Jersey Institute of Technology (NJIT), led by [Dr. Shivvrat Arya](https://shivvrat.github.io/), develops methods for **trustworthy**, **structured**, and **efficient artificial intelligence**, integrating **learning, reasoning, and optimization** to build AI systems that are interpretable, reliable, and scalable. Our research focuses on foundational advances in **neuro-symbolic reasoning and probabilistic inference** and **neural combinatorial optimization**, alongside applications in **structured and multimodal intelligence** and **AI for scientific discovery**.

## Research Directions

- **[Neuro-Symbolic Reasoning and Probabilistic Inference](/research/#neuro-symbolic-reasoning-and-probabilistic-inference)**
  We combine neural networks with symbolic structure, classical algorithms, and mathematical optimization to develop fast, reliable, and scalable methods for probabilistic inference and reasoning under uncertainty.

- **[Neural Combinatorial Optimization](/research/#neural-combinatorial-optimization)**
  We design learning-based solvers—integrating deep reinforcement learning, representation learning, and classical optimization—to tackle large-scale discrete and graph-structured decision-making problems under complex constraints.

- **[Structured and Multimodal Intelligence](/research/#structured-and-multimodal-intelligence)**
  We integrate explicit temporal, procedural, and relational structure with human feedback to build reliable, interpretable models for procedural video understanding and vision-language reasoning.

- **[AI for Scientific Discovery](/research/#ai-for-scientific-discovery)**
  We develop machine learning methods that incorporate domain knowledge, biological interactions, and scientific constraints into structured generative models, with an emphasis on computational biology and single-cell genomics.

---

## Joining the lab

We are always looking for **curious, rigorous, and collaborative** students who are excited about building the next generation of **structured, explainable, and reliable AI systems**.

- **[Ph.D. students](/hiring/)**: Opportunities to work on core problems in neuro-symbolic reasoning, probabilistic inference, neural combinatorial optimization, and structured deep learning.
- **[Undergraduate students](/hiring/undergraduate-ms-research)**: Opportunities to join active projects, learn how to conduct research, and build toward increasingly independent work through options such as CS 488 and CS 489.
- **[M.S. students](/hiring/undergraduate-ms-research)**: Opportunities for deeper research through faculty-mentored projects or the CS 700B/CS 701B thesis pathway, subject to advisor availability.

If you are interested in joining the ARIA Research Lab, please review the <a href="/hiring/">student research opportunities</a> and follow the application instructions there. Briefly describe your background, relevant coursework or projects, and which of the lab’s research directions you are most excited about.

---

## Selected projects & highlights

- **Real-Time Neural Inference Engine**  
  **NeuPI** <a href="https://shivvrat.github.io/certificates/tpm_certificate.jpg" target="_blank" rel="noopener noreferrer" class="award-badge"><i class="fa-solid fa-trophy award-icon" aria-hidden="true"></i> Best Paper Award (UAI TPM '24)</a> <span class="award-badge"><i class="fa-solid fa-star award-icon" aria-hidden="true"></i> NeurIPS '24 Spotlight (Top 2%)</span> <span class="award-badge"><i class="fa-solid fa-bullhorn award-icon" aria-hidden="true"></i> AAAI '24 Oral (Top 3%)</span>  
  An open-source PyTorch library for self-supervised neural probabilistic inference, combining single-pass neural approximators and test-time optimization to accelerate inference from minutes to microseconds.  
  **Publications:** [ITSELF (NeurIPS 2024)](https://openreview.net/forum?id=ufPPf9ghzP), [SSMP (AAAI 2024)](https://ojs.aaai.org/index.php/AAAI/article/view/28966), [SS-CMPE (AISTATS 2024)](https://proceedings.mlr.press/v238/arya24b.html), [SINE (AISTATS 2025)](https://proceedings.mlr.press/v258/arya25a.html)
  <span class="project-resource-links"><a href="https://github.com/Shivvrat/NeuPI" target="_blank" rel="noopener noreferrer" class="project-resource-btn"><i class="fa-brands fa-github" aria-hidden="true"></i> Code</a><a href="https://neupi.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer" class="project-resource-btn"><i class="fa-solid fa-book" aria-hidden="true"></i> Documentation</a></span>

- **Neural-Augmented Classical Solvers**  
  **Neural Dual Bounds** <span class="award-badge"><i class="fa-solid fa-star award-icon" aria-hidden="true"></i> NeurIPS '26 Spotlight (Top 1%)</span> & **Learning to Condition (L2C)**  
  Integrating learned heuristics, valid-by-construction dual bounds, and search policies into classical probabilistic inference algorithms to accelerate convergence and reduce search complexity while preserving theoretical guarantees.  
  **Publications:** [Neural Dual Bounds (NeurIPS 2026)](https://openreview.net/forum?id=fdwZvjybdN), [Learning to Condition (NeurIPS 2025)](https://proceedings.neurips.cc/paper_files/paper/2025/file/af80ce1011eb35fe1023c320158c2ad9-Paper-Conference.pdf)  
  **Ongoing work:** [Learning to Bound](https://arxiv.org/abs/2610.39305), [BEACON](https://arxiv.org/abs/2602.01475)
  <span class="project-resource-links"><a href="https://github.com/brijml/L2C" target="_blank" rel="noopener noreferrer" class="project-resource-btn"><i class="fa-brands fa-github" aria-hidden="true"></i> Code (L2C)</a></span>

- **Deep RL for Network Diffusion & Optimization**  
  **[RELINK](https://dl.acm.org/doi/10.1145/3746252.3761006)** <span class="award-badge"><i class="fa-solid fa-bullhorn award-icon" aria-hidden="true"></i> CIKM '25 Oral</span> & **[LEAP](https://doi.org/10.1145/3799682.3840796)** (CIKM '26)  
  Reinforcement learning policies that amortize combinatorial search over complex networks for influence and fixation maximization—achieving up to five orders of magnitude faster inference than simulation-based methods.

- **Procedural Activity Understanding & Task Guidance**  
  **CaptainCook4D**  
  A 94.5-hour egocentric 4D dataset and benchmark for procedural activity understanding, error recognition, and procedure learning, complementing our work on explainable activity recognition, AR task guidance, and vision-language models.  
  **Publications:** [NeurIPS 2024 Datasets & Benchmarks](https://doi.org/10.52202/079017-4307), [IEEE VR 2024](https://doi.org/10.1109/VRW62533.2024.00283), [ACM TiiS 2023](https://doi.org/10.1145/3626961), [ACM TiiS 2026](https://doi.org/10.1145/3816700)
  <span class="project-resource-links"><a href="https://captaincook4d.github.io/captain-cook/" target="_blank" rel="noopener noreferrer" class="project-resource-btn"><i class="fa-solid fa-globe" aria-hidden="true"></i> Project</a><a href="https://github.com/CaptainCook4D/" target="_blank" rel="noopener noreferrer" class="project-resource-btn"><i class="fa-brands fa-github" aria-hidden="true"></i> Code</a></span>

- **Communication-Aware Single-Cell Genomics**  
  **CoLa-VAE**  
  A knowledge-guided variational autoencoder incorporating cell-cell communication networks to improve single-cell gene expression denoising, communication analysis, and spatial transcriptomic deconvolution.  
  **Preprint:** [bioRxiv 2026](https://doi.org/10.64898/2026.03.28.715052)
  <span class="project-resource-links"><a href="https://github.com/Yeqing95/CoLa-VAE" target="_blank" rel="noopener noreferrer" class="project-resource-btn"><i class="fa-brands fa-github" aria-hidden="true"></i> Code</a></span>
