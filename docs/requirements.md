# Software Requirements Specification (SRS)

## 1. Functional Requirements

### 1.1 Policy Management Module
- **FR-1.1:** System shall allow administrators to create, update, and deactivate insurance policies.
- **FR-1.2:** Policyholders shall be able to view available policies and subscribe online.

### 1.2 Medical Claim Management Module
- **FR-2.1:** Policyholders shall be able to file claims with attached medical receipts.
- **FR-2.2:** Hospitals and staff shall verify claim authenticity and approve/reject claims.

### 1.3 Premium Payment Module
- **FR-3.1:** Users shall pay policy premiums securely using payment cards/online methods.
- **FR-3.2:** System shall generate digital receipts and record transaction logs.

---

## 2. Non-Functional Requirements

### 2.1 Performance
- API response time shall be under 2 seconds for standard operations.

### 2.2 Security
- Sensitive user data and passwords must be encrypted.
- CORS policy and role-based authorization must be enforced.

### 2.3 Usability
- UI shall be mobile-responsive and accessible via standard modern web browsers.
