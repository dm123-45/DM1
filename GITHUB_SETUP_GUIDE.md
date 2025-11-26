# 📚 GitHub Repository Setup Guide

Complete step-by-step guide to create and push your coursework to GitHub.

---

## ⚙️ Prerequisites

### 1. Install Git
**Download Git for Windows:**
- Visit: https://git-scm.com/download/win
- Download and run the installer
- Use default settings during installation
- **Restart VSCode/Terminal after installation**

**Verify Installation:**
```bash
git --version
# Should show: git version 2.x.x
```

### 2. Configure Git (First Time Only)
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 3. Create GitHub Account
- Visit: https://github.com/signup
- Create account if you don't have one

---

## 📦 Part 1: Create Frontend Repository

### Step 1: Create Repository on GitHub
1. Go to: https://github.com/new
2. Fill in details:
   - **Repository name**: `afterschool-frontend`
   - **Description**: "After School Program - Vue.js Frontend (CST3144 Coursework)"
   - **Visibility**: ✅ Public
   - **DO NOT** check "Initialize with README"
3. Click **"Create repository"**
4. **Keep this page open** - you'll need the commands shown

### Step 2: Initialize and Push Frontend Code

Open terminal in VSCode and run these commands:

```bash
# Navigate to frontend directory
cd frontend

# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Vue.js frontend application"

# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/afterschool-frontend.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Pages** in left sidebar
4. Under "Source":
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes, then refresh page
7. Your site URL will appear: `https://YOUR_USERNAME.github.io/afterschool-frontend/`
8. **Copy this URL** - you'll need it for submission

### Step 4: Make Additional Commits (Need 10+ total)

```bash
# Still in frontend directory

# Commit 2: Update README
git add README.md
git commit -m "docs: Add comprehensive README documentation"
git push

# Commit 3: Add gitignore
git add .gitignore
git commit -m "chore: Add .gitignore file"
git push

# Commit 4: Update index3.html (make a small change, like adding a comment)
git add index3.html
git commit -m "feat: Enhance main application file"
git push

# Commit 5: Add more documentation
git add .
git commit -m "docs: Add usage instructions"
git push

# Continue making meaningful commits until you have 10+
# Examples:
# - "fix: Improve form validation"
# - "style: Update CSS styling"
# - "feat: Add search functionality"
# - "refactor: Optimize cart logic"
# - "docs: Update deployment instructions"
```

---

## 📦 Part 2: Create Backend Repository

### Step 1: Create Repository on GitHub
1. Go to: https://github.com/new (again)
2. Fill in details:
   - **Repository name**: `afterschool-backend`
   - **Description**: "After School Program - Express.js Backend API (CST3144 Coursework)"
   - **Visibility**: ✅ Public
   - **DO NOT** check "Initialize with README"
3. Click **"Create repository"**
4. **Keep this page open**

### Step 2: Initialize and Push Backend Code

```bash
# Navigate back to main directory, then to backend
cd ..
cd express-backend

# Initialize git repository
git init

# Add all files (node_modules will be ignored by .gitignore)
git add .

# Create first commit
git commit -m "Initial commit: Express.js backend API"

# Add remote repository (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/afterschool-backend.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Make Additional Commits (Need 10+ total)

```bash
# Still in express-backend directory

# Commit 2: Update README
git add README.md
git commit -m "docs: Add API documentation"
git push

# Commit 3: Add gitignore
git add .gitignore
git commit -m "chore: Add .gitignore for node_modules"
git push

# Commit 4: Update server.js (add a comment or improve code)
git add server.js
git commit -m "feat: Enhance server configuration"
git push

# Commit 5: Update lessons data
git add lessons.json
git commit -m "data: Update lesson information"
git push

# Continue making meaningful commits until you have 10+
# Examples:
# - "feat: Add search endpoint"
# - "fix: Improve error handling"
# - "refactor: Optimize database queries"
# - "feat: Add order history endpoint"
# - "docs: Update API examples"
```

---

## 🚀 Part 3: Deploy Backend to Render.com

### Step 1: Create Render Account
1. Go to: https://render.com/
2. Sign up with GitHub account
3. Authorize Render to access your repositories

### Step 2: Create Web Service
1. Click **"New +"** → **"Web Service"**
2. Connect your `afterschool-backend` repository
3. Configure:
   - **Name**: `afterschool-backend` (or your choice)
   - **Region**: Choose closest to you
   - **Branch**: `main`
   - **Root Directory**: Leave empty
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: Free

### Step 3: Add Environment Variables
1. Scroll to **Environment Variables**
2. Click **"Add Environment Variable"**
3. Add:
   ```
   Key: MONGODB_URI
   Value: mongodb+srv://username:password@cluster.mongodb.net/afterschoolDB
   ```
   (Use your MongoDB Atlas connection string)

### Step 4: Deploy
1. Click **"Create Web Service"**
2. Wait for deployment (5-10 minutes)
3. Once deployed, you'll get a URL like: `https://afterschool-backend.onrender.com`
4. **Copy this URL** - you'll need it

### Step 5: Test Deployed API
Visit in browser:
```
https://your-app.onrender.com/lessons
```

---

## 🔗 Part 4: Connect Frontend to Deployed Backend

### Update Frontend to Use Deployed API

1. Open `frontend/index3.html`
2. Find the line:
   ```javascript
   const BACKEND_BASE = 'http://localhost:3000';
   ```
3. Change to:
   ```javascript
   const BACKEND_BASE = 'https://your-app.onrender.com';
   ```
4. Save and commit:
   ```bash
   cd frontend
   git add index3.html
   git commit -m "feat: Connect to deployed backend API"
   git push
   ```

---

## 📋 Part 5: Update Submission README

Update `SUBMISSION_README.md` with your URLs:

```bash
cd ..  # Back to main directory
```

Edit `SUBMISSION_README.md` and replace:
- `[TO BE ADDED - Your Vue.js GitHub repo URL]` → Your frontend repo URL
- `[TO BE ADDED - Your GitHub Pages URL]` → Your GitHub Pages URL
- `[TO BE ADDED - Your Express.js GitHub repo URL]` → Your backend repo URL
- `[TO BE ADDED - Your deployed API URL]` → Your Render.com URL

---

## ✅ Verification Checklist

### Frontend Repository
- [ ] Repository created on GitHub
- [ ] Code pushed successfully
- [ ] At least 10 commits made
- [ ] GitHub Pages enabled and working
- [ ] README.md included
- [ ] .gitignore included

### Backend Repository
- [ ] Repository created on GitHub
- [ ] Code pushed successfully
- [ ] At least 10 commits made
- [ ] Deployed to Render.com
- [ ] API endpoints working
- [ ] README.md included
- [ ] .gitignore included (node_modules excluded)

### Integration
- [ ] Frontend connects to deployed backend
- [ ] All API calls working
- [ ] CORS configured correctly
- [ ] MongoDB Atlas connected

---

## 🆘 Troubleshooting

### Git Not Recognized
**Problem**: `git: command not found`
**Solution**: 
1. Install Git from https://git-scm.com/download/win
2. Restart terminal/VSCode
3. Try again

### Authentication Failed
**Problem**: `Authentication failed for 'https://github.com/...'`
**Solution**:
1. Use Personal Access Token instead of password
2. Go to: GitHub → Settings → Developer settings → Personal access tokens
3. Generate new token (classic)
4. Use token as password when pushing

### Push Rejected
**Problem**: `! [rejected] main -> main (fetch first)`
**Solution**:
```bash
git pull origin main --rebase
git push origin main
```

### Render Deployment Failed
**Problem**: Build fails on Render
**Solution**:
1. Check build logs
2. Ensure `package.json` has correct scripts
3. Verify MongoDB URI is correct
4. Check Node version compatibility

### GitHub Pages Not Working
**Problem**: 404 error on GitHub Pages
**Solution**:
1. Wait 2-3 minutes after enabling
2. Check Settings → Pages is configured correctly
3. Ensure `index3.html` exists in repository
4. Try accessing: `https://username.github.io/repo-name/index3.html`

---

## 📞 Need Help?

If you encounter issues:
1. Check error messages carefully
2. Review this guide step-by-step
3. Verify all prerequisites are installed
4. Check GitHub/Render documentation
5. Ask your instructor or classmates

---

## 🎉 Success!

Once completed, you should have:
- ✅ 2 GitHub repositories with 10+ commits each
- ✅ Frontend deployed on GitHub Pages
- ✅ Backend deployed on Render.com
- ✅ Working full-stack application
- ✅ All URLs documented in SUBMISSION_README.md

**You're ready to submit your coursework!** 🚀
