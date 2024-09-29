#!/bin/sh
docker build -t frontend .
docker run -p 3000:3000 frontend
# to run locally: npm run dev