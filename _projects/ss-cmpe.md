---
layout: page
title: "SS-CMPE: Learning to Solve the Constrained MPE Task"
description: Self-supervised learning for constrained most probable explanation (CMPE) in probabilistic graphical models.
img: assets/img/publication_preview/cmpe.png
importance: 3
category: research
# related_publications: true
---

SS-CMPE is a self-supervised learning framework for solving the **Constrained Most Probable Explanation (CMPE)** task in probabilistic graphical models (PGMs).
Given an evidence assignment and a hard constraint, SS-CMPE trains a neural network that directly outputs near-optimal solutions to the constrained inference problem, without requiring any pre-computed CMPE labels.

### Paper

- **Title**: Learning to Solve the Constrained Most Probable Explanation Task in Probabilistic Graphical Models  
- **Authors**: Shivvrat Arya, Tahrima Rahman, Vibhav Gogate  
- **Venue**: AISTATS 2024  
- **PDF**: [`https://proceedings.mlr.press/v238/arya24b/arya24b.pdf`](https://proceedings.mlr.press/v238/arya24b/arya24b.pdf)

### Problem Setting

- **Models**: Two log-linear models / Markov networks `f(x, y)` and `g(x, y)` defined over random variables `X` (evidence) and `Y` (decision variables).
- **Task (CMPE)**: For a given evidence assignment `x` and threshold `q`, find `y` that
  - maximizes `f(x, y)`  
  - subject to the constraint `g(x, y) \le q`.
- **Goal**: Learn a neural network that, given `x`, outputs `y` that approximately solves this constrained optimization problem.

### Key Ideas

- **Self-supervised training**: The PGMs `f` and `g` provide the training signal; no ground-truth CMPE solutions are needed.
- **CMPE-aware loss**: A custom loss derived from first principles:
  - pushes **infeasible** predictions towards the feasible region (`g(x, y) \le q`), and
  - improves the **objective value** `f(x, y)` when the constraint is already satisfied.
- **Beyond Lagrangian baselines**: Unlike standard (Augmented) Lagrangian relaxations, the proposed loss is tailored to CMPE and is not limited by duality gaps on these non-convex problems.

### Implementation & Structure

The code is organized around self-supervised training of neural solvers for CMPE on different classes of PGMs and benchmarks.  
Each experiment folder contains its own configuration, scripts, and README.

- **`ssl_adv/`** – Tractable probabilistic circuits and high tree-width Markov networks
  - CMPE on models where inference in `f` and/or `g` may be expensive, but tractable structure or specialized solvers are available.
  - Includes scripts to generate CMPE training instances, run self-supervised training, and evaluate against supervised and Lagrangian-style baselines.
- **`ssl_pgm/`** – Adversarial example generation
  - CMPE instantiated as constrained adversarial search over PGMs.
  - Uses the same self-supervised CMPE loss to learn perturbation policies that respect hard constraints while maximizing adversarial objectives.

See the `README.md` inside each folder for **exact commands**, hyperparameters, and dataset details.

### Setup and Installation

```bash
conda create --name sscmpe \
  --file requirements.txt \
  --channel pytorch --channel nvidia --channel conda-forge
conda activate sscmpe
```

(If your platform has trouble with `--file requirements.txt`, you can instead install the listed packages manually with `conda`/`pip`.)

### Running Experiments (High-Level)

- **Choose a task**: CMPE on circuits / Markov networks (`ssl_adv`) or adversarial example generation (`ssl_pgm`).
- **Follow the local README**:
  - dataset / benchmark download instructions,  
  - configuration files or CLI flags (architecture, learning rate, constraint threshold `q`, etc.),  
  - training and evaluation scripts.
- **Outputs** typically include:
  - constraint violation statistics (`g(x, y) - q`),
  - objective values `f(x, y)`,
  - comparison against supervised, MIP, and Lagrangian baselines.

### Applications

- **Neuro-symbolic inference**: Enforce logical or weighted constraints `g(x, y) \le q` while predicting with a neural model `f(x, y)`.
- **Robust and constrained reasoning in PGMs**: Decision-preserving MPE, robust estimation, and nearest-assignment problems can be cast as CMPE.
- **Simulation-to-real transfer**: Encode abstract knowledge or physics from simulators into `g`, and use SS-CMPE to enforce those constraints when making predictions with a data-driven `f`.

### Citation

If you use SS-CMPE in your work, please cite:

```bibtex
@inproceedings{arya_2024_solveconstraineda,
  title = {Learning to {Solve} the {Constrained Most Probable Explanation Task} in {Probabilistic Graphical Models}},
  booktitle = {Proceedings of the 27th International Conference on Artificial Intelligence and Statistics},
  author = {Arya, Shivvrat and Rahman, Tahrima and Gogate, Vibhav},
  year = {2024},
  month = apr,
  pages = {2791--2799},
  publisher = {PMLR},
  issn = {2640-3498}
}
```