#!/usr/bin/env sh

# Declare global variables
# -----------------------------------------------------------------------------

declare hacks_path=${0}
declare travel_path=${1:-$HOME/Code/livip/pwa-travel}
declare ds_path=${2:-$HOME/Code/livip/design-system}


# Entrypoint handler
# -----------------------------------------------------------------------------

function run {
  build_ds
  install_ds
  run_dev

  go_back
}

# Functions
# -----------------------------------------------------------------------------

function build_ds {
  cd $ds_path
  yarn build
}

function install_ds {
  cd $travel_path
  yarn add \
    ../design-system/packages/containers/dist \
    ../design-system/packages/core/dist
}

function run_dev {
  cd $travel_path
  yarn start:dev
}

function go_back {
  cd $hacks_path
}

# Execute entrypoint
# -----------------------------------------------------------------------------

run "$@"
