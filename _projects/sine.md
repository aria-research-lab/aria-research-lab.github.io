---
layout: page
title: "SINE: Scalable MPE Inference for PGMs"
description: Advanced Neural embeddings and discretization schemes for scalable MPE inference for discrete graphical models.
img: assets/img/projects/neupi/nn_pipeline.png
importance: 3
category: research
# related_publications: true
---

SINE is a neural approach for **Most Probable Explanation (MPE)** inference in discrete probabilistic graphical models (PGMs).
It trains neural networks that, given an evidence assignment, output a high-quality assignment for the remaining variables in **one forward pass**, while explicitly leveraging the **structure** and **parameters** of the underlying PGM and using advanced **discretization** schemes.

## Overview

The main entry point is `main.py` in the `mpe_advanced_models/model_1/src` directory.
It configures the experiment, builds data loaders and models, and runs training and evaluation.

Core limitations addressed compared to prior neural MPE methods:
- **Richer embeddings**: SINE embeds both **query variables** and the **graphical model structure/parameters** into expressive feature representations.
- **Better discretization**: Instead of naive thresholding, it explores the space of nearby discrete solutions and/or uses oracle-style reasoning over uncertain variables.

## Main Components

- **ConfigManager**: Sets up configuration, logging, experiment directories, and device (CPU/GPU) selection.
- **DataManager**: Loads PGM instances and prepares query/evidence splits and batches for training/testing.
- **ModelManager**: Instantiates the neural model (NN or Transformer) and its optimizer/scheduler.
- **Trainer**: Runs training and testing loops, logging metrics and saving checkpoints.

These live under `mpe_advanced_models/model_1/src` (e.g., `util_classes/config.py`, `util_classes/data_manager.py`, `util_classes/model_manager.py`, `trainer.py`).

## Embedding Types

The `--embedding-type` flag (defined in `utils_folder/arguments.py`) controls how queries are embedded:

- **`discrete`** (baseline)
  - Simple discrete embedding for input variables.
  - Uses only query and evidence information to predict unobserved variables.
- **`hgnn`** (Hypergraph Neural Network)
  - Builds a hypergraph over variables/factors to capture higher-order interactions.
  - Incorporates both PGM structure and parameters into the embedding, giving significantly richer context.

## Binarization / Thresholding Methods

The `--threshold_type` flag controls how continuous network outputs are turned into discrete assignments:

- **`basic`**
  - Standard fixed-threshold binarization (default 0.5).
  - Fast but can be suboptimal due to the non-convex loss landscape.
- **`knearest_binary_vectors`**
  - Searches a set of nearby binary vectors around the continuous output.
  - Picks high-scoring candidates under the PGM, improving MPE quality.
- **`branch_and_bound`**
  - Oracle-based branch-and-bound style refinement.
  - Adds evidence on confidently predicted variables and infers the rest via the PGM.
- **`knearest_binary_vectors,branch_and_bound`**
  - Hybrid: first explores nearby binary vectors, then refines using the oracle-style procedure.

These correspond to the different discretization strategies evaluated in the SINE paper.

## Usage

From inside `mpe_advanced_models/model_1`:

```bash
python src/main.py [arguments]
```

**Important arguments** (see `utils_folder/arguments.py` for the full list):

- `--model`          : `nn` or `transformer` (neural architecture).
- `--pgm`            : PGM family / benchmark type (e.g., UAI-06 vs UAI-22 models).
- `--dataset`        : Specific dataset/benchmark instance.
- `--task`           : Inference task (e.g., MPE).
- `--embedding-type` : `discrete` or `hgnn`.
- `--threshold_type` : `basic`, `knearest_binary_vectors`, `branch_and_bound`, or the combined option.
- `--experiment-dir` : Output directory for logs, metrics, and checkpoints.
- `--partition_type` : How queries are partitioned across variables/instances.

### Example command

```bash
python src/main.py \
  --no-debug \
  --query-prob <query_prob> \
  --model <nn|transformer> \
  --dataset <dataset_name> \
  --task <task_name> \
  --partition_type <partition_type> \
  --embedding-type <discrete|hgnn> \
  --experiment-dir <experiment_dir> \
  --pgm <pgm_type> \
  --threshold_type <basic|knearest_binary_vectors|branch_and_bound|knearest_binary_vectors,branch_and_bound>
```

## Probabilistic Graphical Models

SINE is evaluated on PGM benchmarks from the **UAI 2006** and **UAI 2022** competitions.
You should download these models and place them in the appropriate dataset folders used by the code:

- UAI 2006 benchmark models from `https://sli.ics.uci.edu/~ihler/uai-data/index.html`
- UAI 2022 benchmark models from `https://uaicompetition.github.io/uci-2022/results/benchmarks/`

These are public benchmark repositories for research use.

## Installation & Environment

The recommended setup uses Conda:

```bash
conda env create -f sine_mpe.yml
conda activate mmap-advanced
```

If the `sine_mpe.yml` environment file fails, you can fall back to pip:

```bash
pip install -r requirements.txt
```

The environment includes PyTorch (with CUDA support if available), Lightning, and supporting libraries.

## Running Experiments & Outputs

1. **Install dependencies** using Conda or pip (see above).
2. **Prepare datasets** by downloading UAI benchmark PGMs into the expected folders.
3. **Choose configuration** via command-line arguments (model, dataset, embedding, thresholding, etc.).
4. **Run** `src/main.py` and monitor logs for training and evaluation metrics.

All runs write to the experiment directory specified by `--experiment-dir`, including:
- Logs and scalar metrics over epochs.
- Model checkpoints (for restarting or analysis).
- Any additional artifacts produced by the trainer/evaluator.

## Notes

- Built on **PyTorch** and **Lightning** for scalable training.
- Designed for **GPU acceleration**; make sure you have a CUDA-capable setup if running large benchmarks.
- The framework is intended for research: it exposes many knobs for experimenting with embeddings and discretization schemes for MPE in PGMs.
