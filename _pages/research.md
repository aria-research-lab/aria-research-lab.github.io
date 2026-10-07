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

<details class="interactive-demo-wrapper">
  <summary class="interactive-demo-summary">
    <span class="interactive-demo-summary-title">
      <span class="interactive-demo-summary-badge">Interactive Demo</span>
      <span>Valid-by-Construction Dual Bounds &amp; Search Guidance Simulation (Neural Dual Bounds &amp; L2C)</span>
    </span>
    <span class="interactive-demo-summary-chevron">&#9654;</span>
  </summary>
  <div class="interactive-demo-card" id="dual-bounds-demo">
    <div class="demo-card-header">
      <div class="demo-title-group">
        <h4>Dual Bounding Guarantees &amp; Neural Search Pruning</h4>
        <p>Interactive simulation demonstrating how antisymmetric neural messages guarantee 100% valid upper bounds to warm-start JGLP, while learned conditioning policies (L2C) prune branch-and-bound search trees.</p>
      </div>
      <div class="demo-badges">
        <span class="demo-badge demo-badge-spotlight">NeurIPS Spotlight</span>
        <span class="demo-badge demo-badge-oral">NeurIPS 2025</span>
        <span class="demo-badge demo-badge-sim">Interactive Simulation</span>
      </div>
    </div>

    <!-- Live Simulation Instrument -->
    <div class="demo-workload-box" style="margin-top: 0.5rem;">
      <div class="workload-header">
        <h5>Bound Validity Simulation</h5>
        <div class="workload-controls">
          <button type="button" class="workload-btn active" id="btn-sample-bounds">Sample 25 Predictions</button>
          <button type="button" class="workload-btn" id="btn-reset-bounds">Reset</button>
        </div>
      </div>
      <p class="demo-video-caption" style="margin-top: 0.2rem; margin-bottom: 0.75rem;">
        Each dot represents a predicted dual solution. In exact solvers like branch-and-bound, predicted bounds that fall below the true optimum prune optimal branches. <strong>Antisymmetric messages</strong> guarantee every prediction remains a valid upper bound by construction, whereas unconstrained predictors frequently violate the bounding guarantee.
      </p>

      <div class="sim-strip">
        <div class="sim-strip-row">
          <div class="sim-strip-meta">
            <span class="sim-strip-name">Antisymmetric Messages (Neural Dual Bounds)</span>
            <span class="sim-strip-count" id="count-anti"><strong>25</strong> of 25 valid (100%)</span>
          </div>
          <div class="sim-track" id="track-anti" aria-label="Valid by construction track"></div>
        </div>

        <div class="sim-strip-row">
          <div class="sim-strip-meta">
            <span class="sim-strip-name">Unconstrained Neural Predictors</span>
            <span class="sim-strip-count" id="count-free"><strong>17</strong> of 25 valid (68%)</span>
          </div>
          <div class="sim-track" id="track-free" aria-label="Unconstrained predictors track"></div>
        </div>
      </div>

      <div class="sim-legend">
        <span class="sim-legend-item"><i class="sim-legend-line"></i> True Optimum (MAP*)</span>
        <span class="sim-legend-item"><i class="sim-legend-dot"></i> Valid Upper Bound</span>
        <span class="sim-legend-item"><i class="sim-legend-bad"></i> Invalid (Below Optimum)</span>
      </div>
    </div>

    <!-- Metric Cards Grid -->
    <div class="demo-metrics-grid">
      <div class="demo-metric-card highlight-green">
        <div class="metric-name">
          <span>Neural Dual Bounds</span>
          <span class="badge badge-info" style="font-size: 0.72rem;">NeurIPS Spotlight</span>
        </div>
        <div class="metric-speedup speedup-ssmp">0 Violations</div>
        <div class="metric-stats">
          <strong>Validity:</strong> 100% by construction<br>
          <strong>Dual Gap:</strong> Up to 10<sup>6</sup>&times; reduction in 100 iters<br>
          <strong>Solvers:</strong> JGLP &amp; Constrained MAP
        </div>
      </div>

      <div class="demo-metric-card highlight-blue">
        <div class="metric-name">
          <span>Learning to Condition (L2C)</span>
          <span class="badge badge-success" style="font-size: 0.72rem;">NeurIPS 2025</span>
        </div>
        <div class="metric-speedup speedup-itself">5&times;&ndash;10&times;</div>
        <div class="metric-stats">
          <strong>Search tree:</strong> Up to 90% node reduction<br>
          <strong>Policy:</strong> Learned from solver traces<br>
          <strong>Solvers:</strong> AND/OR Branch-and-Bound
        </div>
      </div>

      <div class="demo-metric-card highlight-gray">
        <div class="metric-name">
          <span>Standard Exact Solvers</span>
          <span class="badge badge-secondary" style="font-size: 0.72rem;">Baseline</span>
        </div>
        <div class="metric-speedup speedup-baseline">&times;1.0</div>
        <div class="metric-stats">
          <strong>Scaling:</strong> Exponential in treewidth <em>w</em><br>
          <strong>Search:</strong> Full combinatorial tree expansion<br>
          <strong>Initialization:</strong> Zero or uniform warm-starts
        </div>
      </div>
    </div>

  </div>
</details>

<script>
(function() {
  function initDualBoundsSimulation() {
    var btnSample = document.getElementById("btn-sample-bounds");
    var btnReset = document.getElementById("btn-reset-bounds");
    var trackAnti = document.getElementById("track-anti");
    var trackFree = document.getElementById("track-free");
    var countAnti = document.getElementById("count-anti");
    var countFree = document.getElementById("count-free");

    if (!btnSample || !btnReset || !trackAnti || !trackFree) return;

    var totalSamples = 0;
    var validAnti = 0;
    var validFree = 0;

    function renderDots(num) {
      for (var i = 0; i < num; i++) {
        totalSamples++;

        var posAnti = 40 + Math.random() * 56;
        validAnti++;
        var dotA = document.createElement("div");
        dotA.className = "sim-dot";
        dotA.style.left = posAnti + "%";
        dotA.style.top = (15 + Math.random() * 70) + "%";
        trackAnti.appendChild(dotA);

        var posFree = 8 + Math.random() * 84;
        var dotF = document.createElement("div");
        if (posFree < 40) {
          dotF.className = "sim-dot bad";
        } else {
          validFree++;
          dotF.className = "sim-dot";
        }
        dotF.style.left = posFree + "%";
        dotF.style.top = (15 + Math.random() * 70) + "%";
        trackFree.appendChild(dotF);
      }

      countAnti.innerHTML = "<strong>" + validAnti + "</strong> of " + totalSamples + " valid (100%)";
      var pctFree = Math.round((validFree / totalSamples) * 100);
      countFree.innerHTML = "<strong>" + validFree + "</strong> of " + totalSamples + " valid (" + pctFree + "%)";
    }

    btnSample.addEventListener("click", function() {
      renderDots(25);
    });

    btnReset.addEventListener("click", function() {
      totalSamples = 0;
      validAnti = 0;
      validFree = 0;
      trackAnti.innerHTML = "";
      trackFree.innerHTML = "";
      renderDots(25);
    });

    renderDots(25);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initDualBoundsSimulation);
  } else {
    initDualBoundsSimulation();
  }
})();
</script>

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

<!-- Interactive Demo: RELINK Edge Activation Simulation -->
<details class="interactive-demo-wrapper">
  <summary class="interactive-demo-summary">
    <span class="interactive-demo-summary-title">
      <span>Interactive Demo: RELINK Edge Activation &amp; Cascade Simulation</span>
      <span class="interactive-demo-summary-badge">CIKM 2025 Oral</span>
    </span>
    <span class="interactive-demo-summary-chevron">&#9656;</span>
  </summary>

  <div class="interactive-demo-card">
    <div class="demo-card-header">
      <div class="demo-title-group">
        <h4>RELINK Edge Activation for Closed-Network Influence Maximization</h4>
        <p>Simulate sequential edge activation budgets for cascading influence spread under network privacy constraints</p>
      </div>
      <div class="demo-badges">
        <span class="demo-badge demo-badge-oral">CIKM 2025 Oral</span>
        <span class="demo-badge demo-badge-sim">Interactive Simulator</span>
      </div>
    </div>

    <!-- Metric Cards Grid -->
    <div class="demo-metrics-grid">
      <div class="demo-metric-card highlight-green">
        <div class="metric-name">
          <span>RELINK (DRL Policy)</span>
          <span class="badge badge-success" style="font-size: 0.72rem;">Our Work</span>
        </div>
        <div class="metric-speedup speedup-ssmp" id="metric-relink-gain">+38.1% Gain</div>
        <div class="metric-stats">
          <strong>Formulation:</strong> Edge-centric Deep Q-Network<br>
          <strong>Decision Step:</strong> 1.2 ms / sequential choice<br>
          <strong>Cascade:</strong> Discovers bridge connections across shielded clusters
        </div>
      </div>

      <div class="demo-metric-card highlight-blue">
        <div class="metric-name">
          <span>Degree Centrality Heuristic</span>
          <span class="badge badge-info" style="font-size: 0.72rem;">Heuristic</span>
        </div>
        <div class="metric-speedup speedup-itself">&times;1.0 Baseline</div>
        <div class="metric-stats">
          <strong>Formulation:</strong> Static node degree greedily ranked<br>
          <strong>Decision Step:</strong> 0.8 ms / choice<br>
          <strong>Cascade:</strong> Overconcentrates on visible hubs; traps cascade locally
        </div>
      </div>

      <div class="demo-metric-card highlight-gray">
        <div class="metric-name">
          <span>Random Edge Perturbation</span>
          <span class="badge badge-secondary" style="font-size: 0.72rem;">Baseline</span>
        </div>
        <div class="metric-speedup speedup-baseline">&times;0.4 Baseline</div>
        <div class="metric-stats">
          <strong>Formulation:</strong> Uniform random edge candidate selection<br>
          <strong>Decision Step:</strong> 0.1 ms / choice<br>
          <strong>Cascade:</strong> Sparse percolation with minimal network spread
        </div>
      </div>
    </div>

    <!-- Interactive Budget Selector & Live Comparison Bars -->
    <div class="demo-workload-box">
      <div class="workload-header">
        <h5>Select Edge Activation Budget (<em>k</em> edges):</h5>
        <div class="workload-controls">
          <button type="button" class="workload-btn relink-btn" data-k="5">k = 5</button>
          <button type="button" class="workload-btn relink-btn active" data-k="10">k = 10</button>
          <button type="button" class="workload-btn relink-btn" data-k="20">k = 20</button>
          <button type="button" class="workload-btn relink-btn" data-k="50">k = 50</button>
        </div>
      </div>

      <div class="demo-progress-group">
        <div class="demo-progress-row">
          <div class="demo-progress-meta">
            <span class="demo-progress-name">RELINK (Deep RL Policy)</span>
            <span class="demo-progress-val speedup-ssmp" id="val-relink-reach">42.8% network reach</span>
          </div>
          <div class="demo-progress-track">
            <div class="demo-progress-fill fill-green" id="bar-relink" style="width: 42.8%;"></div>
          </div>
        </div>

        <div class="demo-progress-row">
          <div class="demo-progress-meta">
            <span class="demo-progress-name">Degree Centrality Heuristic</span>
            <span class="demo-progress-val speedup-itself" id="val-degree-reach">31.0% network reach</span>
          </div>
          <div class="demo-progress-track">
            <div class="demo-progress-fill fill-blue" id="bar-degree" style="width: 31.0%;"></div>
          </div>
        </div>

        <div class="demo-progress-row">
          <div class="demo-progress-meta">
            <span class="demo-progress-name">Random Edge Activation</span>
            <span class="demo-progress-val speedup-baseline" id="val-random-reach">16.4% network reach</span>
          </div>
          <div class="demo-progress-track">
            <div class="demo-progress-fill fill-gray" id="bar-random" style="width: 16.4%;"></div>
          </div>
        </div>
      </div>

      <p class="demo-video-caption" id="relink-takeaway" style="margin-top: 0.85rem; margin-bottom: 0;">
        <strong>Key Takeaway:</strong> Under budget <em>k</em> = 10, RELINK identifies high-leverage bridge connections across private graph clusters, achieving <strong>42.8% reach</strong> compared to <strong>31.0%</strong> for degree heuristics (+38.1% relative improvement).
      </p>
    </div>

  </div>
</details>

<script>
(function() {
  function initRelinkSimulation() {
    var buttons = document.querySelectorAll(".relink-btn");
    var barRelink = document.getElementById("bar-relink");
    var barDegree = document.getElementById("bar-degree");
    var barRandom = document.getElementById("bar-random");
    var valRelink = document.getElementById("val-relink-reach");
    var valDegree = document.getElementById("val-degree-reach");
    var valRandom = document.getElementById("val-random-reach");
    var metricGain = document.getElementById("metric-relink-gain");
    var takeaway = document.getElementById("relink-takeaway");

    if (!buttons.length || !barRelink || !barDegree || !barRandom) return;

    var budgetData = {
      5: { relink: 28.4, degree: 19.6, random: 9.8, gain: "+44.9%" },
      10: { relink: 42.8, degree: 31.0, random: 16.4, gain: "+38.1%" },
      20: { relink: 61.2, degree: 48.5, random: 27.2, gain: "+26.2%" },
      50: { relink: 84.6, degree: 72.1, random: 49.0, gain: "+17.3%" }
    };

    buttons.forEach(function(btn) {
      btn.addEventListener("click", function() {
        buttons.forEach(function(b) { b.classList.remove("active"); });
        btn.classList.add("active");
        var k = parseInt(btn.getAttribute("data-k"), 10);
        var data = budgetData[k];
        if (!data) return;

        barRelink.style.width = data.relink + "%";
        barDegree.style.width = data.degree + "%";
        barRandom.style.width = data.random + "%";

        valRelink.textContent = data.relink + "% network reach";
        valDegree.textContent = data.degree + "% network reach";
        valRandom.textContent = data.random + "% network reach";

        metricGain.textContent = data.gain + " Gain";

        takeaway.innerHTML = "<strong>Key Takeaway:</strong> Under budget <em>k</em> = " + k +
          ", RELINK identifies high-leverage bridge connections across private graph clusters, achieving <strong>" +
          data.relink + "% reach</strong> compared to <strong>" + data.degree + "%</strong> for degree heuristics (" +
          data.gain + " relative improvement).";
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initRelinkSimulation);
  } else {
    initRelinkSimulation();
  }
})();
</script>

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

<!-- Interactive Demo: CaptainCook4D Procedural Step & Multimodal Error Inspector -->
<details class="interactive-demo-wrapper">
  <summary class="interactive-demo-summary">
    <span class="interactive-demo-summary-title">
      <span>Interactive Demo: CaptainCook4D Procedural Step &amp; Error Inspector</span>
      <span class="interactive-demo-summary-badge">NeurIPS 2024 D&amp;B</span>
    </span>
    <span class="interactive-demo-summary-chevron">&#9656;</span>
  </summary>

  <div class="interactive-demo-card">
    <div class="demo-card-header">
      <div class="demo-title-group">
        <h4>CaptainCook4D Procedural Activity &amp; Error Inspector</h4>
        <p>Inspect multimodal egocentric 4D sensory signals, procedural steps, and real-time error detection</p>
      </div>
      <div class="demo-badges">
        <span class="demo-badge demo-badge-oral">NeurIPS 2024 D&amp;B</span>
        <span class="demo-badge demo-badge-sim">Egocentric 4D Benchmark</span>
      </div>
    </div>

    <!-- Metric Cards Grid -->
    <div class="demo-metrics-grid">
      <div class="demo-metric-card highlight-green">
        <div class="metric-name">
          <span>Dataset Scale</span>
          <span class="badge badge-success" style="font-size: 0.72rem;">Benchmark</span>
        </div>
        <div class="metric-speedup speedup-ssmp">94.5 Hours</div>
        <div class="metric-stats">
          <strong>Recordings:</strong> 384 multi-view egocentric sessions<br>
          <strong>Tasks:</strong> 24 complex procedural recipes<br>
          <strong>Format:</strong> Synchronized RGB, Depth, Gaze, Audio
        </div>
      </div>

      <div class="demo-metric-card highlight-blue">
        <div class="metric-name">
          <span>Error Diversity</span>
          <span class="badge badge-info" style="font-size: 0.72rem;">Fine-Grained</span>
        </div>
        <div class="metric-speedup speedup-itself">33.2% Errorful</div>
        <div class="metric-stats">
          <strong>Categories:</strong> Technique, Measurement, Order, Prep<br>
          <strong>Annotations:</strong> Frame-accurate temporal boundaries<br>
          <strong>Validation:</strong> Dual-annotated procedural steps
        </div>
      </div>

      <div class="demo-metric-card highlight-gray">
        <div class="metric-name">
          <span>Predictive Guidance</span>
          <span class="badge badge-secondary" style="font-size: 0.72rem;">Downstream</span>
        </div>
        <div class="metric-speedup speedup-baseline">&lt; 50 ms</div>
        <div class="metric-stats">
          <strong>Application:</strong> Real-time AR headset intervention<br>
          <strong>Model Output:</strong> Online anomaly scoring &amp; cueing<br>
          <strong>Goal:</strong> Prevent procedural failure before completion
        </div>
      </div>
    </div>

    <!-- Interactive Step & Error Inspector -->
    <div class="demo-workload-box">
      <div class="workload-header">
        <h5>Select Procedural Recipe Phase:</h5>
        <div class="workload-controls">
          <button type="button" class="workload-btn cc-step-btn active" data-phase="1">Phase 1: Measurement</button>
          <button type="button" class="workload-btn cc-step-btn" data-phase="2">Phase 2: Thermal Cooking</button>
          <button type="button" class="workload-btn cc-step-btn" data-phase="3">Phase 3: Whisking</button>
          <button type="button" class="workload-btn cc-step-btn" data-phase="4">Phase 4: Order &amp; Assembly</button>
        </div>
      </div>

      <div style="display: flex; gap: 0.5rem; align-items: center; margin-top: 0.75rem; flex-wrap: wrap;">
        <span style="font-size: 0.85rem; font-weight: 600;">Execution Condition:</span>
        <button type="button" class="workload-btn cc-mode-btn" data-mode="normal">Normal Execution</button>
        <button type="button" class="workload-btn cc-mode-btn active" data-mode="error">Procedural Error</button>
      </div>

      <div class="demo-inspector-card" id="cc-inspector-display">
        <div class="demo-inspector-status">
          <div>
            <div class="demo-inspector-step-title" id="cc-step-title">Phase 1: Measure 250ml milk into mixing bowl</div>
            <span style="font-size: 0.82rem; color: var(--global-text-color-light, #6b7280);" id="cc-step-desc">Target: 250ml liquid volume poured smoothly</span>
          </div>
          <span class="badge badge-danger" id="cc-error-badge" style="font-size: 0.78rem;">Measurement Error Detected</span>
        </div>

        <div class="demo-inspector-streams">
          <div class="demo-stream-pill">
            <strong>Egocentric RGB:</strong> <span id="cc-stream-rgb">Liquid meniscus past 325ml graduation mark (+75ml excess)</span>
          </div>
          <div class="demo-stream-pill">
            <strong>3D Spatial Depth:</strong> <span id="cc-stream-depth">Fluid volume displacement +30% above expected contour</span>
          </div>
          <div class="demo-stream-pill">
            <strong>Audio Signature:</strong> <span id="cc-stream-audio">Continuous pouring duration prolonged (+4.2 sec anomaly)</span>
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.84rem; margin-top: 0.5rem; flex-wrap: wrap; gap: 0.4rem;">
          <span><strong>Model Confidence:</strong> <span class="speedup-ssmp" id="cc-model-conf">96.4% error confidence (32 ms latency)</span></span>
          <span style="color: var(--global-text-color-light, #6b7280);"><strong>Intervention:</strong> <span id="cc-model-action">AR Prompt: "Excess liquid added"</span></span>
        </div>
      </div>

      <p class="demo-video-caption" style="margin-top: 0.85rem; margin-bottom: 0;">
        <strong>Key Takeaway:</strong> CaptainCook4D captures subtle real-world mistakes across visual, depth, and auditory modalities, establishing the standard for multimodal models that proactively guide human activities.
      </p>
    </div>

  </div>
</details>

<script>
(function() {
  function initCaptainCookInspector() {
    var stepBtns = document.querySelectorAll(".cc-step-btn");
    var modeBtns = document.querySelectorAll(".cc-mode-btn");
    var stepTitle = document.getElementById("cc-step-title");
    var stepDesc = document.getElementById("cc-step-desc");
    var errorBadge = document.getElementById("cc-error-badge");
    var streamRgb = document.getElementById("cc-stream-rgb");
    var streamDepth = document.getElementById("cc-stream-depth");
    var streamAudio = document.getElementById("cc-stream-audio");
    var modelConf = document.getElementById("cc-model-conf");
    var modelAction = document.getElementById("cc-model-action");

    if (!stepBtns.length || !modeBtns.length || !stepTitle) return;

    var currentPhase = "1";
    var currentMode = "error";

    var phaseData = {
      "1": {
        normal: {
          title: "Phase 1: Measure 250ml milk into mixing bowl",
          desc: "Target: 250ml liquid volume poured smoothly",
          badge: "Normal Execution (Clean)",
          badgeClass: "badge-success",
          rgb: "Meniscus exactly at 250ml graduated line",
          depth: "Bowl volumetric displacement nominal",
          audio: "Steady 3.8s pour acoustic signature",
          conf: "99.1% step completion (28 ms latency)",
          action: "AR cue: Proceed to next step"
        },
        error: {
          title: "Phase 1: Measure 250ml milk into mixing bowl",
          desc: "Target: 250ml liquid volume poured smoothly",
          badge: "Measurement Error Detected",
          badgeClass: "badge-danger",
          rgb: "Liquid meniscus past 325ml graduation mark (+75ml excess)",
          depth: "Fluid volume displacement +30% above expected contour",
          audio: "Continuous pouring duration prolonged (+4.2 sec anomaly)",
          conf: "96.4% error confidence (32 ms latency)",
          action: "AR Prompt: 'Excess liquid added'"
        }
      },
      "2": {
        normal: {
          title: "Phase 2: Heat nonstick pan to medium simmer",
          desc: "Target: Pan preheated to 160°C before butter addition",
          badge: "Normal Execution (Clean)",
          badgeClass: "badge-success",
          rgb: "Proper burner flame level and pan placement",
          depth: "Pan centered on induction ring",
          audio: "Smooth thermal sizzle profile",
          conf: "98.5% step completion (26 ms latency)",
          action: "AR cue: Add butter now"
        },
        error: {
          title: "Phase 2: Heat nonstick pan to medium simmer",
          desc: "Target: Pan preheated to 160°C before butter addition",
          badge: "Temperature / Timing Error Detected",
          badgeClass: "badge-danger",
          rgb: "Ingredients added to cold pan immediately without preheating",
          depth: "Zero thermal heat shimmer detected on surface",
          audio: "Absence of expected sizzle acoustic onset",
          conf: "94.8% error confidence (29 ms latency)",
          action: "AR Prompt: 'Preheat pan before adding ingredients'"
        }
      },
      "3": {
        normal: {
          title: "Phase 3: Whisk mixture into uniform emulsion",
          desc: "Target: Consistent circular whisk strokes for 45 seconds",
          badge: "Normal Execution (Clean)",
          badgeClass: "badge-success",
          rgb: "Consistent circular wrist trajectory; homogenous batter",
          depth: "Smooth surface wave oscillation in bowl mesh",
          audio: "Harmonic 2.4 Hz whisk contact cadence",
          conf: "97.8% step completion (30 ms latency)",
          action: "AR cue: Emulsion reached"
        },
        error: {
          title: "Phase 3: Whisk mixture into uniform emulsion",
          desc: "Target: Consistent circular whisk strokes for 45 seconds",
          badge: "Technique Error Detected",
          badgeClass: "badge-danger",
          rgb: "Incomplete whisking; large unblended flour clusters remain",
          depth: "Irregular clump height anomalies on surface",
          audio: "Erratic contact pattern; whisk stopped at 12s",
          conf: "95.2% error confidence (34 ms latency)",
          action: "AR Prompt: 'Whisk 30s longer to dissolve lumps'"
        }
      },
      "4": {
        normal: {
          title: "Phase 4: Rest batter and plate final dish",
          desc: "Target: Let rest 5 min, then ladle onto warm serving dish",
          badge: "Normal Execution (Clean)",
          badgeClass: "badge-success",
          rgb: "Cooked crepe transferred intact using silicone spatula",
          depth: "Center-aligned placement on target plate",
          audio: "Soft plate contact acoustic profile",
          conf: "99.4% step completion (27 ms latency)",
          action: "AR cue: Recipe completed successfully"
        },
        error: {
          title: "Phase 4: Rest batter and plate final dish",
          desc: "Target: Let rest 5 min, then ladle onto warm serving dish",
          badge: "Sequence / Order Error Detected",
          badgeClass: "badge-danger",
          rgb: "Plated raw batter directly onto plate skipping cooking step",
          depth: "Fluid viscosity detected on plate instead of solid crepe",
          audio: "Zero cook cycle recorded prior to plating",
          conf: "98.7% error confidence (31 ms latency)",
          action: "AR Prompt: 'Critical: Cook mixture before plating'"
        }
      }
    };

    function updateDisplay() {
      var d = phaseData[currentPhase][currentMode];
      if (!d) return;

      stepTitle.textContent = d.title;
      stepDesc.textContent = d.desc;
      errorBadge.textContent = d.badge;
      errorBadge.className = "badge " + d.badgeClass;
      streamRgb.textContent = d.rgb;
      streamDepth.textContent = d.depth;
      streamAudio.textContent = d.audio;
      modelConf.textContent = d.conf;
      modelAction.textContent = d.action;
    }

    stepBtns.forEach(function(btn) {
      btn.addEventListener("click", function() {
        stepBtns.forEach(function(b) { b.classList.remove("active"); });
        btn.classList.add("active");
        currentPhase = btn.getAttribute("data-phase");
        updateDisplay();
      });
    });

    modeBtns.forEach(function(btn) {
      btn.addEventListener("click", function() {
        modeBtns.forEach(function(b) { b.classList.remove("active"); });
        btn.classList.add("active");
        currentMode = btn.getAttribute("data-mode");
        updateDisplay();
      });
    });

    updateDisplay();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCaptainCookInspector);
  } else {
    initCaptainCookInspector();
  }
})();
</script>

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
