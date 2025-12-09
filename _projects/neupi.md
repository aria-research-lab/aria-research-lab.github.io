---
layout: page
title: "NeuPI"
description: PyTorch-based library for neural probabilistic inference
img: assets/img/projects/neupi/nn_pipeline.png
importance: 2
category: libraries
# related_publications: true
---

NeuPI is a PyTorch-based library for solving inference tasks in Probabilistic Models (PMs) using neural network solvers.
It provides a modular, self-supervised framework where the probabilistic model itself supplies the supervisory signal, eliminating the need for labeled training data.

NeuPI trains neural solvers to answer queries such as Most Probable Explanation (MPE), Constrained MPE, and Marginal MAP by directly maximizing the log-likelihood of the solutions they propose.

### Links

- **Documentation**: [`https://neupi.readthedocs.io/en/latest/`](https://neupi.readthedocs.io/en/latest/)
- **GitHub repository**: [`https://github.com/Shivvrat/NeuPI`](https://github.com/Shivvrat/NeuPI)
- **Zenodo record / DOI**: [`https://zenodo.org/doi/10.5281/zenodo.15873631`](https://zenodo.org/doi/10.5281/zenodo.15873631)

### Key Features

- **Self-supervised training**: Train neural solvers using only the probabilistic model; no labeled data is required.
- **Advanced inference**: Includes the ITSELF (Inference Time Self-Supervised Training) engine for test-time refinement and improved accuracy.
- **Discretization**: Offers `ThresholdDiscretizer`, `KNearestDiscretizer`, and `OAUAI` for turning continuous outputs into high-scoring discrete assignments.
- **Extensible design**: Register custom components (evaluators, embedders, solvers, discretizers, trainers) via a factory-based modular API.

### Quick Start (Conceptual Workflow)

1. **Load a probabilistic model (PM)**  
   Use an evaluator such as `MarkovNetwork` or `SumProductNetwork` to score complete assignments via log-likelihood.
   This evaluator defines the objective; the training loss is the negative log-likelihood of the assignment proposed by the neural solver.

2. **Define a neural solver and embedder**  
   Specify a neural architecture (e.g., an MLP) that takes an inference query (evidence variables, query variables, evidence values) and outputs a candidate solution.
   Use an embedder such as `DiscreteEmbedder` to map the raw query into feature tensors suitable for the network.

3. **Train with `SelfSupervisedTrainer`**  
   The trainer queries the solver for a solution, scores it with the PM evaluator, and backpropagates the negative log-likelihood to update the network.

4. **Perform inference**  
   - `SinglePassInferenceEngine`: one forward pass for fast MPE / MMAP inference.  
   - `ITSELF_Engine`: test-time self-supervised fine-tuning for each query, improving solution quality by iteratively optimizing against the PM.

5. **Discretize the output**  
   Convert continuous probabilities into binary assignments using:  
   - `ThresholdDiscretizer` for speed,  
   - `KNearestDiscretizer` or `OAUAI` for higher-quality discrete solutions.

### Examples (in the `examples/` directory)

- **Example 1**: Compute the negative log-likelihood (loss) of a solution to an MPE query on Markov Networks (PGMs) and Sum-Product Networks (probabilistic circuits).  
- **Example 2**: Train a neural solver for MPE queries on Markov Networks and Sum-Product Networks.  
- **Example 3**: Run inference using a trained neural solver on Markov Networks and Sum-Product Networks.  
- **Example 4**: Discretize probabilities into binary assignments using `ThresholdDiscretizer`, `KNearestDiscretizer`, and `OAUAI`.

### Implemented Methods and References

| Type        | Component                  | Primary reference(s)                                                     | Description |
|------------|----------------------------|---------------------------------------------------------------------------|-------------|
| Trainer    | `SelfSupervisedTrainer`    | Arya et al., AAAI 2024; Arya et al., NeurIPS 2024; Arya et al., AISTATS 2025 (SINE) | Core self-supervised training loop using negative log-likelihood from a PM evaluator (`MarkovNetwork`, `SumProductNetwork`). |
| Loss       | `MarkovNetwork`, `SumProductNetwork` | Arya et al., AAAI 2024; Arya et al., NeurIPS 2024; Arya et al., AISTATS 2025 (SINE) | Compute negative log-likelihood for a given probabilistic model; used as the loss signal. |
| Embedding  | `DiscreteEmbedder`         | Arya et al., AAAI 2024; Arya et al., NeurIPS 2024                         | Creates discrete input representations from variable assignments and bucket information (evidence, query, unobserved). |
| Inference  | `SinglePassInferenceEngine`| Arya et al., AAAI 2024; Arya et al., AISTATS 2025 (SINE)                  | Single-pass inference pipeline for MPE / MMAP. |
| Inference  | `ITSELF_Engine`            | Arya et al., NeurIPS 2024                                                 | Inference Time Self-Supervised Learning fine-tuning engine for per-instance optimization. |
| Discretizer| `ThresholdDiscretizer`     | Arya et al., AAAI 2024; Arya et al., NeurIPS 2024                         | Simple threshold-based discretization. |
| Discretizer| `KNearestDiscretizer`      | Arya et al., AISTATS 2025 (SINE)                                          | Beam search over k-nearest binary vectors to find high-quality discrete assignments. |
| Discretizer| `OAUAI`                    | Arya et al., AISTATS 2025 (SINE)                                          | Oracle-based heuristic that focuses queries on variables with highest uncertainty. |

### License

NeuPI is released under the MIT License (see the `LICENSE` file in the GitHub repository).

### Disclaimer

This codebase was developed for research purposes and may not strictly adhere to all production coding guidelines; use at your own risk.

### Acknowledgments

This work was supported in part by the DARPA Perceptually-Enabled Task Guidance (PTG) Program (HR00112220005), the DARPA Assured Neuro Symbolic Learning and Reasoning (ANSR) Program (HR001122S0039), the National Science Foundation grant IIS-1652835, and the AFOSR award FA9550-23-1-0239.
