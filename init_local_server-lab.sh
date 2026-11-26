#!/usr/bin/env bash

# Usage: ./init_local_server.sh [port] [livereload_port]
# Defaults: port=8080 (LOCAL_PORT), livereload_port=35730 (LIVERELOAD_PORT).
# Choose any unused host port from 1 through 65535, for example: ./init_local_server.sh 8082 35732.

set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

validate_port() {
  local value="$1"
  local label="$2"
  if [[ ! "$value" =~ ^[0-9]+$ ]] || ((value < 1 || value > 65535)); then
    echo "Error: $label must be an integer between 1 and 65535." >&2
    exit 1
  fi
}

local_port="${1:-${LOCAL_PORT:-8080}}"
livereload_port="${2:-${LIVERELOAD_PORT:-35730}}"

validate_port "$local_port" "port"
validate_port "$livereload_port" "livereload_port"

export LOCAL_PORT="$local_port"
export LIVERELOAD_PORT="$livereload_port"

cd "$script_dir"
docker compose pull
docker compose up

# http://localhost:${LOCAL_PORT}
# http://localhost:8080
