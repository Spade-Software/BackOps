---
title: Core Concepts
description: The Core Concepts of BackOps
lastUpdated: 2025-06-04
sidebar:
  order: 3
---

## 🧱 Core Concepts of BackOps

To understand how BackOps works, it’s important to first understand how the platform is structured. Everything in BackOps revolves around three core concepts:

---

### 🎟️ 1. Events

An **Event** is the central container in BackOps. Everything that happens—from planning to execution—is organized under an event.

Think of it as the _project_ you're working on. It could be:

- A music festival
- A corporate event
- A touring production
- A birthday party
- A film shoot

Each event has its own collaborators, areas, data, documents, and workflows—all self-contained to keep operations focused and organized.

---

### 👥 2. Collaborators

**Collaborators** are the people and companies involved in making your event happen.

BackOps uses a flexible structure where:

- A **Collaborator** represents a company or vendor (e.g., a lighting vendor, artist management firm, catering service).
- Each collaborator can have one or more **Users**—individuals who log into the platform and perform tasks on behalf of that company.

Collaborators could include:

- Artists and their teams
- Production companies
- Venue staff
- Operations crews
- Food and beverage vendors
- Security teams

This model allows you to build out a shared workspace where each participant has the right level of access and responsibility.

---

### 📍 3. Areas

**Areas** represent the physical or logical spaces that make up your event site.

You can think of them as **zones** or **locations** where work needs to be planned, assigned, or tracked. Common examples include:

- **Stages** (e.g., Main Stage, Side Stage)
- **Breakout Rooms** (for corporate events)
- **Backstage Zones** (e.g., artist lounge, green rooms)
- **Staff Support Areas** (e.g., catering tents, volunteer check-in, medical tents)

Defining areas allows your team to coordinate operations, assign resources, and track activities based on location.

---

These three concepts—**Events**, **Collaborators**, and **Areas**—are the foundation of BackOps. Every feature in the platform connects back to one of these.

## 🧩 4. Modules

**Modules** are how BackOps delivers specific functionality to your events. Think of them as **feature bundles**—each focused on a particular part of event operations.

Modules **cross-cut across Events, Collaborators, and Areas**, meaning they’re not locked to one part of the platform. Instead, they flexibly integrate into your event wherever needed.

---

### 🎛 What Do Modules Do?

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

### 🧠 Smart Configuration

Modules are **highly configurable**. You can choose which modules to enable:

- **Per Collaborator** – Only show what’s relevant to that vendor, artist, or team.
- **Per Area** – Tailor available features to each zone (e.g., Main Stage vs. Catering Tent).

This keeps the experience focused and clutter-free—your users only see what they need to engage with.

---

### 👨‍🍳 Example: Simplifying for a Food Vendor

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

### ✅ The Takeaway

Modules are how BackOps adapts to the complexity of your show _without overwhelming your collaborators._
They’re flexible, powerful, and designed to keep everyone working in exactly the space they need to.

## 🔄 Module Types: Global vs. Area-Based

In BackOps, **not all modules behave the same way**. To better support the real-world needs of live event logistics, modules are categorized into two distinct types:

- **Global Modules**
- **Area Modules**

Understanding the difference is key to properly assigning and configuring functionality across your event.

---

### 🌐 Global Modules

**Global Modules** are used across the entire event and are **not tied to a specific area**.

These modules represent functions or resources that either:

- Span multiple physical zones (e.g., radios used site-wide), or
- Simply **don’t make sense to restrict to a location** (e.g., credentials or package notifications).

#### 🧰 Examples of Global Modules:

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

### 📍 Area Modules

**Area Modules** are tied directly to **specific locations** within your event.

These modules are used when **context matters**—like knowing which stage needs power, or where a specific lighting rig will be installed.

#### 🧰 Examples of Area Modules:

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

### 🎛️ Assigning Module Access

You can configure module access for collaborators in two ways:

| Module Type       | Assigned By                           | Example Use Case                                                                                        |
| ----------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| **Global Module** | On a per-collaborator basis           | A food vendor needs to request radios and submit vehicle info                                           |
| **Area Module**   | On a per-collaborator, per-area basis | A vendor needs to submit power and Gear for the main stage, but only power for the production compound. |

This flexible permissions model ensures that:

- Users only see the tools relevant to them
- No one is overwhelmed by features they don’t need
- Planners can maintain tight control over operational workflows
