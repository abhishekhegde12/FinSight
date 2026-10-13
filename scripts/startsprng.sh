
# !/usr/bin/env bash

be_path="/c/Users/Abhishek/OneDrive/Desktop/FinSight/backend/finsight-backend"

cd "$be_path" || {
    echo "Failed to change directory to $be_path";
    exit 1;
}

if [ ! -f mvnw.cmd ]; then
    echo "MVN wrapper not found"
    exit 1;
fi

echo "Starting backend server..."
./mvnw.cmd spring-boot:run