#!/bin/bash



gcloud run deploy equinox-web-user \
  --source . \
  --platform managed \
  --region asia-east1 \
  --allow-unauthenticated \
  --port 80 \
  --memory 256Mi \
  --cpu 0.5
# Google Cloud Run Deployment Script for Equinox Web Application
# Project: equinox-496408

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

PROJECT_ID="equinox-496408"
BACKEND_DIR="/Users/kvid/Desktop/Equinox/Backend/Equinox-backend"

# Set the project
echo "📋 Setting project to $PROJECT_ID..."
gcloud config set project "$PROJECT_ID"

# Deploy backend first
if [ -d "$BACKEND_DIR" ]; then
    echo "📦 Deploying backend from $BACKEND_DIR..."
    pushd "$BACKEND_DIR" >/dev/null
    ./scripts/deploy-cloudrun.sh
    popd >/dev/null
else
    echo "⚠️ Backend directory not found: $BACKEND_DIR"
fi

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
