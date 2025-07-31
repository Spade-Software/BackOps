---
title: Beta-0.5.0
description: Release Notes for Beta-0.5.0
lastUpdated: 2025-16-07
sidebar:
  order: 6
  badge:
    text: Current
    variant: success
---

**Release Date:** July 31, 2025  
**Version:** `beta-0.5.0`

We’re excited to announce a major update to BackOps with the introduction of our new **File Management** system. This release lays the groundwork for a robust, collaborative workflow around event files.

### ✨ New Features

- **Files, Versions, and Formats**  
  Added a unified file management experience with support for multiple versions and formats, enabling clear tracking of file evolution over time.
- **Sharing & Permissions**  
  Introduced association-based sharing with fine-grained permissions (`file.view`, `file.edit`, `file.admin`).

  - Share files with users, collaborators, and areas.
  - Permissions respect parent-level access (permissions act as a ceiling).
  - External sharing via **named view-only links** for simple public distribution.

- **Drives & Navigation**  
  Implemented a drive-based file structure:

  - Event drives, collaborator drives, and area drives for organized storage.
  - “Shared with Me” for quick access to directly associated files.
  - “Shared” folders within collaborator and area drives for shared resources.

- **File Activity Log**  
  Added a chronological log of every file action, including uploads, format changes, comments, and permission updates.

- **Review & Collaboration Workflow**  
  Built-in commenting and structured reviewer approvals:
  - Add comments to specific versions.
  - Assign reviewers to formally approve or request changes before finalizing.

---

### 🛠 Improvements

- Streamlined file UI to provide faster access to drives, shared files, and activity logs.
- Unified permission handling to make sharing more predictable and secure.

---

### 🔮 Coming Soon

- Multi-file and folder link sharing for external audiences.

---

This release marks the foundation of a powerful, collaborative file management experience inside BackOps. File workflows are now first-class citizens in the platform.
