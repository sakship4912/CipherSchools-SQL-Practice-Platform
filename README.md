CipherSchools - CipherSQLStudio

This project is a SQL practice platform built as part of the CipherSchools assignment.
It allows students to practice SQL queries on predefined assignments in a safe and controlled environment.

Features:
- Assignment listing page
- SQL editor for writing queries
- Execute SELECT queries and view results
- Guided hint system to help when stuck
- Mobile-first responsive user interface

Tech Stack:

Frontend:
- React.js
- Vanilla SCSS (mobile-first design)

Backend:
- Node.js
- Express.js

Database:
- PostgreSQL (used as a sandbox for SQL query execution)
- MongoDB (used for storing assignments and user progress)

Editor:
- Monaco Editor

How it Works:
1. User selects an assignment from the list
2. User writes a SQL query in the editor
3. The query is sent to the backend
4. Backend validates the query for safety
5. Query is executed against the sandbox database
6. Results or errors are returned and displayed
7. User can request a hint if needed

Setup Instructions:
1. Install dependencies in both frontend and backend folders
2. Copy .env.example to .env and configure required values
3. Start the backend server
4. Start the frontend development server

The project focuses on correctness, security, and understanding of data flow rather than feature completeness.
