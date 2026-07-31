# 🏥 Web-Based Health Insurance Management System

A web-based platform that automates health insurance services by allowing users to manage insurance policies, medical claims, premium payments, hospitals, and reports in one secure system.

**Group:** MLB-B2G2-09

| Reg. No | Name |
|---------|------|
| IT25101964 | Sarathchandra G.W.S.I |
| IT25102885 | Dhimantha W.L.T |
| IT25103980 | Perera W.W.M.D |
| IT25101957 | Lakshani J.D.C |
| IT25103984 | Jayalath W.A.D |
| IT25101054 | Nemsith K.B.N |

---

## 📖 Overview

The Web-Based Health Insurance Management System is designed to replace manual insurance processes with a digital solution. It enables customers, hospitals, insurance staff, and administrators to manage policies, claims, payments, and reports efficiently.

---

## 🎯 Objectives

- Manage insurance policies online
- Process medical claims efficiently
- Support secure premium payments
- Improve communication between stakeholders
- Reduce paperwork and manual errors

---

## 🏗️ System Architecture

```text
                  Users
                     │
                     ▼
        Web-Based Health Insurance System
                     │
     ┌──────────┬──────────┬──────────┐
     │          │          │          │
 Policies    Claims    Payments   Reports
                     │
                     ▼
             Spring Boot Backend
                     │
                     ▼
               MySQL Database
```

---

## 👥 Stakeholders

- 👤 Policyholders
- 🏥 Hospitals
- 🧑‍💼 Insurance Staff
- 🔐 System Administrator

---

## ✨ Main Modules

- 📄 Insurance Policy Management
- 🏥 Medical Claim Management
- 💳 Premium Payment Management
- ✅ Hospital Verification
- 💬 Customer Support
- 📊 Reporting & System Administration

---

## 🛠️ Technology Stack

- **Backend:** Java, Spring Boot
- **Frontend:** HTML, CSS, JavaScript
- **Database:** MySQL
- **Build Tool:** Maven
- **Security:** Spring Security / JWT

---

## 📂 Project Structure

```text
health-insurance-management-system
│
├── src
│   ├── controller
│   ├── service
│   ├── repository
│   ├── model
│   └── config
│
├── resources
├── pom.xml
└── README.md
```

---

## 🚀 Getting Started

### Requirements

- Java 17+
- Maven
- MySQL

### Run the Project

```bash
git clone <repository-url>

cd health-insurance-management-system

mvn spring-boot:run
```

The application will run on:

```
http://localhost:8080
```

---

## 📌 Project Summary

This project provides a secure and user-friendly platform for managing health insurance services. It improves efficiency by digitizing policy management, claim processing, premium payments, and reporting while reducing manual work and increasing accessibility.

---

## 📄 License

Academic project developed for the Software Engineering module.
