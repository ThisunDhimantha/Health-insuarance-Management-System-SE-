# System Architecture Document

## Overview

The Web-Based Health Insurance Management System follows a 3-Tier Architecture consisting of the Client Layer (Frontend UI), Business Logic Layer (Spring Boot Backend API), and Data Persistence Layer (MySQL Database).

## Architecture Diagram (Mermaid)

```mermaid
graph TD
    Client[Web Browser Client] -->|HTTP / JSON API| Backend[Spring Boot REST API - Port 8080]
    Backend -->|Spring Data JPA| DB[(MySQL Database - Port 3306)]
    
    subgraph Frontend Tier
        Client
    end
    
    subgraph Backend Tier
        Backend --> Controller[REST Controllers]
        Controller --> Service[Business Services]
        Service --> Repository[JPA Repositories]
    end
    
    subgraph Database Tier
        DB
    end
```

## Component Description

1. **Frontend Tier (Vite / Vanilla Web Stack):** Serves interactive UI components for users to submit claims, view policies, and make payments.
2. **Backend Tier (Spring Boot Java REST API):** Encapsulates business logic, security controls, and endpoint routing.
3. **Database Tier (MySQL):** Relational database storing persistent records for users, claims, policies, and transactions.
