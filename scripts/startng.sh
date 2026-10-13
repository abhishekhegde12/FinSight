
#!/usr/bin/env bash

fe_path="/c/Users/Abhishek/OneDrive/Desktop/FinSight/frontend/finsight-frontend"

cd "$fe_path" || { 
    echo "Failed to change directory to $fe_path"; 
    exit 1; 
    }

if ! command -v npm &> /dev/null; 
then
    echo "npm could not be found. Please install Node.js and npm."
    exit 1
fi

if [ ! node_modules ]; then
    echo "Installing frontend dependencies..."
    npm install

    if [ $? -ne 0 ]; then
        echo "Failed to install frontend dependencies."
        exit 1
    fi
fi

echo "Starting the frontend server"

npx ng serve --host 0.0.0.0
