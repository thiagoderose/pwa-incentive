#!/usr/bin/env sh

# Declare global variables
# -----------------------------------------------------------------------------

declare hacks_path=${0}
declare travel_path=${1:-../pwa-travel}
declare ds_path=${2:-../design-system}
declare dist_path=${3:-node_modules/@livipdev}


# Entrypoint handler
# -----------------------------------------------------------------------------

function run {
  remove_ds
  build_ds
  install_ds
  run_dev

  go_back
}

# Functions
# -----------------------------------------------------------------------------

function remove_ds {
  rm -rf $dist_path
}

function build_ds {
  cd $ds_path
  yarn clean
  yarn build
}

function install_ds {
  cd $travel_path
  yarn add \
    ../design-system/packages/containers/dist \
    ../design-system/packages/core/dist \
    ../design-system/packages/config/dist \
    ../design-system/packages/icons/dist \
    ../design-system/packages/tokens/dist
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
