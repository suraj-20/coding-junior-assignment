# 🧑‍💼 User Management Dashboard

A simple and responsive admin dashboard built with **Next.js**, **TypeScript**, and **Tailwind CSS** to manage users. It demonstrates API integration, state management, conditional rendering, and form validation through a multi-step user creation flow.

---

## 🚀 Features

### 📋 Dashboard (`/dashboard`)

- Fetches users from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users)
- Displays user info: name, email, phone, and city
- Filter/search users by **name** or **city**
- Loading and error state handling
- Button to navigate to **Add User** form

### ➕ Add User (`/dashboard/add`)

- Multi-step form with 3 steps:
  1. **Basic Info**: Name, Email
  2. **Address**: Street, City, ZIP
  3. **Review & Confirm**: Final summary + submit
- Form field validation (required fields, email format)
- Navigation between steps
- Logs submitted data to console
- "Back to Dashboard" button

---

## 🛠 Tech Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Axios** – API fetching
- **Framer Motion** _(optional)_ – Form animations
- **React Context** or `useState` – Form state handling

---

## 📸 Screenshots

| Dashboard                                 | Add User Form                   |
| ----------------------------------------- | ------------------------------- |
| ![Dashboard](./screenshots/dashboard.png) | ![Form](./screenshots/form.png) |

---

## 🧑‍💻 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/user-dashboard.git
cd user-dashboard
```
