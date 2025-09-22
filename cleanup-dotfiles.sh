#!/bin/bash
# Script to clean up macOS ._ files
echo "Cleaning up ._ files..."
find . -name "._*" -type f -not -path "./node_modules/*" -not -path "./.git/*" -not -path "./.next/*" -delete
echo "Cleanup complete!"

# Also clean up .DS_Store files
find . -name ".DS_Store" -type f -not -path "./node_modules/*" -not -path "./.git/*" -not -path "./.next/*" -delete
echo "DS_Store files cleaned!"
