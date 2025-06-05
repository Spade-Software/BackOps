---
title: Backline
description: Talks through the Backline Module
lastUpdated: 2025-06-04
---

The **Backline module** is an **area module** used to determine responsibility and cost for **backline equipment**—everything from drum kits to keyboard rigs, amps, and DJ gear.

Since backline needs can be extensive and specific, this module combines the **Production Advance Response model** with a **file upload field** for attaching full rider documents, and a **notes field** for supplemental information.

---

## Fields

| Field                           | Description                                                                                                                                                                                                                           |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Backline (Provider + Payor)** | Uses the **Production Advance Response format** to clarify: <br> - **Who is providing** the backline gear (House / Artist / Not Applicable) <br> - **Who is paying** for the backline equipment, if it needs to be rented or supplied |
| **Backline Dropbox**            | Upload field for collaborators to submit a **full backline rider**. This is ideal when requests are too complex or detailed to enter manually. Accepted formats may include `.pdf`, `.docx`, `.xlsx`, etc.                            |
| **Notes**                       | A freeform field for providing additional information, substitutions, delivery instructions, or exceptions (e.g., “Artist brings own kick pedal and snare; needs everything else”).                                                   |

> 🗂️ _Uploaded backline documents are typically reviewed by the house production or backline team during the advancing process._

---

## Configuration (Admins)

- **Dropbox File Type Support**: Define allowed file types and size limits.
- **Approval Workflow** _(optional future feature)_: Route submitted riders to the appropriate department for review and sign-off.
- **Field Customization**: Optionally expand to collect common subfields (e.g., “Drums Provided?”, “Amp Brand Requests?”) for faster planning.

---

## Use Cases

- A headliner uploads a detailed PDF with exact drum and amp needs; the house is providing and covering the cost.
- A fly-in artist needs a minimal keyboard rig and marks themselves as the provider, house as payor.
- A DJ crew marks “N/A” for backline and uploads a note explaining that all gear is coming from their tour pack.
