#!/bin/bash

# Blackbird Software Engineering Job Simulation
# Task 1: Collaborate Using GitHub
# Repository: propller-react-app

# 1. Initialise the Git repository
git init

# 2. Stage and commit the initial React application
git add .
git commit -m "Initial React application"

# 3. Rename the main branch
git branch -M main

# 4. Create and switch to a feature branch
git checkout -b feature/update-homepage

# 5. Push the feature branch to GitHub
git push -u origin feature/update-homepage

# 6. Stage and commit homepage changes
git add src/App.jsx
git commit -m "Update React Homepage"

# 7. Push the updated feature branch
git push

# 8. Create a Pull Request
gh pr create --base main --head feature/update-homepage \
  --title "Update React homepage" \
  --body "Add a simple welcome homepage to the React application."

# 9. Merge the Pull Request and delete the feature branch
gh pr merge 1 --merge --delete-branch

# 10. Verify the final repository status
git status
git branch
git log -1 --oneline