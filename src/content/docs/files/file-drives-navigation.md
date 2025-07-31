---
title: Drives and Navigation
description: Diving into file sharing and permissions
lastUpdated: 2025-07-31
sidebar:
  order: 6
---

As the number of files in your event grows, organization becomes essential. BackOps uses a **drive-based structure** to help you navigate and manage your files with clarity. Drives act as the top-level containers for files and folders within an event, allowing you to easily find, organize, and collaborate on content.

---

### 1. Types of Drives

Every event includes three types of drives:

1. **Event Drive**

   - The central storage location for all event-related files.
   - Accessible to users with `file.view`, `file.edit`, or `file.admin` permissions at the event level.
   - Best suited for files relevant to the entire event (e.g., master schedules, global production documents).

2. **Collaborator Drives**

   - Each collaborator on an event has its own dedicated drive.
   - Access is determined by your permissions for that collaborator.
   - Commonly used for collaborator-specific files (e.g., a bands backline rider, a vendors proof of insurance documentation.).

3. **Area Drives**
   - Each area (e.g., stages, compounds, or functional zones) also has its own drive.
   - Access is controlled by area-level permissions.
   - Perfect for location-specific files, such as stage layouts or area safety plans.

> 💡 You’ll only see the drives you have permission to access. If you don’t have at least `file.view` permission for an event, collaborator, or area, that drive won’t appear in your list.

---

### 2. Navigating Drives

To explore your drives:

- Go to the **Files** tab in the sidebar and click **Drives**.
- You’ll see all the drives available to you, organized by event, collaborator, and area.
- Selecting a drive opens its root folder, where you can browse files and create subfolders just like in any standard file system.

---

### 3. The “Shared with Me” View

In addition to the drives list, the sidebar includes a **Shared with Me** section.  
This isn’t a drive—it’s a **personalized view of every file that has been directly associated with you**.

Files appear here if:

- You created the file (ownership automatically associates you).
- You were explicitly added via a **user association**.

This view is especially useful for monitoring files that matter most to you, allowing you to:

- Quickly check for new versions.
- Review comments or requested changes.
- See review and approval progress.

---

### 4. The “Shared” Folder in Collaborator and Area Drives

Inside each **collaborator drive** and **area drive**, you’ll find a special folder named **Shared**.  
This folder contains:

- Any files that were shared with that collaborator or area through associations.

You can interact with these files according to the permissions that were set when they were shared.

> ⚠ Note: The **Event Drive** does not have a “Shared” folder because files cannot be associated directly to the event.

---

### 5. Best Practices for Navigation

- Use **drives** for structured navigation by event, collaborator, or area.
- Use **Shared with Me** to keep track of files that are personally relevant.
- Check the **Shared folder** in collaborator or area drives for files shared broadly within those contexts.

---

By combining drives, “Shared with Me,” and the “Shared” folder, BackOps gives you a clear, organized way to access every file you need—whether you’re managing global event documentation or tracking a specific vendor’s deliverables.
