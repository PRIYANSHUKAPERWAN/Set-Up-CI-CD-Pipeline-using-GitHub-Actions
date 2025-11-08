🚀 Full Stack CI/CD Deployment – React + Node.js + AWS EC2
Automate your full-stack deployment with GitHub Actions, Node.js backend, and React frontend, seamlessly deployed to AWS EC2.
Every push to the main branch triggers build, test, and deploy automatically. ⚙️

🧩 Tech Stack
Layer	Technology
Frontend	React.js
Backend	Node.js, Express.js
CI/CD	GitHub Actions
Deployment	AWS EC2 (Ubuntu)
Process Manager	PM2
🗂️ Project Structure
fullstack-app/ ├── backend/ │ ├── server.js │ ├── package.json ├── frontend/ │ ├── src/ │ ├── package.json └── .github/ └── workflows/ └── deploy.yml

⚙️ Features
🔄 Automatic Build & Deployment from GitHub to AWS EC2
🧠 Zero-Downtime Restart with PM2
🧪 Pre-deployment Build Validation
🌐 Single Unified Deployment (Backend + Frontend)
💡 Customizable Workflow for any stack
🚧 Setup Instructions
1️⃣ Clone and Install
git clone https://github.com/<your-username>/<your-repo>.git
cd fullstack-app


2️⃣ Backend Setupcd backend
npm install
npm start
3️⃣ Frontend Setup
cd frontend
npm install
npm run build
mv build ../backend/


🧠 GitHub Actions Workflow

The CI/CD pipeline is defined in .github/workflows/deploy.yml.

🔍 Steps it performs:

Checkout Code

Install Dependencies

Run Tests (if configured)

Build Frontend

Move Build to Backend

Deploy to AWS EC2 via SSH

Restart Server using PM2



🔐 GitHub Secrets Configuration
| Secret Name                          | Description                         |
| ------------------------------------ | ----------------------------------- |
| `EC2_HOST`                           | Public IP / DNS of EC2 instance     |
| `EC2_SSH_KEY`                        | Contents of your `.pem` private key |
| *(Optional)* `AWS_ACCESS_KEY_ID`     | For S3 or Beanstalk integration     |
| *(Optional)* `AWS_SECRET_ACCESS_KEY` | Matching AWS Secret Key             |
