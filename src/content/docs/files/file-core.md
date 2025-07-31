---
title: Core
description: Diving into the Core aspects of files in BackOps
lastUpdated: 2025-07-31
sidebar:
  order: 2
---

## How Files Work

Now that we’ve covered why BackOps rethought file management, let’s look at how it actually works.

At the center of BackOps Files is the concept of a **file object**. Unlike traditional file storage—where you manage dozens of separate files and folders—BackOps organizes everything around a single file record with a clear structure designed for production workflows.

---

### 1. Versions

Every file in BackOps is made up of **versions**.

As files evolve throughout a project—whether it’s a rigging plot, a stage layout, or a document—you simply upload a new version. Each version:

- Tracks its own **approvals** and **reviews**, so conversations and sign-offs stay tied to the correct iteration.
- Maintains a **comment history**, so you can easily follow feedback from one version to the next.
- Lives under a single file record, keeping your workspace organized and avoiding “Version 12_FINAL_FINAL.pdf” chaos.

> **Example:**  
> Start with “Lighting Plot v1.” As revisions come in, you upload “Lighting Plot v2,” collect approvals, and maintain all related comments—without creating separate files or losing context.

---

### 2. Formats

Within each version, BackOps supports multiple **formats**.

In live production, it’s common for the same file to exist in several different formats—for example, a single lighting plot might include:

- **Vectorworks (.vwx)** for drafting
- **PDF** for quick review
- **DWG** for compatibility with other teams
- **MVR** for visualization
- **Images** for reference

Instead of scattering these across folders, BackOps allows you to upload all of these formats into the same version of a single file.

When someone downloads the file, they simply choose which format they need. And if a format is web-viewable—like PDFs or images—it will display a preview right inside BackOps, so you don’t even have to download it.

---

### Why This Matters

By organizing files around **versions** and **formats**, BackOps solves two of the biggest pain points in production file management:

- No more hunting through folders to figure out which file is the latest version.
- No more duplicating files just to store multiple exports in different formats.

Instead, everything is structured in one place, making collaboration simple and reducing the risk of confusion.

---

Next, we’ll dive deeper into the other file features—like **reviews**, **associations**, and **activity tracking**—that make BackOps a complete production-ready file management solution.
