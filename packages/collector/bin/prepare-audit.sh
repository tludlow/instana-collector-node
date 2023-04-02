#!/usr/bin/env bash

#######################################
# (c) Copyright IBM Corp. 2021
# (c) Copyright Instana Inc. and contributors 2019
#######################################

set -eo pipefail

cd `dirname $BASH_SOURCE`/..
source ../../bin/add-to-package-lock
addToPackageLock package-lock.json @tludlow-instana-fork/core false
addToPackageLock package-lock.json @tludlow-instana-fork/autoprofile false
addToPackageLock package-lock.json @tludlow-instana-fork/shared-metrics false
