---
title: Overview
description: Overview of File Management
lastUpdated: 2025-07-18
sidebar:
  order: 1
---

BackOps takes a unique approach to **file management**—one tailored to the realities of production workflows while maintaining the familiarity of tools like Dropbox and Google Drive. Whether you’re sharing rigging plots, collecting media files, or reviewing updated stage drafts, our Files system is designed to support the way live event teams actually work.

This is more than a drive folder. BackOps introduces production-specific concepts like **formats**, **reviewers**, and **versioned approvals**, so your team can move fast without losing track of critical file changes.

---

## Files

The top-level object in our file system. A File might represent a rigging plot, a credential layout, or an asset folder. Files contain **versions**, and each version contains **formats**—helping you keep complex documentation organized under a single umbrella.

---

## Versions

Each time you upload an updated draft or revision, you create a **new version**. Versions track history across the life of a file, helping ensure everyone is aligned on what’s current.

---

## Formats

Formats are file-type variations stored within a version. For example, a **Rigging Plot** might have:

- A `.vwx` Vectorworks master file
- A `.pdf` export for on-site reference
- A `.jpg` version for quick previews
- An `.mvr` file for lighting teams

Rather than storing these as separate files, BackOps groups them under one versioned file record—keeping everything tidy and contextually linked.

---

## Reviewers & Approval

Each file version supports a **review and approval** process. You can:

- Assign **required reviewers**
- Collect **feedback and approvals**
- View **comment threads per version**
- Reset reviews automatically when a new version is uploaded

This enables a clear sign-off workflow and helps you maintain version control during iterative design or production planning.

---

## Sharing & Access Control

Files and folders can be shared through permissioned **share links**, just like in Dropbox. You can:

- Collect files from outside contributors
- Share view/download links publicly or privately
- Manage user-level permissions (read, edit, download, comment)

All powered by BackOps’ event-aware permission engine.

---

# Summary

The BackOps File Management system includes:

- ✅ Versioning for tracking file evolution
- ✅ Formats to group multiple exports of a single document
- ✅ Reviewer workflows to collect approvals
- ✅ Share links for external access
- ✅ Permission control for visibility and security
