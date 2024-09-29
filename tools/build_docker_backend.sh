#!/bin/sh

SCRIPT_DIR="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
echo "Building backend docker image"
cd "$SCRIPT_DIR/../backend" || exit
docker build -t backend .
