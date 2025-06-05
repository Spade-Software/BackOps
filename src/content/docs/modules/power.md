---
title: Power
description: Talks through the Power Module
lastUpdated: 2025-06-04
---

The **Power module** is an **area-based module** used to request power drops for specific locations within an event area. Unlike advancing modules, this module is focused on **precise infrastructure needs** and is designed to facilitate routing, distro planning, and on-site power delivery.

Each request represents a **single power drop**, including details like connector type, voltage, amperage, and purpose. These requests feed into the **resource approval process**, helping site teams organize and fulfill electrical needs across the event footprint.

---

## Fields

| Field              | Description                                                                                                                                                                                                                |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Location**       | A **specific location within the assigned area**. For example: <br> - “Stage Left Guitar World” <br> - “Behind VIP Arch” <br> - “North Fence by Box Office” <br> This helps site teams know exactly where power is needed. |
| **Connector Type** | The kind of electrical connector required. Defined by the event administrator. Examples: <br> - Edison <br> - L6-20 <br> - L21-30 <br> - Camlock (Feeder)                                                                  |
| **Voltage**        | The requested voltage for the drop. Common values include: `110V`, `208V`, `240V`, etc.                                                                                                                                    |
| **Amperage**       | The circuit amperage required (e.g., `20A`, `50A`, `100A`, `300A`).                                                                                                                                                        |
| **Purpose**        | A short description of what this power drop is for (e.g., “Stage 1 Lighting”, “Food Vendor Freezer”, “Exit Sign Emergency Backup”).                                                                                        |
| **Notes**          | Optional field for additional context, such as preferred routing, time of day needed, or cable cover requirements.                                                                                                         |

> 💡 _Each power request is routed through the [Resource Approval Process](#), enabling electrical and production leads to validate, adjust, and approve based on available inventory and layout._

---

## Configuration (Admins)

- **Connector Type List**: Fully customizable to include standard or site-specific plug types.
- **Approval Workflow Integration**: Route requests to power leads or electricians automatically.
- **Load Balancing Tools** _(future feature)_: Aggregate power requests per area to support capacity planning.

---

## Use Cases

- A stage vendor requests a 300A 208V feeder drop for a lighting distro
- A security team requests a 20A Edison drop for lights at a checkpoint
- A bar vendor needs a L6-30 drop for refrigeration behind a service tent
