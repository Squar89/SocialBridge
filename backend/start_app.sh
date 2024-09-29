#!/bin/sh
export MONGODB_URL='mongodb://localhost:27017/'
uvicorn src.app:app --reload
