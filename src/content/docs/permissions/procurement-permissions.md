---
title: Procurement Permissions
description: Dive into procurement Permissions
lastUpdated: 2025-06-11
sidebar:
  order: 3
---

Procurement permissions define who can view, manage, and approve procurement-related items across each functional module of your event. These permissions are especially useful when your procurement responsibilities are distributed across departments—such as staging, artist hospitality, or heavy equipment.

## Key Concepts

Procurement permissions are **scoped per module**, allowing you to assign precise control based on team roles. Each module (e.g., Lighting, Labor, Radios) has three types of permissions:

- **Read** – Allows users to view procurement requests and items for the module.
- **Manage** – Grants full control over procurement items, including adding, editing, assigning requests, and modifying quantities.
- **Resource Approval** – Enables users to approve incoming requests that require procurement action (typically from the advancing process).

This structure lets you give, for example, a hospitality lead the ability to manage hospitality procurements without giving them access to carts or heavy equipment.

---

## Module-Based Permissions Breakdown

| **Module**  | **Permission Type** | **Action**                                | **Description**                             |
| ----------- | ------------------- | ----------------------------------------- | ------------------------------------------- |
| Audio       | Read                | `Procurement.Audio.Read`                  | View all audio procurement items.           |
| Audio       | Manage              | `Procurement.Audio.Manage`                | Create and manage audio procurements.       |
| Audio       | Resource Approval   | `Procurement.Audio.ResourceApproval`      | Approve audio-related procurement requests. |
| Backline    | Read                | `Procurement.Backline.Read`               | View all backline procurement items.        |
| Backline    | Manage              | `Procurement.Backline.Manage`             | Manage backline requests and procurements.  |
| Backline    | Resource Approval   | `Procurement.Backline.ResourceApproval`   | Approve backline resource requests.         |
| Carts       | Read                | `Procurement.Cart.Read`                   | View cart procurement items.                |
| Carts       | Manage              | `Procurement.Cart.Manage`                 | Manage cart procurements and assignments.   |
| Carts       | Resource Approval   | `Procurement.Cart.ResourceApproval`       | Approve cart-related procurement requests.  |
| Credentials | Read                | `Procurement.Credential.Read`             | View credential procurements.               |
| Credentials | Manage              | `Procurement.Credential.Manage`           | Create and manage credential procurements.  |
| Credentials | Resource Approval   | `Procurement.Credential.ResourceApproval` | Approve credential-related requests.        |
| Gear        | Read                | `Procurement.Gear.Read`                   | View gear procurement items.                |
| Gear        | Manage              | `Procurement.Gear.Manage`                 | Manage gear procurements.                   |
| Gear        | Resource Approval   | `Procurement.Gear.ResourceApproval`       | Approve gear-related requests.              |

> ⚠️ **Note:** This pattern continues for all modules, including Guest List, HEQ (Heavy Equipment), Hospitality, Labor, Lighting, Power, Radios, SFX, Stage, Vehicles, and Video. Each follows the same `Read`, `Manage`, and `ResourceApproval` structure with the appropriate module name.

---

These granular permissions ensure the right people have the right access to manage their responsibilities—without over-permissioning across departments. You can assign them based on role, department, or collaborator needs.
