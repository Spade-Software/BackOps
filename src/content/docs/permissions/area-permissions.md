---
title: Area Permissions
description: Introduction to permissions in
lastUpdated: 2025-06-11
sidebar:
  order: 6
---

**Area Permissions** control user access to specific _areas_ within an event. Like collaborator permissions, area permissions are scoped per area, allowing you to grant access to only the relevant parts of the event a user needs to manage.

For example, a stage manager may need full administrative access to the “Main Stage” area without being able to view or modify other areas. This makes area permissions a powerful tool for managing large teams with clear domain boundaries.

## Available Area Permissions

| **Permission**      | **Action**       | **Description**                                                                              |
| ------------------- | ---------------- | -------------------------------------------------------------------------------------------- |
| Area Admin          | `*`              | Full access to all components within the area, including schedule, files, and collaborators. |
| Area Read           | `Read`           | Read-only access to the area dashboard, collaborators, files, and schedule.                  |
| Area Settings       | `Settings`       | View and modify settings specific to the area.                                               |
| Area Delete         | `Delete`         | Delete the area from the event.                                                              |
| Area Activities Add | `Activities.Add` | Add new activities under the area.                                                           |
| Area Files Add      | `Files.Add`      | Upload or attach files to the area.                                                          |
