---
layout: page
permalink: /research/
title: research
description: Core research directions of the ARIA Research Lab at NJIT, including neurosymbolic AI, probabilistic reasoning, neural combinatorial optimization, graph optimization, human-AI interaction, vision-language AI, and AI applications.
keywords: ARIA Research Lab research, NJIT AI research, Shivvrat Arya, neurosymbolic AI, probabilistic reasoning, neural combinatorial optimization, graph optimization, trustworthy AI, human-AI interaction, vision-language models, multimodal AI, computational biology
nav: true
nav_order: 1
---

The **Algorithms and Architectures for Reasoning and Intelligent Automation (ARIA) Lab** at NJIT develops learning-based methods for reasoning and decision-making in complex, structured domains. Our research lies at the intersection of machine learning, probabilistic modeling, symbolic reasoning, and mathematical optimization, with the goal of building AI systems that are reliable, interpretable, and scalable.

Our core research agenda focuses on **neuro-symbolic reasoning and probabilistic inference**, including both direct neural approximation of inference problems and neural methods that augment classical solvers, as well as **neural combinatorial optimization** for structured decision-making. Building on these foundations, we study **structured and multimodal intelligence**, including procedural video understanding and human-guided vision-language systems, and develop methods for **AI for scientific discovery**, particularly in computational biology.

<div class="alert alert-info">

🤝 We welcome collaborations with academic and industry researchers working in these or closely related areas. If you are interested in exploring a potential collaboration, please contact Dr. Arya.

</div>

## Research directions

- **[Neuro-Symbolic Reasoning and Probabilistic Inference](#neuro-symbolic-reasoning-and-probabilistic-inference)**
  - [Neural Approximation of Probabilistic Inference](#neural-approximation-of-probabilistic-inference)
  - [Neural-Augmented Classical Probabilistic Inference](#neural-augmented-classical-probabilistic-inference)
  - [Optimization-Based Structured Inference](#optimization-based-structured-inference)
- **[Neural Combinatorial Optimization](#neural-combinatorial-optimization)**
- **[Structured and Multimodal Intelligence](#structured-and-multimodal-intelligence)**
  - [Structured Video Understanding and Activity Reasoning](#structured-video-understanding-and-activity-reasoning)
  - [Human-Guided Vision-Language and Multimodal AI](#human-guided-vision-language-and-multimodal-ai)
- **[AI for Scientific Discovery](#ai-for-scientific-discovery)**
  - [Computational Biology](#computational-biology)

---

## Neuro-Symbolic Reasoning and Probabilistic Inference

We develop learning-based and optimization-based methods for reasoning under uncertainty in structured probabilistic models. Our research combines neural networks with probabilistic inference, symbolic structure, classical algorithms, and mathematical optimization to improve the efficiency and scalability of challenging inference tasks. Rather than committing to a single computational paradigm, we study how learned and algorithmic components can be combined at different levels of the inference pipeline.

Our work currently spans three complementary directions:

- **Neural Approximation:** Neural networks directly learn computationally expensive inference mappings, producing high-quality solutions in one or a few forward passes, optionally followed by inference-time optimization.

- **Neural Augmentation:** Learned components operate within or alongside classical inference algorithms, providing warm starts, conditioning strategies, branching policies, node-selection heuristics, or local-search guidance while retaining the underlying solver framework.

- **Optimization-Based Structured Inference:** Optimization techniques, including integer linear programming and local search, are used to reason directly over structured probabilistic dependency representations.

### Neural Approximation of Probabilistic Inference

<figure class="figure">
  <img src="/assets/img/publication_preview/nn_pipeline.png"
       class="figure-img img-fluid"
       alt="Neural probabilistic inference pipeline">
</figure>

Neural approximation treats probabilistic inference itself as a learnable mapping. Given a probabilistic model and evidence, a neural network predicts high-quality solutions to inference queries in one or a few forward passes. These predictions can also be refined through inference-time or test-time self-supervised optimization when additional accuracy is required.

<details class="interactive-demo-wrapper">
  <summary class="interactive-demo-summary">
    <span class="interactive-demo-summary-title">
      <span class="interactive-demo-summary-badge">Interactive Demo</span>
      <span>Neural Inference Latency &amp; Speedup Benchmark (SSMP, ITSELF vs. Baseline)</span>
    </span>
    <span class="interactive-demo-summary-chevron">&#9654;</span>
  </summary>
  <div class="interactive-demo-card" id="neural-inference-demo">
  <div class="demo-card-header">
    <div class="demo-title-group">
      <h4>Interactive Benchmark: Neural Inference Latency & Speedup</h4>
      <p>Empirical latency and throughput comparison of our methods (<strong>SSMP</strong>, <strong>ITSELF</strong>) against traditional combinatorial baselines.</p>
    </div>
    <div class="demo-badges">
      <span class="demo-badge demo-badge-oral">AAAI Oral</span>
      <span class="demo-badge demo-badge-spotlight">NeurIPS Spotlight</span>
      <span class="demo-badge demo-badge-sim">Interactive Demo</span>
    </div>
  </div>

  <div class="demo-video-wrapper">
    <video id="benchmark-video" controls playsinline autoplay muted loop preload="metadata">
      <source src="{{ '/assets/video/itself_comparison.mp4' | relative_url }}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
  <p class="demo-video-caption">
    <strong>Benchmark Visualization:</strong> One Left&rarr;Right traverse represents 1 inference query. In the time the classical baseline completes a fraction of a query (2.703 s/inf), <strong>ITSELF</strong> completes an iterative test-time optimization pass (784 ms/inf, 3.4&times; faster), while <strong>SSMP</strong> processes over 111,000 queries via amortized continuous relaxation (9.87 &micro;s/inf, &gt;273,000&times; faster).
  </p>

  <div class="demo-metrics-grid">
    <div class="demo-metric-card highlight-green">
      <div class="metric-name">
        <span>SSMP</span>
        <span class="badge badge-success" style="font-size: 0.72rem;">AAAI Oral</span>
      </div>
      <div class="metric-speedup speedup-ssmp">&times;273,860.2</div>
      <div class="metric-stats">
        <strong>1 inference:</strong> 9.870 &micro;s<br>
        <strong>Throughput:</strong> 101,317.12 /s<br>
        <strong>Traverses:</strong> 111,448 one-way
      </div>
    </div>

    <div class="demo-metric-card highlight-blue">
      <div class="metric-name">
        <span>ITSELF</span>
        <span class="badge badge-info" style="font-size: 0.72rem;">NeurIPS Spotlight</span>
      </div>
      <div class="metric-speedup speedup-itself">&times;3.4</div>
      <div class="metric-stats">
        <strong>1 inference:</strong> 784.000 ms<br>
        <strong>Throughput:</strong> 1.28 /s<br>
        <strong>Traverses:</strong> 1 one-way pass
      </div>
    </div>

    <div class="demo-metric-card highlight-gray">
      <div class="metric-name">
        <span>Traditional Baseline</span>
        <span class="badge badge-secondary" style="font-size: 0.72rem;">Exact Solver</span>
      </div>
      <div class="metric-speedup speedup-baseline">&times;1.0</div>
      <div class="metric-stats">
        <strong>1 inference:</strong> 2.703 s<br>
        <strong>Throughput:</strong> 0.37 /s<br>
        <strong>Traverses:</strong> 0 completed in window
      </div>
    </div>

  </div>

  <div class="demo-workload-box">
    <div class="workload-header">
      <h5>Interactive Workload Simulator</h5>
      <div class="workload-controls" role="group" aria-label="Query workload selector">
        <button type="button" class="workload-btn" data-count="1000">1,000 queries</button>
        <button type="button" class="workload-btn active" data-count="10000">10,000 queries</button>
        <button type="button" class="workload-btn" data-count="100000">100,000 queries</button>
        <button type="button" class="workload-btn" data-count="1000000">1,000,000 queries</button>
      </div>
    </div>
    <div class="workload-results-grid">
      <div class="workload-result-item">
        <div class="item-label">SSMP Execution Time</div>
        <div class="item-val speedup-ssmp" id="time-ssmp">98.7 ms</div>
      </div>
      <div class="workload-result-item">
        <div class="item-label">ITSELF Execution Time</div>
        <div class="item-val speedup-itself" id="time-itself">2.18 hours</div>
      </div>
      <div class="workload-result-item">
        <div class="item-label">Baseline Execution Time</div>
        <div class="item-val speedup-baseline" id="time-baseline">7.51 hours</div>
      </div>
    </div>
    <p class="demo-video-caption" id="calc-speedup-highlight" style="margin-top: 0.65rem; margin-bottom: 0;">
      <strong>Key Takeaway:</strong> For 10,000 queries, SSMP finishes in <strong>98.7 ms</strong>, whereas the traditional baseline stalls for <strong>7.51 hours</strong> (over 273,000&times; speedup), unlocking real-time probabilistic reasoning.
    </p>
  </div>

  <details class="demo-table-details">
    <summary>View Comprehensive Methodology & Benchmark Comparison Table</summary>
    <div class="demo-table-wrap">
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Venue / Honor</th>
            <th>Task</th>
            <th>Inference Mechanism</th>
            <th>Latency (1 Inf)</th>
            <th>Throughput</th>
            <th>Speedup</th>
            <th>Supervised Labels?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>SSMP</strong></td>
            <td>AAAI 2024 Oral</td>
            <td>Marginal MAP in PCs</td>
            <td>Amortized continuous multilinear relaxation</td>
            <td><strong>9.870 &micro;s</strong></td>
            <td><strong>101,317.12 /s</strong></td>
            <td><strong>&times;273,860.2</strong></td>
            <td>Zero (Self-Supervised)</td>
          </tr>
          <tr>
            <td><strong>ITSELF</strong></td>
            <td>NeurIPS 2024 Spotlight</td>
            <td>Arbitrary MPE in PMs</td>
            <td>Inference-time self-supervised optimization</td>
            <td><strong>784.000 ms</strong></td>
            <td><strong>1.28 /s</strong></td>
            <td><strong>&times;3.4</strong></td>
            <td>Zero (Self-Supervised)</td>
          </tr>
          <tr>
            <td><strong>Traditional Baseline</strong></td>
            <td>Exact</td>
            <td>Standard Combinatorial Search</td>
            <td>Branch-and-bound</td>
            <td>2.703 s</td>
            <td>0.37 /s</td>
            <td>&times;1.0</td>
            <td>N/A</td>
          </tr>
        </tbody>
      </table>
    </div>
  </details>
</div>
</details>

<script>
(function() {
  function initBenchmarkCalculator() {
    var buttons = document.querySelectorAll(".workload-btn");
    var resSSMP = document.getElementById("time-ssmp");
    var resITSELF = document.getElementById("time-itself");
    var resBase = document.getElementById("time-baseline");
    var resSpeedup = document.getElementById("calc-speedup-highlight");

    if (!buttons.length || !resSSMP || !resITSELF || !resBase) return;

    var latencies = {
      ssmp: 0.00000987,
      itself: 0.784,
      baseline: 2.703
    };

    function formatTime(seconds) {
      if (seconds < 0.001) return (seconds * 1000000).toFixed(1) + " µs";
      if (seconds < 1) return (seconds * 1000).toFixed(1) + " ms";
      if (seconds < 60) return seconds.toFixed(2) + " sec";
      if (seconds < 3600) return (seconds / 60).toFixed(2) + " min";
      var hours = seconds / 3600;
      if (hours < 24) return hours.toFixed(2) + " hours";
      return (hours / 24).toFixed(1) + " days";
    }

    buttons.forEach(function(btn) {
      btn.addEventListener("click", function() {
        buttons.forEach(function(b) { b.classList.remove("active"); });
        btn.classList.add("active");
        var count = parseInt(btn.getAttribute("data-count"), 10);
        if (isNaN(count)) return;

        var tSSMP = count * latencies.ssmp;
        var tITSELF = count * latencies.itself;
        var tBase = count * latencies.baseline;

        resSSMP.textContent = formatTime(tSSMP);
        resITSELF.textContent = formatTime(tITSELF);
        resBase.textContent = formatTime(tBase);

        if (resSpeedup) {
          if (count >= 10000) {
            resSpeedup.innerHTML = "<strong>Key Takeaway:</strong> For " + count.toLocaleString() + " queries, SSMP finishes in <strong>" + formatTime(tSSMP) + "</strong>, whereas the traditional baseline stalls for <strong>" + formatTime(tBase) + "</strong> (" + (tBase / tSSMP).toFixed(0).toLocaleString() + "&times; speedup), unlocking real-time probabilistic reasoning.";
          } else {
            resSpeedup.innerHTML = "<strong>Key Takeaway:</strong> SSMP processes queries in real time (&lt;10 &micro;s per query), delivering over 273,000&times; speedup over the combinatorial baseline.";
          }
        }
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initBenchmarkCalculator);
  } else {
    initBenchmarkCalculator();
  }
})();
</script>

- **SINE: Scalable MPE Inference for Probabilistic Graphical Models using Advanced Neural Embeddings** ([AISTATS 2025](https://proceedings.mlr.press/v258/arya25a.html))
  - Learns structural and parameter-aware embeddings of probabilistic graphical models together with advanced discretization schemes to predict near-optimal Most Probable Explanation (MPE) assignments in real time.

- **A Neural Network Approach for Efficiently Answering Most Probable Explanation Queries in Probabilistic Models** ([NeurIPS 2024 Spotlight](https://proceedings.neurips.cc/paper_files/paper/2024/hash/3ae2d3297891cad0c56dd12d60ff7dde-Abstract-Conference.html); [UAI TPM 2024 Best Paper](https://shivvrat.github.io/certificates/tpm_certificate.jpg))
  - Introduces the **ITSELF** engine: distills MPE queries for a probabilistic model into a neural network approximator and refines predicted configurations through inference-time self-supervised optimization for fast, high-accuracy query answering _(demonstrated in the interactive benchmark above: 3.4&times; speedup with iterative test-time refinement)_.

- **Neural Network Approximators for Marginal MAP in Probabilistic Circuits** ([AAAI 2024 Oral](https://ojs.aaai.org/index.php/AAAI/article/view/28966/29836))
  - Introduces **SSMP**: solves challenging marginal MAP queries in probabilistic circuits by training neural network approximators over a continuous multilinear relaxation, enabling fast linear-time inference during evaluation _(demonstrated in the interactive benchmark above: sub-10 &micro;s inference, &gt;273,000&times; speedup)_.

- **Learning to Solve the Constrained Most Probable Explanation Task in Probabilistic Graphical Models** ([AISTATS 2024](https://proceedings.mlr.press/v238/arya24b.html))
  - Develops a self-supervised neural framework for probabilistic inference under explicit constraints, jointly optimizing solution quality and constraint satisfaction through specialized loss formulations.

### Neural-Augmented Classical Probabilistic Inference

<figure class="figure">
  <img src="/assets/img/publication_preview/L2C.png"
       class="figure-img img-fluid"
       alt="Learning to Condition (L2C) heuristic architecture">
</figure>

Neural augmentation preserves the structure of classical inference algorithms while introducing learned components that improve their computational behavior. Neural models can provide warm starts, conditioning decisions, branching and node-selection heuristics, or guidance for local search. This approach uses learning to reduce search and accelerate convergence while retaining the structure, guarantees, or certificates provided by the underlying solver when applicable.

- **Neural Dual Bounds: Valid-by-Construction JGLP Warm-Starts for MAP and Constrained MAP** ([NeurIPS 2026 Spotlight](https://openreview.net/forum?id=fdwZvjybdN))
  - Predicts valid-by-construction dual bounds to warm-start Join Graph Linear Programming (JGLP) for MAP and constrained MAP inference in graphical models, guaranteeing bound validity architecturally while accelerating solver convergence and providing rigorous bounding certificates.

- **Learning to Condition: A Neural Heuristic for Scalable MPE Inference** ([NeurIPS 2025](https://openreview.net/forum?id=otIdC4tsYf); [Code](https://github.com/brijml/L2C))
  - Learns a neural conditioning policy from solver search traces that serves both as a variable-conditioning strategy before exact inference and as a branching and node-selection heuristic within branch-and-bound, substantially reducing search spaces while maintaining solution quality.

- **BEACON: Learning to Guide Local Search for MPE Inference in Probabilistic Graphical Models** ([ArXiv](https://arxiv.org/abs/2602.01475))
  - Amortizes repeated MPE inference in fixed-structure graphical models using an attention-based architecture that scores local-search moves according to estimated Hamming-distance reduction, guiding neighbor selection to improve convergence and solution quality in high-treewidth models.

### Optimization-Based Structured Inference

<div class="row">
  <div class="col-md-6">
    <figure class="figure">
      <img src="/assets/img/publication_preview/ddn.png"
           class="figure-img img-fluid"
           alt="Illustrating improvements from our new inference schemes for DDNs. The DDN learns relationships between labels, and the inference schemes reason over them to accurately identify concealed objects, such as  sports ball.">
    </figure>
  </div>
  <div class="col-md-6">
    <figure class="figure">
      <img src="/assets/img/publication_preview/ddn_main_figure.png"
           class="figure-img img-fluid"
           alt="Illustration of Dependency Network for multi-label video classification. The NN takes video clips (frames) as input and outputs the features $e_1,e_2,...,e_n$ (denoted by red colored nodes). These features are then used by the sigmoid output ($\sigma_1$, $\ldots$, $\sigma_n$) of the dependency layer to model the local conditional distributions.">
    </figure>
  </div>
</div>

We develop optimization-based structured inference methods that explicitly reason over structured dependencies and combinatorial constraints.

- **Deep Dependency Networks and Advanced Inference Schemes for Multi-Label Classification** ([AISTATS 2024](https://proceedings.mlr.press/v238/arya24a.html))
  - Formulates multi-label prediction in images and videos by coupling deep dependency networks with local search and integer linear programming (ILP) inference, capturing complex label dependencies without sacrificing training simplicity.

---

## Neural Combinatorial Optimization

We develop learning-based methods for solving large-scale combinatorial optimization problems over structured domains. Our research combines deep reinforcement learning, representation learning, and classical optimization to learn effective decision policies for problems with large discrete action spaces, complex dependencies, and domain-specific constraints. A particular focus is graph-structured optimization, where learned representations can exploit topology and problem structure to make efficient sequential decisions.

<figure class="figure">
  <img src="/assets/img/publication_preview/RELINK.png" class="figure-img img-fluid" alt="RELINK deep reinforcement learning framework for edge activation">
</figure>

Our current work investigates neural combinatorial optimization for decision-making over complex networks, including problems in which solutions require sequentially selecting or modifying nodes, edges, or other discrete structures. These methods aim to amortize expensive optimization across problem instances by learning policies that capture reusable structural patterns while accommodating operational, privacy, and other application-specific constraints.

- **RELINK: Edge Activation for Closed Network Influence Maximization via Deep Reinforcement Learning** ([CIKM 2025 Oral](https://dl.acm.org/doi/10.1145/3746252.3761006))
  - Formulates edge-level influence maximization in privacy-constrained closed networks as a Markov Decision Process and learns an edge-centric deep Q-learning policy for sequential edge activation, outperforming conventional edge-activation baselines.

---

## Structured and Multimodal Intelligence

We develop learning methods for reasoning over complex perceptual and multimodal data by combining high-dimensional representations with explicit structure. Our research studies how temporal dependencies, task structure, relational representations, and human feedback can improve the reliability, interpretability, and adaptability of models operating across visual, linguistic, and multimodal domains. More broadly, we investigate how structured reasoning can bridge low-level perception and higher-level understanding, prediction, and decision-making.

### Structured Video Understanding and Activity Reasoning

<figure class="figure">

  <img src="/assets/img/publication_preview/CaptainCook4D.gif" class="figure-img img-fluid" alt="CaptainCook4D egocentric 4D cooking dataset">

</figure>

Our work in video understanding focuses on modeling the temporal and procedural structure of complex activities. Rather than treating videos as collections of isolated frames or short clips, we study representations that capture multi-step workflows, dependencies among actions, deviations from expected procedures, and the context needed for explanation and prediction. These structured models support tasks such as activity recognition, procedural error detection, temporal localization, explanation, and predictive task guidance.

- **CaptainCook4D: a dataset for understanding errors in procedural activities** ([NeurIPS D&B Track 2024](https://neurips.cc/virtual/2024/poster/97640); DMLR 2023)
  - Introduces a 94.5-hour egocentric 4D dataset of recipe execution containing both normal and errorful trials, with fine-grained annotations supporting error recognition, multi-step temporal localization, and procedure learning.

- **Explainable Activity Recognition in Videos Using Deep Learning and Tractable Probabilistic Models** ([ACM TiiS 2023](https://dl.acm.org/doi/full/10.1145/3626961))
  - Integrates deep video representations with dynamic cutset networks to construct tractable temporal models that support probabilistic explanation queries while maintaining competitive activity-recognition performance.

- **Predictive Task Guidance with Artificial Intelligence in Augmented Reality** (IEEE VR 2024 Workshop / Poster)
  - Investigates structured predictive models for augmented-reality task guidance that anticipate user actions and provide proactive assistance during complex procedural activities.

### Human-Guided Vision-Language and Multimodal AI

<figure class="figure">

  <img src="/assets/img/publication_preview/TiiS_FACOLE.png" class="figure-img img-fluid" alt="Vision-language model feedback interface">

</figure>

We study multimodal systems that integrate visual and linguistic representations with structured human feedback. This work investigates how different forms of human guidance, from detailed natural-language feedback to lightweight corrective signals, can improve model reliability, task adaptation, and downstream multimodal understanding. More broadly, we are interested in interactive learning frameworks in which human feedback becomes an explicit component of model reasoning and adaptation.

- **Comparison of Text-Based Inputs for Human-in-the-Loop Feedback in Vision-Language Models** ([ACM TiiS 2026](https://doi.org/10.1145/3816700))
  - Studies different forms of human-in-the-loop feedback for video understanding, comparing detailed natural-language commentary, word-level corrections, and lower-cost scalar judgments for improving model reliability.

---

## AI for Scientific Discovery

We develop machine learning methods that incorporate scientific structure, prior knowledge, and domain constraints into data-driven models for scientific discovery. Our research focuses on problems where observations are high-dimensional, interactions are structured, and purely black-box learning may fail to capture the mechanisms underlying the data. By combining representation learning, generative modeling, graph-based reasoning, and optimization with domain knowledge, we aim to build models that support both accurate prediction and scientifically meaningful interpretation.

### Computational Biology

<figure class="figure">

  <img src="/assets/img/publication_preview/CoLaVAE.png" class="figure-img img-fluid" alt="CoLa-VAE cell-cell communication-aware variational autoencoder">

</figure>

Our work in computational biology develops structured representation-learning methods for complex biological systems, with a current emphasis on single-cell genomics and transcriptomics. We incorporate biological knowledge, including molecular interactions and cell-cell communication structure, directly into deep generative models to learn representations that better reflect cellular organization, heterogeneity, and intercellular relationships.

- **CoLa-VAE: Cell-Cell Communication-aware Variational Autoencoder with Dynamic Graph Laplacian Constraints** ([bioRxiv 2026](https://doi.org/10.64898/2026.03.28.715052); [Code](https://github.com/Yeqing95/CoLa-VAE))
  - Integrates cell-cell communication structure into a variational autoencoder through dynamic graph Laplacian regularization derived from ligand-receptor interactions, improving learned representations of single-cell transcriptomic data.
