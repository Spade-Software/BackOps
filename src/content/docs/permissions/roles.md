---
title: Roles
description: Diving into Roles in BackOps
lastUpdated: 2025-06-11
sidebar:
  order: 7
---

**Roles** are permission templates that group together multiple permissions and can be easily assigned to users. Roles simplify user management by letting you apply predefined permission sets without needing to manually configure each individual permission.

## Key Concepts

- **Role as a Template**: Think of a role as a reusable configuration for access. For example, a role called `StageManager` might include permissions for managing advancing, schedules, files, and collaborators—all the capabilities a typical stage manager needs.

- **Scoped by Domain**: Just like permissions, roles are scoped to one of the three domains:

  - **Event** – permissions that apply across the entire event.
  - **Collaborator** – permissions scoped to specific collaborators (e.g., an artist or vendor).
  - **Area** – permissions scoped to specific areas (e.g., stages, zones, workspaces).

## Example Use Case

Let’s say you want to give someone access to manage advancing and schedules for a specific artist (collaborator) and also give them access to run a specific stage (area):

1. Create a **Collaborator Role** called `StageManager` with:

   - `CollaboratorAdvanceRead`
   - `CollaboratorAdvanceEdit`
   - `CollaboratorAdvanceApprove`
   - `CollaboratorActivitiesAdd`
   - `CollaboratorContactsManage`

2. Create an **Area Role** also called `StageManager` with:

   - `AreaAdmin`
   - `AreaActivitiesAdd`
   - `AreaFilesAdd`

3. Assign those roles to the user:

   - Assign the `StageManager` **collaborator role** to the user on the relevant artist.
   - Assign the `StageManager` **area role** to the user on the relevant stage area.

This way, the user has exactly the access they need—no more, no less.

## Assigning Roles

Roles are always assigned **per scope**, meaning:

- A user is given a role **on a specific collaborator**.
- A user is given a role **on a specific area**.
- A user is given a role **at the event level**.

This structure allows teams to maintain fine-grained access control while speeding up setup through reusable templates.
