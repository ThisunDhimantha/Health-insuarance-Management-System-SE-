# Entity-Relationship (ER) Diagram Specification

## Overview
This document specifies the database relationships for the **Health Insurance Management System**.

## ER Diagram (Mermaid)

```mermaid
erDiagram
    USERS ||--o{ MEDICAL_CLAIMS : "submits"
    USERS ||--o{ PREMIUM_PAYMENTS : "pays"
    POLICIES ||--o{ MEDICAL_CLAIMS : "covers"
    POLICIES ||--o{ PREMIUM_PAYMENTS : "applies_to"

    USERS {
        bigint id PK
        string full_name
        string email
        string password
        enum role
        timestamp created_at
    }

    POLICIES {
        bigint id PK
        string policy_name
        string policy_type
        double coverage_amount
        double premium_amount
        timestamp created_at
    }

    MEDICAL_CLAIMS {
        bigint id PK
        bigint user_id FK
        bigint policy_id FK
        double claim_amount
        string hospital_name
        enum status
        timestamp created_at
    }

    PREMIUM_PAYMENTS {
        bigint id PK
        bigint user_id FK
        bigint policy_id FK
        double amount
        string payment_method
        enum payment_status
        timestamp transaction_date
    }
```

## Entity Descriptions

1. **Users**: Stores system stakeholders (Policyholders, Hospitals, Insurance Staff, Admins).
2. **Policies**: Stores available health insurance coverage packages and pricing.
3. **Medical Claims**: Tracks claims submitted by users for hospital treatment reimbursement.
4. **Premium Payments**: Records transactions for active policy subscriptions.
