#!/bin/bash

# GitHub Setup Script for Equinox Web Application
# Organization: Equinox-Application

echo "🚀 Setting up GitHub repository for Equinox Web Application..."

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing Git repository..."
    git init
    git branch -M main
else
    echo "✅ Git repository already initialized"
fi

# Check if remote origin already exists
if git remote get-url origin &>/dev/null; then
    echo "🔄 Updating remote origin..."
    git remote set-url origin git@github.com:Equinox-Application/equinox-web.git
else
    echo "🔗 Adding remote origin..."
    git remote add origin git@github.com:Equinox-Application/equinox-web.git
fi

# Add all files
echo "📋 Adding files to Git..."
git add .

# Commit changes
echo "💾 Creating initial commit..."
git commit -m "Initial commit: Equinox Web Application

- React-based trading education platform
- Complete website with blog, disclaimers, and compliance pages
- SEO-optimized with proper routing
- Mobile-responsive design
- Docker deployment configuration

Features:
- Home, About Us, Blog sections
- Comprehensive disclaimers (Grievance Redressal, Complaint Board, Research Analyst)
- Investor Charter, Terms & Conditions, Privacy Policy, Refund Policy
- Professional footer with SEBI compliance information
- Cloud Run deployment setup"

echo "📤 Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ Repository setup completed!"
echo "🌐 Repository URL: https://github.com/Equinox-Application/equinox-web"
echo ""
echo "Next steps:"
echo "1. Visit https://github.com/Equinox-Application/equinox-web"
echo "2. Verify all files are uploaded"
echo "3. Check README.md for setup instructions"
echo "4. Set up GitHub Pages or connect to your hosting platform"
