---
title: 🎆 Special Effects (SFX) Module
description: Talks through the SFX Module
lastUpdated: 2025-06-04
sidebar:
  order: 6
---

The **Special Effects (SFX) module** is an **area-based module** used to manage requests and responsibilities for any special effects elements used during a performance or within a specific area of an event.

From **pyrotechnics** to **cryogenics**, **confetti cannons**, or **fog machines**, this module helps identify:

- Who is supplying the effect
- Who is responsible for the cost
- What specific SFX gear or effects are needed

---

### 📋 Fields in the SFX Module

| Field                                  | Description                                                                                                                                                                                                                | Type |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| **Special Effects (Provider + Payer)** | Uses the **Production Advance Response format** to declare: <br> - **Provider**: House / Artist / Not Applicable <br> - **Payer**: House / Artist / Not Applicable                                                         |      |
| **Line Items**                         | Optional line-by-line entries for each effect, including: <br> - **Item Name** (e.g., CO2 Jet, Flame Bar, Spark Emitter) <br> - **Quantity** <br> These items feed into the **resource procurement and approval process**. |      |
| **Notes**                              | A freeform field for adding important context, such as safety procedures, licensed operator requirements, permitting details, or cue timing.                                                                               |      |

> ⚠️ _All SFX entries should be reviewed by technical and safety teams as part of the approval process._

---

### 🛠️ Configuration Options (for Admins)

- **Item Libraries**: Pre-load common SFX options for faster line item entry.
- **Safety Flags**: Tag requests for review if they involve high-risk elements (e.g., flame, compressed gas).
- **Approval Workflow**: Route SFX requests to safety officials or local compliance officers.

---

### ✅ Use Cases

- A DJ act brings their own CO2 jets but requests the house to provide the gas and operator.
- A headliner requests a full pyro package, submitted as a line item list for approval and procurement.
- An artist doesn’t use SFX, but still submits the module marked **Not Applicable** to confirm no effects are expected.
