
#!/usr/bin/env bash

PG_BIN="/c/Program Files/PostgreSQL/18/bin"
PG_DATA="/c/Program Files/PostgreSQL/18/data"

if "$PG_BIN/pg_isready.exe" -h localhost -p 5432 >/dev/null 2>&1; then
    echo "Stopping PostgreSQL..."
    "$PG_BIN/pg_ctl.exe" stop -D "$PG_DATA" -m fast

    if [ $? -eq 0 ]; then
        echo "PostgreSQL stopped successfully."
    else
        echo "Failed to stop PostgreSQL."
        exit 1
    fi
else
    echo "PostgreSQL is already stopped."
fi
