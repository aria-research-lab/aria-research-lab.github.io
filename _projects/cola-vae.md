---
layout: page
title: "CoLa-VAE"
description: Cell-cell communication-aware variational autoencoder for representation learning and expression denoising in single-cell transcriptomics.
img: assets/img/publication_preview/CoLaVAE.png
importance: 2
category: research
---

CoLa-VAE is a cell-cell communication-aware Variational Autoencoder (VAE) that jointly learns low-dimensional latent representations and denoised expression profiles from sparse single-cell RNA sequencing (scRNA-seq) and spatial transcriptomic data.

Single-cell RNA sequencing provides unprecedented resolution into cellular heterogeneity, but severe dropout noise and sparsity hinder downstream biological discovery. CoLa-VAE incorporates ligand-receptor communication topology through dynamic graph Laplacian regularization, establishing a principled communication-guided framework for AI in the life sciences.

### Links

- **GitHub repository**: [`https://github.com/Yeqing95/CoLa-VAE`](https://github.com/Yeqing95/CoLa-VAE)
- **Paper**: [_CoLa-VAE: A Cell-Cell Communication-Aware Variational Autoencoder for Representation Learning and Expression Denoising_](https://www.biorxiv.org/content/early/2026/06/26/2026.03.28.715052) (bioRxiv 2026)
- **DOI**: [`https://doi.org/10.64898/2026.03.28.715052`](https://doi.org/10.64898/2026.03.28.715052)

### Motivation & Background

- **Dropout & Sparsity in scRNA-seq**: Single-cell sequencing technologies frequently suffer from technical noise where expressed transcripts fail to be amplified or detected.
- **Vicious Cycle in Communication Analysis**: Ligand-receptor based cell-cell communication inference relies on accurate expression levels, but dropout creates substantial false negatives. Standard denoising methods ignore intercellular communication structures during reconstruction.
- **Core Innovation**: Rather than treating denoising as an independent precursor to biological analysis, CoLa-VAE dynamically couples representation learning, denoising, and communication network structure into a unified generative model.

### Key Ideas

- **Dynamic Graph Laplacian Regularization**: Leverages ligand-receptor interactions across cells to build an intercellular communication topology, regularizing both latent representations and expression reconstruction.
- **Iterative Communication Refinement**: Uses denoised expression matrices to iteratively update communication estimates, which in turn refine the geometric organization of the latent space.
- **Improved Downstream Biological Discovery**:
  - More sensitive and robust identification of differential cell-cell communication programs.
  - Mitigation of technical batch effects without distorting genuine biological variation.
  - Enhanced cell-type deconvolution in spatial transcriptomics when spatially constrained interaction priors are integrated.

### Citation

If you use CoLa-VAE in your research, please cite:

```bibtex
@article{Chen2026.03.28.715052.CCC,
  author    = {Chen, Yeqing and Qi, Cong and Fang, Hanzhang and Luan, Feiyang and Zhang, Zhirong and Arya, Shivvrat and Wei, Zhi},
  title     = {CoLa-VAE: A Cell-Cell Communication-Aware Variational Autoencoder for Representation Learning and Expression Denoising},
  journal   = {bioRxiv},
  year      = {2026},
  doi       = {10.64898/2026.03.28.715052},
  publisher = {Cold Spring Harbor Laboratory}
}
```
