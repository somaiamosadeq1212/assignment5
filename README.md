# Week 5 Assignment — React Hook Form + Yup Validation

A modern authentication UI built with **React Hook Form** and **Yup validation**.

This project includes a fully validated **Register Form** and **Login Form** with proper error handling and clean UI design.

---

## Features

### Register Form
- Full Name (required, minimum 3 characters)
- Email (required, valid email format)
- Password (required, minimum 8 characters, must contain at least 1 number)
- Confirm Password (must match password)
- Terms & Conditions (required checkbox)
- Displays validation errors under each field
- Shows success message: **"Registration Successful!"**
- Logs form data to console on submit

### Login Form
- Email (required, valid email format)
- Password (minimum 8 characters, must contain at least 1 number)
- Validation using Yup
- Console logs submitted data

---

## Technologies Used

- React
- React Hook Form
- Yup
- @hookform/resolvers
- CSS (Custom modern UI design)

---

## Project Structure
```bash
src/
│
├── components/
│ ├── LoginForm.jsx
│ └── RegisterForm.jsx
│
├── validations/
│ ├── loginSchema.js
│ └── registerSchema.js
│
├── App.jsx
└── index.css
```
---

## Validation Rules (Register)

| Field            | Rules |
|------------------|--------|
| Full Name        | Required, min 3 characters |
| Email            | Required, valid format |
| Password         | Required, min 8 chars, at least 1 number |
| Confirm Password | Must match Password |
| Terms            | Must be checked |

---

## UI Highlights

- Glass-style card design
- Modern button hover effects
- Clean and responsive layout

---

## How to Run

```bash
npm install
npm run dev
```
---

## Assignment Checklist

- Controlled by React Hook Form
- Yup schema created and connected
- Error messages display correctly
- Confirm password validation works
- Checkbox required works
- Success message displayed

---

## Author

Somaya Mosadiq
Week 5 — React Hook Form Assignment