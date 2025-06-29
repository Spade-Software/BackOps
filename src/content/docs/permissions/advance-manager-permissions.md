---
title: Advanced Management Permissions
description: Lists and explains all permissions related to the Advanced Management feature
lastUpdated: 2025-06-28
sidebar:
  order: 7
---

The **Advanced Management feature** allows users to oversee the advance progress of all collaborators and departments at a high level. To control access, this feature uses a set of **event-level permissions**, meaning they apply across the full event.

These permissions allow you to assign full or scoped access to the Advanced Management dashboard and its individual module views.

---

## Overview

There are two categories of Advanced Management permissions:

- A **master permission** that grants access to all Advance Management views
- **Individual module permissions** that restrict access to only specific modules (e.g., Audio, Labor, Rigging)

This structure is ideal for:

- Giving full visibility to producers and leads
- Providing department heads access only to their areas
- Simplifying the UI for users by showing only what’s relevant

---

## Permissions

| Permission                      | Description                                                                         |
| ------------------------------- | ----------------------------------------------------------------------------------- |
| `event.advance.manager.*`       | Grants full access to the **Advance Management dashboard** and **all module tabs**. |
| `event.advance.manage.audio`    | Grants access to the **Audio** tab in the Advance Management section.               |
| `event.advance.manage.video`    | Grants access to the **Video** tab in the Advance Management section.               |
| `event.advance.manage.lighting` | Grants access to the **Lighting** tab in the Advance Management section.            |
| `event.advance.manage.labor`    | Grants access to the **Labor** tab in the Advance Management section.               |

> ⚠️ **Note:** This pattern continues for all modules. Each follows the same structure with the appropriate module name.

---

## Use Cases

- A **production manager** might have `event.advance.manager.*` to view and coordinate all departments.
- An **audio department head** might only be granted `event.advance.manage.audio`, keeping their view focused.
- A **logistics coordinator** could be assigned multiple module-specific permissions, like `labor`, `cart`, and `vehicle`.

> 🎯 _Granular permissions make it easier to onboard users and limit confusion while maintaining security and clarity._
