#!/bin/bash

# exit on error
set -o errexit

echo "Installing project dependencies..."
python3.12 pip install -r requirements.txt

echo "Making migrations"
python3.12 manage.py makemigrations --noinput
python3.12 manage.py migrate --noinput

echo "Collect static..."
python3.12 manage.py collectstatic --noinput --clear

# Create superuser
echo "Create superuser!"
python3.12 manage.py createsu 

echo "Build process completed!"
