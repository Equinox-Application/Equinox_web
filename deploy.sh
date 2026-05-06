#!/bin/bash

# Google Cloud Run Deployment Script for Equinox Web Application
# Project: conductive-ward-485009-u9

echo "🚀 Starting deployment of Equinox Web Application to Google Cloud Run..."

# Check if gcloud is installed and authenticated
if ! command -v gcloud &> /dev/null; then
    echo "❌ Google Cloud SDK (gcloud) is not installed. Please install it first."
    echo "Visit: https://cloud.google.com/sdk/docs/install"
    exit 1
fi

# Check if user is authenticated
if ! gcloud auth list --filter=status:ACTIVE --format="value(account)" | grep -q .; then
    echo "🔐 Please authenticate with Google Cloud first:"
    echo "gcloud auth login"
    exit 1
fi

# Set the project
echo "📋 Setting project to conductive-ward-485009-u9..."
gcloud config set project conductive-ward-485009-u9

# Enable required APIs
echo "🔧 Enabling required APIs..."
gcloud services enable run.googleapis.com
gcloud services enable cloudbuild.googleapis.com
gcloud services enable containerregistry.googleapis.com

# Build and deploy using Cloud Build
echo "🏗️ Building and deploying application..."
gcloud builds submit --config cloudbuild.yaml .

echo "✅ Deployment completed!"
echo "🌐 Your application should be available at:"
echo "https://equinox-web-<hash>-as1.a.run.app"
echo ""
echo "To get the exact URL, run:"
echo "gcloud run services describe equinox-web --region=asia-south1 --format='value(status.url)'"
