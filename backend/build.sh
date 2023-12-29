#!/bin/bash

# exit on error
set -o errexit

echo "Installing project dependencies..."
pip install -r requirements.txt

echo "Making migrations"
python3.9 manage.py makemigrations 
python3.9 manage.py migrate

echo "Collect static..."
python3.9 manage.py collectstatic --noinput --clear

# Create superuser
# echo "Create superuser!"
# python manage.py createsuperuser 

echo "Build process completed!"
