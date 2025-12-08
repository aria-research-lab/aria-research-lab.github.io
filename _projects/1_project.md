---
layout: page
title: Advanced MPE Inference Schemes for Dependency Networks
description: 
img: assets/img/projects/ddn/dn_main_figure.png
importance: 1
category: research
# related_publications: true
---

Deep Dependency Networks (DDNs) combine dependency networks with deep neural architectures to tackle **multi-label classification** on images and videos.

They keep the **easy training** of dependency networks while adding **strong inference** via local search and integer linear programming (ILP), going beyond standard Gibbs sampling.

[Read the paper](https://proceedings.mlr.press/v238/arya24a/arya24a.pdf){:target="_blank"}

## Model & Inference

We build a dependency network on top of deep encoders (CNNs / video backbones). For each label \(X_i\), the network learns a conditional distribution \(p(X_i \mid \text{parents}(X_i), e_i)\) using a sigmoid output layer fed by learned features \(e_i\).

- **Training**: straightforward maximum-likelihood-style training using the DDN loss (one conditional per label).
- **Inference**: we focus on computing the **most probable explanation (MPE)** configuration of labels given the image/video.
- **Schemes supported**:
  - Gibbs sampling
  - Local search–based methods
  - Multi-linear integer programming (MILP)

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/ddn/dn.png" title="DDN inference overview" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Illustration of improvements made by our proposed inference scheme for DDNs. The DDN learns label relationships and the inference scheme leverages them to accurately identify concealed objects, such as the <strong>sports ball</strong>.
</div>

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/ddn/dn_main_figure.png" title="Dependency Network for action classification" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Dependency Network for action classification with three labels. A video backbone produces features \(e_1,e_2,e_3\) for the dependency layer (red nodes). Sigmoid outputs \(\sigma_1,\ldots,\sigma_n\) model local conditionals given parents (orange/green arrows) in the graph.
</div>

## Annotation Comparison

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid loading="lazy" path="assets/img/projects/ddn/annotations.png" title="Annotation comparison on MS-COCO" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Comparison of labels predicted by Q2L and our DDN-ILP scheme on MS-COCO. Labels in bold denote differences when thresholding at 0.5. The first three examples show DDN improving over Q2L; the last (outlined in red in the paper) is a case where DDN is worse.
</div>

## Datasets & Results

We evaluate on:
- **Video**: Charades, TACoS, Wetlab
- **Image**: MS-COCO, PASCAL VOC, NUS-WIDE

Across these benchmarks, our advanced DDN inference schemes outperform:
- **(a)** strong neural baselines without structured inference, and
- **(b)** neural + Markov network models equipped with advanced inference/learning.

## Getting the Code

The official implementation includes:
- Joint training of DDNs across all datasets above.
- Implementations of Gibbs sampling, local search, and MILP-based inference.
- Environment files for each dataset and for the advanced inference schemes.

See the project README and `MODEL_ZOO.md` files in the code repository for:
- Exact environment setup (per dataset and for advanced inference),
- Pretrained models and baseline implementations,
- Scripts for training and running the different inference strategies.

