# Backend

Server-side API for the Health Insurance Management System.

## Suggested structure (once framework is chosen)
```
backend/
├── src/
│   ├── controllers/     # Request handlers
│   ├── models/          # Database models/entities
│   ├── routes/          # API routes
│   ├── middleware/       # Auth, error handling, validation
│   └── services/         # Business logic
├── config/               # DB config, app config
├── package.json / pom.xml / requirements.txt
└── .env.example
```

## Setup
```bash
# Node/Express example
npm install
npm run dev

# Spring Boot example
./mvnw spring-boot:run

# Django/Flask example
pip install -r requirements.txt
python manage.py runserver
```
