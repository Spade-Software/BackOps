---
title: Overview
description: Explains what modules are and the types available
lastUpdated: 2025-06-04
sidebar:
  order: 1
---

**Modules** are how BackOps delivers specific functionality to your events. Think of them as **feature bundles**—each focused on a particular part of event operations.

Modules **cross-cut across Events, Collaborators, and Areas**, meaning they’re not locked to one part of the platform. Instead, they flexibly integrate into your event wherever needed.

---

## What do modules do?

Modules define what kind of functionality is available and to whom. Some examples of common modules include:

- **Lighting Module** – Technical specs, power requests, fixture lists
- **Video Module** – Screen dimensions, signal routing, playback setup
- **Staging Module** – Plot approvals, riser needs, build requirements
- **Catering Module** – Meal schedules, dietary needs, service times
- **Labor Management** – Role scheduling, check-in/check-out, time tracking
- **Transportation** – Shuttle planning, airport pickup, routing
- **Credentials** – Access passes, wristbands, badge creation
- **Power Requests** – Generator hookups, distro planning

…and many more.

---

## Configuration

Modules are **highly configurable**. You can choose which modules to enable:

- **Per Collaborator** – Only show what’s relevant to that vendor, artist, or team.
- **Per Area** – Tailor available features to each zone (e.g., Main Stage vs. Catering Tent).

This keeps the experience focused and clutter-free—your users only see what they need to engage with.

---

## Example: Simplifying for a Food Vendor

Let’s say you’re bringing in a food vendor who:

- Needs power
- Will submit a basic work schedule
- Requires staff credentials
- Has delivery vehicles to register

You could enable just the following modules for them:

- **Power**
- **Scheduling**
- **Credentials**
- **Vehicles**

That vendor’s interface is now streamlined and focused—no distractions from unrelated modules like lighting plots or rigging specs.

---

## The Takeaway

Modules are how BackOps adapts to the complexity of your show _without overwhelming your collaborators._
They’re flexible, powerful, and designed to keep everyone working in exactly the space they need to.

---

## Module Types

In BackOps, **not all modules behave the same way**. To better support the real-world needs of live event logistics, modules are categorized into two distinct types:

- **Global Modules**
- **Area Modules**

Understanding the difference is key to properly assigning and configuring functionality across your event.

---

### Global Modules

**Global Modules** are used across the entire event and are **not tied to a specific area**.

These modules represent functions or resources that either:

- Span multiple physical zones (e.g., radios used site-wide), or
- Simply **don’t make sense to restrict to a location** (e.g., credentials or package notifications).

#### Examples

- **Heavy Equipment Requests**
- **Radio Requests**
- **Credential Requests**
- **Guest Lists**
- **Labor Management**
- **Vehicle Registration**
- **Golf Carts / Utility Carts**
- **Package Notifications**

These modules allow users to make requests, submit forms, or interact with workflows at the **event-wide level**, no matter where the activity happens.

---

## Area Modules

**Area Modules** are tied directly to **specific locations** within your event.

These modules are used when **context matters**—like knowing which stage needs power, or where a specific lighting rig will be installed.

#### Examples of Area Modules:

- **Audio**
- **Video**
- **Lighting**
- **Power**
- **Backline**
- **Special Effects**
- **Staging**
- **Hospitality**
- **Gear Requests**

When a collaborator uses an Area Module, they’ll be prompted to provide information about **where** the request or activity applies. This ensures precise planning and operational clarity.

---

Perfect—this concept of **production advance responses** is a great pattern to establish for your area modules. It sets up consistency and helps unify how advancing is handled across disciplines like Audio, Video, Lighting, etc. Below is a documentation-ready introduction to both the **Area Modules** and the **Audio module**, including the shared Production Advance Response pattern that you’re establishing.

---

### Production Advance Responses (Shared Concept)

Several area modules—especially those used during artist advancing—use a standardized structure called a **Production Advance Response**.

Each advanceable item includes two key fields:

| Field        | Purpose                                                                                     |
| ------------ | ------------------------------------------------------------------------------------------- |
| **Provider** | Who is supplying the item or role? <br> Options: `House`, `Artist`, or `Not Applicable`     |
| **Payor**    | Who is financially responsible for it? <br> Options: `House`, `Artist`, or `Not Applicable` |

This system ensures clear communication and accountability around gear, services, and technical staffing—before the show even begins.

**Why this matters:**

- Some artists may order gear, but want the event to cover costs.
- Others may need specific gear supplied by the venue, but will cover the cost themselves.
- Some items may not be needed at all, and should be explicitly marked as such.

This structured approach supports both **clarity** and **flexibility** during advancing.

🔗 [Learn more about production advance responses →](/advancing/production-advance-response)


--- 
## Assigning Access

You can configure module access for collaborators in two ways:

| Module Type       | Assigned By                           | Example Use Case                                                                                          |
| ----------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| **Global Module** | On a per-collaborator basis           | A food vendor needs to request radios and submit vehicle info                                             |
| **Area Module**   | On a per-collaborator, per-area basis | A stage manager needs to submit power and lighting requests for Main Stage, but only audio for Side Stage |

This flexible permissions model ensures that:

- Users only see the tools relevant to them
- No one is overwhelmed by features they don’t need
- Planners can maintain tight control over operational workflows
