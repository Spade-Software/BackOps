---
title: 💡 Lighting Module
description: Talks through the Lighting Module
lastUpdated: 2025-06-04
sidebar:
  order: 3
---

The **Lighting module** is an **area-based module** used in the **artist advancing process** to define responsibilities, gear requirements, and staffing needs related to lighting.

It ensures that both the house and the artist are aligned on who is supplying what—and who’s covering the cost—by using the **Production Advance Response** model for each element.

This module helps avoid confusion during load-in and showtime, and supports centralized procurement planning when house-supplied gear is involved.

---

### 📋 Fields in the Lighting Module

| Field                 | Description                                                                                                                                                         | Type                                     |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| **Lighting Designer** | Indicates whether the artist is bringing their own LD or using the house’s.                                                                                         | Provider Only                            |
| **Lighting Console**  | Declares who is providing the console and who is paying. <br> Allows for **console model** and **line items** to be added.                                          | Production Advance Response + Line Items |
| **Floor Package**     | Identifies whether a supplemental ground-based lighting rig is being brought or needs to be supplied. <br> Allows **line items** for gear to be added and approved. | Production Advance Response + Line Items |
| **Spotlights**        | Specifies whether followspots are needed and who is responsible for them (both provision and payment). <br> Supports **line items**.                                | Production Advance Response + Line Items |
| **Notes**             | A freeform field for adding additional context, preferences, or unique requirements (e.g., dimmer locations, timecode, power needs).                                | Free Text                                |

> 🧩 _Line item fields are included for Lighting Console, Floor Package, and Spotlights. These items follow the [Resource Approval Process](#) to manage procurement and cost alignment._

---

### 🔄 Example Production Advance Response Breakdown

| Element          | Provider | Payer  |
| ---------------- | -------- | ------ |
| Lighting Console | Artist   | Artist |
| Floor Package    | House    | Artist |
| Spotlights       | House    | House  |

---

### 🛠️ Configuration Options (for Admins)

- **Custom Lighting Types**: Define optional fields depending on your site or production needs.
- **Item Libraries** _(optional future feature)_: Pull from standardized gear catalogs for faster line item entry.
- **Approval Routing**: Automatically notify relevant production contacts when gear is requested.

---

### ✅ Use Cases

- An artist brings their own lighting console but needs the house to supply spotlights and a riser package.
- A festival offers standard rigging but requires advance submission for any floor lighting needs.
- A small artist performs during the day and requires no lighting—this module is still submitted to clarify **N/A** selections and avoid assumptions.
