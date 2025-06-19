---
title: Order Permissions
description: Dive into order permissions
lastUpdated: 2025-06-11
sidebar:
  order: 4
---

Unlike procurement, which is broken down by module, **Order Permissions** are centralized. That’s because each order can include line items from multiple modules—making a per-module breakdown impractical. Instead, we provide a simplified set of permissions that control access to the order creation and management process at the event level.

These permissions are part of the **Event Domain**, meaning they apply to the entire event rather than a specific area or collaborator.

## Available Order Permissions

| **Permission** | **Action**      | **Description**                                                                |
| -------------- | --------------- | ------------------------------------------------------------------------------ |
| Orders Read    | `Orders.Read`   | Allows users to view all orders within the event.                              |
| Orders Create  | `Orders.Create` | Grants the ability to create new orders.                                       |
| Orders Edit    | `Orders.Edit`   | Allows editing of existing orders, including updating quantities and metadata. |
| Orders Delete  | `Orders.Delete` | Permits deletion of orders from the system.                                    |

These permissions support flexible workflows, enabling different users to view, build, or manage orders while maintaining control over sensitive actions like sending RFQs or removing entries.
