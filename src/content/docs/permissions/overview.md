---
title: Understanding Permissions in BackOps
description: Introduction to permissions in BackOps
lastUpdated: 2025-06-11
sidebar:
  order: 1
  label: Overview
---

Permissions in BackOps give you fine-grained control over what users can do within the application. While **Modules** control what _features_ a collaborator can interact with, **Permissions** define _actions_ users are allowed to take across different parts of the platform.

### What Are Permissions?

Permissions govern user access to specific functionality. They are essential for ensuring collaborators can only take the actions appropriate to their role on the event.

### Permission Domains

Permissions in BackOps are grouped into three key domains:

---

### 1. **Event Domain**

**Scope:** Event-wide
**Example Permissions:**

- `Event.Admin` – Grants full access to all aspects of the event.
- `Event.Update` – Allows updating general event details (e.g., event name, location).
- `Event.ScheduleEdit` – Grants access to edit the global event schedule.

**Use Case:** Assign to producers, event admins, or technical directors who oversee the full event.

---

### 2. **Collaborator Domain**

**Scope:** A specific collaborator
**Example Permissions:**

- `Collaborator.AdvanceEdit` – Allows editing the advancing information for the assigned collaborator only.
- `Collaborator.ScheduleView` – Allows viewing the schedule relevant to that collaborator.

**Use Case:** Assign to artist managers or vendor reps responsible for a single collaborator’s data.

---

### 3. **Area Domain**

**Scope:** A specific area on the event site
**Example Permissions:**

- `Area.ScheduleEdit` – Allows editing the schedule for that specific area.
- `Area.FileUpload` – Grants permission to upload files to that area’s file section.

**Use Case:** Assign to zone leads or department heads who manage individual physical locations (e.g., “Main Stage” or “Catering”).

---

### How Permissions Work

- Permissions are additive. Assigning multiple permissions expands what a user can do.
- A user may have different permissions in each domain (e.g., global read-only access, but full control over one area).
- Assigning permissions at the _correct level_ ensures collaborators have just enough access to get their work done—nothing more, nothing less.

---

In the next sections, we’ll break down the specific permissions available in each domain, so you can tailor access levels appropriately for your team.
