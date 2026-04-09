# Security Concepts: Validation, Verification, Authentication & Authorization

> A clear guide to four foundational security concepts — what they mean, how they differ, and how they work together.

---

## Table of Contents

- [Overview](#overview)
- [Validation](#validation)
- [Verification](#verification)
- [Authentication](#authentication)
- [Authorization](#authorization)
- [How They Work Together](#how-they-work-together)
- [Quick Comparison](#quick-comparison)

---

## Overview

These four concepts are the building blocks of secure systems. They are often confused with each other, but each plays a distinct role:

| Concept | Question It Answers |
|---|---|
| **Validation** | Is this data in the correct format? |
| **Verification** | Is this information true/accurate? |
| **Authentication** | Who are you? |
| **Authorization** | What are you allowed to do? |

---

## Validation

**Definition:**  
Validation checks whether input data meets a defined format, structure, or rule — *before* any processing happens.

**Purpose:**  
Ensure data is clean, safe, and in the expected shape.

**Examples:**
- Checking that an email field contains `@`
- Ensuring a password is at least 8 characters long
- Confirming a date field is in `YYYY-MM-DD` format
- Rejecting a form field that is left empty

**Key point:**  
Validation does **not** check if data is true — only if it is well-formed.

```js
// Example: Simple email validation
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
```

---

## Verification

**Definition:**  
Verification confirms that a piece of information is accurate, genuine, or matches a known record.

**Purpose:**  
Cross-check data against a trusted source to confirm its truth.

**Examples:**
- Checking that a user's email address actually exists (email link)
- Verifying a phone number via OTP (one-time password)
- Confirming a government ID matches a person's details
- Checking a digital signature against a certificate

**Key point:**  
Verification is about **truth** — does this data match reality or a trusted record?

```
User enters email → System sends verification link → User clicks link → Email verified ✓
```

---

## Authentication

**Definition:**  
Authentication is the process of confirming that a user or system is **who they claim to be**.

**Purpose:**  
Establish and prove identity before granting access.

### The 3 Authentication Factors

| Factor | Description | Examples |
|---|---|---|
| **Something you know** | Secret information | Password, PIN, security question |
| **Something you have** | Physical/digital token | Phone, smart card, hardware key |
| **Something you are** | Biometric trait | Fingerprint, face scan, retina |

### Common Authentication Methods

- **Single-factor (SFA)** — only one factor (e.g. password only)
- **Two-factor (2FA)** — two factors (e.g. password + OTP)
- **Multi-factor (MFA)** — two or more factors combined
- **Single Sign-On (SSO)** — one login grants access to multiple apps
- **Biometric** — physical traits used as proof of identity
- **OAuth / Token-based** — delegated authentication via tokens

### Authentication Flow

```
User submits credentials
        ↓
System checks against stored records
        ↓
Match? → Access granted ✓
No match? → Access denied ✗
```

**Key point:**  
Authentication answers **"Who are you?"** — it does not decide what you can do.

---

## Authorization

**Definition:**  
Authorization determines what an authenticated user is **permitted to do** or access within a system.

**Purpose:**  
Enforce access control based on roles, permissions, or policies.

### Common Authorization Models

| Model | Description |
|---|---|
| **RBAC** (Role-Based Access Control) | Permissions assigned to roles (e.g. admin, editor, viewer) |
| **ABAC** (Attribute-Based Access Control) | Permissions based on attributes (e.g. department, location) |
| **DAC** (Discretionary Access Control) | Resource owner controls who gets access |
| **MAC** (Mandatory Access Control) | System-enforced policies based on classification levels |

**Examples:**
- An admin can delete users; a regular user cannot
- A viewer can read documents but not edit them
- An employee can access their own payroll but not others'

```
Authenticated user makes a request
        ↓
System checks permissions/roles
        ↓
Permitted? → Request allowed ✓
Not permitted? → Request denied ✗
```

**Key point:**  
Authorization answers **"What can you do?"** — it always comes *after* authentication.

---

## How They Work Together

In a real system, all four concepts operate in sequence:

```
1. VALIDATION      → Is the input data correctly formatted?
        ↓
2. VERIFICATION    → Is the provided information genuine?
        ↓
3. AUTHENTICATION  → Is this user who they claim to be?
        ↓
4. AUTHORIZATION   → Does this user have permission for this action?
```

### Real-World Example (User Login)

```
Step 1 — Validation:
  Email format is checked → must contain "@" and a domain

Step 2 — Verification:
  Email was confirmed via a verification link when account was created

Step 3 — Authentication:
  User enters email + password → system confirms credentials match

Step 4 — Authorization:
  System checks user's role → admin sees dashboard, viewer sees reports only
```

---

## Quick Comparison

| | Validation | Verification | Authentication | Authorization |
|---|---|---|---|---|
| **Question** | Correct format? | Is it true? | Who are you? | What can you do? |
| **Checks** | Data shape/rules | Accuracy vs record | Identity | Permissions |
| **When** | On input | Before or during signup | On login | After login |
| **Example** | Email has `@` | Email link confirmed | Password matches | User can edit |
| **Without it** | Bad data enters system | Fake data accepted | Anyone can log in | Any user can do anything |

---

> **Remember:** Validation and verification deal with *data*. Authentication and authorization deal with *users and access*.