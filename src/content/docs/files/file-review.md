---
title: Review and Collaboration
description: Diving into the file review and collaboration in BackOps
lastUpdated: 2025-07-31
sidebar:
  order: 4
---

Now that we’ve covered file sharing and permissions, let’s look at how collaboration happens in BackOps.

File collaboration in production isn’t just about storing documents; it’s about making sure the right people review, approve, and provide feedback at the right time. BackOps supports this through two tightly connected workflows: **comments** and **reviews**.

---

### 1. Comments

Every version of a file includes a **comment thread** where collaborators can leave feedback.

Comments make it easy to:

- Share context or ask questions about a specific version of a file.
- Provide informal feedback before requesting formal approval.
- Keep a record of the discussion tied directly to the correct version (no more email chains or side conversations).

> **Example:**  
> The production manager might leave a comment asking the lighting designer to shift a truss location. Once the designer uploads a new version, the conversation stays linked to the file history for full context.

---

### 2. Reviews

Sometimes files require formal sign-off. This is where **reviews** come in.

You can add reviewers to a file version, and each reviewer is explicitly asked to approve (or request changes). Common examples include:

- Engineers approving a rigging plot for structural safety.
- Production companies confirming logistics readiness.
- Artists approving placement for their equipment.

A file version’s approval status isn’t marked as complete until all assigned reviewers have given their approval.

---

### 3. Request Changes

Reviews aren’t just binary approvals. If a reviewer identifies an issue, they can select **“Request Changes”** instead of approving.

This option:

- Signals that the reviewer has completed their review but is blocking approval until the requested changes are made.
- Helps keep accountability clear, so everyone knows what’s outstanding.
- Prevents premature approvals that might lead to mistakes later in the production process.

---

### 4. The Collaboration Loop

By combining **comments** and **reviews**, BackOps enables a full collaboration workflow:

1. A new version of the file is uploaded.
2. Collaborators add comments with feedback or questions.
3. Reviewers either **approve** or **request changes**.
4. Once all approvals are collected, the version is confirmed as the agreed-upon reference point.

This creates a transparent record of both discussion and approval, eliminating confusion and keeping production teams aligned.

---

Next, we’ll explore **Associations and Activity Tracking**, which help connect files to the right areas, collaborators, and historical context across your event.
