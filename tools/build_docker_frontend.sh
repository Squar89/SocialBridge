#!/bin/sh

SCRIPT_DIR="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
echo "Building frontend docker image"
cd "$SCRIPT_DIR/../frontend" || exit
docker build -t frontend .
