There's no "write-a-prd" skill available either — but no problem, I'll write it directly. Here's a clean, simple PRD suited for a class assignment:

---

# Product Requirements Document
**Project:** Today Only — Focus To-Do App
**Author:** \[Your Name\]
**Version:** 1.0
**Date:** April 2, 2026

---

## Overview

Today Only is a lightweight, single-page to-do app designed to help users focus on what needs to get done *today*. Tasks are scoped to the current day, keeping the interface minimal and purposeful. Built as a class assignment, the app demonstrates core CRUD operations with a simple, opinionated UX twist.

---

## Problem Statement

Generic to-do apps overwhelm users with long backlogs. Today Only solves this by limiting tasks to a single day — anything not done disappears at midnight, encouraging realistic daily planning.

---

## Target User

A student or individual who wants a fast, no-account-required way to track a small number of daily tasks.

---

## Features (In Scope)

**1. Add a Task**
- User types a task name into a text input and presses Enter or clicks "Add."
- Empty submissions are ignored (no blank tasks).
- Tasks are saved to `localStorage` so they persist on page refresh.

**2. Mark Task as Complete**
- User clicks a checkbox or the task itself to toggle it complete.
- Completed tasks display with a strikethrough style.
- State is saved to `localStorage`.

**3. Delete a Task**
- Each task has a delete button (e.g., ✕) visible on hover or always.
- Clicking it removes the task immediately, with no confirmation dialog needed.

---

## Out of Scope

- User accounts or login
- Due dates, priorities, or tags
- Backend/database (localStorage only)
- Mobile app or native build
- Editing existing tasks

---

## Success Criteria

- A user can add, complete, and delete tasks without errors.
- Tasks survive a page refresh.
- The interface is usable without any instructions.

---

## Tech Stack (Suggested)

Plain HTML, CSS, and vanilla JavaScript — or React if preferred. No external dependencies required.

---

## Rough Timeline

| Task | Time Estimate |
|---|---|
| HTML structure + CSS layout | 30 min |
| Add task functionality | 30 min |
| Complete + delete functionality | 30 min |
| localStorage persistence | 20 min |
| Polish + testing | 20 min |
| **Total** | **~2.5 hours** |

---

Simple, tight, and completable in an afternoon. Want me to go ahead and build the actual app now?