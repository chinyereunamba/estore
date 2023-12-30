#!/bin/bash

# exit on error
set -o errexit

echo "Installing project dependencies..."
python3.9 -m pip install -r requirements.txt

echo "Making migrations..."
python3.9 manage.py makemigrations --noinput
python3.9 manage.py migrate --noinput

echo "Collect static..."
python3.9 manage.py collectstatic --noinput --clear


echo "Build process completed!"
