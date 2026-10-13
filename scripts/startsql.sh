
#!/usr/bin/env bash

PG_BIN="/c/Program Files/PostgreSQL/18/bin"
PG_DATA="/c/Program Files/PostgreSQL/18/data"
PG_LOG="/c/Program Files/PostgreSQL/18/data/log/manual-start.log"

if "$PG_BIN/pg_isready.exe" -h localhost -p 5432 >/dev/null 2>&1; then
    echo "PostgreSQL is already running."
else
    echo "Starting PostgreSQL..."
    "$PG_BIN/pg_ctl.exe" start -D "$PG_DATA" -l "$PG_LOG"

    if [ $? -ne 0 ]; then
        echo "Failed to start PostgreSQL. Check the log:"
        echo "$PG_LOG"
        exit 1
    fi

    echo "PostgreSQL started successfully."
fi
