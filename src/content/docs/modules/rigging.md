---
title: Rigging
description: Talks through the Rigging Module
lastUpdated: 2025-06-28
---

The **Rigging module** is an **area module** used during artist advancing to request permission for rigging equipment in specific stage areas. This includes collecting details about what is being rigged, where it is going, and how much it weighs. Each rigging request also allows collaborators to specify whether support gear (e.g., truss or motors) needs to be provided by the event team.

Rigging requests go through an **approval process**, ensuring that each item is safe, permitted, and appropriately resourced. Any gear requested under a rigging item becomes part of the **resource approval** and **procurement** flows.

---

## Fields

| Field            | Description                                                                                                                                     | Type                |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| **Name**         | The label for the rigging request. Often describes the item being flown (e.g., “Upstage Softgoods Truss”).                                      | Free Text           |
| **Description**  | Detailed explanation of what’s being rigged and its purpose.                                                                                    | Free Text           |
| **Location**     | The desired rigging location on stage (e.g., “USC” for Upstage Center, or “DSR” for Downstage Right).                                           | Free Text           |
| **Weight**       | Total weight of the rigged element, for structural load planning.                                                                               | Free Text           |
| **Rigging Plan** | File uplaod of the relevant rigging drawing.                                                                                                    | File                |
| **Line Items**   | A list of gear that must be **provided by the event team** to support the rigging request (e.g., motors, truss). These items go to procurement. | Resource Line Items |
| **Notes**        | General notes related to rigging needs—can include timing, coordination details, or special warnings.                                           | Free Text           |

> 💡 _Line Items requested here will be routed through the procurement process and must receive resource approval before being fulfilled._

---

## Use Cases

- An artist requests a 40' upstage truss to hang softgoods, notes the weight as 650 lbs, and asks the house to provide motors and truss.
- A tour brings their own rigging package but still submits requests to document rigging locations and confirm approval.
- A production adds house truss and rigging to the artist’s plan, assigning it for procurement in the resource approval process.
