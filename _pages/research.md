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
  - [NeSy: Neural Approximation of Probabilistic Inference](#nesy-neural-approximation-of-probabilistic-inference)
  - [NeSy: Neural-Augmented Classical Probabilistic Inference](#nesy-neural-augmented-classical-probabilistic-inference)
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

* **Neural Approximation:** Neural networks directly learn computationally expensive inference mappings, producing high-quality solutions in one or a few forward passes, optionally followed by inference-time optimization.

* **Neural Augmentation:** Learned components operate within or alongside classical inference algorithms, providing warm starts, conditioning strategies, branching policies, node-selection heuristics, or local-search guidance while retaining the underlying solver framework.

Optimization techniques, including integer linear programming and local search, are used to reason directly over structured probabilistic dependency representations.

### NeSy: Neural Approximation of Probabilistic Inference

<figure class="figure">
  <img src="/assets/img/publication_preview/nn_pipeline.png"
       class="figure-img img-fluid"
       alt="Neural probabilistic inference pipeline">
</figure>

Neural approximation treats probabilistic inference itself as a learnable mapping. Given a probabilistic model and evidence, a neural network predicts high-quality solutions to inference queries in one or a few forward passes. These predictions can also be refined through inference-time or test-time self-supervised optimization when additional accuracy is required.

* **SINE: Scalable MPE Inference for Probabilistic Graphical Models using Advanced Neural Embeddings** ([AISTATS 2025](https://proceedings.mlr.press/v258/arya25a.html))

  * Learns structural and parameter-aware embeddings of probabilistic graphical models together with advanced discretization schemes to predict near-optimal Most Probable Explanation (MPE) assignments in real time.

* **A Neural Network Approach for Efficiently Answering Most Probable Explanation Queries in Probabilistic Models** ([NeurIPS 2024 Spotlight](https://proceedings.neurips.cc/paper_files/paper/2024/hash/3ae2d3297891cad0c56dd12d60ff7dde-Abstract-Conference.html); [UAI TPM 2024 Best Paper](https://shivvrat.github.io/certificates/tpm_certificate.jpg))

  * Distills MPE queries for a probabilistic model into a neural network approximator and refines predicted configurations through inference-time self-supervised optimization for fast, high-accuracy query answering.

* **Neural Network Approximators for Marginal MAP in Probabilistic Circuits** ([AAAI 2024 Oral](https://ojs.aaai.org/index.php/AAAI/article/view/28966/29836))

  * Solves challenging marginal MAP queries in probabilistic circuits by training neural network approximators over a continuous multilinear relaxation, enabling fast linear-time inference during evaluation.

* **Learning to Solve the Constrained Most Probable Explanation Task in Probabilistic Graphical Models** ([AISTATS 2024](https://proceedings.mlr.press/v238/arya24b.html))

  * Develops a self-supervised neural framework for probabilistic inference under explicit constraints, jointly optimizing solution quality and constraint satisfaction through specialized loss formulations.

### NeSy: Neural-Augmented Classical Probabilistic Inference

<figure class="figure">
  <img src="/assets/img/publication_preview/L2C.png"
       class="figure-img img-fluid"
       alt="Learning to Condition (L2C) heuristic architecture">
</figure>

Neural augmentation preserves the structure of classical inference algorithms while introducing learned components that improve their computational behavior. Neural models can provide warm starts, conditioning decisions, branching and node-selection heuristics, or guidance for local search. This approach uses learning to reduce search and accelerate convergence while retaining the structure, guarantees, or certificates provided by the underlying solver when applicable.

* **Neural Dual Bounds: Valid-by-Construction JGLP Warm-Starts for MAP and Constrained MAP** ([NeurIPS 2026 Spotlight](https://openreview.net/forum?id=fdwZvjybdN))

  * Predicts valid-by-construction dual bounds to warm-start Join Graph Linear Programming (JGLP) for MAP and constrained MAP inference in graphical models, guaranteeing bound validity architecturally while accelerating solver convergence and providing rigorous bounding certificates.

* **Learning to Condition: A Neural Heuristic for Scalable MPE Inference** ([NeurIPS 2025](https://openreview.net/forum?id=otIdC4tsYf))

  * Learns a neural conditioning policy from solver search traces that serves both as a variable-conditioning strategy before exact inference and as a branching and node-selection heuristic within branch-and-bound, substantially reducing search spaces while maintaining solution quality.

* **BEACON: Learning to Guide Local Search for MPE Inference in Probabilistic Graphical Models** ([ArXiv](https://arxiv.org/abs/2602.01475))

  * Amortizes repeated MPE inference in fixed-structure graphical models using an attention-based architecture that scores local-search moves according to estimated Hamming-distance reduction, guiding neighbor selection to improve convergence and solution quality in high-treewidth models.

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
           alt="Illustration of Dependency Network for multi-label video classification. The NN takes video clips (frames) as input and outputs the features $e_1,e_2,...,e_n$ (denoted by red colored nodes). These features are then used by the sigmoid output ($\sigma_1$, $\ldots$, $\sigma_n$) of the dependency layer to model the local conditional distributions. \eat{At each output node (blue boxes), the form of the conditional distribution is variable given its parents (incoming arrows represented by orange and blue color).}">
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

* **RELINK: Edge Activation for Closed Network Influence Maximization via Deep Reinforcement Learning** ([CIKM 2025](https://dl.acm.org/doi/10.1145/3746252.3761006))

  * Formulates edge-level influence maximization in privacy-constrained closed networks as a Markov Decision Process and learns an edge-centric deep Q-learning policy for sequential edge activation, outperforming conventional edge-activation baselines.

---

## Structured and Multimodal Intelligence

We develop learning methods for reasoning over complex perceptual and multimodal data by combining high-dimensional representations with explicit structure. Our research studies how temporal dependencies, task structure, relational representations, and human feedback can improve the reliability, interpretability, and adaptability of models operating across visual, linguistic, and multimodal domains. More broadly, we investigate how structured reasoning can bridge low-level perception and higher-level understanding, prediction, and decision-making.

### Structured Video Understanding and Activity Reasoning

<figure class="figure">

  <img src="/assets/img/publication_preview/CaptainCook4D.gif" class="figure-img img-fluid" alt="CaptainCook4D egocentric 4D cooking dataset">

</figure>

Our work in video understanding focuses on modeling the temporal and procedural structure of complex activities. Rather than treating videos as collections of isolated frames or short clips, we study representations that capture multi-step workflows, dependencies among actions, deviations from expected procedures, and the context needed for explanation and prediction. These structured models support tasks such as activity recognition, procedural error detection, temporal localization, explanation, and predictive task guidance.

* **CaptainCook4D: a dataset for understanding errors in procedural activities** ([NeurIPS D&B Track 2024](https://neurips.cc/virtual/2024/poster/97640); DMLR 2023)

  * Introduces a 94.5-hour egocentric 4D dataset of recipe execution containing both normal and errorful trials, with fine-grained annotations supporting error recognition, multi-step temporal localization, and procedure learning.

* **Explainable Activity Recognition in Videos Using Deep Learning and Tractable Probabilistic Models** ([ACM TiiS 2023](https://dl.acm.org/doi/full/10.1145/3626961))

  * Integrates deep video representations with dynamic cutset networks to construct tractable temporal models that support probabilistic explanation queries while maintaining competitive activity-recognition performance.

* **Predictive Task Guidance with Artificial Intelligence in Augmented Reality** (IEEE VR 2024 Workshop / Poster)

  * Investigates structured predictive models for augmented-reality task guidance that anticipate user actions and provide proactive assistance during complex procedural activities.

### Human-Guided Vision-Language and Multimodal AI

<figure class="figure">

  <img src="/assets/img/publication_preview/TiiS_FACOLE.png" class="figure-img img-fluid" alt="Vision-language model feedback interface">

</figure>

We study multimodal systems that integrate visual and linguistic representations with structured human feedback. This work investigates how different forms of human guidance, from detailed natural-language feedback to lightweight corrective signals, can improve model reliability, task adaptation, and downstream multimodal understanding. More broadly, we are interested in interactive learning frameworks in which human feedback becomes an explicit component of model reasoning and adaptation.

* **Comparison of Text-Based Inputs for Human-in-the-Loop Feedback in Vision-Language Models** ([ACM TiiS 2026](https://doi.org/10.1145/3816700))

  * Studies different forms of human-in-the-loop feedback for video understanding, comparing detailed natural-language commentary, word-level corrections, and lower-cost scalar judgments for improving model reliability.

---

## AI for Scientific Discovery

We develop machine learning methods that incorporate scientific structure, prior knowledge, and domain constraints into data-driven models for scientific discovery. Our research focuses on problems where observations are high-dimensional, interactions are structured, and purely black-box learning may fail to capture the mechanisms underlying the data. By combining representation learning, generative modeling, graph-based reasoning, and optimization with domain knowledge, we aim to build models that support both accurate prediction and scientifically meaningful interpretation.

### Computational Biology

<figure class="figure">

  <img src="/assets/img/publication_preview/CoLaVAE.png" class="figure-img img-fluid" alt="CoLa-VAE cell-cell communication-aware variational autoencoder">

</figure>

Our work in computational biology develops structured representation-learning methods for complex biological systems, with a current emphasis on single-cell genomics and transcriptomics. We incorporate biological knowledge, including molecular interactions and cell-cell communication structure, directly into deep generative models to learn representations that better reflect cellular organization, heterogeneity, and intercellular relationships.

* **CoLa-VAE: Cell-Cell Communication-aware Variational Autoencoder with Dynamic Graph Laplacian Constraints** ([bioRxiv 2026](https://doi.org/10.64898/2026.03.28.715052))

  * Integrates cell-cell communication structure into a variational autoencoder through dynamic graph Laplacian regularization derived from ligand-receptor interactions, improving learned representations of single-cell transcriptomic data.
