# notesapp

## Project Structure
- `frontend/` - React + Vite app
- `backend/` - Node.js + Express app

## Installation Steps
open gitbash
### 1. Backend (Node.js + Express)
1. Open a terminal and navigate to the `backend` folder:
   ```sh
   cd backend
   ```
2. Initialize a new Node.js project and install Express:
   ```sh
   npm init -y
   npm install express
   ```

### 2. Frontend (React + Vite)
1. Open a terminal and navigate to the `frontend` folder:
   ```sh
   cd frontend
   ```
2. Create a new React + Vite project:
   ```sh
   npm create vite@latest . -- --template react
   npm install
   ```

### 3. PowerShell Note (Windows Only)
If you see a script execution error, run PowerShell as Administrator and execute:
```sh
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

## Running the Apps

### Backend
```sh
cd backend
node index.js # or your main server file
```

### Frontend
```sh
cd frontend
npm run dev
```