#!/bin/sh

# Make virutal env
if command -v python3 &>/dev/null; then
    python3 -m venv .venv
elif command -v python &>/dev/null; then
    python -m venv .venv
else
    echo "Python is not installed"
    exit 1
fi

# Activate venv
. ./.venv/bin/activate

# Install requirements
pip install -r requirements.txt

# Setup pre-commit
pre-commit install -t pre-commit
