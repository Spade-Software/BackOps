---
title: 🎚️ Production Advance Response
description: high level overview of collaborators page
lastUpdated: 2025-06-04
sidebar:
  order: 2
---

A **Production Advance Response** is a key interaction model used throughout BackOps to collect clear, actionable information during the advancing process. It’s how collaborators indicate **who is responsible for providing and paying for** specific items or services at an event.

---

### 🧱 The Two-Part Response

Each Production Advance Response consists of:

| Field        | Options                             | Purpose                                                        |
| ------------ | ----------------------------------- | -------------------------------------------------------------- |
| **Provider** | `House`, `Artist`, `Not Applicable` | Who is bringing or supplying the item                          |
| **Payer**    | `House`, `Artist`, `Not Applicable` | Who is financially responsible for the item, **if applicable** |

> **Note:** The **Payer** field is only enabled if the **Provider** is set to `House`.

---

### 🔍 What Each Option Means

- **House**

  - **Provider**: The event (e.g., festival, venue, producer) is supplying the item.
  - **Payer**: The event will fund the item, or the item is part of general resources (if marked NA).

- **Artist**

  - **Provider**: The artist or their team is bringing the item themselves.
  - **Payer**: The artist will cover costs (e.g., through chargebacks, reimbursements).

- **Not Applicable (NA)**

  - **Provider**: The item isn’t needed for this collaborator/event.
  - **Payer**: No charge is needed—typically used when the item is already included in base provisions.

---

### 📦 Attaching Items

Production Advance Responses aren’t just yes/no fields—they allow **line items** to be attached beneath them. These items generally include:

- **Name** (e.g., “Digico FOH Console”)
- **Quantity**
- Module-specific fields (e.g., location, dimensions, notes)

> Adding items will trigger a **procurement and approval flow**, ensuring accountability and tracking.

---

### 🧠 Where Production Advance Responses Are Used

You’ll see this pattern in many Area Modules:

- Audio
- Lighting
- Video
- Backline
- Special Effects
- Staging

Each module customizes how items are entered and displayed, but the logic of **Provider → Payer → Items → Approval** stays consistent.
