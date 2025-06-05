---
title: Package
description: Talks through the Packages Module
lastUpdated: 2025-06-04
---

The **Package module** is a **global module** used to track and manage shipments sent directly to the event site. It helps ensure that **last-minute deliveries**—like gear, merchandise, or supplies—are expected, received, and routed correctly.

---

## Purpose

Events often involve critical items being shipped just days—or even hours—before load-in. The Package module gives vendors and collaborators a way to:

- Register inbound packages
- Share shipment and tracking details
- Ensure the on-site operations team knows what to expect and when

This reduces the risk of missed deliveries, confusion at the receiving dock, or unclaimed packages sitting in the production office.

---

## Fields

When registering a package, collaborators will fill out the following:

| Field                     | Description                                                                                              |
| ------------------------- | -------------------------------------------------------------------------------------------------------- |
| **Description**           | A short description of what the package contains (e.g., “Spare Cables for FOH”, “Lighting Console Case”) |
| **Shipped To**            | Name of the person the package is addressed to (must match recipient info on the shipping label)         |
| **Box Count**             | Number of boxes included in the shipment (e.g., “1 of 3”, “2 of 2”)                                      |
| **Shipping Company**      | The carrier used (e.g., FedEx, UPS, DHL, USPS)                                                           |
| **Tracking Number**       | The official tracking ID for the package to enable real-time monitoring                                  |
| **Expected Arrival Date** | When the package is expected to arrive on site, so operations can prepare accordingly                    |

> 💡 _This module helps the site team organize deliveries and ensure critical gear gets to the right collaborator at the right time._

---

## Configuration (Admins)

- **Module Access**: Enable only for vendors and collaborators who will be shipping goods directly to site.
- **Receiving Workflow** _(optional future feature)_: Track confirmation of delivery, recipient signature, or package drop-off location.

---

## Use Cases

- A lighting vendor sends backup parts for emergency repair
- An artist manager sends merch boxes to be picked up at check-in
- Catering receives last-minute kitchen supplies via overnight shipping
