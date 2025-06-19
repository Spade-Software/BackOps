---
title: Event Permissions
description: Dive into Event Permissions
lastUpdated: 2025-06-11
sidebar:
  order: 2
---

Event-level permissions define what users can do across the entire event. These permissions are assigned under the **Event domain** and apply globally unless scoped more specifically through collaborator or area permissions.

## Event Permission Subdomains

Event permissions are divided into three functional categories:

1. **Core Event Permissions** – Control access to general event features like settings, schedule, and collaborators.
2. **Procurement Permissions** – Govern what users can do in the procurement process (e.g., creating procurement lists).
3. **Orders Permissions** – Define actions related to building and managing vendor orders and RFQs.

We’ll begin with **Core Event Permissions** and follow with procurement and orders in later sections.

---

## Core Event Permissions

| **Permission**           | **Action**           | **Description**                                                                                                                  |
| ------------------------ | -------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `EventAdmin`             | `*`                  | Grants **full administrative access** to all areas of the event, including collaborators, areas, schedule, settings, and more.   |
| `EventBasicAccess`       | `BasicAccess`        | Provides the **minimum required access** to view or participate in the event. Without this, a user cannot access the event.      |
| `EventRead`              | `Read`               | Allows **read-only access** to the event dashboard, collaborators list, files, and schedule. Ideal for viewers and stakeholders. |
| `EventDashboardEdit`     | `Dashboard.Edit`     | Enables editing of the **event dashboard components** (widgets, charts, announcements, etc.).                                    |
| `EventSettings`          | `Settings`           | Grants access to **modify event settings**, including modules, metadata, and configuration.                                      |
| `EventArchive`           | `Archive`            | Allows the user to **archive the event**, effectively marking it as completed or no longer active.                               |
| `EventCollaboratorsRead` | `Collaborators.Read` | Lets the user **view all collaborators** associated with the event.                                                              |
| `EventCollaboratorsAdd`  | `Collaborators.Add`  | Grants permission to **add new collaborators** to the event.                                                                     |
| `EventAreasRead`         | `Areas.Read`         | Permits users to **view all areas** associated with the event (e.g., stages, compounds, HQs).                                    |
| `EventAreasAdd`          | `Areas.Add`          | Grants the ability to **create new areas** within the event.                                                                     |
| `EventActivitiesAdd`     | `Activities.Add`     | Allows users to **add new activities** to the event’s master schedule.                                                           |

---

Each of these permissions can be assigned based on the user’s role, helping you configure just the right amount of access for each team member.
