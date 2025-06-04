---
title: 🎭 Staging Module
description: Talks through the Staging Module
lastUpdated: 2025-06-04
sidebar:
  order: 7
---

The **Staging module** is an **area-based module** used to manage the procurement and approval of **stage decks** and **set pieces**. It’s a hybrid module that combines the **Production Advance Response model** with custom **Stage Item** entries—allowing for spatial planning and gear specification.

---

### 🧭 Purpose

This module is designed for artists and production teams who require:

- Risers, platforms, and staging elements
- Custom set pieces or scenic elements
- On-site support for building, placing, or striking those items

It helps event teams determine who is supplying what, who is paying for it, and **exactly where each item will be placed on stage**.

---

### 📋 Fields in the Staging Module

#### 🔹 Production Advance Responses

| Field           | Description                                                                                     |
| --------------- | ----------------------------------------------------------------------------------------------- |
| **Stage Decks** | Provider and Payer for any requested stage decks or risers                                      |
| **Set Pieces**  | Provider and Payer for scenic or structural set pieces (e.g., props, backdrops, flown elements) |

---

#### 🔹 Stage Items (Line Items)

Each Production Advance Response can include **Stage Items**, with the following fields:

| Field        | Description                                                                                               |
| ------------ | --------------------------------------------------------------------------------------------------------- |
| **Location** | Specific location **within the assigned area** (e.g., “USC” for Upstage Center, “DSL” for Downstage Left) |
| **Length**   | Length of the deck or piece (in feet)                                                                     |
| **Width**    | Width of the deck or piece (in feet)                                                                      |
| **Height**   | Height of the item (in inches or feet)                                                                    |
| **Purpose**  | Description of the item’s use (e.g., “Drum Riser”, “LED Wall Support Platform”, “Scenic Arch Base”)       |

> 📐 _Each Stage Item is routed through the [Procurement & Resource Approval Process](#), allowing the event team to confirm dimensions, usage, and feasibility._

---

### 🛠️ Configuration Options (for Admins)

- **Predefined Locations**: Allow teams to pick from standard stage zones (e.g., USL, USC, DSR) or enter custom positions.
- **Height Restrictions**: Apply soft or hard caps on stage deck heights for safety.
- **Review Routing**: Notify staging leads, safety officers, or scenic departments for approvals.

---

### ✅ Use Cases

- An artist requests an 8'x8'x12" drum riser at Upstage Center
- A DJ act brings a flown LED screen that requires a 10'x3' ground support platform at Downstage Left
- A local act marks “N/A” for set pieces but still submits the module to confirm no needs
