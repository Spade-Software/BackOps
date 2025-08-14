---
title: Beta-0.7.0
description: Release Notes for Beta-0.7.0
lastUpdated: 2025-04-08
sidebar:
  order: 8
  badge:
    text: Current
    variant: success
---

**Release Date:** August 14, 2025  
**Version:** `beta-0.7.0`

This release introduces the Crewing Module, combining crew, contact, and user management into one streamlined system. It includes powerful tools for custom attributes, granular permissions, and at-a-glance data completeness tracking — giving event teams full control over crew information.

---

#### **Details**

- **Event Crew Page**
    - View all crew members for an event in one place.
    - Toggle visible columns to show the data most relevant to you.
    - Access limited to event admins.
- **Event Settings – Crewing Attributes**
    - Add custom attributes for crew members based on event needs.
    - Supported types: text, select (with configurable options), and date/time.
    - Use for details such as meal preferences, certifications, or travel info.
- **Crewing Permissions Management**
    - New “Crew Manage” permission for collaborators.
    - Delegates crew management responsibilities without granting full event access.
- **Collaborator Crew Page**
    - Add new crew members individually or bulk invite via email.
    - Crew without accounts can be invited to create accounts later.
- **Collaborator Settings – Crewing Attributes**
    - Set default attributes for all new crew members added under a collaborator.
    - Mark attributes as **Required** to track missing data on dashboards and tables.
    - Mark attributes as **Crew Provided** to indicate expected input from the crew member.
    - Defaults apply only to newly added crew members.
    - Attribute options come from the event-level configuration.
- **Crew Member Custom Settings**
    - On a crew member’s profile, use the 3-dot menu to edit assigned attributes.
    - Overrides collaborator defaults for granular control.
    - Add, remove, or change Required / Crew Provided status per crew member.
    - Event-level attributes must exist before being assigned.
- **Collaborator Dashboard – Missing Crew Info Card**
    - Shows crew members missing required data.
    - Gives quick visibility into what’s incomplete and needs action.
- **Crew Profile**
    - Crew can view and update their own information by clicking their account in the bottom left.
    - Provides a quick self-service option for keeping data current.