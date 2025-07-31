---
title: Sharing and Permissions
description: Diving into file sharing and permissions
lastUpdated: 2025-07-31
sidebar:
  order: 3
---

Before we can dive into reviews and collaboration, it’s important to understand **how sharing works** in BackOps. File collaboration starts with the ability to control access—and that’s where **associations** and **permissions** come in.

---

### 1. Associations: Connecting Files to People and Places

Every file in BackOps can be **associated** with:

- **Users** – Individual people in your event.
- **Collaborators** – Entire vendors, artists, or partner groups.
- **Areas** – Event locations such as stages, compounds, or other zones.

When you create an association, you decide what level of permission that user, collaborator, or area should have for the file. This makes it simple to share a file broadly (e.g., with an entire collaborator team) while still controlling what each individual can do based on their role.

---

### 2. Permission Levels

Files in BackOps have three permission levels:

| Permission     | What It Allows                                                                    |
| -------------- | --------------------------------------------------------------------------------- |
| **file.read**  | View the file, its versions, formats, comments, and participate in reviews.       |
| **file.edit**  | Everything from `file.read`, plus upload new versions, add formats, rename files. |
| **file.admin** | Full control: edit permissions, manage associations, and share the file.          |

> 💡 **Note:** Reviews and comments are part of `file.read`. You don’t need to grant edit permissions just to involve someone in the review process.

### 3. How Permissions Work with Associations

When you share a file using associations, permissions behave differently depending on whether you're associating a **user**, a **collaborator**, or an **area**:

- **User associations**: The permission you select (view, edit, admin) is applied directly to that user.
- **Collaborator and area associations**: These act as a **ceiling** for permissions.
  - If you associate a collaborator with **admin**, members of that collaborator can access the file—**but only up to the level of their own role within the collaborator**.
  - Example:
    - The file is shared with a collaborator as **admin**.
    - A user with only `collaborator.read` still only has **file.read**.
    - A user with `collaborator.files.edit` would get **file.edit**.
    - A `collaborator.admin` would get full **file.admin** access.

The same logic applies for areas: the association sets the **maximum possible** file permission, but the user’s existing area permissions determine what they actually get.

This ensures you can safely share files broadly while still respecting the underlying security structure of your event.

### 4. Best Practices for Sharing

- **For broad visibility:** Associate the file with a collaborator or area using **file.read**. This ensures everyone in that group can see the file but not make changes.
- **For specific editors:** Add individual **user associations** and grant them **file.edit** or **file.admin**.
- **When in doubt:** Start with `file.read` on larger associations and use targeted user permissions for higher-level access.

This approach keeps sharing simple while maintaining full control and flexibility.

## External Sharing

In addition to internal sharing via associations, BackOps also supports **external sharing**. This works similarly to Dropbox or Google Drive, where you can create shareable links that give outside parties easy access to files or folders without requiring them to join your event.

### 1. Shareable Links

From the same sharing window used for internal associations, you can create **links** for external access. These links are:

- **View-only** – Links never grant edit or admin permissions.
  > 💡 If someone needs to edit or comment on a file, you should invite them into BackOps as a collaborator. This ensures changes are tracked and properly attributed.
- **Individually named** – Each link can be named to indicate its purpose or the recipient (e.g., “Engineer Review,” “Vendor Drop-off,” or “Public Bulletin”).
- **Independently managed** – You can revoke a single link without affecting any others.

This flexibility allows you to organize links by purpose or audience while maintaining tight control over external access.

### 2. Updating Existing Links

One of the key advantages of named links is that you can **modify permissions or content for an existing link without sending a new URL**. For example:

- You can temporarily revoke a link and later restore it.
- You can rename a link to reflect a new purpose.

This keeps your file distribution clean and prevents link sprawl.

### 3. Best Practices for External Links

- Use **named links** for every recipient or purpose to make revoking or updating access simple.
- Keep external links **view-only**; invite users into BackOps for interactive collaboration.

---

By combining internal sharing (via associations) with external share links, you have a complete toolkit for distributing files—whether you’re collaborating within your event team or sharing read-only resources with outside parties.
