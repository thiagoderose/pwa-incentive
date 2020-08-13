#!/usr/bin/env sh

# Declare global variables
# -----------------------------------------------------------------------------

declare hacks_path=${0}
declare incentive_path=${1:-../pwa-incentive/app}
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
  cd $incentive_path
  yarn add \
    ../$ds_path/packages/containers/dist \
    ../$ds_path/packages/config/dist \
    ../$ds_path/packages/icons/dist \
    ../$ds_path/packages/tokens/dist \
    ../$ds_path/packages/core/dist
}

function run_dev {
  cd $incentive_path
  yarn start:dev
}

function go_back {
  cd $hacks_path
}

# Execute entrypoint
# -----------------------------------------------------------------------------

run "$@"
