---
title: 📦 Orders
description: Deep dive into the procurement requests page
lastUpdated: 2025-06-04
sidebar:
  order: 5
---

## 📦 Procurement: Orders

The **Orders** tab is the final step in the procurement process. It’s where your shopping list becomes actionable by generating **RFQs (Requests for Quotes)** to send to vendors.

---

### 🧭 Orders Overview

When you open the Orders tab, you’ll see a table of all orders with their current **status**:

- **Draft** – Order in progress, not yet sent
- **Sent** – RFQ has been generated and dispatched to a vendor
- **Canceled** – Order was abandoned
- **Fulfilled** – Procurement is complete and confirmed

Clicking on an order brings up all its details and editable components.

---

### 🧾 Order Details

Each order includes:

- **Delivery/Pickup info**
- **Bill To info**
- **Optional Notes** (shown on RFQ)
- **Status Selector** (Draft, Sent, etc.)
- **Download PDF** (to export and share the RFQ)

---

### 🧮 Line Item Editor

Click **Line Item Editor** to manage the items in your order. The editor shows:

- All procurements grouped by module
- Status of each procurement:

  - **Needs Order** – Not on any order yet
  - **On Order** – Fully matched to an order
  - **Short** – Not enough quantity ordered
  - **Excess** – Quantity exceeds what’s needed

From here, you can:

- Click procurements to add them to the order
- Adjust quantities (e.g., split across vendors)

---

### 📌 Vendor-Specific Flexibility

BackOps supports flexible order structuring:

- **One order per vendor** – e.g., all staging in one RFQ
- **Split by purpose** – e.g., base order + artist-specific add-ons
- **Multiple vendors per need** – e.g., 50 golf carts from two sources

Procurements can be **split across orders**, and the system tracks total fulfillment status across all orders to avoid over/under ordering.

---

### ✅ Key Takeaway

The **Orders** screen is where your approved items become real-world action. With drag-and-drop flexibility, vendor-specific orders, and detailed tracking, BackOps helps ensure every item you need gets ordered—efficiently and accurately.
