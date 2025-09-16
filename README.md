# Online Bookstore Fullstack App

## Backend
- Spring Boot (Java 17, Maven, H2 in-memory DB)
- Run: `cd backend && mvn spring-boot:run`

## Frontend
- React (CRA, axios, react-router-dom)
- Run: `cd frontend && npm install && npm start`

## Tests
- Backend: `cd backend && mvn test`
- Frontend: `cd frontend && npm test`

## How to push to GitHub
```bash
git init
git add .
git commit -m "Initial commit: bookstore"
git remote add origin https://github.com/YOUR_USERNAME/online-bookstore.git
git branch -M main
git push -u origin main
```
