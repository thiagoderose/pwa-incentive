#!/usr/bin/env sh

# Declare global variables
# -----------------------------------------------------------------------------

declare hacks_path=${0}
declare travel_path=${1:-$HOME/Code/odelucca/pwa-travel}
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
    $ds_path/packages/containers/dist \
    $ds_path/packages/config/dist \
    $ds_path/packages/icons/dist \
    $ds_path/packages/tokens/dist \
    $ds_path/packages/core/dist
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
