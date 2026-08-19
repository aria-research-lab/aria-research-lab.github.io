#!/usr/bin/env bash

# Usage: ./init_local_server.sh [port] (defaults to 8080); alternatively, set LOCAL_PORT.
# Choose any unused host port from 1 through 65535, for example: ./init_local_server.sh 8082.

set -euo pipefail

local_port="${1:-${LOCAL_PORT:-8080}}"

if [[ ! "$local_port" =~ ^[0-9]+$ ]] || ((local_port < 1 || local_port > 65535)); then
  echo "Error: port must be an integer between 1 and 65535." >&2
  exit 1
fi

export LOCAL_PORT="$local_port"

docker compose pull
docker compose up

# http://localhost:${LOCAL_PORT}
