#!/bin/sh

SCRIPT_DIR="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
cd "$SCRIPT_DIR" || exit
./build_docker_backend.sh
./build_docker_frontend.sh
