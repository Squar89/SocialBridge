#!/bin/bash

echo "Exporting frontend to tar.gz"
docker save frontend:latest | gzip > frontend_latest.tar.gz
echo "Exporting backend to tar.gz"
docker save backend:latest | gzip > backend_latest.tar.gz
