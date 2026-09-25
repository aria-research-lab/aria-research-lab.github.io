---
layout: page
title: "Learning to Condition (L2C)"
description: A scalable neural heuristic framework for accelerating Most Probable Explanation (MPE) inference in probabilistic graphical models.
img: assets/img/publication_preview/L2C.png
importance: 2
category: research
---

Learning to Condition (L2C) is a scalable, data-driven framework for accelerating **Most Probable Explanation (MPE)** inference in Probabilistic Graphical Models (PGMs).

MPE inference—finding the most likely assignment to unobserved variables given evidence—is fundamentally NP-hard and computationally intractable in high-treewidth models. L2C trains a neural network to score variable-value assignments based on their utility for conditioning, given observed evidence, substantially reducing search spaces while maintaining or improving solution quality.

### Links

- **GitHub repository**: [`https://github.com/brijml/L2C`](https://github.com/brijml/L2C)
- **Paper**: [_Learning to Condition: A Neural Heuristic for Scalable MPE Inference_](https://proceedings.neurips.cc/paper_files/paper/2025/file/af80ce1011eb35fe1023c320158c2ad9-Paper-Conference.pdf) (NeurIPS 2025)

### Problem Setting & Motivation

- **Task (MPE Inference)**: Given a probabilistic graphical model defined over random variables $X$ and evidence $e$, find an assignment $x^*$ that maximizes the joint probability:
  $$x^* = \arg\max_{x} P(x \mid e)$$
- **Challenge**: In high-treewidth models, exact inference algorithms like variable elimination or junction tree require exponential time and memory in the treewidth.
- **Conditioning Approach**: Assigning values to a subset of variables simplifies the remaining problem by removing edges and reducing graph complexity. However, selecting which variables to condition on and which values to assign is a critical combinatorial challenge.

### Key Ideas

- **Neural Conditioning Heuristic**: L2C trains a deep neural network that evaluates candidate variable-value assignments based on how effectively they reduce downstream search complexity without sacrificing solution quality.
- **Scalable Data Generation**: Extracts supervisory signals directly from the search traces of existing exact and approximate MPE solvers, circumventing the need for intractable ground-truth solutions during training data collection.
- **Flexible Search Integration**:
  - _Pre-conditioning_: Applies the learned heuristic to condition high-impact variables prior to invoking exact inference solvers.
  - _Branch-and-Bound Guidance_: Serves as a dynamic variable and value ordering policy within tree search algorithms.
- **Empirical Scalability**: Demonstrates significant reduction in search runtime and explored tree size across benchmark graphical models with challenging cyclic topologies.

### Citation

If you use L2C in your research, please cite:

```bibtex
@inproceedings{malhotra2025learning,
  author    = {Malhotra, Brij and Arya, Shivvrat and Rahman, Tahrima and Gogate, Vibhav},
  title     = {Learning to Condition: A Neural Heuristic for Scalable MPE Inference},
  booktitle = {Advances in Neural Information Processing Systems},
  year      = {2025},
  volume    = {38},
  pages     = {121270--121316},
  publisher = {Curran Associates, Inc.}
}
```
